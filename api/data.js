const { Redis } = require('@upstash/redis');

function getRedisClient() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  
  if (!url || !token) {
    console.error("Missing Redis environment variables.");
    return null;
  }
  
  return new Redis({ url, token });
}

const KV_KEY = 'site_data';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
};

// ── Datos iniciales por defecto (se usan si KV está vacío) ──
const DEFAULT_DATA = {
  "brand": {
    "name": "PRYSMA",
    "whatsapp": "56999967272",
    "email": "scerda.scerda@gmail.com",
    "instagram": "prysma.cl",
    "linkedin": "santiagocerda",
    "phone": "+56 9 9996 7272"
  },
  "hero": {
    "phase1_eyebrow": "RENDIMIENTO CREATIVO & DIRECCIÓN AUDIOVISUAL",
    "phase1_sub": "Somos",
    "phase1_brand": "Prysma.",
    "phase1_subtitle": "Transformamos luz, óptica e historias verticales en sistemas predecibles de adquisición y ventas.",
    "phase2_eyebrow": "CREATIVIDAD DE IMPACTO • RESULTADOS REALES",
    "phase2_sub": "Refracción que",
    "phase2_brand": "Multiplica.",
    "phase2_subtitle": "Capturamos atención dispersa y la convertimos en facturación directa con pauta cinematográfica.",
    "phase3_eyebrow": "ESPECTRO COMPLETO • MULTICANALES DE TRÁFICO",
    "phase3_sub": "El Espectro de",
    "phase3_brand": "tu Marca.",
    "phase3_subtitle": "Meta Ads • Producción Vertical 9:16 • Embudos de Adquisición de Alta Rentabilidad.",
    "reveal_cards": [
      {
        "num": "+31.5M",
        "title": "Views Orgánicas",
        "desc": "Impacto masivo en audiencias de alto valor con retención 9:16."
      },
      {
        "num": "x4.6",
        "title": "ROAS Publicitario",
        "desc": "Embudos de Meta Ads de conversión directa sin desperdicio de pauta."
      },
      {
        "num": "100%",
        "title": "Dirección de Autor",
        "desc": "Estrategia, rodaje cinematográfico y optimización analítica continua."
      },
      {
        "num": "+12",
        "title": "Marcas Escaladas",
        "desc": "Desde gastronomía y turismo hasta marcas B2B e industrias líderes."
      }
    ]
  },
  "timeline": {
    "section_subtitle": "Impacto Medible",
    "section_title": "Resultados Validados con Datos",
    "section_desc": "Estrategias probadas en adquisición orgánica masiva, alcance viral y retorno publicitario medible."
  },
  "cases": {
    "section_subtitle": "Showcase Audiovisual",
    "section_title": "Reels de Alto Impacto",
    "section_desc": "Casos de éxito filtrables por empresa. Reproduce el contenido y analiza su rendimiento."
  },
  "about": {
    "subtitle": "Santiago Cerda",
    "heading": "El motor detrás del crecimiento",
    "summary": "Especialista en Growth Marketing y producción audiovisual de alto rendimiento. Combino ganchos narrativos virales con estrategias avanzadas en Meta Ads para convertir visualizaciones en facturación real para marcas."
  },
  "profile": {
    "image": "santi sin ia.png"
  },
  "testimonials": [
    {
      "text": "Santiago transformó nuestra presencia en redes. Pasamos de 4.200 a 8.100 seguidores y nuestras visualizaciones se multiplicaron ×40 con un retorno sostenido en pedidos.",
      "name": "Maki Açaí",
      "role": "@makiacai.cl • Gastronomía",
      "avatar": "logo-maki-acai.jpg"
    },
    {
      "text": "Profesional, riguroso y con resultados directos. Nos ayudó a posicionar el hotel y generar reservas directas evitando altas comisiones de plataformas.",
      "name": "Gran Pacífico Hotel",
      "role": "@granpacificohotel • Hotelería",
      "avatar": "logo-hotel-gran-pacifico.jpg"
    },
    {
      "text": "Lanzamiento de tienda Shopify con embudos de conversión y un ROAS de ×5.41 sostenido en Meta Ads. Ejecución técnica impecable.",
      "name": "VitaNovaCL",
      "role": "@vitanovacl • E-Commerce",
      "avatar": "logo-vitanova.jpg"
    }
  ],
  "footer": {
    "badge": "Cupos disponibles para nuevos proyectos",
    "title": "Impulsemos el crecimiento de tu marca",
    "desc": "Conversemos sobre tus objetivos comerciales y diseñemos una estrategia audiovisual y publicitaria a la medida de tu negocio.",
    "copyright": "© 2026 Santiago Cerda. Todos los derechos reservados.",
    "tagline": "Growth Marketing & Audiovisual Performance"
  },
  "reels": [
    {
      "id": 1,
      "cliente": "Maki Açaí",
      "logo": "logo-maki-acai.jpg",
      "handle": "@makiacai.cl",
      "shortcode": "DZU8b7Fx95j",
      "categoria": "gastronomia",
      "tipo": "viral",
      "categoriaLabel": "Gastronomía",
      "titulo": "Estrategia Viral de Delivery (6.7M Vistas)",
      "descripcion": "Récord histórico de reproducciones y retención promedio. Clave en el salto de 0 a 220K seguidores.",
      "vistas": "6.7M Vistas",
      "url": "https://www.instagram.com/reel/DZU8b7Fx95j/",
      "poster": "thumb_DZU8b7Fx95j.jpg",
      "fallbackPoster": "thumb_DZU8b7Fx95j.jpg",
      "isTopViral": true,
      "isHeroSpotlight": true
    },
    {
      "id": 6,
      "cliente": "Algo Market",
      "logo": "logo-algo-market.jpg",
      "handle": "@algo_market_chile",
      "shortcode": "DbV-JTdMa9t",
      "categoria": "retail",
      "tipo": "retorno",
      "categoriaLabel": "Retail",
      "titulo": "Reel Estrella (+40K Nuevos Seguidores)",
      "descripcion": "700.000 visitas y 19s de retención promedio. El video que escaló la cuenta de 11K a 75K seguidores.",
      "vistas": "700K • +40K Fans",
      "url": "https://www.instagram.com/reel/DbV-JTdMa9t/",
      "poster": "thumb_DbV-JTdMa9t.jpg",
      "fallbackPoster": "thumb_DbV-JTdMa9t.jpg",
      "isTopViral": true,
      "isHeroSpotlight": true
    },
    {
      "id": 14,
      "cliente": "Hotel Gran Pacífico",
      "logo": "logo-hotel-gran-pacifico.jpg",
      "handle": "@granpacificohotel",
      "shortcode": "DZ-LYP7uPvo",
      "categoria": "hoteleria",
      "tipo": "viral",
      "categoriaLabel": "Hotelería",
      "titulo": "Experiencia Turística Inmersiva",
      "descripcion": "Alcanzó más de 4.2M de reproducciones e impulsó un 98% de ocupación en reservas directas.",
      "vistas": "4.2M Vistas",
      "url": "https://www.instagram.com/reel/DZ-LYP7uPvo/",
      "poster": "thumb_DZ-LYP7uPvo.jpg",
      "fallbackPoster": "thumb_DZ-LYP7uPvo.jpg",
      "isTopViral": true,
      "isHeroSpotlight": true
    },
    {
      "id": 21,
      "cliente": "VitaNovaCL",
      "logo": "logo-vitanova.jpg",
      "handle": "@vitanovacl",
      "shortcode": "DW_2QCrjg55",
      "categoria": "ecommerce",
      "tipo": "retorno",
      "categoriaLabel": "E-Commerce",
      "titulo": "Campaña Meta Ads ROAS ×5.41",
      "descripcion": "Inversión de $656,36 USD con pautas de ROAS 5.41, 4.03 y 3.27 en Shopify.",
      "vistas": "ROAS ×5.41",
      "url": "https://www.instagram.com/reel/DW_2QCrjg55/",
      "poster": "thumb_DW_2QCrjg55.jpg",
      "fallbackPoster": "thumb_DW_2QCrjg55.jpg",
      "isTopViral": true,
      "isHeroSpotlight": true
    },
    {
      "id": 2,
      "cliente": "Maki Açaí",
      "logo": "logo-maki-acai.jpg",
      "handle": "@makiacai.cl",
      "shortcode": "DZ-WKQdRLce",
      "categoria": "gastronomia",
      "tipo": "retorno",
      "categoriaLabel": "Gastronomía",
      "titulo": "Campaña de Frecuencia & Retorno Directo",
      "descripcion": "Destacado por el volumen de nuevos seguidores y pedidos directos en Santiago sin pauta.",
      "vistas": "1.6M Vistas",
      "url": "https://www.instagram.com/reel/DZ-WKQdRLce/",
      "poster": "thumb_DZ-WKQdRLce.jpg",
      "fallbackPoster": "thumb_DZ-WKQdRLce.jpg",
      "isTopViral": true
    },
    {
      "id": 7,
      "cliente": "Algo Market",
      "logo": "logo-algo-market.jpg",
      "handle": "@algo_market_chile",
      "shortcode": "DY2ZiR8uC24",
      "categoria": "retail",
      "tipo": "viral",
      "categoriaLabel": "Retail",
      "titulo": "Crecimiento Orgánico en Pasillos",
      "descripcion": "Humor y tendencias en góndolas con alta conversión a tienda física.",
      "vistas": "700K Vistas",
      "url": "https://www.instagram.com/reel/DY2ZiR8uC24/",
      "poster": "thumb_DY2ZiR8uC24.jpg",
      "fallbackPoster": "thumb_DY2ZiR8uC24.jpg",
      "isTopViral": true
    },
    {
      "id": 15,
      "cliente": "Hotel Gran Pacífico",
      "logo": "logo-hotel-gran-pacifico.jpg",
      "handle": "@granpacificohotel",
      "shortcode": "DRz4mDHD9ej",
      "categoria": "hoteleria",
      "tipo": "viral",
      "categoriaLabel": "Hotelería",
      "titulo": "Destino & Gastronomía Austral",
      "descripcion": "Recorrido dinámico por las instalaciones y carta culinaria del hotel.",
      "vistas": "1.2M Vistas",
      "url": "https://www.instagram.com/reel/DRz4mDHD9ej/",
      "poster": "thumb_DRz4mDHD9ej.jpg",
      "fallbackPoster": "thumb_DRz4mDHD9ej.jpg",
      "isTopViral": true
    },
    {
      "id": 22,
      "cliente": "VitaNovaCL",
      "logo": "logo-vitanova.jpg",
      "handle": "@vitanovacl",
      "shortcode": "DXKhHPPCSAX",
      "categoria": "ecommerce",
      "tipo": "informativo",
      "categoriaLabel": "E-Commerce",
      "titulo": "¿Cómo usar tu producto paso a paso?",
      "descripcion": "Tutorial de uso y eliminación de dudas antes de la compra.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DXKhHPPCSAX/",
      "poster": "thumb_DXKhHPPCSAX.jpg",
      "fallbackPoster": "thumb_DXKhHPPCSAX.jpg"
    },
    {
      "id": 3,
      "cliente": "Maki Açaí",
      "logo": "logo-maki-acai.jpg",
      "handle": "@makiacai.cl",
      "shortcode": "DZm9WIlRGzp",
      "categoria": "gastronomia",
      "tipo": "informativo",
      "categoriaLabel": "Gastronomía",
      "titulo": "¿Cómo se prepara el auténtico Açaí?",
      "descripcion": "Contenido educativo de alta retención sobre ingredientes y elaboración artesanal.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DZm9WIlRGzp/",
      "poster": "thumb_DZm9WIlRGzp.jpg",
      "fallbackPoster": "thumb_DZm9WIlRGzp.jpg"
    },
    {
      "id": 8,
      "cliente": "Algo Market",
      "logo": "logo-algo-market.jpg",
      "handle": "@algo_market_chile",
      "shortcode": "DWy6d51jqJX",
      "categoria": "retail",
      "tipo": "viral",
      "categoriaLabel": "Retail",
      "titulo": "Tendencias & Snacks Virales de Importación",
      "descripcion": "Presentación de novedades de Japón y USA con alto ratio de compartidos.",
      "vistas": "540K Vistas",
      "url": "https://www.instagram.com/reel/DWy6d51jqJX/",
      "poster": "thumb_DWy6d51jqJX.jpg",
      "fallbackPoster": "thumb_DWy6d51jqJX.jpg",
      "isTopViral": true
    },
    {
      "id": 16,
      "cliente": "Hotel Gran Pacífico",
      "logo": "logo-hotel-gran-pacifico.jpg",
      "handle": "@granpacificohotel",
      "shortcode": "DP6zAVDjDHE",
      "categoria": "hoteleria",
      "tipo": "viral",
      "categoriaLabel": "Hotelería",
      "titulo": "Habitaciones con Vista Panorámica",
      "descripcion": "Gancho visual en los primeros 2 segundos para captar turistas en el sur.",
      "vistas": "890K Vistas",
      "url": "https://www.instagram.com/reel/DP6zAVDjDHE/",
      "poster": "thumb_DP6zAVDjDHE.jpg",
      "fallbackPoster": "thumb_DP6zAVDjDHE.jpg"
    },
    {
      "id": 23,
      "cliente": "VitaNovaCL",
      "logo": "logo-vitanova.jpg",
      "handle": "@vitanovacl",
      "shortcode": "DXWpF8-EXap",
      "categoria": "ecommerce",
      "tipo": "informativo",
      "categoriaLabel": "E-Commerce",
      "titulo": "Preguntas Frecuentes & Despachos",
      "descripcion": "Eliminación de objeciones de compra en la pauta digital.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DXWpF8-EXap/",
      "poster": "thumb_DXWpF8-EXap.jpg",
      "fallbackPoster": "thumb_DXWpF8-EXap.jpg"
    },
    {
      "id": 4,
      "cliente": "Maki Açaí",
      "logo": "logo-maki-acai.jpg",
      "handle": "@makiacai.cl",
      "shortcode": "DZFjKP1Rn8o",
      "categoria": "gastronomia",
      "tipo": "informativo",
      "categoriaLabel": "Gastronomía",
      "titulo": "Beneficios Nutricionales del Açaí Puro",
      "descripcion": "Educación de producto para clientes fitness y posicionamiento saludable.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DZFjKP1Rn8o/",
      "poster": "thumb_DZFjKP1Rn8o.jpg",
      "fallbackPoster": "thumb_DZFjKP1Rn8o.jpg"
    },
    {
      "id": 9,
      "cliente": "Algo Market",
      "logo": "logo-algo-market.jpg",
      "handle": "@algo_market_chile",
      "shortcode": "DUiW75ODle8",
      "categoria": "retail",
      "tipo": "viral",
      "categoriaLabel": "Retail",
      "titulo": "Experiencia de Compra & Storytelling",
      "descripcion": "Storytelling visual que conecta con el público joven de Santiago.",
      "vistas": "410K Vistas",
      "url": "https://www.instagram.com/reel/DUiW75ODle8/",
      "poster": "thumb_DUiW75ODle8.jpg",
      "fallbackPoster": "thumb_DUiW75ODle8.jpg",
      "isTopViral": true
    },
    {
      "id": 17,
      "cliente": "Hotel Gran Pacífico",
      "logo": "logo-hotel-gran-pacifico.jpg",
      "handle": "@granpacificohotel",
      "shortcode": "DWhWtBvjxef",
      "categoria": "hoteleria",
      "tipo": "informativo",
      "categoriaLabel": "Hotelería",
      "titulo": "Guía de Actividades en Puerto Montt",
      "descripcion": "Recomendaciones turísticas locales para huéspedes.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DWhWtBvjxef/",
      "poster": "thumb_DWhWtBvjxef.jpg",
      "fallbackPoster": "thumb_DWhWtBvjxef.jpg"
    },
    {
      "id": 5,
      "cliente": "Maki Açaí",
      "logo": "logo-maki-acai.jpg",
      "handle": "@makiacai.cl",
      "shortcode": "DavYt7gOV--",
      "categoria": "gastronomia",
      "tipo": "informativo",
      "categoriaLabel": "Gastronomía",
      "titulo": "Guía de Toppings y Combinaciones",
      "descripcion": "Formato dinámico para personalizar bowls e incentivar la compra cruzada.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DavYt7gOV--/",
      "poster": "thumb_DavYt7gOV__.jpg",
      "fallbackPoster": "thumb_DavYt7gOV__.jpg"
    },
    {
      "id": 10,
      "cliente": "Algo Market",
      "logo": "logo-algo-market.jpg",
      "handle": "@algo_market_chile",
      "shortcode": "DaQTEwOOUAy",
      "categoria": "retail",
      "tipo": "informativo",
      "categoriaLabel": "Retail",
      "titulo": "Tour de Novedades Semanales",
      "descripcion": "Recorrido dinámico por las nuevas llegadas de stock importado.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DaQTEwOOUAy/",
      "poster": "thumb_DaQTEwOOUAy.jpg",
      "fallbackPoster": "thumb_DaQTEwOOUAy.jpg"
    },
    {
      "id": 18,
      "cliente": "Hotel Gran Pacífico",
      "logo": "logo-hotel-gran-pacifico.jpg",
      "handle": "@granpacificohotel",
      "shortcode": "DTdk_bIDJI4",
      "categoria": "hoteleria",
      "tipo": "informativo",
      "categoriaLabel": "Hotelería",
      "titulo": "Salones de Eventos & Convenciones",
      "descripcion": "Video corporativo para arriendos B2B y congresos.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DTdk_bIDJI4/",
      "poster": "thumb_DTdk_bIDJI4.jpg",
      "fallbackPoster": "thumb_DTdk_bIDJI4.jpg"
    },
    {
      "id": 11,
      "cliente": "Algo Market",
      "logo": "logo-algo-market.jpg",
      "handle": "@algo_market_chile",
      "shortcode": "DNbJb_0sWXt",
      "categoria": "retail",
      "tipo": "informativo",
      "categoriaLabel": "Retail",
      "titulo": "Productos Importados que no conocías",
      "descripcion": "Descubrimiento de productos virales de alta rotación.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DNbJb_0sWXt/",
      "poster": "thumb_DNbJb_0sWXt.jpg",
      "fallbackPoster": "thumb_DNbJb_0sWXt.jpg"
    },
    {
      "id": 19,
      "cliente": "Hotel Gran Pacífico",
      "logo": "logo-hotel-gran-pacifico.jpg",
      "handle": "@granpacificohotel",
      "shortcode": "DTa0_NRjlVM",
      "categoria": "hoteleria",
      "tipo": "informativo",
      "categoriaLabel": "Hotelería",
      "titulo": "Experiencia Gourmet Frente al Mar",
      "descripcion": "Gastronomía marina y coctelería de autor del restaurante del hotel.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DTa0_NRjlVM/",
      "poster": "thumb_DTa0_NRjlVM.jpg",
      "fallbackPoster": "thumb_DTa0_NRjlVM.jpg"
    },
    {
      "id": 12,
      "cliente": "Algo Market",
      "logo": "logo-algo-market.jpg",
      "handle": "@algo_market_chile",
      "shortcode": "DTA8dFwDMd1",
      "categoria": "retail",
      "tipo": "informativo",
      "categoriaLabel": "Retail",
      "titulo": "Cómo llegar a nuestras sucursales",
      "descripcion": "Geolocalización visual para tráfico directo a tiendas físicas.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DTA8dFwDMd1/",
      "poster": "thumb_DTA8dFwDMd1.jpg",
      "fallbackPoster": "thumb_DTA8dFwDMd1.jpg"
    },
    {
      "id": 20,
      "cliente": "Hotel Gran Pacífico",
      "logo": "logo-hotel-gran-pacifico.jpg",
      "handle": "@granpacificohotel",
      "shortcode": "DRAVS8cjxof",
      "categoria": "hoteleria",
      "tipo": "informativo",
      "categoriaLabel": "Hotelería",
      "titulo": "Escape de Fin de Semana en el Sur",
      "descripcion": "Propuesta de valor para turismo regional y escapadas en pareja.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DRAVS8cjxof/",
      "poster": "thumb_DRAVS8cjxof.jpg",
      "fallbackPoster": "thumb_DRAVS8cjxof.jpg"
    },
    {
      "id": 13,
      "cliente": "Algo Market",
      "logo": "logo-algo-market.jpg",
      "handle": "@algo_market_chile",
      "shortcode": "DWCbg8bkf4T",
      "categoria": "retail",
      "tipo": "informativo",
      "categoriaLabel": "Retail",
      "titulo": "Top 5 Bebidas Virales",
      "descripcion": "Formato ranking de alta retención para público joven.",
      "vistas": "Informativo",
      "url": "https://www.instagram.com/reel/DWCbg8bkf4T/",
      "poster": "thumb_DWCbg8bkf4T.jpg",
      "fallbackPoster": "thumb_DWCbg8bkf4T.jpg"
    }
  ],
  "services": [
    {
      "menuTitle": "Gestión de Redes",
      "badge": "CAPÍTULO 01",
      "title": "Gestión Estratégica de Redes Sociales",
      "desc": "Manejo integral de Instagram y TikTok con foco en arquitectura de marca, posicionamiento de autoridad y construcción de audiencia compradora.",
      "chips": [
        "Auditoría de Cuenta",
        "Calendario Editorial",
        "Copywriting Persuasivo",
        "Optimización de Perfil"
      ],
      "img": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1000&auto=format&fit=crop&q=80",
      "imgBadge": "01. Gestión & Marca"
    },
    {
      "menuTitle": "Producción 9:16",
      "badge": "CAPÍTULO 02",
      "title": "Producción Audiovisual 9:16",
      "desc": "Creación de contenido nativo de alta retención. Ideación, guionaje, grabación y edición de piezas optimizadas para los algoritmos actuales.",
      "chips": [
        "Hooks Virales",
        "Edición Dinámica",
        "Storytelling",
        "Grabación 4K"
      ],
      "img": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000&auto=format&fit=crop&q=80",
      "imgBadge": "02. Rodaje & Edición 9:16"
    },
    {
      "menuTitle": "Meta Ads & ROI",
      "badge": "CAPÍTULO 03",
      "title": "Pauta Publicitaria en Meta Ads",
      "desc": "Diseño y ejecución de campañas publicitarias de conversión directa. Convertimos alcance orgánico validado en facturación recurrente con alto ROAS.",
      "chips": [
        "Segmentación Avanzada",
        "Retargeting",
        "Campañas Advantage+",
        "A/B Testing Continuo"
      ],
      "img": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
      "imgBadge": "03. Meta Ads & ROAS"
    },
    {
      "menuTitle": "Estrategia 360°",
      "badge": "CAPÍTULO 04",
      "title": "Estrategia 360° y Escalado de Negocios",
      "desc": "Integración total de contenido orgánico, pauta pagada, analítica en tiempo real y optimización continua del embudo para maximizar la rentabilidad.",
      "chips": [
        "Dashboards de Analítica",
        "Consultoría Semanal",
        "Estrategia de Oferta",
        "Escalabilidad Multiplataforma"
      ],
      "img": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
      "imgBadge": "04. Analítica & Escalado"
    }
  ],
  "metrics": [
    {
      "logo": "logo-maki-acai.jpg",
      "client": "Maki Açaí",
      "handle": "@makiacai.cl • Gastronomía",
      "evidenceUrl": "evidencia-maki.jpg",
      "beforeNum": "0",
      "beforeLabel": "Seguidores",
      "afterNum": "+220.000",
      "afterLabel": "Seguidores Orgánicos",
      "footerText": "Crecimiento orgánico sostenido mediante contenido estratégico, reels virales y campañas segmentadas en Meta Ads.",
      "cards": [
        {
          "num": "2.17M",
          "title": "Visualizaciones / Mes",
          "desc": "Promedio de visualizaciones mensuales sostenidas."
        },
        {
          "num": "+220K",
          "title": "Seguidores Ganados",
          "desc": "Adquisición 100% orgánica por algoritmo sin inversión en pauta."
        },
        {
          "num": "+4",
          "title": "Campañas Meta Ads",
          "desc": "E-commerce y pedidos de delivery directos en Santiago."
        }
      ]
    },
    {
      "logo": "logo-hotel-gran-pacifico.jpg",
      "client": "Hotel Gran Pacífico",
      "handle": "@granpacificohotel • Hotelería & Turismo",
      "evidenceUrl": "evidencia-hotel.jpg",
      "beforeNum": "30.000",
      "beforeLabel": "Seguidores Iniciales",
      "afterNum": "+46.000",
      "afterLabel": "Comunidad Activa",
      "footerText": "Estrategia de contenido enfocada en viralidad turística y apertura de canales de difusión, impulsando reservas directas y posicionamiento del hotel.",
      "cards": [
        {
          "num": "921K",
          "title": "Visualizaciones / Mes",
          "desc": "Promedio mensual de alcance e impacto en turismo."
        },
        {
          "num": "+16K",
          "title": "Nuevos Seguidores",
          "desc": "Crecimiento orgánico de 30.000 a más de 46.000 seguidores."
        },
        {
          "num": "4.2M",
          "title": "Vistas Reel Estrella",
          "desc": "Experiencia turística inmersiva y reservas directas."
        }
      ]
    },
    {
      "logo": "logo-algo-market.jpg",
      "client": "Algo Market",
      "handle": "@algo_market_chile • Retail & Supermercados",
      "evidenceUrl": "evidencia-algo.jpg",
      "beforeNum": "11.000",
      "beforeLabel": "Seguidores Iniciales",
      "afterNum": "+72.000",
      "afterLabel": "Comunidad Compradora",
      "footerText": "Estrategia de contenido consistente y productos virales que atrajeron clientes a tienda física y aumentaron las ventas directas.",
      "cards": [
        {
          "num": "654K",
          "title": "Visualizaciones / Mes",
          "desc": "Tráfico constante a tienda y pasillos de importación."
        },
        {
          "num": "+61K",
          "title": "Nuevos Seguidores",
          "desc": "Crecimiento total de 11.000 a más de 72.000 seguidores."
        },
        {
          "num": "700K",
          "title": "Vistas Reel Estrella",
          "desc": "Storytelling de productos virales de alta rotación."
        }
      ]
    },
    {
      "logo": "logo-vitanova.jpg",
      "client": "VitaNovaCL",
      "handle": "@vitanovacl • E-Commerce Shopify",
      "evidenceUrl": "evidencia-vitanova.jpg",
      "beforeNum": "$656 USD",
      "beforeLabel": "Pauta Publicitaria",
      "afterNum": "ROAS x4.6",
      "afterLabel": "Retorno de Inversión",
      "footerText": "Lanzamiento y escalado de tienda e-commerce desde cero con branding, embudos de conversión y campañas rentables de ventas directas en Meta Ads.",
      "cards": [
        {
          "num": "x4.6",
          "title": "ROAS Publicitario",
          "desc": "Retorno de inversión en campañas de ventas directas."
        },
        {
          "num": "+9",
          "title": "Campañas Meta Ads",
          "desc": "Estructura completa de prospección y retargeting."
        },
        {
          "num": "Shopify",
          "title": "E-Commerce",
          "desc": "Branding, configuración de tienda y lanzamiento desde cero."
        }
      ]
    }
  ]
};


