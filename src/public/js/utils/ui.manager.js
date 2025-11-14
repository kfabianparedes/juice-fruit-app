/**
 * Clase para manejar la UI de notificaciones
 */
class UIManager {
  constructor(responseElement) {
    this.responseElement = responseElement;
  }

  /**
   * Muestra un mensaje de éxito con los datos
   * @param {string} message - Mensaje a mostrar
   * @param {Object} data - Datos del formulario
   */
  showSuccess(message, data) {
    if (!this.responseElement) return;

    this.responseElement.innerHTML = `
      <div class="success-message">
        <p class="message">${this.escapeHtml(message)}</p>
        <ul class="data-list">
          <li><strong>Nombre:</strong> ${this.escapeHtml(data.name)}</li>
          <li><strong>Correo:</strong> ${this.escapeHtml(data.email)}</li>
        </ul>
      </div>
    `;
    this.responseElement.className = 'response-box success';
  }

  /**
   * Muestra un mensaje de error
   * @param {string} message - Mensaje de error
   */
  showError(message) {
    if (!this.responseElement) return;

    this.responseElement.innerHTML = `
      <div class="error-message">
        <p class="message">❌ ${this.escapeHtml(message)}</p>
      </div>
    `;
    this.responseElement.className = 'response-box error';
  }

  /**
   * Muestra un mensaje de carga
   */
  showLoading() {
    if (!this.responseElement) return;

    this.responseElement.innerHTML = `
      <div class="loading-message">
        <p class="message">⏳ ${MESSAGES.LOADING}</p>
      </div>
    `;
    this.responseElement.className = 'response-box loading';
  }

  /**
   * Limpia el mensaje
   */
  clear() {
    if (!this.responseElement) return;
    this.responseElement.innerHTML = '';
    this.responseElement.className = '';
  }

  /**
   * Escapa HTML para prevenir XSS
   * @param {string} text - Texto a escapar
   * @returns {string} Texto escapado
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
