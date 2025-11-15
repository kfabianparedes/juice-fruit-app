import { APP_CONFIG, MESSAGES } from '../config.js';

/**
 * Servicio para manejar las peticiones HTTP
 */
export class ApiService {
  /**
   * Envía credenciales de login al servidor
   * @param {Object} data - Credenciales a enviar
   * @returns {Promise<Object>} Respuesta del servidor
   */
  static async login(data) {
    try {
      const response = await fetch(APP_CONFIG.LOGIN_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || MESSAGES.ERROR_GENERIC);
      }

      return responseData;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(MESSAGES.ERROR_NETWORK);
      }
      throw error;
    }
  }

  /**
   * Obtiene un mensaje de bienvenida
   * @returns {Promise<Object>} Mensaje del servidor
   */
  static async getMessage() {
    const response = await fetch(`${APP_CONFIG.API_BASE_URL}/message`);
    return await response.json();
  }
}
