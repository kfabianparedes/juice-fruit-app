/**
 * Tipos base de la aplicación
 */

export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  email: string;
  name: string;
}

export interface ApiResponse<T = unknown> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  metadata?: ResponseMetadata;
  error?: string;
}

export interface ResponseMetadata {
  requestId: string;
  timestamp: string;
  version?: string;
}

/**
 * Extensión de tipos de Express
 */
declare global {
  namespace Express {
    interface Request {
      id: string;
      user?: {
        id: string;
        email: string;
        role?: string;
      };
    }
  }
}
