import { Router } from 'express';
import { AuthController } from '../controllers/form.controller.js';

const router = Router();
const authController = new AuthController();

router.post('/login', (req, res, next) => 
  authController.login(req, res, next)
);

export default router;
