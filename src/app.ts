process.env["NODE_CONFIG_DIR"] = `${__dirname}/config`;
import 'module-alias/register';
import express from 'express';
import {
  json as bodyParserJson,
  urlencoded as bodyUrlEncoded,
} from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

import authRouter from './routes/auth';

const app: express.Express = express();

app.use(bodyParserJson());
app.use(bodyUrlEncoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

app.use('/api/v1/auth', authRouter);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Error')
})

export default app;
