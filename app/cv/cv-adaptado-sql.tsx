export function CVAdaptadoSql() {
  return (
    <article className="cv-page cv-page-adaptado">
      <header className="cv-header">
        <div className="cv-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/portrait.png" alt="Matías Asin" />
        </div>
        <div className="cv-header-main">
          <h1>Matías Asin</h1>
          <p className="cv-role">Analista Funcional Trainee · Soporte &amp; Requerimientos</p>
        </div>
        <ul className="cv-contact">
          <li>Bolívar, BA · 25 años · disponible ARG full time (turnos)</li>
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
          <li>Español nativo · English (professional working)</li>
        </ul>
      </header>

      <section className="cv-block">
        <h2>Perfil</h2>
        <p>
          Estudiante avanzado de Tecnicatura Superior en Ciencia de Datos (Teclab · título
          intermedio), con experiencia relevando necesidades de usuarios, documentando
          procesos, dando soporte funcional ante incidencias y acompañando mejoras en
          aplicaciones de gestión en producción. SQL en uso diario (Postgres), testing
          manual y comunicación clara con equipos de operación y desarrollo. Busco un rol
          de Analista Funcional Trainee: soporte N2, especificaciones y seguimiento de
          requerimientos, con disponibilidad full time en turnos.
        </p>
      </section>

      <section className="cv-block">
        <h2>Experiencia</h2>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>miBoliche — Bosko Nightclub</h3>
            <span>May 2026 — Presente</span>
          </div>
          <p className="cv-job-role">
            Soporte funcional &amp; análisis de requerimientos · software de gestión
          </p>
          <ul>
            <li>
              Atención de incidencias y consultas del staff (barra, caja, tablets):
              registro, diagnóstico, resolución o escalamiento, y seguimiento hasta el
              cierre.
            </li>
            <li>
              Relevamiento de necesidades de usuarios finales y traducción a mejoras
              funcionales; documentación de procesos y capacitación presencial.
            </li>
            <li>
              Testing manual en producción y post-cambio; monitoreo operativo en picos de
              ~1.000 pedidos/noche.
            </li>
            <li>
              Comunicación entre operación y desarrollo: priorizar por impacto y validar
              que la solución cumpla el caso de uso del piso.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Bolívar Pide</h3>
            <span>Ago 2026 — Presente · Beta</span>
          </div>
          <p className="cv-job-role">Análisis funcional · historias &amp; pruebas</p>
          <ul>
            <li>
              Levantamiento de flujos (comercio, consumidor, repartidor) y ciclo de vida
              de pedidos; definición de reglas y estados.
            </li>
            <li>
              Documentación de mejoras, pruebas de consistencia y casos de prueba manuales
              en beta antes de publicar.
            </li>
            <li>
              Consultas SQL sobre Postgres para validar datos, inconsistencias y reportes
              de seguimiento.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Actual Supermercados</h3>
            <span>Ene 2025 — May 2026</span>
          </div>
          <p className="cv-job-role">Soporte operativo · incidentes &amp; continuidad</p>
          <ul>
            <li>
              Soporte de primer/segundo nivel en piso: PCs de caja/depósito, impresoras y
              conectividad — tickets informales, priorización y cierre.
            </li>
            <li>
              Capacitación breve a usuarios y seguimiento hasta restablecer facturación /
              despacho.
            </li>
            <li>
              Responsible disclosure autorizado: relevamiento, reporte a dirección y
              acompañamiento de remediaciones.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>NeptunoHost</h3>
            <span>2020</span>
          </div>
          <p className="cv-job-role">Mesa de ayuda · seguimiento de tickets</p>
          <ul>
            <li>
              Alta y seguimiento de requerimientos por Discord/WhatsApp hasta dejar al
              usuario operativo — comunicación clara y registro del caso.
            </li>
          </ul>
        </div>
      </section>

      <section className="cv-split">
        <div className="cv-block">
          <h2>Funcional &amp; soporte</h2>
          <ul className="cv-chips">
            <li>Relevamiento de requerimientos</li>
            <li>Documentación funcional</li>
            <li>Historias / casos de uso (práctica)</li>
            <li>Casos de prueba &amp; testing manual</li>
            <li>Soporte N1/N2 · incidentes</li>
            <li>Capacitación a usuarios</li>
            <li>Seguimiento con desarrollo / QA</li>
          </ul>
        </div>

        <div className="cv-block">
          <h2>Herramientas</h2>
          <ul className="cv-chips">
            <li>SQL · Postgres</li>
            <li>Análisis de datos de apps</li>
            <li>APIs REST (nociones)</li>
            <li>Postman — en aprendizaje</li>
            <li>UML / Scrum — nociones</li>
            <li>Git</li>
            <li>Full time · turnos ARG</li>
          </ul>
        </div>
      </section>

      <section className="cv-block">
        <h2>Educación</h2>
        <div className="cv-edu">
          <strong>Tecnicatura Superior en Ciencia de Datos</strong>
          <span>Teclab — etapa final · título intermedio · SQL y análisis</span>
        </div>
        <div className="cv-edu">
          <strong>Full Stack Web Development</strong>
          <span>Egg Cooperation — Java, React y bases de datos</span>
        </div>
        <div className="cv-edu">
          <strong>Mercado Pago Checkout Pro</strong>
          <span>Certificación oficial de integración de cobros</span>
        </div>
      </section>
    </article>
  );
}
