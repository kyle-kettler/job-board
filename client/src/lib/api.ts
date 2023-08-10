export type Level = '' | 'Entry-Level' | 'Mid-Level' | 'Senior' | 'Principal';

export type Job = {
  jobId: number;
  title: string;
  description: string;
  companyName: string;
  companyImgUrl: string;
  salaryFloor: number;
  salaryCeiling: number;
  level: Level;
  location: string;
  active: boolean;
  dateAdded: string;
};

export type Application = {
  applicationId: number;
  jobId: number;
  userId: number;
  dateApplied: string;
  fullName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  portfolioUrl: string;
  githubUrl: string;
  proudOfWork: string;
  interestingThing: string;
};

export type JobApplication = Job & Application;

export type User = {
  userId: number;
  username: string;
};

export type Auth = {
  user: User;
  token: string;
};

/**
 * AUTH FUNCTIONS
 */
export async function signIn(
  username: string,
  password: string
): Promise<Auth> {
  return await signUpOrSignIn('sign-in', username, password);
}

export async function signUp(
  username: string,
  password: string
): Promise<User> {
  return await signUpOrSignIn('sign-up', username, password);
}

async function signUpOrSignIn(
  action: 'sign-up',
  username: string,
  password: string
): Promise<User>;
async function signUpOrSignIn(
  action: 'sign-in',
  username: string,
  password: string
): Promise<Auth>;
async function signUpOrSignIn(
  action: 'sign-up' | 'sign-in',
  username: string,
  password: string
): Promise<User | Auth> {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };
  const res = await fetch(`/api/auth/${action}`, req);
  if (!res.ok) throw new Error(`fetch error ${res.status}`);
  return await res.json();
}

/**
 * Fetches all jobs from the API.
 * @returns Promise that resolves to an array of jobs.
 */
export async function fetchJobs(): Promise<Job[]> {
  const res = await fetch('/api/jobs');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function fetchOneJob(jobId: number): Promise<Job> {
  const res = await fetch(`/api/jobs/${jobId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function submitApplication(
  formData: FormData
): Promise<Application> {
  const req = {
    method: 'POST',
    body: formData,
  };
  const res = await fetch('/api/applications', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function fetchApplications(
  userId: number
): Promise<JobApplication[]> {
  const auth = localStorage.getItem('designengineer');
  let a;
  if (auth) {
    a = JSON.parse(auth);
  }
  const req = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${a.token}`,
    },
  };
  const res = await fetch(`/api/applications/${userId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
