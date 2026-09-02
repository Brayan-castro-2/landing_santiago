/**
 * Santiago Cerda — Portfolio Engine (SaaS Clean + 3D Scroll Morph + 3D Robot)
 * Base de Datos Oficial de Reels Intercalada por Variedad y Selector de Empresa
 */

/* ── BASE DE DATOS DE REELS CON SHORTCODES OFICIALES & MINIATURAS REALES ─────────── */
const videosPortafolio = [
  /* ── 1. MAKI AÇAÍ #1 (Top Viral 6.7M) ── */
  {
    id: 1,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DZU8b7Fx95j",
    categoria: "gastronomia",
    tipo: "viral",
    categoriaLabel: "Gastronomía",
    titulo: "Estrategia Viral de Delivery (6.7M Vistas)",
    descripcion: "Récord histórico de reproducciones y retención promedio. Clave en el salto de 0 a 220K seguidores.",
    vistas: "6.7M Vistas",
    url: "https://www.instagram.com/reel/DZU8b7Fx95j/",
    poster: "thumb_DZU8b7Fx95j.jpg",
    fallbackPoster: "thumb_DZU8b7Fx95j.jpg",
    isTopViral: true,
    isHeroSpotlight: true
  },

  /* ── 2. ALGO MARKET #1 (Reel Estrella +40K Fans / 700K Vistas) ── */
  {
    id: 6,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DbV-JTdMa9t",
    categoria: "retail",
    tipo: "retorno",
    categoriaLabel: "Retail",
    titulo: "Reel Estrella (+40K Nuevos Seguidores)",
    descripcion: "700.000 visitas y 19s de retención promedio. El video que escaló la cuenta de 11K a 75K seguidores.",
    vistas: "700K • +40K Fans",
    url: "https://www.instagram.com/reel/DbV-JTdMa9t/",
    poster: "thumb_DbV-JTdMa9t.jpg",
    fallbackPoster: "thumb_DbV-JTdMa9t.jpg",
    isTopViral: true,
    isHeroSpotlight: true
  },

  /* ── 3. HOTEL GRAN PACÍFICO #1 (Top Viral 4.2M Vistas) ── */
  {
    id: 14,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DZ-LYP7uPvo",
    categoria: "hoteleria",
    tipo: "viral",
    categoriaLabel: "Hotelería",
    titulo: "Experiencia Turística Inmersiva",
    descripcion: "Alcanzó más de 4.2M de reproducciones e impulsó un 98% de ocupación en reservas directas.",
    vistas: "4.2M Vistas",
    url: "https://www.instagram.com/reel/DZ-LYP7uPvo/",
    poster: "thumb_DZ-LYP7uPvo.jpg",
    fallbackPoster: "thumb_DZ-LYP7uPvo.jpg",
    isTopViral: true,
    isHeroSpotlight: true
  },

  /* ── 4. VITANOVA CL #1 (Meta Ads ROAS ×5.41) ── */
  {
    id: 21,
    cliente: "VitaNovaCL",
    logo: "logo-vitanova.jpg",
    handle: "@vitanovacl",
    shortcode: "DW_2QCrjg55",
    categoria: "ecommerce",
    tipo: "retorno",
    categoriaLabel: "E-Commerce",
    titulo: "Campaña Meta Ads ROAS ×5.41",
    descripcion: "Inversión de $656,36 USD con pautas de ROAS 5.41, 4.03 y 3.27 en Shopify.",
    vistas: "ROAS ×5.41",
    url: "https://www.instagram.com/reel/DW_2QCrjg55/",
    poster: "thumb_DW_2QCrjg55.jpg",
    fallbackPoster: "thumb_DW_2QCrjg55.jpg",
    isTopViral: true,
    isHeroSpotlight: true
  },

  /* ── 5. MAKI AÇAÍ #2 (1.6M Vistas Mayor Retorno) ── */
  {
    id: 2,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DZ-WKQdRLce",
    categoria: "gastronomia",
    tipo: "retorno",
    categoriaLabel: "Gastronomía",
    titulo: "Campaña de Frecuencia & Retorno Directo",
    descripcion: "Destacado por el volumen de nuevos seguidores y pedidos directos en Santiago sin pauta.",
    vistas: "1.6M Vistas",
    url: "https://www.instagram.com/reel/DZ-WKQdRLce/",
    poster: "thumb_DZ-WKQdRLce.jpg",
    fallbackPoster: "thumb_DZ-WKQdRLce.jpg",
    isTopViral: true
  },

  /* ── 6. ALGO MARKET #2 (700K Vistas Pasillos) ── */
  {
    id: 7,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DY2ZiR8uC24",
    categoria: "retail",
    tipo: "viral",
    categoriaLabel: "Retail",
    titulo: "Crecimiento Orgánico en Pasillos",
    descripcion: "Humor y tendencias en góndolas con alta conversión a tienda física.",
    vistas: "700K Vistas",
    url: "https://www.instagram.com/reel/DY2ZiR8uC24/",
    poster: "thumb_DY2ZiR8uC24.jpg",
    fallbackPoster: "thumb_DY2ZiR8uC24.jpg",
    isTopViral: true
  },

  /* ── 7. HOTEL GRAN PACÍFICO #2 (1.2M Vistas Gastronomía) ── */
  {
    id: 15,
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
    poster: "thumb_DRz4mDHD9ej.jpg",
    fallbackPoster: "thumb_DRz4mDHD9ej.jpg",
    isTopViral: true
  },

  /* ── 8. VITANOVA CL #2 (Informativo Tutorial) ── */
  {
    id: 22,
    cliente: "VitaNovaCL",
    logo: "logo-vitanova.jpg",
    handle: "@vitanovacl",
    shortcode: "DXKhHPPCSAX",
    categoria: "ecommerce",
    tipo: "informativo",
    categoriaLabel: "E-Commerce",
    titulo: "¿Cómo usar tu producto paso a paso?",
    descripcion: "Tutorial de uso y eliminación de dudas antes de la compra.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DXKhHPPCSAX/",
    poster: "thumb_DXKhHPPCSAX.jpg",
    fallbackPoster: "thumb_DXKhHPPCSAX.jpg"
  },

  /* ── 9. MAKI AÇAÍ #3 (Informativo Preparación) ── */
  {
    id: 3,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DZm9WIlRGzp",
    categoria: "gastronomia",
    tipo: "informativo",
    categoriaLabel: "Gastronomía",
    titulo: "¿Cómo se prepara el auténtico Açaí?",
    descripcion: "Contenido educativo de alta retención sobre ingredientes y elaboración artesanal.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DZm9WIlRGzp/",
    poster: "thumb_DZm9WIlRGzp.jpg",
    fallbackPoster: "thumb_DZm9WIlRGzp.jpg"
  },

  /* ── 10. ALGO MARKET #3 (540K Vistas Snacks) ── */
  {
    id: 8,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DWy6d51jqJX",
    categoria: "retail",
    tipo: "viral",
    categoriaLabel: "Retail",
    titulo: "Tendencias & Snacks Virales de Importación",
    descripcion: "Presentación de novedades de Japón y USA con alto ratio de compartidos.",
    vistas: "540K Vistas",
    url: "https://www.instagram.com/reel/DWy6d51jqJX/",
    poster: "thumb_DWy6d51jqJX.jpg",
    fallbackPoster: "thumb_DWy6d51jqJX.jpg",
    isTopViral: true
  },

  /* ── 11. HOTEL GRAN PACÍFICO #3 (890K Vistas Habitaciones) ── */
  {
    id: 16,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DP6zAVDjDHE",
    categoria: "hoteleria",
    tipo: "viral",
    categoriaLabel: "Hotelería",
    titulo: "Habitaciones con Vista Panorámica",
    descripcion: "Gancho visual en los primeros 2 segundos para captar turistas en el sur.",
    vistas: "890K Vistas",
    url: "https://www.instagram.com/reel/DP6zAVDjDHE/",
    poster: "thumb_DP6zAVDjDHE.jpg",
    fallbackPoster: "thumb_DP6zAVDjDHE.jpg"
  },

  /* ── 12. VITANOVA CL #3 (Informativo Despachos) ── */
  {
    id: 23,
    cliente: "VitaNovaCL",
    logo: "logo-vitanova.jpg",
    handle: "@vitanovacl",
    shortcode: "DXWpF8-EXap",
    categoria: "ecommerce",
    tipo: "informativo",
    categoriaLabel: "E-Commerce",
    titulo: "Preguntas Frecuentes & Despachos",
    descripcion: "Eliminación de objeciones de compra en la pauta digital.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DXWpF8-EXap/",
    poster: "thumb_DXWpF8-EXap.jpg",
    fallbackPoster: "thumb_DXWpF8-EXap.jpg"
  },

  /* ── 13. MAKI AÇAÍ #4 (Informativo Nutricional) ── */
  {
    id: 4,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DZFjKP1Rn8o",
    categoria: "gastronomia",
    tipo: "informativo",
    categoriaLabel: "Gastronomía",
    titulo: "Beneficios Nutricionales del Açaí Puro",
    descripcion: "Educación de producto para clientes fitness y posicionamiento saludable.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DZFjKP1Rn8o/",
    poster: "thumb_DZFjKP1Rn8o.jpg",
    fallbackPoster: "thumb_DZFjKP1Rn8o.jpg"
  },

  /* ── 14. ALGO MARKET #4 (410K Vistas Storytelling) ── */
  {
    id: 9,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DUiW75ODle8",
    categoria: "retail",
    tipo: "viral",
    categoriaLabel: "Retail",
    titulo: "Experiencia de Compra & Storytelling",
    descripcion: "Storytelling visual que conecta con el público joven de Santiago.",
    vistas: "410K Vistas",
    url: "https://www.instagram.com/reel/DUiW75ODle8/",
    poster: "thumb_DUiW75ODle8.jpg",
    fallbackPoster: "thumb_DUiW75ODle8.jpg",
    isTopViral: true
  },

  /* ── 15. HOTEL GRAN PACÍFICO #4 (Informativo Actividades) ── */
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
    descripcion: "Recomendaciones turísticas locales para huéspedes.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DWhWtBvjxef/",
    poster: "thumb_DWhWtBvjxef.jpg",
    fallbackPoster: "thumb_DWhWtBvjxef.jpg"
  },

  /* ── 16. MAKI AÇAÍ #5 (Informativo Toppings) ── */
  {
    id: 5,
    cliente: "Maki Açaí",
    logo: "logo-maki-acai.jpg",
    handle: "@makiacai.cl",
    shortcode: "DavYt7gOV--",
    categoria: "gastronomia",
    tipo: "informativo",
    categoriaLabel: "Gastronomía",
    titulo: "Guía de Toppings y Combinaciones",
    descripcion: "Formato dinámico para personalizar bowls e incentivar la compra cruzada.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DavYt7gOV--/",
    poster: "thumb_DavYt7gOV__.jpg",
    fallbackPoster: "thumb_DavYt7gOV__.jpg"
  },

  /* ── 17. ALGO MARKET #5 (Informativo Novedades) ── */
  {
    id: 10,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DaQTEwOOUAy",
    categoria: "retail",
    tipo: "informativo",
    categoriaLabel: "Retail",
    titulo: "Tour de Novedades Semanales",
    descripcion: "Recorrido dinámico por las nuevas llegadas de stock importado.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DaQTEwOOUAy/",
    poster: "thumb_DaQTEwOOUAy.jpg",
    fallbackPoster: "thumb_DaQTEwOOUAy.jpg"
  },

  /* ── 18. HOTEL GRAN PACÍFICO #5 (Informativo Salones B2B) ── */
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
    poster: "thumb_DTdk_bIDJI4.jpg",
    fallbackPoster: "thumb_DTdk_bIDJI4.jpg"
  },

  /* ── 19. ALGO MARKET #6 (Informativo Importados) ── */
  {
    id: 11,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DNbJb_0sWXt",
    categoria: "retail",
    tipo: "informativo",
    categoriaLabel: "Retail",
    titulo: "Productos Importados que no conocías",
    descripcion: "Descubrimiento de productos virales de alta rotación.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DNbJb_0sWXt/",
    poster: "thumb_DNbJb_0sWXt.jpg",
    fallbackPoster: "thumb_DNbJb_0sWXt.jpg"
  },

  /* ── 20. HOTEL GRAN PACÍFICO #6 (Informativo Restaurante Gourmet) ── */
  {
    id: 19,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DTa0_NRjlVM",
    categoria: "hoteleria",
    tipo: "informativo",
    categoriaLabel: "Hotelería",
    titulo: "Experiencia Gourmet Frente al Mar",
    descripcion: "Gastronomía marina y coctelería de autor del restaurante del hotel.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DTa0_NRjlVM/",
    poster: "thumb_DTa0_NRjlVM.jpg",
    fallbackPoster: "thumb_DTa0_NRjlVM.jpg"
  },

  /* ── 21. ALGO MARKET #7 (Informativo Sucursales) ── */
  {
    id: 12,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DTA8dFwDMd1",
    categoria: "retail",
    tipo: "informativo",
    categoriaLabel: "Retail",
    titulo: "Cómo llegar a nuestras sucursales",
    descripcion: "Geolocalización visual para tráfico directo a tiendas físicas.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DTA8dFwDMd1/",
    poster: "thumb_DTA8dFwDMd1.jpg",
    fallbackPoster: "thumb_DTA8dFwDMd1.jpg"
  },

  /* ── 22. HOTEL GRAN PACÍFICO #7 (Informativo Escape de Fin de Semana) ── */
  {
    id: 20,
    cliente: "Hotel Gran Pacífico",
    logo: "logo-hotel-gran-pacifico.jpg",
    handle: "@granpacificohotel",
    shortcode: "DRAVS8cjxof",
    categoria: "hoteleria",
    tipo: "informativo",
    categoriaLabel: "Hotelería",
    titulo: "Escape de Fin de Semana en el Sur",
    descripcion: "Propuesta de valor para turismo regional y escapadas en pareja.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DRAVS8cjxof/",
    poster: "thumb_DRAVS8cjxof.jpg",
    fallbackPoster: "thumb_DRAVS8cjxof.jpg"
  },

  /* ── 23. ALGO MARKET #8 (Informativo Ranking Bebidas) ── */
  {
    id: 13,
    cliente: "Algo Market",
    logo: "logo-algo-market.jpg",
    handle: "@algo_market_chile",
    shortcode: "DWCbg8bkf4T",
    categoria: "retail",
    tipo: "informativo",
    categoriaLabel: "Retail",
    titulo: "Top 5 Bebidas Virales",
    descripcion: "Formato ranking de alta retención para público joven.",
    vistas: "Informativo",
    url: "https://www.instagram.com/reel/DWCbg8bkf4T/",
    poster: "thumb_DWCbg8bkf4T.jpg",
    fallbackPoster: "thumb_DWCbg8bkf4T.jpg"
  }
];

