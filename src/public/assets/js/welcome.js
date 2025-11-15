/**
 * Página de bienvenida
 */
document.addEventListener('DOMContentLoaded', () => {
  // Obtener datos del usuario del sessionStorage
  const userDataStr = sessionStorage.getItem('userData');
  
  if (!userDataStr) {
    // Si no hay datos, redirigir al login
    window.location.href = '/';
    return;
  }

  try {
    const userData = JSON.parse(userDataStr);
    
    // Mostrar información del usuario
    const userNameEl = document.getElementById('userName');
    const userEmailEl = document.getElementById('userEmail');
    
    if (userNameEl && userData.name) {
      userNameEl.textContent = userData.name;
    }
    
    if (userEmailEl && userData.email) {
      userEmailEl.textContent = userData.email;
    }

    // Animación de entrada
    const welcomeCard = document.querySelector('.welcome-card');
    if (welcomeCard) {
      welcomeCard.style.animation = 'slideInScale 0.5s ease forwards';
    }

  } catch (error) {
    console.error('Error al cargar datos del usuario:', error);
    window.location.href = '/';
  }

  // Manejar cierre de sesión
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('userData');
      window.location.href = '/';
    });
  }
});
