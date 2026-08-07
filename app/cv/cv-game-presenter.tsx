export function CVGamePresenter() {
  return (
    <article className="cv-page cv-page-game">
      <header className="cv-header cv-header-game">
        <div className="cv-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cv/cv.png" alt="Matías Asin" />
        </div>

        <div className="cv-header-main">
          <h1>Matías Asin</h1>
          <p className="cv-role">Applying for: Game Presenter</p>
          <p className="cv-tagline">
            Live communication · composure under pressure · audience-ready presence
          </p>
        </div>

        <ul className="cv-contact">
          <li>Bolívar, BA, Argentina · 25</li>
          <li>
            <a href="tel:+5491170623866">+54 9 11 70623866</a>
          </li>
          <li>
            <a href="mailto:matiasasin123@gmail.com">matiasasin123@gmail.com</a>
          </li>
          <li>English · Spanish (native)</li>
        </ul>
      </header>

      <section className="cv-block">
        <h2>About Me</h2>
        <p>
          Motivated and adaptable professional from Argentina with experience in fast-paced
          customer-facing environments. Strong communication, positive energy on camera and
          on the floor, and the ability to stay clear under pressure. Looking to grow in
          iGaming as part of an international live team.
        </p>
      </section>

      <section className="cv-block">
        <h2>Experience</h2>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Software Developer & Project Consultant</h3>
            <span>Ongoing</span>
          </div>
          <p className="cv-job-role">Cocktrail / miBoliche · BolivarAPP</p>
          <ul>
            <li>
              Operate and support live nightlife systems in high-traffic venues — clear
              communication with staff and guests when the room is under pressure.
            </li>
            <li>
              Lead stakeholder meetings and translate complex flows into simple instructions;
              train teams for real-time service moments.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Logistics Coordinator</h3>
            <span>Jan 2025 — May 2026</span>
          </div>
          <p className="cv-job-role">Actual Supermercados</p>
          <ul>
            <li>
              Coordinated high-volume retail operations with composure, timing and team
              alignment — the same discipline a live table needs.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Customer Service & Public Relations</h3>
            <span>2020 — 2024</span>
          </div>
          <p className="cv-job-role">Various</p>
          <ul>
            <li>
              Face-to-face service, crisis management and conflict resolution with diverse
              audiences in high-stakes, fast-paced settings.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Freelance Graphic Designer</h3>
            <span>2024</span>
          </div>
          <p className="cv-job-role">Independent</p>
          <ul>
            <li>
              Brand and visual communication for clients — polished presence, clear messaging
              and direct relationship management.
            </li>
          </ul>
        </div>
      </section>

      <section className="cv-split cv-split-game">
        <div className="cv-block">
          <h2>Professional Skills</h2>
          <div className="cv-skills-grid">
            <div>
              <p className="cv-skills-label">On-air / Soft</p>
              <ul>
                <li>Live communication</li>
                <li>Crisis management</li>
                <li>Adaptability</li>
              </ul>
            </div>
            <div>
              <p className="cv-skills-label">Data & Logic</p>
              <ul>
                <li>Excel / SQL</li>
                <li>Reporting</li>
              </ul>
            </div>
            <div>
              <p className="cv-skills-label">Design</p>
              <ul>
                <li>PS / AI / Branding</li>
                <li>Visual identity</li>
              </ul>
            </div>
            <div>
              <p className="cv-skills-label">Systems</p>
              <ul>
                <li>Workflow ops</li>
                <li>Tech / Git</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-block">
          <h2>Education</h2>
          <div className="cv-edu">
            <strong>Higher Technical Degree in Data Science</strong>
            <span>Teclab — Final stages · Intermediate degree obtained</span>
          </div>
          <div className="cv-edu">
            <strong>Full Stack Web Development</strong>
            <span>Egg Cooperation — Java, React & databases</span>
          </div>
          <div className="cv-edu">
            <strong>High School Diploma (Bachiller)</strong>
            <span>EESN N° 4 — Complete secondary education</span>
          </div>
        </div>
      </section>
    </article>
  );
}
