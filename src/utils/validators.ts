import type { LoginData } from '../types/index.js';
import { ValidationError } from '../errors/app.error.js';

export const validateLoginData = (data: unknown): LoginData => {
  if (!data || typeof data !== 'object') {
    throw new ValidationError('Los datos de inicio de sesión son inválidos');
  }

  const { email, password } = data as Partial<LoginData>;

  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    throw new ValidationError('El correo electrónico es inválido');
  }

  if (!password || typeof password !== 'string' || password.length < 6) {
    throw new ValidationError('La contraseña debe tener al menos 6 caracteres');
  }

  return {
    email: email.trim().toLowerCase(),
    password: password,
  };
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
