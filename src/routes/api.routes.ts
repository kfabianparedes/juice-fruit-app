import { Router } from 'express';
import { AuthController } from '../controllers/form.controller.js';

const router = Router();
const authController = new AuthController();

router.get('/message', (req, res, next) => 
  authController.getWelcomeMessage(req, res, next)
);

export default router;
