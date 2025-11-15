import type { LoginData, UserData } from '../types/index.js';
import { UserRepository } from '../repositories/form.repository.js';
import { logger } from '../utils/logger.js';
import { UnauthorizedError } from '../errors/app.error.js';

/**
 * Servicio de autenticación de usuarios
 */
export class AuthService {
  constructor(private readonly repository: UserRepository) {}

  /**
   * Autentica un usuario
   * @param data - Credenciales de login
   * @returns Datos del usuario autenticado
   */
  async login(data: LoginData): Promise<UserData> {
    logger.info('Login attempt', {
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // Buscar usuario
    const user = await this.repository.findByEmail(data.email);
    
    if (!user) {
      logger.warn('Login failed: user not found', { email: data.email });
      throw new UnauthorizedError('Credenciales inválidas');
    }

    // Verificar contraseña (en producción usar bcrypt)
    if (user.password !== data.password) {
      logger.warn('Login failed: invalid password', { email: data.email });
      throw new UnauthorizedError('Credenciales inválidas');
    }

    logger.info('Login successful', {
      email: user.email,
      name: user.name,
    });

    // Retornar datos del usuario sin contraseña
    return {
      email: user.email,
      name: user.name,
    };
  }

  /**
   * Obtiene información de bienvenida
   * @returns Mensaje de bienvenida con metadatos
   */
  getWelcomeInfo(): {
    message: string;
    timestamp: string;
    version: string;
    environment: string;
  } {
    return {
      message: 'Bienvenido a Juice Fruit App 🍹',
      timestamp: new Date().toISOString(),
      version: process.env.API_VERSION ?? '1.0.0',
      environment: process.env.NODE_ENV ?? 'development',
    };
  }
}
