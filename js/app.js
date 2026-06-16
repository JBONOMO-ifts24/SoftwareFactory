/* ==========================================================================
   Lógica de Interactividad - Software Factory
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Software Factory initialized successfully.');

  // 1. Control del Menú Móvil (Responsive Toggle)
  const headerToggle = document.getElementById('headerToggle');
  const headerNav = document.getElementById('headerNav');

  if (headerToggle && headerNav) {
    headerToggle.addEventListener('click', () => {
      headerToggle.classList.toggle('header__toggle--active');
      headerNav.classList.toggle('header__nav--active');
    });

    // Cerrar el menú automáticamente al hacer click en cualquier enlace de navegación
    const navLinks = headerNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        headerToggle.classList.remove('header__toggle--active');
        headerNav.classList.remove('header__nav--active');
      });
    });
  }

  // 2. Preparación para Lógica Futura (Sección Herramientas)
  // TODO: Implementar interactividad de tarjetas y filtrado de herramientas
  
});
