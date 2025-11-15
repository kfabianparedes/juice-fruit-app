import { APP_CONFIG, MESSAGES } from '../config.js';

/**
 * Clase para manejar la UI de notificaciones
 */
export class UIManager {
  constructor(responseElement) {
    this.responseElement = responseElement;
  }

  /**
   * Muestra un mensaje de éxito y redirige
   * @param {string} message - Mensaje a mostrar
   * @param {Object} userData - Datos del usuario
   */
  showSuccess(message, userData) {
    if (!this.responseElement) return;

    this.responseElement.innerHTML = `
      <div class="success-message">
        <p class="message">${this.escapeHtml(message)}</p>
        <p class="redirect-message">Redirigiendo...</p>
      </div>
    `;
    this.responseElement.className = 'response-box success';

    // Guardar datos del usuario y redirigir
    setTimeout(() => {
      sessionStorage.setItem('userData', JSON.stringify(userData));
      window.location.href = APP_CONFIG.WELCOME_PAGE;
    }, 1500);
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
