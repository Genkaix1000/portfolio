# Portfolio Redesign Spec — Matías Asin
**Version**: 2.0 (Final)
**Última revisión**: Jul 2026

---

## Contexto & Restricciones

- **`/cv`** es una herramienta de uso privado para generar y personalizar CVs por rol. No se linka desde el portfolio público. Sin acceso ni botón visible.
- **`/`** es el portfolio público. Contiene su propia sección de resumen independiente, no derivada de `/cv`.
- El diseño combina dos referencias visuales: editorial neo-brutalista (tipografía de impacto, badges flotantes) + constelación de datos (red de nodos vectoriales animados).
- **Objetivo de ruido visual**: mínimo. El canvas de fondo es decorativo y sutil. El stage central es protagonista. Los badges son soporte.

---

## Estructura de la Página Principal (`/`)

### Zona 1 — Hero (full viewport height)

```
[ top bar ] MATÍAS ASIN  ·  DATA & SOFTWARE           [ES/EN]  [↗ LinkedIn]
─────────────────────────────────────────────────────────────────────────────

  background: ConstelationCanvas (opacidad ~25%, oscuro, sutil)

  ┌─────────────────────────────────────────────────────────────┐
  │  GRID STAGE (retícula blueprint, borde con esquinas sharp)  │
  │                                                             │
  │  left                         center/right                  │
  │  ──────────────────────────   ──────────────────────────    │
  │  SOFTWARE ENGINEER             [foto en cápsula geométrica] │
  │  & DATA SCIENTIST              + 3 badges flotantes max:    │
  │                                  · SOFTWARE ENGINEER        │
  │  Frase de impacto (1 línea).       · DATA SCIENCE           │
  │  2 líneas de contexto humano.      · FULL STACK DEV         │
  │                                                             │
  │  [ RESUMEN ]    [ CONTACTAR ]                               │
  └─────────────────────────────────────────────────────────────┘
```

**Reglas del hero:**
- Tipografía titular: ultra-bold condensada, blanca, grande pero no agresiva
- El canvas de constelación NO compite con el stage. La retícula del stage SÍ contrasta (grid claro sobre fondo oscuro).
- Badges: máximo 3, rotados levemente, colores sobrios (no neón), hover suave
- Sin íconos de emoji en el UI final. Solo en este spec como referencia

---

### Zona 2 — Resumen Ejecutivo (in-page section, no modal)

Una sección propia debajo del hero, elegante, en scroll. No un modal/drawer.
Estructura de tres columnas limpias:

```
─── SOBRE MÍ ─────────────────────────────────────────────────────────────────

  Perfil    │  Stack Principal   │  Educación & Certs
  ──────    │  ─────────────     │  ─────────────────
  Bio 3-4   │  Frontend          │  Tecnicatura Sup. Ciencia de Datos
  líneas    │  Backend           │  Teclab — en curso (título intermedio)
  limpias   │  Data & Analytics  │  → PDF: Constancia, Analítico, Intermedio
            │  Mobile            │
            │  Design            │  Full Stack Web Dev
            │                   │  Egg Cooperation — completado
            │                   │  → PDF: Backend Java, Frontend React
```

**Reglas:**
- Diseño: tipografía ligera, separadores finos, sin cards saturadas
- Los PDFs de certificados se abren en nueva pestaña directamente (sin modal)
- Enlace a LinkedIn con ícono limpio, al pie de la sección
- Sin barra de progreso de habilidades, sin porcentajes. Solo nombres agrupados

---

### Zona 3 — Proyectos (3 items, formato lista horizontal)

Mínimo: nombre del proyecto, rol, tecnologías clave, link externo o descripción de 1 línea.

```
─── PROYECTOS ─────────────────────────────────────────────────────────────────

  BolivarApp              Cocktrail               GMod Workshop
  ──────────              ─────────               ─────────────
  Community platform      Nightlife mgmt system   Lua engineering
  Flutter · Firebase      Next.js · SQL           Game engine scripts
  Municipio de Bolívar    Alto tráfico nocturno   Steam Workshop
  [→ ver]                 [→ ver]                 [→ ver]
```

**Reglas:**
- Sin imágenes de mockup ni screenshots. La referencia visual viene del código mencionado
- Hover sutil sobre cada item (borde o underline), nada más
- Si no hay link externo, el ítem simplemente no tiene acción

---

### Zona 4 — Footer

```
  © 2026 Matías Asin  ·  matiasasin123@gmail.com  ·  +54 9 11 70623866
  LinkedIn ↗   ·   Bolívar, BA, Argentina
```

Minimalista, monoespaciado, sin logo ni marca adicional.

---

## Componentes a Crear / Modificar

| Archivo | Acción | Descripción |
|---|---|---|
| `app/page.tsx` | REWRITE | Ensambla las 4 zonas |
| `app/globals.css` | MODIFY | Agrega grid-pattern, tipografía editorial |
| `components/constellation-canvas.tsx` | NEW | Canvas de nodos vectoriales animados, sutil |
| `components/hero-stage.tsx` | NEW | Stage geométrico con retícula, foto, 3 badges |
| `components/resume-section.tsx` | NEW | Sección de resumen in-page, 3 columnas |
| `components/projects-section.tsx` | NEW | Lista de 3 proyectos, estilo horizontal |
| `app/cv/*` | UNTOUCHED | Sin cambios. Permanece privado, sin link desde `/` |

---

## Datos Conocidos (fuente: código existente en `/cv/page.tsx`)

**Perfil:** Matías Asin, 25 años, Bolívar BA Argentina. matiasasin123@gmail.com, +54 9 11 70623866

**Experiencia:**
- Cocktrail — Operations & System Management (May 2024 – presente)
- BolivarApp — PR & Project Development (ongoing)
- Actual Supermercados — Logistics Coordinator (Jan 2025 – May 2026)
- Customer Service & PR (2020–2024)
- Freelance Graphic Designer (ongoing)

**Educación:**
- Teclab — Tecnicatura Sup. en Ciencia de Datos (en curso, título intermedio obtenido)
  - PDFs: `/cv/pdfs/constancia.pdf`, `/cv/pdfs/intermedio.pdf`, `/cv/pdfs/analitico.pdf`
- Egg Cooperation — Full Stack Web Dev (completado)
  - Backend Java cert: [link externo S3]
  - Frontend React cert: [link externo S3]

**Skills:** PR/Communication, Crisis Management, Advanced Excel/SQL, Reporting & Analysis, Photoshop/Illustrator, Visual Identity, Workflow Optimization, Git

**LinkedIn:** https://www.linkedin.com/in/matias-asin-573320250/

---

## Referencias Visuales

- [ref-editorial-brutalist.png](file:///Users/matiasasin/Desktop/Dev/portfolio/docs/ref-editorial-brutalist.png) — tipografía, stage, badges
- [ref-data-constellation.png](file:///Users/matiasasin/Desktop/Dev/portfolio/docs/ref-data-constellation.png) — canvas de fondo, nodos y redes vectoriales
