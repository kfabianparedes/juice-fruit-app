/**
 * Clase para manejar el formulario
 */
class FormHandler {
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
      // Obtener y validar datos
      const formData = new FormData(this.form);
      const data = this.getFormData(formData);

      // Mostrar carga
      this.uiManager.showLoading();
      this.disableForm();

      // Enviar datos
      const response = await ApiService.submitForm(data);

      // Mostrar éxito
      this.uiManager.showSuccess(response.message, response.data);
      this.form.reset();

    } catch (error) {
      console.error('Error al enviar formulario:', error);
      this.uiManager.showError(error.message || MESSAGES.ERROR_GENERIC);
    } finally {
      this.enableForm();
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
