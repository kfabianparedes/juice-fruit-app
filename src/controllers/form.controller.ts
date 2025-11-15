import type { Request, Response, NextFunction } from 'express';
import type { UserData, ApiResponse } from '../types/index.js';
import { validateLoginData } from '../utils/validators.js';
import { AuthService } from '../services/form.service.js';
import { UserRepository } from '../repositories/form.repository.js';

/**
 * Controlador para manejar autenticación
 * @class AuthController
 */
export class AuthController {
  private readonly authService: AuthService;

  constructor() {
    const repository = new UserRepository();
    this.authService = new AuthService(repository);
  }

  /**
   * Procesa el inicio de sesión
   * @async
   */
  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // Validar datos del request
      const validatedData = validateLoginData(req.body);

      // Autenticar usuario
      const user = await this.authService.login(validatedData);

      // Construir respuesta exitosa
      const response: ApiResponse<UserData> = {
        status: 'success',
        message: '¡Inicio de sesión exitoso! 🎉',
        data: user,
        metadata: {
          requestId: req.id,
          timestamp: new Date().toISOString(),
        },
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Obtiene mensaje de bienvenida
   */
  getWelcomeMessage(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    try {
      const welcomeInfo = this.authService.getWelcomeInfo();
      
      res.status(200).json({
        ...welcomeInfo,
        requestId: req.id,
      });
    } catch (error) {
      next(error);
    }
  }
}
