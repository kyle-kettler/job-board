import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import ClientError from './lib/client-error.js';
import uploadsMiddleware from './lib/uploads-middleware.js';
import pg from 'pg';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { authorizationMiddleware } from './lib/authorization-middleware.js';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars -- Remove when used
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

// Sign up endpoint
app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and passwords are required');
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning *
    `;
    const params = [username, hashedPassword];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) throw new ClientError(401, 'invalid login');
    const sql = `
      select "userId", "hashedPassword"
        from "users"
       where "username" = $1
    `;
    const params = [username];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user) throw new ClientError(401, 'invalid login');
    const { userId, hashedPassword } = user;
    const isMatching = await argon2.verify(hashedPassword, password);
    if (!isMatching) throw new ClientError(401, 'invalid login');
    const payload = { userId, username };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET as string);
    res.json({ token, user: payload });
  } catch (err) {
    next(err);
  }
});

app.get('/api/jobs', async (req, res, next) => {
  try {
    const sql = `
    select * from "jobs"
    order by "jobId" desc;
    `;
    const result = await db.query(sql);
    res.status(201).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/jobs/:jobId', async (req, res, next) => {
  try {
    const jobId = Number(req.params.jobId);
    if (!Number.isInteger(jobId))
      throw new ClientError(400, 'jobId must be a number');
    const sql = `
      select * from "jobs"
      where "jobId" = $1
      `;
    const params = [jobId];
    const result = await db.query(sql, params);
    const [job] = result.rows;
    if (!job) throw new ClientError(404, `Job with id ${jobId} not found`);
    res.status(201).json(job);
  } catch (err) {
    next(err);
  }
});

app.get(
  '/api/applications/:userId',
  authorizationMiddleware,
  async (req, res, next) => {
    try {
      const userId = Number(req.params.userId);
      if (!userId) throw new ClientError(400, 'missing required fields');
      const sql = `
      select *
        from "applications"
        join "jobs" using ("jobId")
       where "userId" = $1
       order by "dateApplied" desc
    `;
      const params = [userId];
      const result = await db.query(sql, params);
      res.status(201).json(result.rows);
    } catch (err) {
      next(err);
    }
  }
);

app.post(
  '/api/applications',
  uploadsMiddleware.single('resume'),
  async (req, res, next) => {
    try {
      if (!req.file) throw new ClientError(400, 'no file field in request');
      const {
        userId,
        jobId,
        name,
        email,
        phone,
        portfolioUrl,
        githubUrl,
        proud,
        interesting,
      } = req.body;
      if (
        !name ||
        !email ||
        !phone ||
        !portfolioUrl ||
        !githubUrl ||
        !proud ||
        !interesting
      ) {
        throw new ClientError(400, 'missing required fields');
      }
      const resumeUrl = `/uploads/${req.file.filename}`;
      const sql = `
        insert into "applications" ("userId", "jobId", "fullName", "email", "phone", "resumeUrl", "portfolioUrl", "githubUrl", "proudOfWork", "interestingThing")
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        returning *
    `;
      const params = [
        userId,
        jobId,
        name,
        email,
        phone,
        resumeUrl,
        portfolioUrl,
        githubUrl,
        proud,
        interesting,
      ];
      const result = await db.query(sql, params);
      const [app] = result.rows;
      res.status(201).json(app);
    } catch (err) {
      next(err);
    }
  }
);

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Create React App server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
