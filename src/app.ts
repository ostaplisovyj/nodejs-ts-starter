import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth';

const app: express.Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);

// TODO add knex config bookshelf

export default app;
