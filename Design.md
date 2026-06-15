# Sistema de Diseño Visual - Software Factory

[cite_start]Este documento contiene las directrices estéticas para que la interfaz sea cohesiva, moderna y con una estética tecnológica (*Tech/Dark Mode*). [cite: 7]

## 1. Paleta de Colores (Variables CSS)
Todos los bloques de código CSS deben utilizar estrictamente las siguientes variables declaradas en el `:root` de `global.css`:

```css
:root {
  --bg-principal: #0f172a;      /* Slate 900 - Fondo de la página */
  --bg-tarjetas: #1e293b;       /* Slate 800 - Fondo de contenedores y bloques */
  --color-primario: #38bdf8;    /* Sky 400 - Color de acento para botones, enlaces y bordes activos */
  --color-texto-high: #f8fafc;  /* Slate 50 - Texto principal (títulos) */
  --color-texto-low: #94a3b8;   /* Slate 400 - Texto secundario (párrafos) */
}

## 2. Tipografía
Fuente Principal: 'Inter', sans-serif. Se debe incluir desde Google Fonts en el <head> del HTML.

Tamaños sugeridos:

Títulos Principales (H1/H2): 2.5rem o 2rem, peso 700 (Bold), color --color-texto-high.

Párrafos y Textos: 1rem, peso 400 (Regular), color --color-texto-low.

## 3. Componentes Estándar (Botones y Tarjetas)
Tarjetas (.card): Deben tener el fondo --bg-tarjetas, bordes redondeados (border-radius: 12px), y un padding interno de 1.5rem.

Botones (.btn): Fondo --color-primario con texto oscuro (#0f172a), o borde --color-primario con texto claro para botones secundarios. Deben incluir una transición suave en el hover (transition: all 0.3s ease).