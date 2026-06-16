# Protocolo de Garantía de Calidad (QA) y Testing - Software Factory

Este protocolo define las pruebas de aceptación técnica que cada agente/desarrollador debe ejecutar en el entorno local de Google Antigravity antes de realizar un push.

## 1. Criterios de Aceptación Estéticos y Estructura
Al finalizar los cambios, abrir el panel de vista previa de Antigravity y verificar:
- **Cumplimiento de Diseño:** Que los colores de la sección coincidan estrictamente con las variables estipuladas en `Design.md` (`--bg-principal`, `--color-primario`, etc.).
- **Aislamiento CSS:** Validar que los estilos de la sección estén encapsulados bajo el ID correspondiente dentro de `styles/sections.css` y que no alteren visualmente los bloques de otros compañeros.
- **Responsividad (Responsive Design):** Redimensionar la ventana de previsualización para simular un dispositivo móvil (ancho menor a 768px). La sección no debe desbordarse horizontalmente ni cortar textos.

## 2. Pruebas Funcionales (Consola del IDE)
- Abrir las herramientas de desarrollador integradas en Antigravity.
- Asegurar que al cargar la página o interactuar con los elementos no aparezcan errores o advertencias en la consola (`Console Log`).
- **Prueba específica JS (Sección Herramientas):** Verificar que los eventos de clic disparen correctamente los cambios de estado interactivos sin romper el flujo de la página.