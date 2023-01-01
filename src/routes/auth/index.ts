import * as express from 'express';

const router: express.Router = express.Router();

router.get(
  '/',
  function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    res.status(200).json({ response: 'Ok' });
  },
);

export default router;
