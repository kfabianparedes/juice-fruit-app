import { Router } from 'express';
import { FormController } from '../controllers/form.controller.js';

const router = Router();

router.get('/message', FormController.getWelcomeMessage);

export default router;
