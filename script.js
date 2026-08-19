/**
 * Santiago Cerda — Portfolio Engine (SaaS Clean + 3D Scroll Morph + 3D Robot)
 * Portadas con Método 2 (Instagram Direct Media & Shortcodes)
 */

/* ── BASE DE DATOS DE REELS CON SHORTCODES OFICIALES (MÉTODO 2) ─────────── */
const videosPortafolio = [
  /* 1. MÁS VIRALES (SPOTLIGHT CASOS ESTRELLA) */
  {
    id: 1,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DZU8b7Fx95j",
    categoria: "gastronomia",
    tipo: "viral",
    categoriaLabel: "Gastronomía",
    titulo: "Estrategia Viral de Delivery",
    descripcion: "Antojo visual y conversión directa a menú digital con récord histórico de reproducciones.",
    vistas: "6.7M Vistas",
    url: "https://www.instagram.com/reel/DZU8b7Fx95j/",
    poster: "https://www.instagram.com/p/DZU8b7Fx95j/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop&q=80",
    isTopViral: true,
    isHeroSpotlight: true
  },
  {
    id: 2,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DZ-WKQdRLce",
    categoria: "gastronomia",
    tipo: "retorno",
    categoriaLabel: "Gastronomía",
    titulo: "Campaña de Frecuencia de Compra",
    descripcion: "Campaña de producto estrella para aumentar la recurrencia de pedidos en Santiago.",
    vistas: "1.6M Vistas",
    url: "https://www.instagram.com/reel/DZ-WKQdRLce/",
    poster: "https://www.instagram.com/p/DZ-WKQdRLce/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80",
    isTopViral: true,
    isHeroSpotlight: true
  },
  {
    id: 3,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DZ-LYP7uPvo",
    categoria: "hoteleria",
    tipo: "viral",
    categoriaLabel: "Hotelería",
    titulo: "Experiencia Turística Inmersiva",
    descripcion: "Reel viral que alcanzó millones de vistas y generó 98% de ocupación en reservas directas.",
    vistas: "4.2M Vistas",
    url: "https://www.instagram.com/reel/DZ-LYP7uPvo/",
    poster: "https://www.instagram.com/p/DZ-LYP7uPvo/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80",
    isTopViral: true,
    isHeroSpotlight: true
  },
  {
    id: 4,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DY2ZiR8uC24",
    categoria: "retail",
    tipo: "viral",
    categoriaLabel: "Retail",
    titulo: "Crecimiento Orgánico en Tiendas",
    descripcion: "Contenido humorístico y dinámico en pasillos que impulsó la cuenta a +75K seguidores.",
    vistas: "700K Vistas",
    url: "https://www.instagram.com/reel/DY2ZiR8uC24/",
    poster: "https://www.instagram.com/p/DY2ZiR8uC24/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=80",
    isTopViral: true,
    isHeroSpotlight: true
  },
  {
    id: 5,
    cliente: "VitaNovaCL",
    logo: "logo-vitanova.jpg",
    handle: "@vitanovacl",
    shortcode: "DW_2QCrjg55",
    categoria: "ecommerce",
    tipo: "retorno",
    categoriaLabel: "E-Commerce",
    titulo: "Escalado de Tienda Shopify & Meta Ads",
    descripcion: "Creativos UGC de respuesta directa y embudos de Meta Ads con ROAS récord de ×5.41.",
    vistas: "ROAS ×5.41",
    url: "https://www.instagram.com/reel/DW_2QCrjg55/",
    poster: "https://www.instagram.com/p/DW_2QCrjg55/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    isTopViral: true,
    isHeroSpotlight: true
  },

  /* 2. CATÁLOGO COMPLETO PARA EL EXPLORADOR 3D SCROLL-MORPH */
  {
    id: 6,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DRz4mDHD9ej",
    categoria: "hoteleria",
    tipo: "viral",
    categoriaLabel: "Hotelería",
    titulo: "Destino & Gastronomía Austral",
    descripcion: "Recorrido dinámico por las instalaciones y carta culinaria del hotel.",
    vistas: "1.2M Vistas",
    url: "https://www.instagram.com/reel/DRz4mDHD9ej/",
    poster: "https://www.instagram.com/p/DRz4mDHD9ej/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DP6zAVDjDHE",
    categoria: "hoteleria",
    tipo: "viral",
    categoriaLabel: "Hotelería",
    titulo: "Habitaciones con Vista Panorámica",
    descripcion: "Gancho visual en los primeros 2 segundos para captar turistas.",
    vistas: "890K Vistas",
    url: "https://www.instagram.com/reel/DP6zAVDjDHE/",
    poster: "https://www.instagram.com/p/DP6zAVDjDHE/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DWy6d51jqJX",
    categoria: "retail",
    tipo: "viral",
    categoriaLabel: "Retail",
    titulo: "Tendencias & Snacks Virales",
    descripcion: "Presentación rápida de novedades de importación.",
    vistas: "540K Vistas",
    url: "https://www.instagram.com/reel/DWy6d51jqJX/",
    poster: "https://www.instagram.com/p/DWy6d51jqJX/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DUiW75ODle8",
    categoria: "retail",
    tipo: "viral",
    categoriaLabel: "Retail",
    titulo: "Experiencia de Compra en Local",
    descripcion: "Storytelling visual que conecta con el público juvenil de Santiago.",
    vistas: "410K Vistas",
    url: "https://www.instagram.com/reel/DUiW75ODle8/",
    poster: "https://www.instagram.com/p/DUiW75ODle8/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DZm9WIlRGzp",
    categoria: "gastronomia",
    tipo: "informativo",
    categoriaLabel: "Gastronomía",
    titulo: "¿Cómo se prepara el auténtico Açaí?",
    descripcion: "Video educativo sobre ingredientes y proceso artesanal.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DZm9WIlRGzp/",
    poster: "https://www.instagram.com/p/DZm9WIlRGzp/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DZFjKP1Rn8o",
    categoria: "gastronomia",
    tipo: "informativo",
    categoriaLabel: "Gastronomía",
    titulo: "Beneficios Nutricionales del Açaí Puro",
    descripcion: "Educación de producto para clientes fitness y vida sana.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DZFjKP1Rn8o/",
    poster: "https://www.instagram.com/p/DZFjKP1Rn8o/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 12,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DavYt7gOV--",
    categoria: "gastronomia",
    tipo: "informativo",
    categoriaLabel: "Gastronomía",
    titulo: "Guía de Toppings y Combinaciones",
    descripcion: "Contenido interactivo para personalizar bowls.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DavYt7gOV--/",
    poster: "https://www.instagram.com/p/DavYt7gOV--/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 13,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DaQTEwOOUAy",
    categoria: "retail",
    tipo: "informativo",
    categoriaLabel: "Retail",
    titulo: "Tour de Novedades Semanales",
    descripcion: "Recorrido dinámico por las nuevas llegadas de stock.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DaQTEwOOUAy/",
    poster: "https://www.instagram.com/p/DaQTEwOOUAy/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 14,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DNbJb_0sWXt",
    categoria: "retail",
    tipo: "informativo",
    categoriaLabel: "Retail",
    titulo: "Productos Importados que no conocías",
    descripcion: "Descubrimiento de productos virales de Japón y USA.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DNbJb_0sWXt/",
    poster: "https://www.instagram.com/p/DNbJb_0sWXt/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 15,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DTA8dFwDMd1",
    categoria: "retail",
    tipo: "informativo",
    categoriaLabel: "Retail",
    titulo: "Cómo llegar a nuestras sucursales",
    descripcion: "Geolocalización visual para tráfico a tiendas físicas.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DTA8dFwDMd1/",
    poster: "https://www.instagram.com/p/DTA8dFwDMd1/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 16,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DWCbg8bkf4T",
    categoria: "retail",
    tipo: "informativo",
    categoriaLabel: "Retail",
    titulo: "Top 5 Bebidas Virales",
    descripcion: "Formato ranking de alta retención.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DWCbg8bkf4T/",
    poster: "https://www.instagram.com/p/DWCbg8bkf4T/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 17,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DWhWtBvjxef",
    categoria: "hoteleria",
    tipo: "informativo",
    categoriaLabel: "Hotelería",
    titulo: "Guía de Actividades en Puerto Montt",
    descripcion: "Recomendaciones turísticas locales.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DWhWtBvjxef/",
    poster: "https://www.instagram.com/p/DWhWtBvjxef/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 18,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DTdk_bIDJI4",
    categoria: "hoteleria",
    tipo: "informativo",
    categoriaLabel: "Hotelería",
    titulo: "Salones de Eventos & Convenciones",
    descripcion: "Video corporativo para arriendos B2B y congresos.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DTdk_bIDJI4/",
    poster: "https://www.instagram.com/p/DTdk_bIDJI4/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 19,
    cliente: "VitaNovaCL",
    logo: "logo-vitanova.jpg",
    handle: "@vitanovacl",
    shortcode: "DXKhHPPCSAX",
    categoria: "ecommerce",
    tipo: "informativo",
    categoriaLabel: "E-Commerce",
    titulo: "¿Cómo usar tu producto paso a paso?",
    descripcion: "Tutorial de uso y eliminación de dudas de compra.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DXKhHPPCSAX/",
    poster: "https://www.instagram.com/p/DXKhHPPCSAX/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 20,
    cliente: "VitaNovaCL",
    logo: "logo-vitanova.jpg",
    handle: "@vitanovacl",
    shortcode: "DXWpF8-EXap",
    categoria: "ecommerce",
    tipo: "informativo",
    categoriaLabel: "E-Commerce",
    titulo: "Preguntas Frecuentes & Envíos",
    descripcion: "Eliminación de objeciones de compra en la pauta digital.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DXWpF8-EXap/",
    poster: "https://www.instagram.com/p/DXWpF8-EXap/media/?size=l",
    fallbackPoster: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initHeroCinema();
  renderScalableGallery('all');
  initGalleryFilters();
  initCounters();
  initExpandingCards();
  initVideoModal();
  initMobileMenu();
  initChatWidget();
  initScrollMorphGallery();
  initRobotCompanion();
  initTimelineProgress();
  initCinematicScroll();
});

