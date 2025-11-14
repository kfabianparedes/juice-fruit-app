import type { FormData } from '../types/index.js';

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export const validateFormData = (data: unknown): FormData => {
  if (!data || typeof data !== 'object') {
    throw new ValidationError('Los datos del formulario son inválidos');
  }

  const { name, email } = data as Partial<FormData>;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    throw new ValidationError('El nombre es requerido y debe ser válido');
  }

  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    throw new ValidationError('El correo electrónico es inválido');
  }

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
  };
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
