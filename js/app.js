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

  // 2. Lógica Interactiva para la Sección Herramientas (Tarjeta 4 — GABRIEL)
  const toolCards = document.querySelectorAll('.tools__card');
  const detailViewer = document.getElementById('toolsDetailViewer');

  // Datos estructurados de las herramientas
  const toolsData = {
    git: {
      title: 'Git',
      description: 'Git es el estándar de la industria para el control de versiones distribuido. Permite a los desarrolladores trabajar en paralelo, trackear cambios de forma precisa y colaborar de manera fluida mediante ramas (sprints, features o hotfixes) sin interferir con el código de producción.',
      usecase: 'Cada desarrollador crea ramas específicas (ej. <code>feature_gabriel/herramientas</code>) para resolver tareas y utiliza pull requests para integrarlas de forma segura y auditada a la rama <code>main</code>.'
    },
    trello: {
      title: 'Trello',
      description: 'Trello es una herramienta de gestión de proyectos visual basada en la metodología Kanban. Facilita la organización de flujos de trabajo mediante tableros, listas y tarjetas, permitiendo que cada miembro del equipo conozca sus tareas asignadas y su estado actual de un solo vistazo.',
      usecase: 'El equipo de la Software Factory organiza el backlog de desarrollo en columnas como "Por hacer", "En proceso", "QA/Revisión" e "Implementado", asignando responsables directos a cada tarjeta.'
    },
    antigravity: {
      title: 'Antigravity',
      description: 'Antigravity es un entorno de desarrollo inteligente e integrado que actúa como asistente de codificación de próxima generación. Facilita la navegación del código, la ejecución de refactorizaciones complejas de manera automatizada y la resolución ágil de bugs con asistencia de IA integrada en tiempo real.',
      usecase: 'Utilizado para analizar la estructura del proyecto y acelerar el ciclo de desarrollo, sugiriendo código optimizado y garantizando la consistencia visual y técnica en todas las secciones.'
    },
    mcp: {
      title: 'Model Context Protocol (MCP)',
      description: 'Model Context Protocol es un protocolo abierto y estandarizado que permite conectar LLMs de manera segura y eficiente con herramientas externas, APIs y bases de datos locales. Actúa como el puente que da superpoderes a los asistentes de desarrollo para interactuar directamente con el entorno real.',
      usecase: 'Permite que Antigravity lea y escriba archivos del repositorio local, ejecute comandos de verificación, e incluso interactúe con APIs externas como Trello de forma totalmente autónoma bajo supervisión.'
    }
  };

  if (toolCards.length > 0 && detailViewer) {
    toolCards.forEach(card => {
      card.addEventListener('click', () => {
        // Quitar estado activo a todas las tarjetas
        toolCards.forEach(c => c.classList.remove('tools__card--active'));
        
        // Agregar estado activo a la tarjeta clickeada
        card.classList.add('tools__card--active');

        // Obtener la herramienta correspondiente
        const toolKey = card.getAttribute('data-tool');
        const data = toolsData[toolKey];

        if (data) {
          // Agregar clase para efecto de fade out/in suave
          detailViewer.style.opacity = '0';
          detailViewer.style.transform = 'translateY(10px)';

          setTimeout(() => {
            detailViewer.innerHTML = `
              <div class="tools__detail-content">
                <div class="tools__detail-header">
                  <div class="tools__detail-badge">Herramienta Activa</div>
                  <h3 class="tools__detail-title">${data.title}</h3>
                </div>
                <p class="tools__detail-description">${data.description}</p>
                <div class="tools__detail-usecase">
                  <strong>Caso de uso en la Factory:</strong> ${data.usecase}
                </div>
              </div>
            `;
            detailViewer.style.opacity = '1';
            detailViewer.style.transform = 'translateY(0)';
          }, 200);
        }
      });
    });
  }
  
});
