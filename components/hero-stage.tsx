import Image from "next/image";

export function HeroStage() {
  return (
    <section className="hero-stage" aria-labelledby="hero-title">
      <div className="stage-copy">
        <p className="eyebrow">BUENOS AIRES · ARGENTINA</p>
        <h1 id="hero-title">
          SOFTWARE ENGINEER
          <br />
          <span>&amp; DATA SCIENTIST</span>
        </h1>
        <p className="hero-statement">Sistemas claros para problemas que no lo son.</p>
        <p className="hero-context">
          Desarrollo productos digitales y convierto operaciones complejas en flujos
          medibles, simples y humanos.
        </p>
        <div className="hero-actions">
          <a href="#resumen">RESUMEN <span>↓</span></a>
          <a href="mailto:matiasasin123@gmail.com">CONTACTAR <span>↗</span></a>
        </div>
      </div>

      <div className="stage-portrait">
        <div className="portrait-frame">
          <Image src="/cv/cv.png" alt="Matías Asin" fill sizes="(max-width: 760px) 80vw, 385px" priority />
        </div>
        <span className="role-badge badge-engineer">SOFTWARE ENGINEER</span>
        <span className="role-badge badge-data">DATA SCIENCE</span>
        <span className="role-badge badge-fullstack">FULL STACK DEV</span>
      </div>
    </section>
  );
}
