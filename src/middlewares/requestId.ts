import type { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';

/**
 * Middleware para generar un ID único para cada request
 */
export const requestIdMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  req.id = randomUUID();
  next();
};
