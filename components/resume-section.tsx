const eggCertificates = {
  backend:
    "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673724399.pdf",
  frontend:
    "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f787f294d117558b4fc81a-1756673624036.pdf",
};

export function ResumeSection() {
  return (
    <section id="resumen" className="section-shell resume-section" aria-labelledby="resume-title">
      <p className="section-kicker">01 — PERFIL</p>
      <h2 id="resume-title">SOBRE MÍ</h2>
      <div className="resume-grid">
        <div>
          <h3>Perfil</h3>
          <p>
            Profesional multidisciplinario con experiencia en desarrollo, datos y gestión
            operativa. Trabajo entre la necesidad de negocio y la solución digital, con foco
            en comunicación, criterio y mejora continua.
          </p>
        </div>
        <div>
          <h3>Stack principal</h3>
          <ul className="skill-list">
            <li><strong>Frontend</strong> React · Next.js · Flutter</li>
            <li><strong>Backend</strong> Java · SQL · Firebase</li>
            <li><strong>Data &amp; Analytics</strong> Excel · SQL · Reporting</li>
            <li><strong>Design</strong> Figma · Photoshop · Illustrator</li>
          </ul>
        </div>
        <div>
          <h3>Educación &amp; Certs</h3>
          <div className="education-item">
            <strong>Tecnicatura Sup. en Ciencia de Datos</strong>
            <span>Teclab — en curso · título intermedio</span>
            <p className="credential-links">
              <a href="/cv/pdfs/constancia.pdf" target="_blank" rel="noreferrer">Constancia ↗</a>
              <a href="/cv/pdfs/intermedio.pdf" target="_blank" rel="noreferrer">Intermedio ↗</a>
              <a href="/cv/pdfs/analitico.pdf" target="_blank" rel="noreferrer">Analítico ↗</a>
            </p>
          </div>
          <div className="education-item">
            <strong>Full Stack Web Dev</strong>
            <span>Egg Cooperation — completado</span>
            <p className="credential-links">
              <a href={eggCertificates.backend} target="_blank" rel="noreferrer">Backend Java ↗</a>
              <a href={eggCertificates.frontend} target="_blank" rel="noreferrer">Frontend React ↗</a>
            </p>
          </div>
        </div>
      </div>
      <a
        className="linkedin-link"
        href="https://www.linkedin.com/in/matias-asin-573320250/"
        target="_blank"
        rel="noreferrer"
      >
        LINKEDIN ↗
      </a>
    </section>
  );
}
