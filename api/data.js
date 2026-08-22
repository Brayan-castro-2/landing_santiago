const { kv } = require('@vercel/kv');

const KV_KEY = 'site_data';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
};

// ── Datos iniciales por defecto (se usan si KV está vacío) ──
const DEFAULT_DATA = {
  brand: {
    name: "Santiago Cerda",
    whatsapp: "56999967272",
    email: "scerda.scerda@gmail.com",
    instagram: "santicerda_w",
    linkedin: "santiagocerda",
    phone: "+56 9 9996 7272"
  },
  hero: {
    phase1_eyebrow: "RENDIMIENTO CREATIVO & DIRECCIÓN AUDIOVISUAL",
    phase1_sub: "Somos",
    phase1_brand: "Prysma.",
    phase1_subtitle: "Transformamos luz, óptica e historias verticales en sistemas predecibles de adquisición y ventas.",
    phase2_eyebrow: "CREATIVIDAD DE IMPACTO • RESULTADOS REALES",
    phase2_sub: "Refracción que",
    phase2_brand: "Multiplica.",
    phase2_subtitle: "Capturamos atención dispersa y la convertimos en facturación directa con pauta cinematográfica.",
    phase3_eyebrow: "ESPECTRO COMPLETO • MULTICANALES DE TRÁFICO",
    phase3_sub: "El Espectro de",
    phase3_brand: "tu Marca.",
    phase3_subtitle: "Meta Ads • Producción Vertical 9:16 • Embudos de Adquisición de Alta Rentabilidad.",
    reveal_cards: [
      { num: "+29.5M", title: "Views Orgánicas", desc: "Impacto masivo en audiencias de alto valor con retención 9:16." },
      { num: "5.4x", title: "ROAS Promedio", desc: "Embudos de Meta Ads de conversión directa sin desperdicio de pauta." },
      { num: "100%", title: "Dirección de Autor", desc: "Estrategia, rodaje cinematográfico y optimización analítica continua." },
      { num: "+12", title: "Marcas Escaladas", desc: "Desde gastronomía y turismo hasta marcas B2B e industrias líderes." }
    ]
  },
  timeline: {
    section_subtitle: "Impacto Medible",
    section_title: "Resultados Validados con Datos",
    section_desc: "Estrategias probadas en adquisición orgánica masiva, alcance viral y retorno publicitario medible."
  },
  cases: {
    section_subtitle: "Showcase Audiovisual",
    section_title: "Reels de Alto Impacto",
    section_desc: "Casos de éxito filtrables por empresa. Reproduce el contenido y analiza su rendimiento."
  },
  about: {
    subtitle: "Santiago Cerda",
    heading: "El motor detrás del crecimiento",
    summary: "Especialista en Growth Marketing y producción audiovisual de alto rendimiento. Combino ganchos narrativos virales con estrategias avanzadas en Meta Ads para convertir visualizaciones en facturación real para marcas."
  },
  testimonials: [
    {
      text: "Santiago transformó nuestra presencia en redes. Pasamos de 4.200 a 8.100 seguidores y nuestras visualizaciones se multiplicaron ×40 con un retorno sostenido en pedidos.",
      name: "Maki Açaí",
      role: "@makiacai.cl • Gastronomía",
      avatar: "logo-maki-acai.jpg"
    },
    {
      text: "Profesional, riguroso y con resultados directos. Nos ayudó a posicionar el hotel y generar reservas directas evitando altas comisiones de plataformas.",
      name: "Gran Pacífico Hotel",
      role: "@granpacificohotel • Hotelería",
      avatar: "logo-hotel-gran-pacifico.jpg"
    },
    {
      text: "Lanzamiento de tienda Shopify con embudos de conversión y un ROAS de ×5.41 sostenido en Meta Ads. Ejecución técnica impecable.",
      name: "VitaNovaCL",
      role: "@vitanovacl • E-Commerce",
      avatar: "logo-vitanova.jpg"
    }
  ],
  footer: {
    badge: "Cupos disponibles para nuevos proyectos",
    title: "Impulsemos el crecimiento de tu marca",
    desc: "Conversemos sobre tus objetivos comerciales y diseñemos una estrategia audiovisual y publicitaria a la medida de tu negocio.",
    copyright: "© 2026 Santiago Cerda. Todos los derechos reservados.",
    tagline: "Growth Marketing & Audiovisual Performance"
  }
};

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Password')
      .end();
  }

  // ── GET: Devolver datos públicos ──
  if (req.method === 'GET') {
    try {
      let data = await kv.get(KV_KEY);
      if (!data) {
        // Primera vez: sembrar datos por defecto
        await kv.set(KV_KEY, DEFAULT_DATA);
        data = DEFAULT_DATA;
      }
      return res.status(200).json(data);
    } catch (err) {
      console.error('KV GET error:', err);
      // Fallback: devolver defaults si KV falla
      return res.status(200).json(DEFAULT_DATA);
    }
  }

  // ── POST: Guardar datos (protegido) ──
  if (req.method === 'POST') {
    const password = req.headers['x-admin-password'];
    const expected = process.env.ADMIN_PASSWORD;

    if (!expected || password !== expected) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    try {
      const newData = req.body;
      if (!newData || typeof newData !== 'object') {
        return res.status(400).json({ error: 'Datos inválidos' });
      }
      await kv.set(KV_KEY, newData);
      return res.status(200).json({ success: true, message: 'Datos guardados correctamente' });
    } catch (err) {
      console.error('KV SET error:', err);
      return res.status(500).json({ error: 'Error al guardar en KV' });
    }
  }

  return res.status(405).json({ error: 'Método no permitido' });
};
