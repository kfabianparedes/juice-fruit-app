import type { Request, Response } from 'express';
import type { FormData, ApiResponse } from '../types/index.js';
import { validateFormData } from '../utils/validators.js';

export class FormController {
  static async submitForm(req: Request, res: Response): Promise<void> {
    const validatedData = validateFormData(req.body);

    console.log('Formulario recibido:', validatedData);

    const response: ApiResponse<FormData> = {
      status: 'success',
      message: '¡Completado exitosamente! 🎉',
      data: validatedData,
    };

    res.json(response);
  }

  static getWelcomeMessage(_req: Request, res: Response): void {
    res.json({ 
      message: 'Hello, Juice Fruit! 🍹',
      timestamp: new Date().toISOString()
    });
  }
}
