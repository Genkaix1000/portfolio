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
      "Full stack con criterio de datos, seguridad y operación real. miBoliche en Bosko desde julio; Bolívar Pide en beta. Busco un rol full-time.",
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
      " aplico la misma metodología; el producto sigue en beta y aún no tiene fecha de salida.",
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
      { label: "Frontend", text: "React · Next.js · Flutter" },
      { label: "Backend", text: "TypeScript · Java · SQL · Supabase" },
      { label: "Pagos", text: "Mercado Pago Checkout Pro" },
      { label: "Data & Security", text: "Reporting · API audit · Pentest" },
    ],
    eduTitle: "Educación & Certs",
    edu: [
      {
        title: "Mercado Pago Checkout Pro",
        meta: "Certificación oficial · integración de cobros",
        links: [{ href: "/cv/pdfs/checkout-pro.pdf", label: "Certificado ↗" }],
      },
      {
        title: "Tecnicatura Sup. en Ciencia de Datos",
        meta: "Teclab — en curso · título intermedio",
        links: [
          { href: "/cv/pdfs/constancia.pdf", label: "Constancia ↗" },
          { href: "/cv/pdfs/intermedio.pdf", label: "Intermedio ↗" },
          { href: "/cv/pdfs/analitico.pdf", label: "Analítico ↗" },
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
        repo: "https://github.com/Genkaix1000/Cocktrail",
      },
      {
        name: "Bolívar Pide",
        status: "BETA",
        role: "Plataforma de delivery local",
        stack: "Next.js · Supabase · PWA",
        detail:
          "Marketplace de tres caras (usuario, negocio, repartidor) para Bolívar. En fase beta, aún no salió al público.",
        image: "/projects/bolivarpide.jpg",
        repo: "https://github.com/Genkaix1000/bolivarpide",
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
      "Full-stack with data, security, and real-world ops. miBoliche live at Bosko since July; Bolívar Pide in beta. Open to full-time roles.",
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
      " I apply the same method; the product is still in beta with no public launch date yet.",
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
      { label: "Frontend", text: "React · Next.js · Flutter" },
      { label: "Backend", text: "TypeScript · Java · SQL · Supabase" },
      { label: "Payments", text: "Mercado Pago Checkout Pro" },
      { label: "Data & Security", text: "Reporting · API audit · Pentest" },
    ],
    eduTitle: "Education & Certs",
    edu: [
      {
        title: "Mercado Pago Checkout Pro",
        meta: "Official certification · payment integration",
        links: [{ href: "/cv/pdfs/checkout-pro.pdf", label: "Certificate ↗" }],
      },
      {
        title: "Higher Technician in Data Science",
        meta: "Teclab — in progress · intermediate degree",
        links: [
          { href: "/cv/pdfs/constancia.pdf", label: "Proof ↗" },
          { href: "/cv/pdfs/intermedio.pdf", label: "Intermediate ↗" },
          { href: "/cv/pdfs/analitico.pdf", label: "Transcript ↗" },
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
        repo: "https://github.com/Genkaix1000/Cocktrail",
      },
      {
        name: "Bolívar Pide",
        status: "BETA",
        role: "Local delivery platform",
        stack: "Next.js · Supabase · PWA",
        detail:
          "Three-sided marketplace (user, business, courier) for Bolívar. Still in beta; not public yet.",
        image: "/projects/bolivarpide.jpg",
        repo: "https://github.com/Genkaix1000/bolivarpide",
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
