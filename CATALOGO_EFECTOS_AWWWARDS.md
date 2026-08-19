# 🎨 Catálogo de Efectos & Microinteracciones UI/UX Pro Max (Awwwards Level)
### Guía Técnica & Recetario de Componentes para Santiago Cerda Portfolio

Este documento sirve como **Skill y Guía Maestra** de todos los efectos visuales y componentes de vanguardia desarrollados para este proyecto. Contiene la explicación técnica, mejores casos de uso y cómo implementarlos tanto en **React (shadcn / Framer Motion)** como en **Vanilla Web (HTML / CSS / JavaScript)**.

---

## 📑 Índice de Efectos & Componentes

1. [💬 Interactive Animated Chat Widget](#1-interactive-animated-chat-widget)
2. [⭐ Testimonials Section with Marquee](#2-testimonials-section-with-marquee)
3. [🎴 Stacked Cards 3D Interaction](#3-stacked-cards-3d-interaction)
4. [📐 Expanding Cards Showcase (Accordion Slider)](#4-expanding-cards-showcase)
5. [📊 Conversion Funnel Chart](#5-conversion-funnel-chart)
6. [🌌 3D Parallax Unfurling Gallery Matrix](#6-3d-parallax-unfurling-gallery-matrix)
7. [🧲 Magnetic Button & Custom Cursor](#7-magnetic-button--custom-cursor)
8. [✨ Real Glassmorphism with Noise & Blobs](#8-real-glassmorphism-with-noise--blobs)

---

## 1. 💬 Interactive Animated Chat Widget

### 🎯 Propósito & Caso de Uso
Reemplaza los formularios de contacto estáticos y aburridos por una **conversación simulada en tiempo real** que genera conexión inmediata, valida el dolor del cliente y lo redirige con 1 clic a WhatsApp.

### 💡 Dónde colocarlo
- Sección de **Contacto / Footer** como Lead Magnet interactivo.
- Sección **"Cómo trabajo"** para simular una consulta inicial.

### ⚙️ Cómo Funciona
- **Auto-play al hacer scroll:** Detecta cuando el usuario llega a la sección con `IntersectionObserver` o `whileInView`.
- **Typing Indicator Dinámico:** 3 puntos animados que simulan que Santiago está escribiendo en vivo.
- **Botón Replay:** Permite volver a ver la secuencia completa.
- **Campo Interactivo:** Si el usuario escribe una pregunta, el bot responde de forma contextual y le da su número de WhatsApp.

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/chat-messages.tsx`
- **Vanilla:** Integrado en `#chatWidget` en `index.html`, `styles.css` y `script.js`

---

## 2. ⭐ Testimonials Section with Marquee

### 🎯 Propósito & Caso de Uso
Muestra prueba social masiva y continua sin abrumar la página con bloques estáticos largos. Genera sensación de **alta demanda y autoridad**.

### 💡 Dónde colocarlo
- Inmediatamente antes del footer o justo después de los casos de éxito.

### ⚙️ Cómo Funciona
- **Animación `@keyframes` infinita:** La fila de tarjetas se duplica exactamente y se traslada en `-50%` de forma continua.
- **Pausa en Hover:** Al pasar el cursor (`:hover`), la animación se congela (`animation-play-state: paused`) para leer la reseña.
- **Efecto Mask Gradient:** Degradado `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` en los bordes laterales para un fundido elegante.

### 📁 Ubicación del Código
- **React/shadcn:** `components/blocks/testimonials-with-marquee.tsx`
- **Vanilla:** `#testimonios` con `.testimonials-marquee-track` en `index.html` y `styles.css`

---

## 3. 🎴 Stacked Cards 3D Interaction

### 🎯 Propósito & Caso de Uso
Ideal para clientes o proyectos que tienen **múltiples videos, reels o fotografías** (ej. Maki Açaí con 2+ reels virales) sin ocupar espacio vertical excesivo.

### 💡 Dónde colocarlo
- Casos de estudio destacados o galerías de producto.

### ⚙️ Cómo Funciona
- **Capas 3D Apiladas:** Capas traseras con `position: absolute`, escaladas al `0.96` y `0.92` con rotaciones suaves de `-2deg` y `+1.5deg`.
- **Efecto Abanico (Fan-out) en Hover:** Al pasar el cursor, las tarjetas se despliegan en abanico (`translateX`, `translateY`, `rotate(4deg)` y `rotate(-5deg)`) revelando que hay más contenidos.

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/stacked-cards-interaction.tsx`
- **Vanilla:** `.reel-card--stacked` con `.stacked-deck-layer` en `styles.css`

---

## 4. 📐 Expanding Cards Showcase

### 🎯 Propósito & Caso de Uso
Presenta múltiples categorías, industrias o pilares de servicio en un layout horizontal interactivo de impacto visual masivo.

### 💡 Dónde colocarlo
- Sección de **"Sectores Dominados"** o **"Especialización por Industria"**.

### ⚙️ Cómo Funciona
- **Flex-grow Transition:** La tarjeta inactiva tiene `flex: 0.8` y el título en orientación vertical. Al hacer hover o clic, la tarjeta activa se expande a `flex: 3.5` con `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Fade de Contenido:** El párrafo descriptivo y badge aparecen con animación de opacidad y `translateY`.
- **Responsive:** En móvil cambia automáticamente a acordeón vertical.

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/expanding-cards.tsx`
- **Vanilla:** `#sectores` y `.expanding-cards-container` en `index.html`, `styles.css` y `script.js`

---

## 5. 📊 Conversion Funnel Chart

### 🎯 Propósito & Caso de Uso
Demuestra científicamente cómo las visualizaciones de branding se convierten en **ventas y ROAS medible**. Diferencia a Santiago de creadores de contenido promedio que no miden ROI.

### 💡 Dónde colocarlo
- En la sección de **Resultados / Métricas** o **Meta Ads & Estrategia**.

### ⚙️ Cómo Funciona
- **Barras proporcionales con Shimmer:** Ancho calculado según el valor del paso del embudo.
- **Indicador de Retención:** Cada etapa muestra el % de conversión relativa respecto al paso anterior.
- **Gradiente con Glow:** Destaca la etapa final (Ventas / ROAS) con contraste de color.

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/funnel-chart.tsx`
- **Vanilla:** `.funnel-chart-card` en `index.html` y `styles.css`

---

## 6. 🌌 3D Parallax Unfurling Gallery Matrix

### 🎯 Propósito & Caso de Uso
El efecto **"Hero inmersivo / Showreel 3D"** por excelencia de sitios premiados en Awwwards. Una matriz tridimensional de 4 columnas de imágenes que se desenrolla y rota en el espacio conforme el usuario hace scroll.

### 💡 Dónde colocarlo
- Como **Showreel central** en el Hero o como transición inmersiva de portafolio antes del contacto.

### ⚙️ Cómo Funciona
- **Scroll Vinculado (useScroll + useSpring):** Lee el progreso de scroll (`scrollYProgress`) con interpolación de física elástica.
- **Matriz 3D con Perspectiva:** Modifica `rotateX`, `rotateY`, `rotateZ` y `translateZ(-800px → 0px)` para traer la galería hacia la cámara.
- **Columnas en Contramarcha (Parallax opuesto):** Las columnas 1 y 3 suben mientras las 2 y 4 bajan.

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/3d-parallax-unfurling-gallery.tsx`

---

## 7. 🧲 Magnetic Button & Custom Cursor

### 🎯 Propósito & Caso de Uso
Microinteracción táctil que hace que el sitio se sienta vivo y de alta gama.

### ⚙️ Cómo Funciona
- **Magnetic Physics:** Calcula la distancia del cursor respecto al centro del botón y aplica una atracción de `translate3d(x * 0.22, y * 0.22, 0)`. Al salir el mouse, el botón regresa con resorte a su posición.
- **Cursor Dual Ring:** Un punto central de respuesta inmediata (`translate`) + un anillo exterior con interpolación elástica (`requestAnimationFrame`) que se expande al pasar sobre links interactivos.

---

## 8. ✨ Real Glassmorphism with Noise & Blobs

### 🎯 Propósito & Caso de Uso
El Glassmorphism sobre fondos sólidos no produce efecto de desenfoque. Para lograr el efecto de **vidrio real**:

1. **Noise Texture SVG:** Generador fractal SVG con opacidad `0.025` que elimina el aspecto digital plano.
2. **Background Blobs Animados:** 3 esferas difuminadas (`filter: blur(80px)`) en verde esmeralda y celeste que flotan suavemente detrás de las tarjetas.
3. **Card Glow Mouse Follower:** La tarjeta proyecta un haz de luz radial `radial-gradient(circle at var(--mouse-x) var(--mouse-y))` que sigue la posición exacta del cursor.

---

## 9. 🎬 Multi-Layer Depth Parallax Hero (Osmo / GSAP Style)

### 🎯 Propósito & Caso de Uso
Crea una sensación de profundidad cinematográfica tridimensional en el Hero principal. A medida que el usuario hace scroll, las capas de fondo, niebla atmosférica, tipografía flotante y badges se desplazan a diferentes velocidades.

### 💡 Dónde colocarlo
- **Hero Section principal** para una primera impresión inolvidable de nivel Awwwards.

### ⚙️ Cómo Funciona
- **Capas por Profundidad (`data-depth` o `yPercent`):**
  - Capa 1 (Fondo profundo): Video cinematográfico con velocidad `0.35` y escala `1.1`.
  - Capa 2 (Atmósfera & Brillo): Resplandor radial difuminado con velocidad `0.22`.
  - Capa 3 (Contenido & Titular): Texto y CTAs con velocidad `0.14`.
- **Renderizado por Hardware:** `will-change: transform` y `translate3d` con `requestAnimationFrame` en Vanilla o `gsap.timeline + ScrollTrigger scrub` en React.

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/parallax-scrolling.tsx`
- **Vanilla:** `#hero` con `.hero-parallax-layer` en `index.html`, `styles.css` e `initHeroParallax()` en `script.js`

---

## 10. 👀 Mouse Following Eyes (Interactive Cartoon Gaze)

### 🎯 Propósito & Caso de Uso
Microinteracción lúdica y magnética de alto engagement. Los ojos siguen la posición exacta del cursor en tiempo real mediante trigonometría angular (`Math.atan2`), generando una reacción instantánea de sorpresa en el usuario.

### 💡 Dónde colocarlo
- Encabezado de la sección **"Resultados que hablan por sí solos"** (alineado al lado izquierdo junto al título).

### ⚙️ Cómo Funciona
- **Cálculo del Ángulo (`Math.atan2(dy, dx)`):** Determina el vector entre el centro del ojo y la posición del mouse `(clientX, clientY)`.
- **Radio de Movimiento Acotado:** `pupilX = Math.cos(angle) * maxMove`, `pupilY = Math.sin(angle) * maxMove`. Las pupilas nunca se salen del contorno del globo ocular.
- **Pupil Glint:** Pequeño destello de luz blanco fijo que aporta volumen y realismo visual.

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/mouse-following-eyes.tsx`
- **Vanilla:** `.mouse-following-eyes-wrapper` en `index.html`, `styles.css` e `initMouseEyes()` en `script.js`

---

## 11. 🪐 3D Stellar Card Galaxy (Three.js / WebGL Universe)

### 🎯 Propósito & Caso de Uso
Experiencia inmersiva espacial 3D donde decenas de tarjetas y contenidos orbitan en una esfera estelar tridimensional. El usuario puede orbitar libremente con el mouse, hacer zoom y clicar sobre cualquier tarjeta flotante para abrir su detalle con inclinación 3D (tilt).

### 💡 Dónde colocarlo (Recomendación Arquitectónica)
- **Recomendación:** **NO reemplazar la galería Bento 9:16**, ya que los clientes necesitan ver videos verticales rápidos para convertir.
- **Ubicación ideal:** Colocarlo como una sección dedicada **"Universo de Contenidos (+257 Videos Creados)"** justo después de la galería principal de casos de éxito, como demostración de volumen y dominio técnico Awwwards.

### ⚙️ Cómo Funciona
- **Distribución de Fibonacci Esférica:** Distribuye las tarjetas en una esfera tridimensional usando la proporción áurea (`(1 + √5)/2`) para que no colisionen.
- **OrbitControls + Starfield WebGL:** Fondo de 6.000 estrellas con movimiento suave y rotación de cámara en 360°.
- **Card Modal con 3D Perspective Tilt:** Al seleccionar una tarjeta, el modal calcula la posición relativa del cursor para rotar la tarjeta en los ejes X e Y (`rotateX` / `rotateY`).

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/3d-image-gallery.tsx`

## 12. 💻 3D Container Scroll Animation (Aceternity UI Style)

### 🎯 Propósito & Caso de Uso
Convierte la presentación de la persona o el estudio de trabajo en una experiencia interactiva de hardware estilo Apple / Linear. A medida que el usuario hace scroll hacia abajo, la tarjeta/mockup en perspectiva tridimensional se inclina desde un ángulo de `rotateX: 20deg` hasta aplanarse a `rotateX: 0deg` y agrandarse a escala completa.

### 💡 Dónde colocarlo
- Sección **"Sobre Santiago" (`#sobre-mi`)** para presentar la foto profesional, trayectoria, badges de impacto y stack de herramientas como si fuera una estación de trabajo de alta gama.

### ⚙️ Cómo Funciona
- **Perspectiva 3D (`perspective: 1000px`):** El contenedor padre define el plano focal tridimensional.
- **Scroll Interpolation (`useScroll + useTransform` en Framer Motion / `requestAnimationFrame` en Vanilla):** Mapea el progreso del scroll `[0, 1]` a la rotación angular `rotateX(18deg ➔ 0deg)` y a la escala `scale(0.94 ➔ 1.02)`.
- **Mockup Frame con Glassmorphism:** Borde metálico de 4px con `backdrop-filter: blur(28px)` y sombras multi-capa profundas.

### 📁 Ubicación del Código
- **React/shadcn:** `components/ui/container-scroll-animation.tsx`
- **Vanilla:** `.container-scroll-wrapper` y `.container-scroll-card` en `index.html`, `styles.css` e `initContainerScroll()` en `script.js`

---

### 🚀 Matriz de Selección Rápida

| Si quieres lograr... | Elige este componente | Dónde ponerlo |
|---|---|---|
| **Presentar a Santiago con efecto 3D Apple/Linear** | 💻 3D Container Scroll | Sobre Santiago / Bio |
| **Mostrar el volumen masivo (+257 videos)** | 🪐 3D Stellar Card Galaxy | Sección "Universo de Contenidos" |
| **Llamar la atención con microinteracción divertida** | 👀 Mouse Following Eyes | Encabezado Métricas (Izquierda) |
| **Impacto visual cinematográfico inicial** | 🎬 Parallax Multi-Layer Hero | Hero Principal |
| **Medir el retorno real por cliente (ROAS)** | 📊 Single-Client Funnel Chart | Sección Métricas |
| **Cerrar más clientes por WhatsApp** | 💬 Chat Widget Interactivo | Contacto / Footer |
| **Demostrar autoridad y confianza** | ⭐ Testimonials Marquee | Antes del Footer |
| **Mostrar múltiples videos de un cliente** | 🎴 Stacked Cards 3D | Casos de Éxito |
| **Explicar los sectores que dominas** | 📐 Expanding Cards Slider | Especialización / Rubros |
| **Showreel inmersivo 3D con scroll** | 🌌 3D Parallax Matrix Gallery | Showreel / Portafolio |

---
*Documento generado para el proyecto de Marca Personal de Santiago Cerda.*
