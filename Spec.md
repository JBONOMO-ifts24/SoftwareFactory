# Especificación Técnica de la Web: Software Factory

[cite_start]Este documento define la arquitectura y las reglas de desarrollo que deben seguir de forma estricta todos los desarrolladores (y agentes autónomos vía MCP) para garantizar la modularidad del proyecto. [cite: 9, 10, 15]

## 1. Arquitectura de Archivos y Carpetas
Para evitar conflictos de Git al trabajar en paralelo, la estructura del proyecto será la siguiente:
- `/index.html` -> Archivo único para el contenido HTML de toda la página.
- `/styles/global.css` -> Estilos globales, reseteo de márgenes y variables de diseño.
- `/styles/sections.css` -> Archivo compartido donde cada integrante agregará los estilos exclusivos de su sección.
- [cite_start]`/js/app.js` -> Lógica e interactividad en JavaScript Vanilla (exclusivo para la sección de herramientas). 

## 2. Estructura del HTML (`index.html`)
El archivo base contendrá un esqueleto limpio. Cada integrante debe insertar su bloque utilizando la etiqueta `<section>` con su ID correspondiente:
- **Integrante 1:** `<header class="header">` (Menú de navegación global)
- [cite_start]**Integrante 2:** `<section id="hero">` (Introducción al concepto de Software Factory) [cite: 2]
- [cite_start]**Integrante 3:** `<section id="proceso">` (Explicación de metodologías y eficiencia) [cite: 3, 9]
- [cite_start]**Integrante 4:** `<section id="herramientas">` (Contenedor interactivo para las herramientas) 
- [cite_start]**Integrante 5:** `<section id="calidad">` y `<footer class="footer">` (Garantía de calidad y cierre) [cite: 15, 18]

## 3. Convención de Nombres (CSS BEM)
Para que los estilos de un integrante no rompan el diseño de otro, se utilizará la metodología BEM (Block, Element, Modifier) con prefijos por sección:
- Sección Hero: `.hero__title`, `.hero__button`
- Sección Proceso: `.proceso__card`, `.proceso__card-title`
- Sección Herramientas: `.tools__grid`, `.tools__badge`

## 4. Flujo de Git y Commits
- [cite_start]Está prohibido pushear directo a `main`. 
- [cite_start]Cada integrante debe trabajar en su propia rama remota (`feature/nombre-seccion`). 
- [cite_start]Los mensajes de commit deben seguir el estándar básico: `feat(seccion): descripción corta de lo que se agregó`.