/* ── 0. HERO CINEMA: Scroll-Scrubbed Video + Nav & Left Text Reveal ───────── */
function initHeroCinema() {
  const navbar    = document.getElementById('navbar');
  const section   = document.getElementById('hero');
  const gradient  = document.getElementById('heroCinemaGradient');
  const textPanel = document.getElementById('heroCinemaText');
  const hint      = document.getElementById('heroCinemaHint');
  const video     = document.getElementById('heroCinemaVideo');

  if (!section || !video) return;

  // Prepare video for frame-accurate scrubbing
  video.muted   = true;
  video.loop    = false;
  video.preload = 'auto';
  video.pause();
  video.currentTime = 0;

  let duration = 0;
  const onMeta = () => { duration = video.duration || 0; };
  video.addEventListener('loadedmetadata', onMeta);
  if (video.readyState >= 1) onMeta();

  // Raw scroll progress (0 → 1) — no lerp, direct mapping
  let scrollP  = 0;
  // Smoothed progress for UI animations only
  let uiP      = 0;

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  const updateScrollP = () => {
    const maxScroll = section.offsetHeight - window.innerHeight;
    scrollP = clamp(window.scrollY / maxScroll, 0, 1);
  };

  let rafId = null;
  const render = () => {
    // UI lerp — snappy (0.18 = fast but smooth)
    uiP += (scrollP - uiP) * 0.18;

    // ── VIDEO: direct seek — no lerp, frame-accurate sync with scroll
    if (duration > 0) {
      video.currentTime = scrollP * duration;
    }

    // ── Navbar: slide in top — starts at uiP=0.10, full at uiP=0.28
    const navP = clamp((uiP - 0.10) / 0.18, 0, 1);
    if (navbar) {
      navbar.style.transform = `translateY(${((1 - navP) * -100).toFixed(1)}%)`;
      navbar.style.opacity   = navP.toFixed(3);
    }

    // ── Gradient: fade in at 0.12 → 0.45
    if (gradient) {
      gradient.style.opacity = clamp((uiP - 0.12) / 0.33, 0, 1).toFixed(3);
    }

    // ── Left text: slide from left at 0.22 → 0.58
    const textP = clamp((uiP - 0.22) / 0.36, 0, 1);
    if (textPanel) {
      textPanel.style.opacity   = textP.toFixed(3);
      textPanel.style.transform = `translateY(-50%) translateX(${((1 - textP) * -70).toFixed(1)}px)`;
    }

    // ── Hint: fade out fast
    if (hint) hint.style.opacity = clamp(1 - scrollP * 12, 0, 1).toFixed(3);

    rafId = requestAnimationFrame(render);
  };

  window.addEventListener('scroll', updateScrollP, { passive: true });
  window.addEventListener('resize', updateScrollP, { passive: true });
  updateScrollP();
  render();
}

