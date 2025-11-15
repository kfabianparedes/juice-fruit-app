import { MESSAGES } from '../config.js';
import { ApiService } from '../services/api.service.js';
import { UIManager } from '../utils/ui.manager.js';

/**
 * Clase para manejar el formulario de login
 */
export class FormHandler {
  constructor(formElement, responseElement) {
    this.form = formElement;
    this.uiManager = new UIManager(responseElement);
    this.init();
  }

  /**
   * Inicializa el manejador del formulario
   */
  init() {
    if (!this.form) {
      console.error('Formulario no encontrado');
      return;
    }

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  /**
   * Maneja el envío del formulario
   * @param {Event} event - Evento de submit
   */
  async handleSubmit(event) {
    event.preventDefault();

    try {
      // Obtener datos
      const formData = new FormData(this.form);
      const data = this.getFormData(formData);

      // Validación básica en cliente
      this.validateData(data);

      // Mostrar carga
      this.uiManager.showLoading();
      this.disableForm();

      // Enviar credenciales
      const response = await ApiService.login(data);

      // Mostrar éxito y redirigir
      this.uiManager.showSuccess(response.message, response.data);

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.uiManager.showError(error.message || MESSAGES.ERROR_GENERIC);
      this.enableForm();
    }
  }

  /**
   * Validación básica en cliente
   * @param {Object} data - Datos a validar
   */
  validateData(data) {
    if (!data.email || !data.password) {
      throw new Error('Todos los campos son obligatorios');
    }

    if (data.password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres');
    }
  }

  /**
   * Obtiene los datos del formulario
   * @param {FormData} formData - Datos del formulario
   * @returns {Object} Objeto con los datos
   */
  getFormData(formData) {
    return Object.fromEntries(formData.entries());
  }

  /**
   * Deshabilita el formulario durante el envío
   */
  disableForm() {
    const submitButton = this.form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
    }
  }

  /**
   * Habilita el formulario después del envío
   */
  enableForm() {
    const submitButton = this.form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = false;
    }
  }
}
