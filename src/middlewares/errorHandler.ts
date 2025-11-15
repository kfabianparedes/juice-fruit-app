import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/app.error.js';
import { logger } from '../utils/logger.js';

/**
 * Middleware centralizado para manejo de errores
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  // Log del error con contexto
  logger.error('Error occurred', {
    requestId: req.id,
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    path: req.path,
    method: req.method,
  });

  // Errores operacionales conocidos (AppError)
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      requestId: req.id,
      timestamp: new Date().toISOString(),
    });
    return;
  }

  // Errores no esperados (500)
  res.status(500).json({
    status: 'error',
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    requestId: req.id,
    timestamp: new Date().toISOString(),
  });
};