/* ── 4. SCROLL MORPH HERO (3D CIRCLE TO RAINBOW ARC) ─────────────────────── */
function initScrollMorphGallery() {
  const section = document.getElementById('galeria-3d');
  const stage = document.getElementById('morphCardsStage');
  const introText = document.getElementById('morphIntroText');
  const activeText = document.getElementById('morphActiveText');

  if (!section || !stage) return;

  const totalCards = 20;
  const cardsData = [
    { src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80", title: "Maki Açaí", views: "3.4M", cat: "Gastronomía" },
    { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80", title: "Hotel Gran Pacífico", views: "2.1M", cat: "Hotelería" },
    { src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80", title: "VitaNovaCL", views: "1.8M", cat: "E-Commerce" },
    { src: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&q=80", title: "Algo Market", views: "4.2M", cat: "Retail" },
    { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80", title: "Dimarín Náutica", views: "1.2M", cat: "B2B" },
    { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80", title: "Volterra Gourmet", views: "2.9M", cat: "Gastronomía" },
    { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80", title: "Comercial NA", views: "1.5M", cat: "Industrial" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80", title: "Meta Ads ROAS ×5.4", views: "5.1M", cat: "Performance" },
    { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80", title: "Santiago Cerda Studio", views: "6.8M", cat: "Showreel" },
    { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80", title: "Wilderness Motion", views: "2.4M", cat: "Outdoor" },
    { src: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=400&q=80", title: "Urban Beats 9:16", views: "3.1M", cat: "Viral" },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80", title: "Açai Bowls Viral", views: "1.9M", cat: "Food" },
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80", title: "Tech Growth Ads", views: "2.7M", cat: "SaaS" },
    { src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80", title: "Puerto Montt Spots", views: "1.4M", cat: "Turismo" },
    { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80", title: "Retail Launch 2026", views: "3.8M", cat: "Retail" },
    { src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&q=80", title: "Sunset Hospitality", views: "2.3M", cat: "Hotelería" },
    { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80", title: "Brand Identity 360", views: "4.5M", cat: "Branding" },
    { src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400&q=80", title: "Ecommerce Conversion", views: "2.0M", cat: "Shopify" },
    { src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=80", title: "High Speed Edits", views: "3.6M", cat: "Editing" },
    { src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&q=80", title: "Meta Campaign #1", views: "5.0M", cat: "Ads" }
  ];

  stage.innerHTML = '';
  const cardElements = [];

  for (let i = 0; i < totalCards; i++) {
    const data = cardsData[i];
    const cardEl = document.createElement('div');
    cardEl.className = 'morph-card-item';
    cardEl.setAttribute('data-index', i);
    cardEl.innerHTML = `
      <div class="morph-card-inner">
        <div class="morph-card-front">
          <img src="${data.src}" alt="${data.title}" loading="lazy">
          <div class="morph-card-tag">${data.views}</div>
        </div>
        <div class="morph-card-back">
          <span class="morph-back-cat">${data.cat}</span>
          <h4 class="morph-back-title">${data.title}</h4>
          <span class="morph-back-btn">Ver Reel</span>
        </div>
      </div>
    `;

    cardEl.addEventListener('click', () => {
      openReelModal(i % 10 + 1);
    });

    stage.appendChild(cardEl);
    cardElements.push(cardEl);
  }

  let morphProgress = 0;
  let targetMorphProgress = 0;
  let rotationProgress = 0;
  let targetRotationProgress = 0;
  let mouseParallaxX = 0;

  const handleScrollMorph = () => {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const totalDist = rect.height - vh;

    if (totalDist <= 0) return;

    const scrolled = -rect.top;
    const rawProgress = Math.min(Math.max(scrolled / totalDist, 0), 1);

    targetMorphProgress = Math.min(rawProgress / 0.4, 1);
    targetRotationProgress = Math.max((rawProgress - 0.4) / 0.6, 0);
  };

  window.addEventListener('scroll', handleScrollMorph, { passive: true });
  window.addEventListener('resize', handleScrollMorph, { passive: true });

  window.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseParallaxX = relX * 60;
    }
  });

  const lerp = (a, b, t) => a * (1 - t) + b * t;

  const animateMorph = () => {
    morphProgress += (targetMorphProgress - morphProgress) * 0.1;
    rotationProgress += (targetRotationProgress - rotationProgress) * 0.1;

    const w = stage.clientWidth || window.innerWidth;
    const h = stage.clientHeight || 700;
    const isMobile = w < 768;

    if (introText) {
      const introOpacity = Math.max(1 - morphProgress * 2, 0);
      introText.style.opacity = introOpacity.toFixed(3);
      introText.style.transform = `translate(-50%, -50%) scale(${(1 - morphProgress * 0.15).toFixed(2)})`;
    }

    if (activeText) {
      const activeOpacity = Math.max((morphProgress - 0.4) * 2, 0);
      activeText.style.opacity = activeOpacity.toFixed(3);
      activeText.style.transform = `translate(-50%, 0) translateY(${(1 - Math.min(activeOpacity, 1)) * 20}px)`;
    }

    const circleRadius = isMobile ? Math.min(w, h) * 0.32 : Math.min(w, h) * 0.36;
    const baseRadius = Math.min(w, h * 1.5);
    const arcRadius = baseRadius * (isMobile ? 1.3 : 1.1);
    const arcApexY = h * (isMobile ? 0.38 : 0.28);
    const arcCenterY = arcApexY + arcRadius;

    const spreadAngle = isMobile ? 110 : 140;
    const startAngle = -90 - spreadAngle / 2;
    const step = spreadAngle / (totalCards - 1);
    const rotationOffset = -rotationProgress * spreadAngle * 0.7;

    cardElements.forEach((cardEl, i) => {
      const circleAngle = (i / totalCards) * 360;
      const circleRad = (circleAngle * Math.PI) / 180;
      const circleX = Math.cos(circleRad) * circleRadius;
      const circleY = Math.sin(circleRad) * circleRadius;
      const circleRot = circleAngle + 90;

      const currentArcAngle = startAngle + i * step + rotationOffset;
      const arcRad = (currentArcAngle * Math.PI) / 180;
      const arcX = Math.cos(arcRad) * arcRadius + mouseParallaxX;
      const arcY = Math.sin(arcRad) * arcRadius + arcCenterY - h / 2;
      const arcRot = currentArcAngle + 90;

      const currentX = lerp(circleX, arcX, morphProgress);
      const currentY = lerp(circleY, arcY, morphProgress);
      const currentRot = lerp(circleRot, arcRot, morphProgress);
      const currentScale = lerp(1, isMobile ? 1.3 : 1.6, morphProgress);

      cardEl.style.transform = `translate(-50%, -50%) translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0px) rotate(${currentRot.toFixed(1)}deg) scale(${currentScale.toFixed(2)})`;
    });

    requestAnimationFrame(animateMorph);
  };

  handleScrollMorph();
  animateMorph();
}

/* ── 1. Render Curado de Casos de Éxito (Limpio & sin sobrecargar) ───────── */
function renderScalableGallery(activeCategory = 'all') {
  const desktopContainer = document.getElementById('casesGridDesktop');
  const mobileContainer = document.getElementById('casesMobileFeed');

  if (!desktopContainer || !mobileContainer) return;

  // Filtrado inteligente: en 'all' muestra los casos destacados (Spotlight) para no sobrecargar la vista
  const filtered = videosPortafolio.filter(item => {
    if (activeCategory === 'all') return item.isHeroSpotlight;
    if (activeCategory === 'viral') return item.isTopViral;
    if (activeCategory === 'informativo') return item.tipo === 'informativo';
    if (activeCategory === 'retorno') return item.tipo === 'retorno';
    return item.categoria === activeCategory;
  });

  // Render Desktop Grid
  desktopContainer.innerHTML = filtered.map(item => `
    <div class="reel-card-item" data-id="${item.id}">
      <div class="reel-media-box" onclick="openReelModal(${item.id})">
        <img src="${item.poster}" 
             alt="${item.cliente}" 
             class="reel-cover-img" 
             loading="lazy" 
             onerror="this.onerror=null; this.src='${item.fallbackPoster}';">
        <div class="reel-play-overlay">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
        </div>
        <div class="reel-badge-top">
          <span class="reel-views-pill ${item.vistas.includes('ROAS') || item.vistas.includes('M') ? 'blue' : ''}">${item.vistas}</span>
          <span class="reel-category-tag">${item.categoriaLabel}</span>
        </div>
      </div>
      <div class="reel-info-bar">
        <div class="reel-brand-header">
          <img src="${item.logo}" alt="${item.cliente}" class="reel-brand-logo" onerror="this.style.display='none'">
          <div>
            <h3 class="reel-brand-title">${item.cliente}</h3>
            <p class="reel-brand-handle">${item.handle}</p>
          </div>
        </div>
        <p class="reel-card-description">${item.descripcion}</p>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="reel-action-link" onclick="event.stopPropagation();">
          <span>Ver en Instagram</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  // Render Mobile Scroll-Snap Feed
  mobileContainer.innerHTML = filtered.map(item => `
    <div class="mobile-snap-item" data-id="${item.id}">
      <img src="${item.poster}" 
           alt="${item.cliente}" 
           class="mobile-snap-bg" 
           loading="lazy" 
           onerror="this.onerror=null; this.src='${item.fallbackPoster}';">
      <div class="mobile-snap-overlay"></div>
      
      <div class="mobile-snap-header">
        <span class="mobile-pill-views">${item.vistas}</span>
        <div class="mobile-swipe-indicator">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5,12 12,5 19,12"/></svg>
          <span>Desliza</span>
        </div>
      </div>

      <div class="mobile-snap-footer">
        <div class="mobile-author-block">
          <img src="${item.logo}" alt="${item.cliente}" class="mobile-author-img">
          <div>
            <span class="mobile-author-title">${item.cliente}</span>
            <div style="font-size:0.6875rem;opacity:0.8;">${item.handle}</div>
          </div>
        </div>
        <p class="mobile-author-desc">${item.descripcion}</p>
        <div style="display:flex;gap:8px;">
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="mobile-open-btn">
            <span>Ver Reel</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
          <a href="https://wa.me/56999967272?text=Hola%20Santiago,%20vi%20el%20caso%20de%20${encodeURIComponent(item.cliente)}%20y%20quiero%20cotizar." target="_blank" rel="noopener noreferrer" class="mobile-open-btn" style="background:#FFFFFF;color:#111827;">
            <span>Cotizar</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── 2. Filtros de Galería ───────────────────────────────────────────────── */
function initGalleryFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderScalableGallery(filter);
    });
  });
}

/* ── 3. EFECTO 1: Scroll-Morph 3D Gallery Engine ─────────────────────────── */
function initScrollMorphGallery() {
  const stage = document.getElementById('morphCardsStage');
  const viewport = document.getElementById('galeria-3d') || stage;
  if (!stage || !viewport) return;

  const total = Math.min(videosPortafolio.length, 16);
  const items = videosPortafolio.slice(0, total);

  // Inyectar Flip Cards 3D
  stage.innerHTML = items.map((item, i) => `
    <div class="morph-flip-card" id="morphCard_${i}" onclick="openReelModal(${item.id})">
      <div class="morph-card-inner">
        <div class="morph-card-front">
          <img src="${item.poster}" 
               alt="${item.cliente}" 
               onerror="this.onerror=null; this.src='${item.fallbackPoster}';" 
               loading="lazy">
        </div>
        <div class="morph-card-back">
          <span class="morph-badge-text">${item.vistas}</span>
          <span class="morph-brand-text">${item.cliente}</span>
          <span class="morph-action-hint">Ver Reel</span>
        </div>
      </div>
    </div>
  `).join('');

  let scrollProgress = 0.5;
  let mouseXOffset = 0;

  const introText = document.getElementById('morphIntroText');
  const activeText = document.getElementById('morphActiveText');

  const updateCardTransforms = () => {
    const isMobile = window.innerWidth < 768;
    const w = viewport.offsetWidth || 800;
    const h = viewport.offsetHeight || 500;

    const baseRadius = Math.min(w * 0.42, 340);
    const arcRadius = baseRadius * (isMobile ? 1.2 : 1.05);
    const arcCenterY = h * 0.32 + arcRadius;
    const spreadAngle = isMobile ? 100 : 130;
    const startAngle = -90 - (spreadAngle / 2);
    const step = spreadAngle / (total - 1);

    const boundedRotation = (scrollProgress - 0.5) * spreadAngle * 0.8;

    for (let i = 0; i < total; i++) {
      const card = document.getElementById(`morphCard_${i}`);
      if (!card) continue;

      const angleDeg = startAngle + (i * step) + boundedRotation;
      const angleRad = (angleDeg * Math.PI) / 180;

      const x = Math.cos(angleRad) * arcRadius + mouseXOffset;
      const y = Math.sin(angleRad) * arcRadius + arcCenterY - 120;
      const rot = angleDeg + 90;
      const scale = isMobile ? 1.05 : 1.3;

      card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0px) rotate(${rot.toFixed(1)}deg) scale(${scale})`;
    }

    if (introText) introText.style.opacity = scrollProgress > 0.4 ? '0' : '1';
    if (activeText) activeText.style.opacity = scrollProgress > 0.4 ? '1' : '0';
  };

  // Scroll interactivo (Rueda del mouse)
  viewport.addEventListener('wheel', (e) => {
    if ((e.deltaY > 0 && scrollProgress >= 1) || (e.deltaY < 0 && scrollProgress <= 0)) {
      return;
    }
    e.preventDefault();
    scrollProgress = Math.min(Math.max(scrollProgress + e.deltaY * 0.0008, 0), 1);
    updateCardTransforms();
  }, { passive: false });

  // Arrastre con el mouse (Mouse Drag)
  let isDragging = false;
  let startX = 0;
  let startProgress = 0;

  viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startProgress = scrollProgress;
  });

  window.addEventListener('mousemove', (e) => {
    const rect = viewport.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      const normalizedX = (e.clientX - rect.left) / rect.width * 2 - 1;
      mouseXOffset = normalizedX * 30;

      if (isDragging) {
        const deltaX = (e.clientX - startX) / rect.width;
        scrollProgress = Math.min(Math.max(startProgress - deltaX * 1.2, 0), 1);
      }
      updateCardTransforms();
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Gesto táctil (Touch Drag)
  let touchStartX = 0;
  let touchStartProgress = 0;
  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      touchStartX = e.touches[0].clientX;
      touchStartProgress = scrollProgress;
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const rect = viewport.getBoundingClientRect();
      const deltaX = (e.touches[0].clientX - touchStartX) / rect.width;
      scrollProgress = Math.min(Math.max(touchStartProgress - deltaX * 1.2, 0), 1);
      updateCardTransforms();
    }
  }, { passive: true });

  // Sincronización con Scroll de Página
  window.addEventListener('scroll', () => {
    const rect = viewport.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.top < vh && rect.bottom > 0) {
      const p = (vh - rect.top) / (vh + rect.height);
      scrollProgress = Math.min(Math.max(p, 0), 1);
      updateCardTransforms();
    }
  }, { passive: true });

  window.addEventListener('resize', updateCardTransforms);
  setTimeout(updateCardTransforms, 100);
  updateCardTransforms();
}

/* ── 3.1 EFECTO TIMELINE (Aceternity UI Timeline) ────────────────────────── */
function initTimelineProgress() {
  const container = document.getElementById('timelineContainer');
  const beam = document.getElementById('timelineBeamProgress');
  if (!container || !beam) return;

  const handleTimelineScroll = () => {
    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;

    const totalHeight = rect.height;
    const startY = vh * 0.75;
    const scrolled = startY - rect.top;

    let progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
    beam.style.height = (progress * 100).toFixed(1) + '%';

    const items = container.querySelectorAll('.timeline-item');
    items.forEach(item => {
      const nodeCircle = item.querySelector('.timeline-node-circle');
      if (!nodeCircle) return;
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < vh * 0.75) {
        nodeCircle.classList.add('active');
      } else {
        nodeCircle.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', handleTimelineScroll, { passive: true });
  handleTimelineScroll();
}

/* ── 3.2 EFECTO CINEMATIC SCROLL (Scroll-Triggered Video Hero) ───────────── */
function initCinematicScroll() {
  const wrapper = document.getElementById('cinematicStickyWrapper');
  if (!wrapper) return;

  const chapterData = [
    {
      badge: 'CHAPTER 01',
      title: 'Gestión Estratégica de Redes Sociales',
      desc: 'Manejo integral de Instagram y TikTok con foco en arquitectura de marca, posicionamiento de autoridad y construcción de audiencia compradora.',
      chips: ['✅ Auditoría de Cuenta', '✅ Calendario Editorial', '✅ Copywriting Persuasivo', '✅ Optimización de Perfil']
    },
    {
      badge: 'CHAPTER 02',
      title: 'Producción Audiovisual 9:16 (Reels/TikTok)',
      desc: 'Creación de contenido de alto impacto: ganchos narrativos virales en los primeros 2 segundos, rodaje profesional en terreno y edición de ritmo ágil.',
      chips: ['✅ Ganchos Narrativos Virales', '✅ Rodaje 4K en Terreno', '✅ Subtítulos Dinámicos', '✅ Formatos UGC']
    },
    {
      badge: 'CHAPTER 03',
      title: 'Meta Ads & Tráfico de Alto Retorno',
      desc: 'Campañas de adquisición directa, retargeting avanzado y embudos en Shopify diseñados para maximizar el ROAS y rentabilidad comercial.',
      chips: ['✅ Embudos de Conversión', '✅ Creativos de Respuesta Directa', '✅ Optimización de ROAS', '✅ A/B Testing Continuo']
    },
    {
      badge: 'CHAPTER 04',
      title: 'Estrategia 360° & Analítica de ROI',
      desc: 'Auditoría continua de métricas comerciales y optimización en tiempo real para tomar decisiones fundamentadas en facturación y crecimiento sostenible.',
      chips: ['✅ Reportes de Facturación', '✅ Atribución de Ventas', '✅ Escalado de Presupuesto', '✅ Acompañamiento Directo']
    }
  ];

  let currentChapter = -1;

  const handleCinematicScroll = () => {
    const rect = wrapper.getBoundingClientRect();
    const vh = window.innerHeight;

    const totalDist = rect.height - vh;
    if (totalDist <= 0) return;

    const scrolled = -rect.top;
    const progress = Math.min(Math.max(scrolled / totalDist, 0), 1);

    const chapterIdx = Math.min(Math.floor(progress * 4), 3);

    const fill = document.getElementById('chapterProgressFill');
    if (fill) fill.style.width = (progress * 100).toFixed(1) + '%';

    const textCount = document.getElementById('chapterCountText');
    if (textCount) textCount.textContent = `Capítulo ${chapterIdx + 1} / 4`;

    if (chapterIdx !== currentChapter) {
      currentChapter = chapterIdx;

      const navItems = wrapper.querySelectorAll('.chapter-nav-item');
      navItems.forEach((nav, idx) => {
        if (idx === chapterIdx) nav.classList.add('active');
        else nav.classList.remove('active');
      });

      const data = chapterData[chapterIdx];
      const badgeEl = document.getElementById('chapterBadge');
      const titleEl = document.getElementById('chapterTitle');
      const descEl = document.getElementById('chapterDesc');
      const chipsEl = document.getElementById('chapterChips');

      if (badgeEl) badgeEl.textContent = data.badge;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (chipsEl) {
        chipsEl.innerHTML = data.chips.map(chip => `<span class="chip-item">${chip}</span>`).join('');
      }

      const layers = wrapper.querySelectorAll('.cinematic-media-layer');
      layers.forEach((layer, idx) => {
        if (idx === chapterIdx) layer.classList.add('active');
        else layer.classList.remove('active');
      });
    }
  };

  const navItems = wrapper.querySelectorAll('.chapter-nav-item');
  navItems.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
      const vh = window.innerHeight;
      const totalDist = wrapper.getBoundingClientRect().height - vh;
      const targetScroll = wrapper.offsetTop + (idx / 4) * totalDist + 50;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', handleCinematicScroll, { passive: true });
  handleCinematicScroll();
}

/* ── 4. EFECTO 2: Robot 3D Companion (Three.js) ──────────────────────────── */
function initRobotCompanion() {
  const container = document.getElementById('robotCanvasContainer');
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth || 400;
  const height = container.clientHeight || 360;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#FFFFFF');

  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(0, 0.2, 3.8);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  // Iluminación
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x2563eb, 1.2);
  dirLight.position.set(2, 4, 3);
  scene.add(dirLight);

  const fillLight = new THREE.DirectionalLight(0x0284c7, 0.6);
  fillLight.position.set(-3, -1, 2);
  scene.add(fillLight);

  // Robot Group
  const robotGroup = new THREE.Group();
  scene.add(robotGroup);

  // Cuerpo
  const bodyGeo = new THREE.SphereGeometry(0.55, 32, 32);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x1E293B,
    roughness: 0.3,
    metalness: 0.2
  });
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  bodyMesh.position.y = -0.35;
  robotGroup.add(bodyMesh);

  // Cabeza
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.5, 0);
  robotGroup.add(headGroup);

  const headGeo = new THREE.SphereGeometry(0.38, 32, 32);
  const headMat = new THREE.MeshStandardMaterial({
    color: 0x0F172A,
    roughness: 0.2,
    metalness: 0.4
  });
  const headMesh = new THREE.Mesh(headGeo, headMat);
  headGroup.add(headMesh);

  // Visor Pantalla Azul
  const visorGeo = new THREE.SphereGeometry(0.39, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.45);
  const visorMat = new THREE.MeshStandardMaterial({
    color: 0x2563EB,
    roughness: 0.1,
    transparent: true,
    opacity: 0.85
  });
  const visorMesh = new THREE.Mesh(visorGeo, visorMat);
  visorMesh.rotation.x = Math.PI * 0.28;
  headGroup.add(visorMesh);

  // Ojos LED Celestes
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x38BDF8 });
  const eyeLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.01, 16), eyeMat);
  eyeLeft.position.set(-0.12, 0.04, 0.37);
  eyeLeft.rotation.x = Math.PI / 2;
  headGroup.add(eyeLeft);

  const eyeRight = eyeLeft.clone();
  eyeRight.position.x = 0.12;
  headGroup.add(eyeRight);

  // Antena
  const antStick = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.16, 8), bodyMat);
  antStick.position.set(0, 0.44, 0);
  headGroup.add(antStick);

  const antTip = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 16), new THREE.MeshBasicMaterial({ color: 0x2563EB }));
  antTip.position.set(0, 0.52, 0);
  headGroup.add(antTip);

  // Mouse Tracking & Click Reacción
  let targetRotX = 0;
  let targetRotY = 0;
  let isLoved = false;

  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    targetRotY = THREE.MathUtils.clamp(x * 0.6, -0.7, 0.7);
    targetRotX = THREE.MathUtils.clamp(y * 0.4, -0.4, 0.4);
  });

  container.addEventListener('click', () => {
    isLoved = true;
    eyeMat.color.setHex(0xEC4899); // Corazón rosa
    antTip.material.color.setHex(0xEC4899);
    setTimeout(() => {
      isLoved = false;
      eyeMat.color.setHex(0x38BDF8); // Vuelve a azul
      antTip.material.color.setHex(0x2563EB);
    }, 2200);
  });

  const animate = () => {
    requestAnimationFrame(animate);

    // Smooth Lerp
    robotGroup.rotation.y = THREE.MathUtils.lerp(robotGroup.rotation.y, targetRotY, 0.08);
    robotGroup.rotation.x = THREE.MathUtils.lerp(robotGroup.rotation.x, targetRotX, 0.08);

    // Flotación suave
    robotGroup.position.y = Math.sin(Date.now() * 0.002) * 0.06;

    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', () => {
    const nw = container.clientWidth;
    const nh = container.clientHeight;
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    renderer.setSize(nw, nh);
  });
}

/* ── 5. Modal de Video (Lazy Iframe / Preview) ────────────────────────────── */
function openReelModal(id) {
  const item = videosPortafolio.find(v => v.id === id);
  if (!item) return;

  const modal = document.getElementById('videoModal');
  if (!modal) return;

  document.getElementById('modalCategory').textContent = item.categoriaLabel;
  document.getElementById('modalTitle').textContent = item.cliente;
  document.getElementById('modalHandle').textContent = item.handle;
  document.getElementById('modalStat1').textContent = item.vistas;
  document.getElementById('modalStat2').textContent = item.isTopViral ? 'Top Viral' : (item.tipo === 'retorno' ? 'Alto Retorno' : 'Informativo');
  document.getElementById('modalQuote').textContent = `"${item.descripcion}"`;

  const externalBtn = document.getElementById('modalExternalLink');
  if (externalBtn) externalBtn.href = item.url;

  const mediaBox = document.getElementById('modalMediaBox');
  if (mediaBox) {
    mediaBox.innerHTML = `
      <div style="position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#0F172A;overflow:hidden;">
        <img src="${item.poster}" 
             alt="${item.cliente}" 
             onerror="this.onerror=null; this.src='${item.fallbackPoster}';" 
             style="width:100%;height:100%;object-fit:cover;opacity:0.85;">
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="position:absolute;z-index:10;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
          <span>Reproducir en Instagram</span>
        </a>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const mediaBox = document.getElementById('modalMediaBox');
    if (mediaBox) mediaBox.innerHTML = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ── 6. Contadores de Métricas ──────────────────────────────────────────── */
function initCounters() {
  const els = document.querySelectorAll('.counter');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const decimals = parseInt(el.dataset.decimals || '0');
      const duration = 1600;
      const steps = 50;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        const t = step / steps;
        const ease = 1 - Math.pow(1 - t, 3);
        const val = target * ease;
        el.textContent = decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString();
        if (step >= steps) {
          clearInterval(interval);
          el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
        }
      }, duration / steps);

      obs.unobserve(el);
    });
  }, { threshold: 0.3 });

  els.forEach(el => io.observe(el));
}

/* ── 7. Expanding Cards ─────────────────────────────────────────────────── */
function initExpandingCards() {
  const cards = document.querySelectorAll('.expanding-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

/* ── 8. Menú Móvil ──────────────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.top = '72px';
    menu.style.left = '0';
    menu.style.right = '0';
    menu.style.background = '#FFFFFF';
    menu.style.padding = '24px';
    menu.style.borderBottom = '1px solid #E2E8F0';
    menu.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.05)';
  });
}

/* ── 9. Chat Widget Corporativo con Opciones Interactivas ───────────────── */
function initChatWidget() {
  const messages = document.getElementById('chatMessages');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSendBtn');
  const replayBtn = document.getElementById('chatReplayBtn');
  if (!messages) return;

  let started = false;
  let chatTimeouts = [];

  const clearTimeouts = () => {
    chatTimeouts.forEach(t => clearTimeout(t));
    chatTimeouts = [];
  };

  const showTyping = () => {
    removeTyping();
    const typing = document.createElement('div');
    typing.className = 'chat-bubble bot';
    typing.id = 'chatTyping';
    typing.innerHTML = '<span style="opacity:0.6;font-size:0.75rem;">Santiago está escribiendo...</span>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
  };

  const removeTyping = () => {
    const typing = document.getElementById('chatTyping');
    if (typing) typing.remove();
  };

  const appendMsg = (text, type = 'bot') => {
    removeTyping();
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${type}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  };

  const appendOptions = (options) => {
    const group = document.createElement('div');
    group.className = 'chat-options-group';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chat-option-btn';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        group.remove();
        appendMsg(opt.label, 'user');
        showTyping();
        setTimeout(() => {
          opt.action();
        }, 800);
      });
      group.appendChild(btn);
    });
    messages.appendChild(group);
    messages.scrollTop = messages.scrollHeight;
  };

  const runFlow = () => {
    clearTimeouts();
    messages.innerHTML = '';

    chatTimeouts.push(setTimeout(() => {
      showTyping();
    }, 300));

    chatTimeouts.push(setTimeout(() => {
      appendMsg('Hola. Soy Santiago Cerda, especialista en Growth Marketing y producción audiovisual de alta conversión.');
    }, 1200));

    chatTimeouts.push(setTimeout(() => {
      showTyping();
    }, 1800));

    chatTimeouts.push(setTimeout(() => {
      appendMsg('¿Qué objetivo buscas alcanzar con tu marca actualmente?');
      appendOptions([
        {
          label: 'Escalar ventas con Meta Ads',
          action: () => {
            appendMsg('Excelente. Con embudos de conversión y creativos UGC hemos alcanzado ROAS de hasta ×5.41.');
            setTimeout(() => {
              appendMsg('Conversemos directamente por WhatsApp para analizar tu negocio:');
              const link = document.createElement('a');
              link.href = 'https://wa.me/56999967272?text=Hola%20Santiago,%20quiero%20escalar%20ventas%20con%20Meta%20Ads.';
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.className = 'btn btn-primary';
              link.style.cssText = 'margin-top:8px;font-size:0.75rem;padding:8px 14px;';
              link.textContent = 'Contactar por WhatsApp';
              messages.appendChild(link);
              messages.scrollTop = messages.scrollHeight;
            }, 600);
          }
        },
        {
          label: 'Producción audiovisual 9:16 (Reels/TikTok)',
          action: () => {
            appendMsg('Perfecto. Con más de 29.5M de vistas generadas, ideamos y editamos videos dinámicos diseñados para retener y viralizar.');
            setTimeout(() => {
              appendMsg('Escríbeme para coordinar un plan de contenido:');
              const link = document.createElement('a');
              link.href = 'https://wa.me/56999967272?text=Hola%20Santiago,%20quiero%20producir%20videos%209:16.';
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.className = 'btn btn-primary';
              link.style.cssText = 'margin-top:8px;font-size:0.75rem;padding:8px 14px;';
              link.textContent = 'Contactar por WhatsApp';
              messages.appendChild(link);
              messages.scrollTop = messages.scrollHeight;
            }, 600);
          }
        },
        {
          label: 'Cotizar plan integral 360',
          action: () => {
            appendMsg('Incluye gestión de redes, grabación en terreno, edición estratégica y pauta publicitaria.');
            setTimeout(() => {
              const link = document.createElement('a');
              link.href = 'https://wa.me/56999967272?text=Hola%20Santiago,%20quiero%20cotizar%20un%20plan%20integral.';
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              link.className = 'btn btn-primary';
              link.style.cssText = 'margin-top:8px;font-size:0.75rem;padding:8px 14px;';
              link.textContent = 'Agendar Reunión';
              messages.appendChild(link);
              messages.scrollTop = messages.scrollHeight;
            }, 600);
          }
        }
      ]);
    }, 2500));
  };

  const handleSend = () => {
    const val = input.value.trim();
    if (!val) return;
    input.value = '';
    appendMsg(val, 'user');
    showTyping();
    setTimeout(() => {
      appendMsg('Recibido. Conversemos directamente por WhatsApp para entregarte una propuesta personalizada:');
      const btn = document.createElement('a');
      btn.href = `https://wa.me/56999967272?text=Hola%20Santiago,%20vi%20tu%20portafolio:%20${encodeURIComponent(val)}`;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.className = 'btn btn-primary';
      btn.style.cssText = 'margin-top:8px;font-size:0.75rem;padding:8px 14px;';
      btn.textContent = 'Abrir WhatsApp (+56 9 9996 7272)';
      messages.appendChild(btn);
      messages.scrollTop = messages.scrollHeight;
    }, 900);
  };

  if (sendBtn) sendBtn.addEventListener('click', handleSend);
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }
  if (replayBtn) replayBtn.addEventListener('click', runFlow);

  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      runFlow();
    }
  }, { threshold: 0.25 });

  const widget = document.getElementById('chatWidget');
  if (widget) io.observe(widget);
}
