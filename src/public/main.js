/**
 * Punto de entrada de la aplicación
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const responseEl = document.getElementById('response');

  // Inicializar el manejador del formulario
  new FormHandler(form, responseEl);
});
