import type { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger.js';

/**
 * Middleware para logging de peticiones HTTP
 */
export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  logger.info('Incoming request', {
    requestId: req.id,
    method: req.method,
    path: req.path,
    ip: req.ip,
    userAgent: req.get('user-agent'),
  });
  
  next();
};
