import { Router } from 'express';
import { FormController } from '../controllers/form.controller.js';

const router = Router();

router.post('/submit', FormController.submitForm);

export default router;
