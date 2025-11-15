import { FormHandler } from './components/form.handler.js';

/**
 * Punto de entrada de la aplicación
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const responseEl = document.getElementById('response');

  // Inicializar el manejador del formulario de login
  new FormHandler(form, responseEl);
});
