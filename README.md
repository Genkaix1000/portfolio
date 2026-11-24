# Portfolio — Matías Asin

Mi sitio personal: [matiasasin.is-a.dev](https://matiasasin.is-a.dev/). Bilingüe (ES/EN), con una página de CV que se adapta al perfil al que se postula y se exporta a PDF.

## Qué hay

- `/` — presentación, resumen y proyectos.
- `/cv` — CV en cuatro versiones (general, Studio IT, SQL / software de gestión, game presenter), listo para imprimir.

## Dónde se edita el contenido

| Qué | Archivo |
|---|---|
| Textos del sitio y lista de proyectos (ES y EN) | `lib/i18n.ts` |
| Imágenes de proyectos | `public/projects/` |
| Versiones del CV | `app/cv/cv-*.tsx` |
| Certificados | `public/certs/` |
| Fuente de verdad de experiencia y skills | `docs/experience.json` |

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build
```

Para regenerar el PDF del CV, con el servidor de desarrollo corriendo:

```bash
node scripts/generate-pdf.mjs
```

Stack: Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4.
