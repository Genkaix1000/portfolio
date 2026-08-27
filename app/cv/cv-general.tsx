export function CVGeneral() {
  return (
    <article className="cv-page">
      <header className="cv-header">
        <div className="cv-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/portrait.png" alt="Matías Asin" />
        </div>
        <div className="cv-header-main">
          <h1>Matías Asin</h1>
          <p className="cv-role">Software Engineer · Full Stack</p>
        </div>
        <ul className="cv-contact">
          <li>Bolívar, BA, Argentina</li>
          <li>
            <a href="mailto:matiasasin123@icloud.com">matiasasin123@icloud.com</a>
          </li>
          <li>
            <a href="tel:+5491170623866">+54 9 11 70623866</a>
          </li>
          <li>
            <a href="https://github.com/Genkaix1000" target="_blank" rel="noreferrer">
              github.com/Genkaix1000
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matias-asin-573320250/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </header>

      <section className="cv-block">
        <h2>Perfil</h2>
        <p>
          Desarrollador full stack. Diseño e implemento productos de punta a punta —
          código, operación, cobros y soporte — con criterio de datos, seguridad y
          experiencia de uso. Trabajo desde el problema de negocio hasta un sistema
          listo para producción.
        </p>
      </section>

      <section className="cv-block">
        <h2>Experiencia</h2>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>miBoliche</h3>
            <span>May 2026 — Presente</span>
          </div>
          <p className="cv-job-role">Full Stack · Operations & Product</p>
          <ul>
            <li>
              Sistema de POS y pedidos por QR en operación nocturna (carta, barra, caja).
            </li>
            <li>
              Integración de cobros con Mercado Pago Checkout Pro; entrenamiento de staff
              y soporte en vivo.
            </li>
            <li>En producción estable desde julio tras pruebas exitosas.</li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Bolívar Pide</h3>
            <span>Ago 2026 — Presente · Beta</span>
          </div>
          <p className="cv-job-role">Full Stack · Product</p>
          <ul>
            <li>
              Plataforma de delivery local (usuario, negocio, repartidor) con Next.js,
              Postgres y PWA.
            </li>
            <li>Misma metodología punta a punta; producto aún en fase beta.</li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Actual Supermercados</h3>
            <span>Ene 2025 — May 2026</span>
          </div>
          <p className="cv-job-role">Coordinación logística / operación</p>
          <ul>
            <li>
              Responsabilidad operativa sobre vehículo y flujos logísticos en retail de
              alto volumen.
            </li>
            <li>
              Caso de responsible disclosure en superficie web (auditoría autorizada).
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Atención al cliente & freelance design</h3>
            <span>2020 — Presente</span>
          </div>
          <p className="cv-job-role">Comunicación · Identidad visual</p>
          <ul>
            <li>Experiencia en entornos de alta presión y trato directo con clientes.</li>
            <li>Diseño gráfico freelance (identidad / piezas) — asn.psd.</li>
          </ul>
        </div>
      </section>

      <section className="cv-split">
        <div className="cv-block">
          <h2>Stack</h2>
          <ul className="cv-chips">
            <li>Next.js / React</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>SQL / Postgres</li>
            <li>Flutter</li>
            <li>Mercado Pago Checkout Pro</li>
            <li>API security / pentest</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="cv-block">
          <h2>Educación & Certificaciones</h2>
          <div className="cv-edu">
            <strong>Tecnicatura Sup. en Ciencia de Datos</strong>
            <span>Teclab — en curso · título intermedio</span>
          </div>
          <div className="cv-edu">
            <strong>Full Stack Web Development</strong>
            <span>Egg Cooperation — completado (Java / React)</span>
          </div>
          <div className="cv-edu">
            <strong>Mercado Pago Checkout Pro</strong>
            <span>Certificación oficial de integración de cobros</span>
          </div>
        </div>
      </section>

      <section className="cv-block">
        <h2>Idiomas</h2>
        <p>Español (nativo) · English (professional working)</p>
      </section>
    </article>
  );
}
