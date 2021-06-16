import 'reflect-metadata';
import './container/index';
import './typeorm/database';
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express';
import ResponseError from './Errors/ResponseError';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8080'
  })
)

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof ResponseError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    }); 
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3333, () => {
  console.log('Server is running!');
});