import express, {Express} from 'express';
import cors from 'cors';
import morgan from 'morgan';

import dotenv from 'dotenv';
dotenv.config();
import { router } from './routes';

const app: Express = express();
const port = process.env.PORT;
const db = require('../db')

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/newgg', router)

app.listen(port, (): void => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
