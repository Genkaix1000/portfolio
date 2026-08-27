# Guía de Contexto & Matriz de Experiencia — Matías Asin

Este documento y [`experience.json`](file:///home/cipher/Projects/portfolio/docs/experience.json) constituyen la **fuente de verdad única** de la trayectoria, proyectos, stack técnico y métricas de **Matías Asin**.

---

## 🎯 Propósito del Contexto (MCP-Ready)

Este archivo está preparado para que cualquier agente de IA, script o evaluador pueda:
1. **Generar variantes de CV y cartas de presentación** hiper-personalizadas sin alucinar datos.
2. **Actualizar el portfolio (`/`) y los CVs internos (`/cv`)** con descripciones fidedignas y consistentes.
3. **Extraer argumentos técnicos y de negocio** para entrevistas según el rol objetivo.

---

## 🏗️ Desglose de Proyectos & Casos de Estudio

### 1. miBoliche (Cocktrail) — Local Bosko
* **Período:** Mayo 2026 — Presente (En producción continua)
* **Escala y Métrica Clave:**
  * **~1.000 tragos despachados por noche** en picos de fin de semana.
  * **Impacto:** Eliminación total de fricción en la barra. Los bartenders ya no cobran ni toman pedidos manualmente; ven la cola en vivo vía **Server-Sent Events (SSE)**.
  * **Carta QR:** Acceso instantáneo para los clientes desde el móvil con información visual y actualizada en tiempo real.
  * **Cobros:** Integración oficial certificada de **Mercado Pago Checkout Pro**.
* **Infraestructura & Soporte On-Site:**
  * **Red Wi-Fi Segmentada:** Creación de 2 subredes (operativa interna para terminales/impresoras vs pública para clientes) y ajuste de Access Points para erradicar microcortes en el salón.
  * **Hardware de Piso:** Configuración de impresoras térmicas (USB/Bluetooth), tablets de comanda y resolución de incidencias en caliente durante la noche.

### 2. Bolívar Pide (SaaS Delivery Local / `delivery`)
* **Período:** Agosto 2026 — Presente (Fase Beta / En desarrollo activo)
* **Stack:** Next.js 16 (App Router) + React 19 + TypeScript + Supabase (PostgreSQL, Auth, Storage, Realtime) + Tailwind CSS v4 + Zod + PWA.
* **Enfoque Arquitectónico (Business-First):**
  * Se diseñó priorizando el panel operativo del comercio (`/negocio/*`) antes del marketplace público, asegurando que los locales tengan herramientas reales de control de carta, stock, horarios de apertura y comandera.
* **Las 3 Caras del Producto:**
  1. **Negocio (`/negocio/*`):** Dashboard de KPIs, comandera en tiempo real vía WebSockets (Supabase Realtime) con ciclo de vida de pedidos (`pending → accepted → preparing → delivering → delivered | cancelled`), CRUD de productos con carga a Storage, control de horarios (`business_hours`) y gestión de staff/repartidores.
  2. **Consumidor (`/`):** Web App PWA con discovery de comercios publicados (`published = true`), catálogo interactivo categorizado y tracking de pedidos.
  3. **Repartidor:** Asignación de pedidos y trazabilidad de entrega.
* **Aspectos Técnicos Clave:**
  * **Seguridad Multi-Tenant:** Políticas estrictas de Row Level Security (RLS) en PostgreSQL asociadas a la membresía del local (`business_members`).
  * **Consistencia Numérica:** Precios modelados en enteros (centavos ARS) para erradicar errores de precisión de coma flotante.
  * **Distribución:** Arquitectura PWA con soporte para TWA (Trusted Web Activity) para publicación directa en Google Play Store con un único codebase.
  * **Embudo Comercial:** Flujo de registro de leads (`/negocio/registro` → tabla `leads`) y checklist de publicación asistida.

### 3. Auditoría de Seguridad Web & Re-Auditoría — Actual Supermercados (`actualonline.com.ar`)
* **Tipo:** *Responsible Disclosure* Ético, Auditoría Técnica Autorizada y Re-Auditoría Ejecutiva (Agosto 2026).
* **Alcance:** Backend PHP 8.2, SPA administrativa (`/admin/`), landing y APIs de e-commerce.
* **Métricas y Resultados:**
  * **22 hallazgos iniciales** con reporte técnico formal entregado a la dirección.
  * **Re-auditoría con matriz de regresión:** Verificación de 8 vulnerabilidades corregidas (ej: tokens de Mercado Pago y SendGrid expuestos removidos, endpoints de subida de archivos asegurados) y reporte de 8 nuevos hallazgos.
* **Vectores de Ataque Confirmados & Demostrados:**
  1. *Agotamiento de Cuota de IA:* Endpoint `POST /api/procesarComprobante` sin auth que consumía llamadas ilimitadas a la API de Anthropic Claude generando costos económicos reales.
  2. *Dump de Catálogo Completo:* Endpoint `POST /api/products/{id}` sin auth que exponía 5.040 productos, precios mayoristas/minoristas, stock y usuarios de caja.
  3. *Exposición Fiscal:* Endpoint `POST /api/getDataFiscalByEmpresa` exponiendo URLs de QR Fiscal de AFIP con CUIT y razón social.
  4. *Fuerza Bruta de Operadores:* Carencia de rate-limiting en login con contraseñas por defecto de 4 dígitos.
* **Entregables:** Informes Ejecutivos, Reportes Técnicos con PoCs (Proof of Concept) y Planes de Remediación Priorizados (Inmediato, Corto y Mediano Plazo).

### 4. Actual Supermercados (Operación Logística & IT de Piso)
* **Período:** Enero 2025 — Mayo 2026
* **Experiencia:** Coordinación logística en retail de alto volumen + soporte in-situ a PCs de cobro, impresoras fiscales y conectividad en cajas y depósito para evitar paradas operativas.

---

## 🎨 Perfiles de Adaptación

| Perfil | Foco del Mensaje | Proyectos a Priorizar |
| :--- | :--- | :--- |
| **Full Stack / Software Engineer** | Arquitectura punta a punta, Next.js, TypeScript, SSE, Mercado Pago, Postgres/Supabase, RLS, seguridad. | miBoliche, Bolívar Pide, Auditoría de Seguridad |
| **Studio IT / Support Technician** | Redes (subnets, APs, DNS), Linux, hardware PC, soporte nocturno en caliente, impresoras térmicas. | Red de miBoliche en Bosko, Soporte en Supermercado, NeptunoHost |
| **Desarrollo & Gestión (SQL / POS)** | Software de gestión operativa, procesos de negocio, flujos de caja y requerimientos de piso. | miBoliche (POS), Bolívar Pide, Retail Ops |
| **Live Operations / Game Presenter** | Comunicación en vivo, manejo de crisis bajo presión, presencia en cámara, idiomas. | Operación Bosko, RRPP, Branding asn.psd |

---

## 📌 Enlaces a Credenciales y Certificaciones

* **Mercado Pago Checkout Pro (Desarrollador Certificado):** [`/certs/checkout-pro.pdf`](file:///home/cipher/Projects/portfolio/public/certs/checkout-pro.pdf)
  * *Integrator ID:* `dev_24c65fb163bf11ea96500242ac130004`
  * *Competencias:* Preferencias avanzadas, Wallet Brick (SDK v2), Webhooks/IPN en tiempo real, conciliación transaccional y arquitectura modular de cobros.
* **Tecnicatura en Ciencia de Datos (Teclab):**
  * Constancia alumno regular: [`/certs/constancia.pdf`](file:///home/cipher/Projects/portfolio/public/certs/constancia.pdf)
  * Título Intermedio: [`/certs/intermedio.pdf`](file:///home/cipher/Projects/portfolio/public/certs/intermedio.pdf)
  * Certificado Analítico: [`/certs/analitico.pdf`](file:///home/cipher/Projects/portfolio/public/certs/analitico.pdf)
* **Egg Cooperation (Full Stack):**
  * Backend Java: [Certificado S3](https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673724399.pdf)
  * Frontend React: [Certificado S3](https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673624036.pdf)

