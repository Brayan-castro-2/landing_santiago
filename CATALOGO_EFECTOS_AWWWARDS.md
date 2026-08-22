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
"You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
scroll-morph-hero.tsx
"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Utility ---
// function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs));
// }

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;  // Reduced from 100
const IMG_HEIGHT = 85; // Reduced from 140

function FlipCard({
    src,
    index,
    total,
    phase,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            // Smoothly animate to the coordinates defined by the parent
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}

            // Initial style
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d", // Essential for the 3D hover effect
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-gray-700"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-white">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000; // Virtual scroll range

// Unsplash Images
const IMAGES = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=80",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=300&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=80",
    "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=300&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=300&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&q=80",
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&q=80",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=300&q=80",
    "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=300&q=80",
];

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        // Initial set
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0); // Keep track of scroll value without re-renders

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Prevent default to stop browser overscroll/bounce
            e.preventDefault();

            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        // Touch support
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        // Attach listeners to container instead of window for portability
        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    // 1. Morph Progress: 0 (Circle) -> 1 (Bottom Arc)
    // Happens between scroll 0 and 600
    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    // 2. Scroll Rotation (Shuffling): Starts after morph (e.g., > 600)
    // Rotates the bottom arc as user continues scrolling
    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;

            // Normalize -1 to 1
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            // Move +/- 100px
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Intro Sequence ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    // --- Render Loop (Manual Calculation for Morph) ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    // --- Content Opacity ---
    // Fade in content when arc is formed (morphValue > 0.8)
    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#FAFAFA] overflow-hidden">
            {/* Container */}
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text (Fades out) */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-2xl font-medium tracking-tight text-gray-800 md:text-4xl"
                    >
                        The future is built on AI.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500"
                    >
                        SCROLL TO EXPLORE
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
                        Explore Our Vision
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed">
                        Discover a world where technology meets creativity. <br className="hidden md:block" />
                        Scroll through our curated collection of innovations designed to shape the future.
                    </p>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        // 1. Intro Phases (Scatter -> Line)
                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70; // Adjusted for smaller images (60px width + 10px gap)
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            // 2. Circle Phase & Morph Logic

                            // Responsive Calculations
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            // A. Calculate Circle Position
                            const circleRadius = Math.min(minDimension * 0.35, 350);

                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            // B. Calculate Bottom Arc Position
                            // "Rainbow" Arch: Convex up. Center is highest point.

                            // Radius:
                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);

                            // Position:
                            const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;

                            // Spread angle:
                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            // Apply Scroll Rotation (Shuffle) with Bounds
                            // We want to clamp rotation so images don't disappear.
                            // Map scroll range [600, 3000] to a limited rotation range.
                            // Range: [-spreadAngle/2, spreadAngle/2] keeps them roughly in view.
                            // We map 0 -> 1 (progress of scroll loop) to this range.

                            // Note: rotateValue comes from smoothScrollRotate which maps [600, 3000] -> [0, 360]
                            // We need to adjust that mapping in the hook above, OR adjust it here.
                            // Better to adjust it here relative to the spread.

                            // Let's interpret rotateValue (0 to 360) as a progress 0 to 1
                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);

                            // Calculate bounded rotation:
                            // Move from 0 (centered) to -spreadAngle (all the way left) or similar.
                            // Let's allow scrolling through the list.
                            // Total sweep needed to see all items if we start at one end?
                            // If we start centered, we can go +/- spreadAngle/2.

                            // User wants to "stop on the last image".
                            // Let's map scroll to: 0 -> -spreadAngle (shifts items left)
                            const maxRotation = spreadAngle * 0.8; // Don't go all the way, keep last item visible
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8, // Increased scale for active state
                            };

                            // C. Interpolate (Morph)
                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase} // Pass intro phase for initial animations
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


demo.tsx
"use client";

import IntroAnimation from "../components/ui/scroll-morph-hero";

export default function Demo() {
    return (
        <div className="w-full h-[800px] border rounded-lg overflow-hidden relative">
            <IntroAnimation />
        </div>
    );
}

```

Install NPM dependencies:
```bash
framer-motion
```

Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):
```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}

```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
"