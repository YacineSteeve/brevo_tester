import { Router } from 'express';

import { mailController } from '../controllers/mail.controller.js';

const mailRouter = Router();

mailRouter.post('/', mailController);

export { mailRouter };
