import * as express from 'express';

const router: express.Router = express.Router();

/* GET auth test. */
router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(200).send('ok');
});

export default router;