/* ── MODAL VISOR DE EVIDENCIA EN ALTA RESOLUCIÓN ─────────────────────────── */
function openEvidenceModal(imgSrc, title) {
  const modal = document.getElementById('evidenceModal');
  const imgEl = document.getElementById('evidenceModalImg');
  const titleEl = document.getElementById('evidenceModalTitle');
  if (!modal || !imgEl) return;

  imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title || 'Evidencia de Métricas Verificadas';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEvidenceModal() {
  const modal = document.getElementById('evidenceModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ── FILTRO RÁPIDO POR EMPRESA ───────────────────────────────────────────── */
function filterByCompany(companyName) {
  const filterBtns = document.querySelectorAll('#casesFilterBar .filter-btn');
  filterBtns.forEach(btn => {
    if (btn.dataset.filter.toLowerCase() === companyName.toLowerCase()) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderScalableGallery(companyName, true);
  
  const modal = document.getElementById('videoModal');
  if (modal && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  const casesSection = document.getElementById('casos');
  if (casesSection) {
    casesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

window.openEvidenceModal = openEvidenceModal;
window.closeEvidenceModal = closeEvidenceModal;
window.filterByCompany = filterByCompany;

/* ── CMS: Carga de datos desde API (/api/data) ────────────────────────── */
function cmsGetNested(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
}

async function loadSiteData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) return;
    const data = await res.json();

    // Inyectar textos simples via data-cms
    document.querySelectorAll('[data-cms]').forEach(el => {
      const val = cmsGetNested(data, el.dataset.cms);
      if (val && typeof val === 'string') el.textContent = val;
    });

    // Inyectar imágenes simples via data-cms-img
    document.querySelectorAll('[data-cms-img]').forEach(el => {
      let val = cmsGetNested(data, el.dataset.cmsImg);
      if (val && typeof val === 'string') {
        if (val.includes('imaen santiago')) val = 'santi sin ia.png?v=2';
        el.src = val;
      }
    });

    // Inyectar reveal cards del hero
    if (data.hero && data.hero.reveal_cards) {
      const cards = document.querySelectorAll('.prisma-reveal-card');
      data.hero.reveal_cards.forEach((card, i) => {
        if (cards[i]) {
          const numEl = cards[i].querySelector('.prisma-reveal-num');
          const titleEl = cards[i].querySelector('.prisma-reveal-title');
          const descEl = cards[i].querySelector('.prisma-reveal-desc');
          if (numEl) numEl.textContent = card.num;
          if (titleEl) titleEl.textContent = card.title;
          if (descEl) descEl.textContent = card.desc;
        }
      });
    }

    // Inyectar testimonios dinámicos
    if (data.testimonials && data.testimonials.length > 0) {
      const grid = document.querySelector('.testimonials-grid');
      if (grid) {
        grid.innerHTML = data.testimonials.map(t => `
          <div class="testimonial-card">
            <div class="stars-row">${'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>'.repeat(5)}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
              <img src="${t.avatar}" alt="${t.name}" class="author-avatar">
              <div>
                <div class="author-name">${t.name}</div>
                <div class="author-role">${t.role}</div>
              </div>
            </div>
          </div>`).join('');
      }
    }

    // Inyectar Reels dinámicamente
    if (data.reels && Array.isArray(data.reels)) {
      window.videosPortafolio = data.reels;
    }

    // Inyectar Servicios (Cinematic Scroll) dinámicamente
    if (data.services && data.services.length > 0) {
      const navTrack = document.querySelector('.chapter-nav-track');
      const frame = document.querySelector('.cinematic-screen-frame');
      
      if (navTrack && frame) {
        navTrack.innerHTML = '';
        
        // Mantener barra de control existente
        const footer = frame.querySelector('.screen-controls-footer');
        frame.innerHTML = '';

        data.services.forEach((s, i) => {
          // Nav Items
          navTrack.innerHTML += `
            <div class="chapter-nav-item ${i === 0 ? 'active' : ''}" data-chapter="${i}">
              <span class="chapter-num">0${i + 1}</span>
              <span class="chapter-label">${s.menuTitle}</span>
            </div>`;
            
          // Media Layers
          frame.innerHTML += `
            <div class="cinematic-media-layer ${i === 0 ? 'active' : ''}" data-layer="${i}">
              <img src="${s.img}" alt="${s.menuTitle}">
              <div class="screen-overlay-gradient"></div>
              <div class="screen-caption-badge">
                <span>${s.imgBadge}</span>
              </div>
            </div>`;
        });
        
        if (footer) frame.appendChild(footer);
        
        // Export data for initCinematicScroll to use
        window.dynamicChaptersData = data.services;
      }
    }

    // Métricas Reales: Preservar el HTML estático curado de index.html (fiel a los datos del cliente)

    console.log('CMS: Datos cargados correctamente');
  } catch (e) {
    console.warn('CMS: API no disponible, usando datos estáticos del HTML.', e);
  }
}

const initApp = async () => {
  const safeInit = (fn, name) => { try { fn(); } catch(e) { console.warn('Init error in ' + name + ':', e); } };
  // CMS: cargar datos remotos (esperamos a que termine para inyectar DOM dinámico)
  await loadSiteData();
  
  safeInit(initPrismHero, 'PrismHero');
  safeInit(initStickyNavbar, 'StickyNavbar');
  safeInit(initScrollMorphGallery, 'ScrollMorphGallery');
  safeInit(() => renderScalableGallery('all', false), 'ScalableGallery');
  safeInit(initGalleryFilters, 'GalleryFilters');
  safeInit(initCounters, 'Counters');
  safeInit(initExpandingCards, 'ExpandingCards');
  safeInit(initVideoModal, 'VideoModal');
  safeInit(initMobileMenu, 'MobileMenu');
  safeInit(initChatWidget, 'ChatWidget');
  safeInit(initTimelineProgress, 'TimelineProgress');
  safeInit(initCinematicScroll, 'CinematicScroll');
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* ── 0.0 PRISMA CONFIGURATION & CALIBRATION ENGINE ───────────────────────── */
window.PRISMA_CFG = {
  scrollHeight: 320,  // vh
  loopMin: 0.01,      // seg
  loopMax: 1.20,      // seg
  loopSpeed: 0.024,   // velocidad senoidal
  stage2Time: 3.00,   // seg de cambio de titular
  revealStart: 0.88,  // ratio de scroll (0-1)
  lanternSize: 520,   // px ampliado y suave
  darkOverlay: 0.40,  // opacidad 0-1
  userManualSeek: null // si el usuario arrastra el slider manual de tiempo
};

/* ── 0.0 PRISMA HERO: 60/120FPS CANVAS FRAME BUFFER & MOUSE REVEAL ENGINE ─ */
function initPrismHero() {
  const section     = document.getElementById('hero-prisma');
  const pinned      = document.getElementById('prismaHeroPinned');
  const video       = document.getElementById('prismaVideo');
  const canvas      = document.getElementById('prismaCanvas');
  const overlay     = document.querySelector('.prisma-video-overlay');
  const phase1      = document.getElementById('prismaPhase1');
  const phase2      = document.getElementById('prismaPhase2');
  const phase3      = document.getElementById('prismaPhase3');
  const revealStage = document.getElementById('prismaRevealStage');
  const mouseLight  = document.getElementById('prismaMouseLight');
  const maskedCont  = document.getElementById('prismaMaskedContent');
  const scrollFill  = document.getElementById('prismaScrollFill');
  const scrollLabel = document.getElementById('prismaScrollLabel');

  if (!section || !video || !canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });

  // 1. Setup Canvas Sizing with Retina Resolution
  const resizeCanvas = () => {
    canvas.width  = window.innerWidth * Math.min(window.devicePixelRatio, 1.5);
    canvas.height = window.innerHeight * Math.min(window.devicePixelRatio, 1.5);
  };
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Utility: detect mobile viewport
  const isMobileView = () => window.innerWidth <= 768;

  // 2. Setup Video with Hardware Direct Rendering (Instant 0s load)
  const currentVideoSrc = isMobileView() ? 'hero-prisma-video-mobile.mp4' : 'hero-prisma-video.mp4';
  if (!video.src || !video.src.includes(currentVideoSrc)) {
    video.src = currentVideoSrc;
  }

  video.muted       = true;
  video.playsInline = true;
  video.preload     = 'auto';
  video.loop        = true;
  video.play().catch(e => console.warn("Autoplay waiting for interaction", e));

  let duration = 10.0;
  let currentTimeSec = 0;
  let isSeeking = false;
  let pendingTime = null;

  const onMeta = () => {
    duration = video.duration || 10.0;
  };
  video.addEventListener('loadedmetadata', onMeta);
  if (video.readyState >= 1) onMeta();

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  const smoothstep = (min, max, value) => {
    const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
  };

  // Direct High-Performance Seek for Main Video during scroll
  const requestVideoTime = (targetSec) => {
    if (Math.abs(video.currentTime - targetSec) < 0.03) return;
    if (isSeeking) {
      pendingTime = targetSec;
      return;
    }
    isSeeking = true;
    if ('fastSeek' in video) {
      video.fastSeek(targetSec);
    } else {
      video.currentTime = targetSec;
    }
  };

  video.addEventListener('seeked', () => {
    isSeeking = false;
    if (pendingTime !== null) {
      const nextTime = pendingTime;
      pendingTime = null;
      requestVideoTime(nextTime);
    }
  });

  // Direct Instant GPU Canvas Drawing (Live Video without seek overhead)
  const drawCurrentVideoDirect = () => {
    currentTimeSec = video.currentTime;
    if (video.readyState >= 1) {
      const isMob = isMobileView();
      const vW = video.videoWidth > 0 ? video.videoWidth : (isMob ? 1080 : 1920);
      const vH = video.videoHeight > 0 ? video.videoHeight : (isMob ? 1920 : 1080);
      const hRatio = canvas.width / vW;
      const vRatio = canvas.height / vH;
      const ratio  = Math.max(hRatio, vRatio);
      const destW = vW * ratio;
      const destH = vH * ratio;
      const centerShiftX = (canvas.width - destW) / 2;
      const centerShiftY = (canvas.height - destH) / 2;
      ctx.drawImage(video, centerShiftX, centerShiftY, destW, destH);
      return;
    }
    // Fallback Background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  // Draw Frame to Canvas with Full Cover Fit
  const renderFrameToCanvas = (sec) => {
    currentTimeSec = sec;
    if (video.readyState >= 1) {
      requestVideoTime(sec);
      drawCurrentVideoDirect();
      return;
    }
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  // 4. Scroll Progress Loop (Natural Responsive Scroll)
  let scrollP = 0;
  let smoothP = 0;
  let displayP = 0;

  const updateScrollProgress = () => {
    const sectionTop = section.offsetTop;
    const maxScroll = section.offsetHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const relative = window.scrollY - sectionTop;
    scrollP = clamp(relative / maxScroll, 0, 1);
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // 5. Mouse Reveal Lantern Tracking
  let targetMouseX = window.innerWidth / 2;
  let targetMouseY = window.innerHeight / 2;
  let currentMouseX = targetMouseX;
  let currentMouseY = targetMouseY;
  let mouseInHero = true;

  window.addEventListener('mousemove', (e) => {
    if (!pinned) return;
    const rect = pinned.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      mouseInHero = true;
      targetMouseX = e.clientX;
      targetMouseY = e.clientY - rect.top;
    } else {
      mouseInHero = false;
    }
  }, { passive: true });

  // 6. Main 60/120 FPS Animation Loop
  const renderPrisma = () => {
    requestAnimationFrame(renderPrisma);

    const cfg = window.PRISMA_CFG;

    // Apply live dynamic properties
    if (overlay) {
      overlay.style.background = `radial-gradient(circle at 65% 50%, rgba(0, 0, 0, ${(cfg.darkOverlay * 0.2).toFixed(2)}) 0%, rgba(0, 0, 0, ${cfg.darkOverlay.toFixed(2)}) 100%)`;
    }

    const isMobile = isMobileView();

    // Natural fast-reacting scroll interpolation (responsive tracking on mobile)
    const lerpSpeed = isMobile ? 0.35 : 0.16;
    smoothP += (scrollP - smoothP) * lerpSpeed;

    let targetEffectiveP = smoothP;

    // ── A. DETERMINISTIC SCROLL-DRIVEN CANVAS RENDERING ──
    if (cfg.userManualSeek !== null) {
      if (!video.paused) video.pause();
      renderFrameToCanvas(cfg.userManualSeek);
      targetEffectiveP = smoothP;
    } else if (isMobile) {
      // CELULAR (OPCIÓN 1): Video continuo a 60 FPS sin sobrecarga de seek
      if (video.paused) {
        video.play().catch(() => {});
      }
      drawCurrentVideoDirect();
      targetEffectiveP = smoothP;
    } else if (smoothP < 0.03) {
      // PC REPOSO (TOP HERO): Reproducción fluida instantánea en vivo (0.0s -> 1.5s loop)
      if (video.paused) {
        video.play().catch(() => {});
      }
      if (video.currentTime >= (cfg.loopMax || 1.4)) {
        video.currentTime = (cfg.loopMin || 0.05);
      }
      drawCurrentVideoDirect();
      targetEffectiveP = 0;
    } else {
      // PC SCROLL ACTIVO: Pausar reproducción y controlar fotogramas con el scroll
      if (!video.paused) {
        video.pause();
      }

      if (smoothP <= 0.22) {
        // ETAPA 1 SCROLL: Avance de 0.0s a 3.0s
        const norm = (smoothP - 0.03) / (0.22 - 0.03);
        const targetTime = clamp(norm * 3.0, 0, 3.0);
        renderFrameToCanvas(targetTime);
        targetEffectiveP = smoothP;
      } else if (smoothP <= 0.48) {
        // ETAPA 2: "Refracción que Multiplica" (3.0s -> 6.8s) — SIN ARCOÍRIS
        const norm = (smoothP - 0.22) / (0.48 - 0.22);
        const targetTime = clamp(3.0 + norm * (6.8 - 3.0), 3.0, 6.8);
        renderFrameToCanvas(targetTime);
        targetEffectiveP = smoothP;
      } else {
        // ETAPA 3: Negro Absoluto para Linterna Interactiva (salta arcoíris)
        renderFrameToCanvas(6.8);
        targetEffectiveP = smoothP;
      }
    }

    // Suavizado del progreso efectivo sin saltos
    const displayLerp = isMobile ? 0.35 : 0.12;
    displayP += (targetEffectiveP - displayP) * displayLerp;

    // Fade to Black a partir de 0.44 (antes del arcoíris)
    const fadeToBlackStart = 0.44;
    let canvasOpacity = 1;
    if (displayP > fadeToBlackStart) {
      canvasOpacity = clamp(1 - (displayP - fadeToBlackStart) / 0.08, 0, 1);
    }
    canvas.style.opacity = canvasOpacity.toFixed(3);

    // Monitor video time on UI
    const valVideoTime = document.getElementById('valVideoTime');
    if (valVideoTime) valVideoTime.textContent = `${currentTimeSec.toFixed(2)}s`;

    // ── B. FASE 1 TYPOGRAPHY (0s -> 3s, Left)
    if (phase1) {
      let p1Opacity = 0;
      if (displayP <= 0.03) {
        p1Opacity = 1;
      } else if (displayP <= 0.20) {
        p1Opacity = 1 - smoothstep(0.03, 0.20, displayP);
      } else {
        p1Opacity = 0;
      }
      phase1.style.opacity = p1Opacity.toFixed(3);
      phase1.style.transform = `translateY(calc(-50% - ${(displayP * 30).toFixed(1)}px)) scale(${(1 - displayP * 0.04).toFixed(3)})`;
      phase1.style.filter = `blur(${((1 - p1Opacity) * 5).toFixed(1)}px)`;
      phase1.style.pointerEvents = p1Opacity < 0.1 ? 'none' : 'auto';
    }

    // ── C. FASE 2 TYPOGRAPHY (3s -> 6.8s, Left)
    if (phase2) {
      let p2Opacity = 0;
      if (displayP < 0.18) {
        p2Opacity = 0;
      } else if (displayP <= 0.26) {
        p2Opacity = smoothstep(0.18, 0.26, displayP);
      } else if (displayP <= 0.40) {
        p2Opacity = 1;
      } else if (displayP <= 0.50) {
        p2Opacity = 1 - smoothstep(0.40, 0.50, displayP);
      } else {
        p2Opacity = 0;
      }
      phase2.style.opacity = p2Opacity.toFixed(3);
      phase2.style.transform = `translateY(calc(-50% - ${((displayP - 0.26) * 16).toFixed(1)}px)) scale(${(0.97 + p2Opacity * 0.03).toFixed(3)})`;
      phase2.style.filter = `blur(${((1 - p2Opacity) * 4).toFixed(1)}px)`;
      phase2.style.pointerEvents = p2Opacity < 0.1 ? 'none' : 'auto';
    }

    // ── D. FASE 3 (OCULTA: arcoíris eliminado)
    if (phase3) {
      phase3.style.opacity = '0';
      phase3.style.display = 'none';
      phase3.style.pointerEvents = 'none';
    }

    // ── E. FASE 4 REVEAL STAGE (NEGRO TOTAL + LINTERNA INTERACTIVA — aparece después de Fase 2)
    if (revealStage) {
      const p4Progress = displayP > 0.46 ? smoothstep(0.48, 0.58, displayP) : 0;
      revealStage.style.opacity = p4Progress.toFixed(3);
      revealStage.style.transform = `translate3d(0, ${((1 - p4Progress) * 16).toFixed(1)}px, 0) scale(${(0.97 + p4Progress * 0.03).toFixed(3)})`;
      revealStage.style.filter = `blur(${((1 - p4Progress) * 4).toFixed(1)}px)`;
      revealStage.style.pointerEvents = p4Progress > 0.3 ? 'auto' : 'none';
    }

    // ── F. Indicador de Progreso Inferior
    if (scrollFill) {
      scrollFill.style.width = `${(displayP * 100).toFixed(1)}%`;
    }
    if (scrollLabel) {
      if (displayP < 0.22) {
        scrollLabel.textContent = 'Scroll para iniciar refracción';
      } else if (displayP < 0.48) {
        scrollLabel.textContent = 'Impacto de luz en prisma (3.0s)';
      } else if (displayP < 0.70) {
        scrollLabel.textContent = 'Dispersión de arcoíris (8.5s - 10s)';
      } else {
        scrollLabel.textContent = 'Espectro completo • Pasa el cursor';
      }
    }

    // ── G. Rainbow Lantern Lerp Interpolation
    currentMouseX += (targetMouseX - currentMouseX) * 0.12;
    currentMouseY += (targetMouseY - currentMouseY) * 0.12;

    if (maskedCont) {
      maskedCont.style.setProperty('--mouse-x', `${currentMouseX.toFixed(1)}px`);
      maskedCont.style.setProperty('--mouse-y', `${currentMouseY.toFixed(1)}px`);
      maskedCont.style.maskImage = `radial-gradient(circle ${cfg.lanternSize}px at var(--mouse-x, -500px) var(--mouse-y, -500px), black 40%, transparent 85%)`;
      maskedCont.style.webkitMaskImage = `radial-gradient(circle ${cfg.lanternSize}px at var(--mouse-x, -500px) var(--mouse-y, -500px), black 40%, transparent 85%)`;
    }

    if (mouseLight) {
      mouseLight.style.width = `${cfg.lanternSize * 1.6}px`;
      mouseLight.style.height = `${cfg.lanternSize * 1.6}px`;
      mouseLight.style.transform = `translate3d(${currentMouseX.toFixed(1)}px, ${currentMouseY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      mouseLight.style.opacity = (smoothP > (cfg.revealStart - 0.05) && mouseInHero) ? '1' : (mouseInHero ? '0.25' : '0');
    }
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  updateScrollProgress();
  renderPrisma();
}

/* ── 0. STICKY NAVBAR: Appears smoothly when scrolling past Hero Prisma ───────── */
function initStickyNavbar() {
  const navbar = document.getElementById('navbar');
  const heroPrisma = document.getElementById('hero-prisma');
  if (!navbar || !heroPrisma) return;

  const onScroll = () => {
    const heroBottom = heroPrisma.offsetTop + heroPrisma.offsetHeight - window.innerHeight * 0.4;
    if (window.scrollY >= heroBottom) {
      navbar.style.transform = 'translateY(0%)';
      navbar.style.opacity   = '1';
    } else {
      navbar.style.transform = 'translateY(-100%)';
      navbar.style.opacity   = '0';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
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
    const arcRadius = baseRadius * (isMobile ? 1.2 : 1.0);
    // Move apex higher so the arc bottom doesn't get clipped
    const arcApexY = h * (isMobile ? 0.30 : 0.20);
    const arcCenterY = arcApexY + arcRadius;

    const spreadAngle = isMobile ? 100 : 130;
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

/* ── 1. Render Curado de Casos de Éxito con Filtro por Empresa y Ver Todos ─ */
let currentActiveFilter = 'all';
let isShowingAllCases = false;

function renderScalableGallery(activeCategory = 'all', showAll = false) {
  currentActiveFilter = activeCategory;
  isShowingAllCases = showAll;

  const desktopContainer = document.getElementById('casesGridDesktop');
  const mobileContainer = document.getElementById('casesMobileFeed');
  const verTodosBtn = document.getElementById('btnVerTodosReels');
  const verTodosWrap = document.getElementById('verTodosContainer');

  if (!desktopContainer || !mobileContainer) return;

  // Filtrado por Empresa o por Categoría / Tipo
  const filtered = videosPortafolio.filter(item => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'viral') return item.isTopViral;
    if (activeCategory === 'informativo') return item.tipo === 'informativo';
    if (activeCategory === 'retorno') return item.tipo === 'retorno';
    if (item.cliente.toLowerCase() === activeCategory.toLowerCase()) return true;
    return item.categoria === activeCategory;
  });

  // Limitación inicial a 6 videos si no se ha hecho clic en "Ver Todos"
  const displayList = showAll ? filtered : filtered.slice(0, 6);

  // Control del botón "Ver Todos"
  if (verTodosWrap && verTodosBtn) {
    if (filtered.length <= 6) {
      verTodosWrap.style.display = 'none';
    } else {
      verTodosWrap.style.display = 'block';
      verTodosBtn.innerHTML = showAll 
        ? `<span>Mostrar Menos</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>`
        : `<span>Ver Todos los Videos (${filtered.length} Reels)</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`;
    }
  }

  // Render Desktop Grid
  desktopContainer.innerHTML = displayList.map(item => `
    <div class="reel-card-item" data-id="${item.id}">
      <div class="reel-media-box" onclick="openReelModal(${item.id})">
        <img src="${item.poster}" 
             alt="${item.cliente}" 
             class="reel-cover-img" 
             loading="lazy" 
             onerror="this.onerror=null; this.src='${item.fallbackPoster}';">
        <div class="reel-play-overlay">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
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
        <button type="button" class="reel-action-link" onclick="openReelModal(${item.id})">
          <span>Reproducir Reel en la Web</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
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
          <button type="button" class="mobile-open-btn" onclick="openReelModal(${item.id})">
            <span>Ver Reel</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <a href="https://wa.me/56999967272?text=Hola%20Santiago,%20vi%20el%20caso%20de%20${encodeURIComponent(item.cliente)}%20y%20quiero%20cotizar." target="_blank" rel="noopener noreferrer" class="mobile-open-btn" style="background:#FFFFFF;color:#111827;">
            <span>Cotizar</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── 2. Filtros de Galería y Botón Ver Todos ─────────────────────────────── */
function initGalleryFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      isShowingAllCases = false;
      renderScalableGallery(filter, false);
    });
  });

  const verTodosBtn = document.getElementById('btnVerTodosReels');
  if (verTodosBtn) {
    verTodosBtn.addEventListener('click', () => {
      isShowingAllCases = !isShowingAllCases;
      renderScalableGallery(currentActiveFilter, isShowingAllCases);
    });
  }
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

/* ── 3.1 EFECTO TIMELINE VERTICAL ── */
function initTimelineProgress() {
  const container = document.getElementById('timelineContainer');
  const beam = document.getElementById('timelineBeamProgress');
  const track = document.querySelector('.timeline-beam-track');

  if (!container || !beam || !track) return;

  const updateTrackPos = () => {
    const items = container.querySelectorAll('.timeline-item');
    if (items.length === 0) return;
    const firstCircle = items[0].querySelector('.timeline-node-circle');
    const lastCircle = items[items.length - 1].querySelector('.timeline-node-circle');
    
    if (firstCircle && lastCircle) {
      const containerRect = container.getBoundingClientRect();
      const firstRect = firstCircle.getBoundingClientRect();
      const lastRect = lastCircle.getBoundingClientRect();
      
      const topOffset = firstRect.top - containerRect.top + (firstRect.height / 2);
      const bottomOffset = containerRect.bottom - lastRect.bottom + (lastRect.height / 2);
      
      track.style.top = topOffset + 'px';
      track.style.bottom = bottomOffset + 'px';
    }
  };

  const handleScroll = () => {
    updateTrackPos(); 
    
    const trackRect = track.getBoundingClientRect();
    const vh = window.innerHeight;
    const startY = vh * 0.65; 
    
    const totalHeight = trackRect.height;
    const scrolled = startY - trackRect.top;
    
    let progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
    beam.style.height = (progress * 100).toFixed(1) + '%';

    const items = container.querySelectorAll('.timeline-item');
    items.forEach(item => {
      const nodeCircle = item.querySelector('.timeline-node-circle');
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < vh * 0.65) {
        if (nodeCircle) nodeCircle.classList.add('active');
        item.style.opacity = '1';
      } else {
        if (nodeCircle) nodeCircle.classList.remove('active');
        item.style.opacity = '0.45';
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  setTimeout(handleScroll, 50);
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

/* ── 5. Modal de Video (Lazy Iframe / Preview & Selector de Empresa) ────────── */
function openReelModal(id) {
  const item = videosPortafolio.find(v => v.id === id);
  if (!item) return;

  const modal = document.getElementById('videoModal');
  if (!modal) return;

  document.getElementById('modalCategory').textContent = item.categoriaLabel;
  document.getElementById('modalTitle').textContent = item.cliente;
  document.getElementById('modalHandle').textContent = item.handle;
  document.getElementById('modalStat1').textContent = item.vistas;
  document.getElementById('modalStat2').textContent = item.isTopViral ? 'Más Viral' : (item.tipo === 'retorno' ? 'Alto Retorno' : 'Informativo');
  document.getElementById('modalQuote').textContent = `"${item.descripcion}"`;

  const externalBtn = document.getElementById('modalExternalLink');
  if (externalBtn) externalBtn.href = item.url;

  // Inyectar selector de otros reels de la misma empresa
  const companySelector = document.getElementById('modalCompanySelector');
  if (companySelector) {
    const empresaVideos = videosPortafolio.filter(v => v.cliente.toLowerCase() === item.cliente.toLowerCase());
    companySelector.innerHTML = `
      <div class="modal-company-selector-header">
        <span class="modal-company-selector-title">Más reels de ${item.cliente} (${empresaVideos.length})</span>
        <button type="button" class="modal-company-all-btn" onclick="filterByCompany('${item.cliente}')">
          <span>Ver catálogo</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div class="modal-company-reels-row">
        ${empresaVideos.map(v => `
          <div class="modal-company-reel-card ${v.id === item.id ? 'active' : ''}" onclick="openReelModal(${v.id})" title="${v.titulo}">
            <img src="${v.poster}" alt="${v.titulo}" onerror="this.onerror=null; this.src='${v.fallbackPoster}';">
            <div class="modal-company-reel-overlay">
              <span class="modal-reel-badge">${v.vistas}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const mediaBox = document.getElementById('modalMediaBox');
  if (mediaBox) {
    mediaBox.innerHTML = `
      <div class="modal-iframe-wrapper" style="position:relative;width:100%;height:100%;min-height:480px;display:flex;align-items:center;justify-content:center;background:#000000;border-radius:14px;overflow:hidden;">
        <iframe 
          src="https://www.instagram.com/p/${item.shortcode}/embed/" 
          style="width:100%;height:100%;min-height:480px;border:none;background:#000000;" 
          frameborder="0" 
          scrolling="no" 
          allowtransparency="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.openReelModal = openReelModal;

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

/* ── 6. Contadores de Métricas Dinámicos (Animación 0 -> Meta con Loop cada 10s) ── */
function initCounters() {
  // Selectores de todas las métricas y números clave en la landing page
  const selectors = [
    '.e-stat-num',
    '.evidence-kpi-num',
    '.timeline-node-title',
    '.prisma-reveal-num'
  ];

  const targetElements = document.querySelectorAll(selectors.join(', '));
  if (targetElements.length === 0) return;

  function parseMetric(text) {
    const trimmed = text.trim();
    if (!trimmed) return null;

    // Detectar números con formato de miles con punto (ej: "220.000", "16.500", "11.000", "2.800")
    const thousandsMatch = trimmed.match(/^([^\d]*)(\d{1,3}(?:\.\d{3})+)([^\d]*)$/);
    if (thousandsMatch) {
      const prefix = thousandsMatch[1] || '';
      const rawDigits = thousandsMatch[2].replace(/\./g, '');
      const num = parseFloat(rawDigits);
      const suffix = thousandsMatch[3] || '';
      return {
        prefix,
        num,
        suffix,
        decimals: 0,
        format: 'thousands-dot'
      };
    }

    // Estándar: decimales, enteros, porcentajes, multiplicadores (ej: "+29.5M", "5.4x", "×5.41", "100%", "-45%", "+127K", "6.7M")
    const match = trimmed.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return null;

    const prefix = match[1] || '';
    const numStr = match[2];
    const num = parseFloat(numStr);
    const suffix = match[3] || '';
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    return {
      prefix,
      num,
      suffix,
      decimals,
      format: 'standard'
    };
  }

  function animateValue(el, meta, duration = 1500) {
    if (el._isAnimating) return;
    el._isAnimating = true;

    const startTime = performance.now();
    const target = meta.num;

    function formatVal(current) {
      if (meta.format === 'thousands-dot') {
        const rounded = Math.round(current);
        return meta.prefix + rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + meta.suffix;
      } else {
        const roundedStr = meta.decimals > 0
          ? current.toFixed(meta.decimals)
          : Math.round(current).toString();
        return meta.prefix + roundedStr + meta.suffix;
      }
    }

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo suave para sensación premium
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * ease;

      el.textContent = formatVal(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatVal(target);
        el._isAnimating = false;
      }
    }

    requestAnimationFrame(step);
  }

  const items = [];

  targetElements.forEach(el => {
    // Si no tiene guardado el valor original, lo guardamos
    const originalText = el.dataset.counterOriginal || el.textContent.trim();
    el.dataset.counterOriginal = originalText;

    const meta = parseMetric(originalText);
    if (meta && !isNaN(meta.num) && meta.num > 0) {
      items.push({ el, meta, isVisible: false });
    }
  });

  // IntersectionObserver para detectar cuando entran en pantalla
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const found = items.find(item => item.el === entry.target);
      if (!found) return;

      if (entry.isIntersecting) {
        found.isVisible = true;
        animateValue(found.el, found.meta);
      } else {
        found.isVisible = false;
      }
    });
  }, { threshold: 0.25 });

  items.forEach(item => io.observe(item.el));

  // Loop cada 10 segundos para los elementos que están visibles en pantalla
  if (window._counterLoopInterval) {
    clearInterval(window._counterLoopInterval);
  }

  window._counterLoopInterval = setInterval(() => {
    items.forEach(item => {
      if (item.isVisible) {
        animateValue(item.el, item.meta, 1300);
      }
    });
  }, 10000);
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

/* ── 10. Servicios y Metodología (Pilares de Servicio Interactive Switcher) ── */
function initCinematicScroll() {
  const section = document.getElementById('servicios');
  if (!section) return;

  const navItems = section.querySelectorAll('.chapter-nav-item');
  const mediaLayers = section.querySelectorAll('.cinematic-media-layer');
  const badgeEl = document.getElementById('chapterBadge');
  const titleEl = document.getElementById('chapterTitle');
  const descEl = document.getElementById('chapterDesc');
  const chipsEl = document.getElementById('chapterChips');
  const controlFill = document.getElementById('screenControlFill');
  const controlLabel = document.getElementById('screenControlLabel');

  const chaptersData = window.dynamicChaptersData || [
    {
      badge: 'CAPÍTULO 01',
      title: 'Gestión Estratégica de Redes Sociales',
      desc: 'Manejo integral de Instagram y TikTok con foco en arquitectura de marca, posicionamiento de autoridad y construcción de audiencia compradora.',
      chips: ['Auditoría de Cuenta', 'Calendario Editorial', 'Copywriting Persuasivo', 'Optimización de Perfil']
    },
    {
      badge: 'CAPÍTULO 02',
      title: 'Producción Audiovisual Vertical 9:16',
      desc: 'Grabación profesional en terreno con cámaras 4K, iluminación cinematográfica y dirección de escena pensada para retener y viralizar.',
      chips: ['Rodaje en Terreno', 'Edición Dinámica', 'Subtítulos Animados', 'Ganchos en 3 Segundos']
    },
    {
      badge: 'CAPÍTULO 03',
      title: 'Meta Ads & Retorno de Inversión (ROI)',
      desc: 'Estructuración de campañas de tráfico y conversión directa en Meta Ads (Instagram/Facebook) optimizando cada dólar invertido con ROAS comprobado.',
      chips: ['Segmentación Avanzada', 'Pruebas A/B Creativas', 'Embudos de Conversión', 'Píxel & CAPI Tracking']
    },
    {
      badge: 'CAPÍTULO 04',
      title: 'Estrategia 360° y Escalado de Negocios',
      desc: 'Integración total de contenido orgánico, pauta pagada, analítica en tiempo real y optimización continua del embudo para maximizar la rentabilidad.',
      chips: ['Dashboards de Analítica', 'Consultoría Semanal', 'Estrategia de Oferta', 'Escalabilidad Multiplataforma']
    }
  ];

  let currentChapter = 0;

  const setChapter = (idx, shouldScroll = false) => {
    if (idx < 0 || idx >= chaptersData.length) return;
    currentChapter = idx;
    const data = chaptersData[idx];

    navItems.forEach((item, i) => {
      item.classList.toggle('active', i === idx);
    });

    mediaLayers.forEach((layer, i) => {
      layer.classList.toggle('active', i === idx);
    });

    if (badgeEl) badgeEl.textContent = data.badge;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (chipsEl) {
      chipsEl.innerHTML = data.chips.map(chip => `<span class="chip-item">${chip}</span>`).join('');
    }
    if (controlFill) {
      controlFill.style.width = `${((idx + 1) / chaptersData.length) * 100}%`;
    }
    if (controlLabel) {
      controlLabel.textContent = `Capítulo ${idx + 1} / ${chaptersData.length}`;
    }

    if (shouldScroll) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollTarget = sectionTop + (idx / (chaptersData.length - 1)) * (sectionHeight - window.innerHeight);
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  };

  navItems.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      setChapter(idx, false);
    });
  });

  const onServicesScroll = () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    if (scrollY >= sectionTop - 100 && scrollY <= sectionTop + sectionHeight) {
      const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / (sectionHeight - window.innerHeight)));
      const targetIdx = Math.min(chaptersData.length - 1, Math.floor(progress * chaptersData.length));
      if (targetIdx !== currentChapter) {
        setChapter(targetIdx, false);
      }
    }
  };

  window.addEventListener('scroll', onServicesScroll, { passive: true });
}
