/**
 * Servicio para manejar las peticiones HTTP
 */
class ApiService {
  /**
   * Envía datos del formulario al servidor
   * @param {Object} data - Datos a enviar
   * @returns {Promise<Object>} Respuesta del servidor
   */
  static async submitForm(data) {
    try {
      const response = await fetch(APP_CONFIG.FORM_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || MESSAGES.ERROR_GENERIC);
      }

      return await response.json();
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
