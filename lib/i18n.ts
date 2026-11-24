export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const saved = window.localStorage.getItem("locale");
  if (saved === "es" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

type Dict = {
  nav: {
    summary: string;
    projects: string;
    contact: string;
    aria: string;
    langAria: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleSub: string;
    statement: string;
    context: string;
    projects: string;
    contact: string;
    photoAlt: string;
  };
  resume: {
    kicker: string;
    title: string;
    p1: string;
    p2Before: string;
    p2Mid: string;
    p2After: string;
    p3Before: string;
    p3Mid: string;
    focusTitle: string;
    focus: { label: string; text: string }[];
    stackTitle: string;
    stack: { label: string; text: string }[];
    eduTitle: string;
    edu: {
      title: string;
      meta: string;
      links: { href: string; label: string }[];
    }[];
  };
  projects: {
    kicker: string;
    title: string;
    view: string;
    code: string;
    imageAlt: string;
    items: {
      name: string;
      status: string;
      role: string;
      stack: string;
      detail: string;
      image: string;
      href?: string;
      repo?: string;
    }[];
  };
  footer: {
    location: string;
    socialAria: string;
  };
};

const es: Dict = {
  nav: {
    summary: "RESUMEN",
    projects: "PROYECTOS",
    contact: "CONTACTO",
    aria: "Enlaces principales",
    langAria: "Cambiar idioma",
  },
  hero: {
    eyebrow: "BUENOS AIRES · ARGENTINA",
    title: "SOFTWARE ENGINEER",
    titleSub: "& DATA SCIENTIST",
    statement: "Sistemas claros para problemas que no lo son.",
    context:
      "Full stack con criterio de datos, seguridad y operación real. miBoliche en Bosko desde julio, ARBOS en producción y Pedilo en beta. Busco un rol full-time.",
    projects: "PROYECTOS",
    contact: "CONTACTAR",
    photoAlt: "Matías Asin",
  },
  resume: {
    kicker: "01 — PERFIL",
    title: "SOBRE MÍ",
    p1: "Soy desarrollador full stack. Complemento el producto con análisis de datos, criterios de ciberseguridad y base de diseño gráfico para entregar sistemas sólidos, claros y listos para operar. Arranco desde el problema de negocio: trabajo mano a mano con el cliente hasta cubrir lo que realmente necesita.",
    p2Before: "En ",
    p2Mid: " (Bosko) llevé el proyecto de punta a punta: código, operación, entrenamiento al staff, cobros con Mercado Pago Checkout Pro y soporte en la noche. Tras dos pruebas exitosas, el sistema opera sin incidentes desde julio. Con ",
    p2After:
      " (antes Bolívar Pide) aplico la misma metodología: delivery local con panel de negocio en tiempo real y pedidos por WhatsApp, todavía en beta. En paralelo puse en producción ARBOS, una tienda online de perfumes con su dashboard de gestión, y tengo en desarrollo una ticketera con QR, un portal inmobiliario y un punto de venta.",
    p3Before: "También documenté un caso de ",
    p3Mid: " en Actual Online: un hallazgo puntual en la superficie pública, contacto con la empresa y auditoría con autorización — no lo ofrezco como servicio genérico, sino como evidencia de criterio frente a sistemas reales. Antes del software trabajé en operación logística en supermercado; esa experiencia me ayuda a diseñar para el piso, no solo para la demo. Busco un rol full-time; también considero freelance cuando el proyecto lo justifica.",
    focusTitle: "Enfoque",
    focus: [
      { label: "Producto", text: "Del brief al sistema en producción" },
      { label: "Operación", text: "Staff, soporte y cobros reales" },
      { label: "Calidad", text: "Datos, seguridad y diseño al servicio del uso" },
      { label: "Diseño", text: "Base gráfica · " },
    ],
    stackTitle: "Stack principal",
    stack: [
      { label: "Frontend", text: "React · Next.js · Tailwind · Flutter" },
      { label: "Backend", text: "TypeScript · Supabase · Postgres · SQL · Java" },
      { label: "Pagos", text: "Mercado Pago Checkout Pro · Webhooks" },
      { label: "Testing & Security", text: "Playwright · Vitest · API audit · RLS" },
    ],
    eduTitle: "Educación & Certs",
    edu: [
      {
        title: "Mercado Pago Checkout Pro",
        meta: "Certificación oficial · integración de cobros",
        links: [{ href: "/certs/checkout-pro.pdf", label: "Certificado ↗" }],
      },
      {
        title: "Tecnicatura Sup. en Ciencia de Datos",
        meta: "Teclab — en curso · título intermedio",
        links: [
          { href: "/certs/constancia.pdf", label: "Constancia ↗" },
          { href: "/certs/intermedio.pdf", label: "Intermedio ↗" },
          { href: "/certs/analitico.pdf", label: "Analítico ↗" },
        ],
      },
      {
        title: "Full Stack Web Dev",
        meta: "Egg Cooperation — completado",
        links: [
          {
            href: "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673724399.pdf",
            label: "Backend Java ↗",
          },
          {
            href: "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673624036.pdf",
            label: "Frontend React ↗",
          },
        ],
      },
    ],
  },
  projects: {
    kicker: "02 — TRABAJO",
    title: "PROYECTOS",
    view: "VER",
    code: "CÓDIGO",
    imageAlt: "Vista de",
    items: [
      {
        name: "miBoliche",
        status: "BOSKO · EN PRODUCCIÓN",
        role: "POS & pedidos por QR — implementación en Bosko",
        stack: "Next.js · TypeScript · Mercado Pago Checkout Pro · SSE",
        detail:
          "Sistema en operación en Bosko: carta por QR, barra en vivo, caja y cobros con Checkout Pro. El cliente pide desde el celu; barman y cajera ven el flujo en tiempo real.",
        image: "/projects/miboliche.jpg",
        href: "https://miboliche-landing.vercel.app",
      },
      {
        name: "ARBOS",
        status: "EN PRODUCCIÓN",
        role: "E-commerce de perfumes + dashboard de gestión",
        stack: "Next.js 16 · Supabase · GSAP · Playwright",
        detail:
          "Tienda online con catálogo, combos y bolsa, y un dashboard privado para stock, insumos, pedidos, ventas y gastos. Catálogo editable desde el panel.",
        image: "/projects/arbos.jpg",
        href: "https://www.arbos.ar",
      },
      {
        name: "Pedilo",
        status: "BETA",
        role: "Plataforma de delivery local (ex Bolívar Pide)",
        stack: "Next.js 16 · Supabase · Mercado Pago · WhatsApp · PWA",
        detail:
          "Delivery para Bolívar: app del consumidor, panel del negocio con comandera en tiempo real, cobros por comercio y bot de pedidos por WhatsApp con IA. En beta.",
        image: "/projects/bolivarpide.jpg",
        href: "https://pedilo.net",
      },
      {
        name: "Ticketera QR",
        status: "EN DESARROLLO",
        role: "Venta y validación de entradas",
        stack: "Next.js · Supabase · Mercado Pago · Zod",
        detail:
          "Entradas para eventos y boliches: reserva atómica de stock sin sobreventa, webhook de pagos idempotente, QR firmado con HMAC y check-in atómico en portería.",
        image: "/projects/ticketera.jpg",
      },
      {
        name: "Bolívar Inmo",
        status: "EN DESARROLLO",
        role: "Portal inmobiliario de la ciudad",
        stack: "Next.js 16 · MapLibre · Base UI · Supabase",
        detail:
          "Las propiedades en venta y alquiler de las inmobiliarias de Bolívar en un solo lugar, con búsqueda en mapa. Diseñado mobile primero.",
        image: "/projects/inmo.jpg",
      },
      {
        name: "VentaPro",
        status: "EN DESARROLLO",
        role: "POS y gestión para comercios",
        stack: "React · Vite · TypeScript · Supabase",
        detail:
          "Punto de venta para kioscos y supermercados que corre local en la PC del comercio, con escaneo por cámara y consulta de datos desde el celular.",
        image: "/projects/ventapro.jpg",
      },
      {
        name: "Pedilo Market",
        status: "DEMO",
        role: "Marketplace con pujas en vivo",
        stack: "Next.js 16 · React 19 · Tailwind v4",
        detail:
          "Marketplace por localidades con avisos y salas de puja en vivo. Demo web; el objetivo de producto es una app nativa.",
        image: "/projects/market.jpg",
      },
      {
        name: "Mora",
        status: "DEMO",
        role: "Gestión de mora y cobranza municipal",
        stack: "Next.js · TypeScript · SDD",
        detail:
          "SaaS para municipios: panel de administración y portal del vecino para regularizar deuda. Demo visual con datos sintéticos.",
        image: "/projects/mora.jpg",
      },
      {
        name: "Auditoría Actual Online",
        status: "RESPONSIBLE DISCLOSURE",
        role: "Pentest & re-auditoría web",
        stack: "API security · Auth · Infra",
        detail:
          "Caso puntual de responsible disclosure: hallazgo en superficie pública, contacto con la empresa y auditoría autorizada con informe de remediación.",
        image: "/projects/auditoria.jpg",
      },
    ],
  },
  footer: {
    location: "© 2026 · Bolívar, BA, Argentina",
    socialAria: "Contacto y redes",
  },
};

const en: Dict = {
  nav: {
    summary: "ABOUT",
    projects: "PROJECTS",
    contact: "CONTACT",
    aria: "Primary links",
    langAria: "Switch language",
  },
  hero: {
    eyebrow: "BUENOS AIRES · ARGENTINA",
    title: "SOFTWARE ENGINEER",
    titleSub: "& DATA SCIENTIST",
    statement: "Clear systems for problems that aren't.",
    context:
      "Full-stack with data, security, and real-world ops. miBoliche live at Bosko since July, ARBOS in production, and Pedilo in beta. Open to full-time roles.",
    projects: "PROJECTS",
    contact: "CONTACT",
    photoAlt: "Matías Asin",
  },
  resume: {
    kicker: "01 — PROFILE",
    title: "ABOUT ME",
    p1: "I'm a full-stack developer. I complement product work with data analysis, security judgment, and a graphic design foundation to ship solid systems that are clear and ready to run. I start from the business problem: working side by side with the client until the real needs are covered.",
    p2Before: "On ",
    p2Mid: " (Bosko) I owned the project end to end: code, operations, staff training, Mercado Pago Checkout Pro payments, and overnight support. After two successful pilots, the system has been running without incidents since July. With ",
    p2After:
      " (formerly Bolívar Pide) I apply the same method: local delivery with a real-time merchant panel and WhatsApp ordering, still in beta. Alongside it I shipped ARBOS, an online perfume store with its own management dashboard, and I have a QR ticketing system, a real-estate portal, and a point of sale in development.",
    p3Before: "I also documented a ",
    p3Mid: " case on Actual Online: a finding on a public surface, contact with the company, and an authorized audit — not offered as a generic service, but as evidence of judgment against real systems. Before software I worked in supermarket logistics; that experience helps me design for the floor, not just the demo. I'm looking for a full-time role; freelance is also welcome when the project fits.",
    focusTitle: "Approach",
    focus: [
      { label: "Product", text: "From brief to production systems" },
      { label: "Operations", text: "Staff, support, and real payments" },
      { label: "Quality", text: "Data, security, and design in service of use" },
      { label: "Design", text: "Graphic foundation · " },
    ],
    stackTitle: "Main stack",
    stack: [
      { label: "Frontend", text: "React · Next.js · Tailwind · Flutter" },
      { label: "Backend", text: "TypeScript · Supabase · Postgres · SQL · Java" },
      { label: "Payments", text: "Mercado Pago Checkout Pro · Webhooks" },
      { label: "Testing & Security", text: "Playwright · Vitest · API audit · RLS" },
    ],
    eduTitle: "Education & Certs",
    edu: [
      {
        title: "Mercado Pago Checkout Pro",
        meta: "Official certification · payment integration",
        links: [{ href: "/certs/checkout-pro.pdf", label: "Certificate ↗" }],
      },
      {
        title: "Higher Technician in Data Science",
        meta: "Teclab — in progress · intermediate degree",
        links: [
          { href: "/certs/constancia.pdf", label: "Proof ↗" },
          { href: "/certs/intermedio.pdf", label: "Intermediate ↗" },
          { href: "/certs/analitico.pdf", label: "Transcript ↗" },
        ],
      },
      {
        title: "Full Stack Web Dev",
        meta: "Egg Cooperation — completed",
        links: [
          {
            href: "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673724399.pdf",
            label: "Backend Java ↗",
          },
          {
            href: "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673624036.pdf",
            label: "Frontend React ↗",
          },
        ],
      },
    ],
  },
  projects: {
    kicker: "02 — WORK",
    title: "PROJECTS",
    view: "VIEW",
    code: "CODE",
    imageAlt: "Preview of",
    items: [
      {
        name: "miBoliche",
        status: "BOSKO · IN PRODUCTION",
        role: "POS & QR ordering — live at Bosko",
        stack: "Next.js · TypeScript · Mercado Pago Checkout Pro · SSE",
        detail:
          "Live at Bosko: QR menu, real-time bar queue, cash desk, and Checkout Pro payments. Guests order from their phones; bartender and cashier see the flow live.",
        image: "/projects/miboliche.jpg",
        href: "https://miboliche-landing.vercel.app",
      },
      {
        name: "ARBOS",
        status: "IN PRODUCTION",
        role: "Perfume e-commerce + management dashboard",
        stack: "Next.js 16 · Supabase · GSAP · Playwright",
        detail:
          "Online store with catalog, bundles, and cart, plus a private dashboard for stock, supplies, orders, sales, and expenses. The catalog is editable from the panel.",
        image: "/projects/arbos.jpg",
        href: "https://www.arbos.ar",
      },
      {
        name: "Pedilo",
        status: "BETA",
        role: "Local delivery platform (formerly Bolívar Pide)",
        stack: "Next.js 16 · Supabase · Mercado Pago · WhatsApp · PWA",
        detail:
          "Delivery for Bolívar: consumer app, merchant panel with a real-time order board, per-merchant payments, and an AI WhatsApp ordering bot. In beta.",
        image: "/projects/bolivarpide.jpg",
        href: "https://pedilo.net",
      },
      {
        name: "Ticketera QR",
        status: "IN DEVELOPMENT",
        role: "Ticket sales and validation",
        stack: "Next.js · Supabase · Mercado Pago · Zod",
        detail:
          "Tickets for events and nightclubs: atomic stock reservation with no overselling, idempotent payment webhook, HMAC-signed QR codes, and atomic check-in at the door.",
        image: "/projects/ticketera.jpg",
      },
      {
        name: "Bolívar Inmo",
        status: "IN DEVELOPMENT",
        role: "City real-estate portal",
        stack: "Next.js 16 · MapLibre · Base UI · Supabase",
        detail:
          "Every property for sale or rent from the city's agencies in one place, with map search. Designed mobile first.",
        image: "/projects/inmo.jpg",
      },
      {
        name: "VentaPro",
        status: "IN DEVELOPMENT",
        role: "POS and management for shops",
        stack: "React · Vite · TypeScript · Supabase",
        detail:
          "Point of sale for kiosks and supermarkets that runs locally on the shop's PC, with camera barcode scanning and data lookup from a phone.",
        image: "/projects/ventapro.jpg",
      },
      {
        name: "Pedilo Market",
        status: "DEMO",
        role: "Marketplace with live bidding",
        stack: "Next.js 16 · React 19 · Tailwind v4",
        detail:
          "Location-based marketplace with listings and live bidding rooms. Web demo; the product goal is a native app.",
        image: "/projects/market.jpg",
      },
      {
        name: "Mora",
        status: "DEMO",
        role: "Municipal debt and collections management",
        stack: "Next.js · TypeScript · SDD",
        detail:
          "SaaS for municipalities: an admin panel and a resident portal for settling debt. Visual demo with synthetic data.",
        image: "/projects/mora.jpg",
      },
      {
        name: "Actual Online Audit",
        status: "RESPONSIBLE DISCLOSURE",
        role: "Web pentest & re-audit",
        stack: "API security · Auth · Infra",
        detail:
          "One-off responsible disclosure: public-surface finding, contact with the company, and authorized audit with a remediation report.",
        image: "/projects/auditoria.jpg",
      },
    ],
  },
  footer: {
    location: "© 2026 · Bolívar, BA, Argentina",
    socialAria: "Contact and social links",
  },
};

export const dictionary = { es, en };

export type Dictionary = Dict;
