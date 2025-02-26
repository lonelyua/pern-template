import cors from 'cors';
import express from 'express';
import path from 'path';
import { MAX_UPLOAD_FILE_SIZE } from './config';
import dotenv from 'dotenv';
// import router from './routes';
// import { connectToDB } from './utils';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// connectToDB();

const app = express();

app.use(cors());

app.use(express.json({ limit: MAX_UPLOAD_FILE_SIZE }));

// app.use("/api", router);

if (NODE_ENV === 'development') {
  // app.use((err: any) => {
  //   console.error(err.stack);
  // });
  app.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    next();
  });
}

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
}

const server = app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT} in mode ${NODE_ENV}`
  );
});

process.on('SIGINT', async () => {
  console.log('Shutting down Server...');
  server.close(() => {
    console.log('Server stopped');
    process.exit(0);
  });
});