module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Password')
      .end();
  }

  // ── GET: Devolver datos públicos o historial ──
  if (req.method === 'GET') {
    try {
      const kv = getRedisClient();
      if (!kv) {
        return res.status(200).json(DEFAULT_DATA);
      }

      // Check if history requested
      const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      if (urlObj.searchParams.get('history') === 'true') {
        const password = req.headers['x-admin-password'];
        const expected = process.env.ADMIN_PASSWORD;
        if (!expected || password !== expected) {
          return res.status(401).json({ error: 'Contraseña incorrecta para ver historial.' });
        }
        const history = await kv.lrange(KV_KEY + '_history', 0, 14); // get up to 15 items
        return res.status(200).json(history || []);
      }
      
      let data = await kv.get(KV_KEY);
      if (!data) {
        // Primera vez: sembrar datos por defecto
        await kv.set(KV_KEY, DEFAULT_DATA);
        data = DEFAULT_DATA;
      } else {
        // Migración de esquema (agregar arrays faltantes si es una BD antigua)
        let needsUpdate = false;
        ['reels', 'services', 'metrics', 'profile'].forEach(key => {
          if (!data[key]) {
            data[key] = DEFAULT_DATA[key];
            needsUpdate = true;
          }
        });
        if (needsUpdate) {
          await kv.set(KV_KEY, data);
        }
      }
      return res.status(200).json(data);
    } catch (err) {
      console.error('KV GET error:', err);
      // Fallback: devolver defaults si KV falla
      return res.status(200).json(DEFAULT_DATA);
    }
  }

  // ── POST: Guardar datos (protegido) con Historial ──
  if (req.method === 'POST') {
    const password = req.headers['x-admin-password'];
    const expected = process.env.ADMIN_PASSWORD;

    if (!expected || password !== expected) {
      return res.status(401).json({ error: 'Contraseña incorrecta.' });
    }

    try {
      const kv = getRedisClient();
      if (!kv) {
        return res.status(500).json({ error: 'Base de datos Redis no configurada en Vercel.' });
      }

      const newData = req.body;
      if (!newData || typeof newData !== 'object') {
        return res.status(400).json({ error: 'Datos inválidos' });
      }

      // 1. Obtener datos actuales para guardarlos en el historial
      const currentData = await kv.get(KV_KEY);
      if (currentData) {
        const historyEntry = JSON.stringify({
          timestamp: Date.now(),
          data: currentData
        });
        await kv.lpush(KV_KEY + '_history', historyEntry);
        await kv.ltrim(KV_KEY + '_history', 0, 14); // Keep latest 15
      }

      // 2. Guardar nuevos datos
      await kv.set(KV_KEY, newData);
      
      return res.status(200).json({ success: true, message: 'Datos guardados correctamente' });
    } catch (err) {
      console.error('KV SET error:', err);
      return res.status(500).json({ error: 'Error al guardar en KV' });
    }
  }

  return res.status(405).json({ error: 'Método no permitido' });
};
