import path from 'node:path';
import multer from 'multer';

const uploadsStaticDir = new URL('public', import.meta.url).pathname;

const fileDirectory = `${uploadsStaticDir}/uploads`;

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, fileDirectory);
  },
  filename: (req, file, callback) => {
    const fileExtension = path.extname(file.originalname);
    const fileName = path.basename(file.originalname, fileExtension);
    const name = `${fileName}-${Date.now()}${fileExtension}`;
    callback(null, name);
  },
});

export default multer({ storage });
