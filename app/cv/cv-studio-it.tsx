export function CVStudioIT() {
  return (
    <article className="cv-page cv-page-game cv-page-studio">
      <header className="cv-header cv-header-studio">
        <div className="cv-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/portrait.png" alt="Matías Asin" />
        </div>

        <div className="cv-header-main">
          <div className="cv-header-top">
            <div>
              <h1>Matías Asin</h1>
              <p className="cv-role">Junior Studio IT Technician</p>
              <p className="cv-tagline">
                Hands-on IT · live venue ops · Linux &amp; networking · security judgment
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
              <li>
                <a href="https://matiasasin.is-a.dev/" target="_blank" rel="noreferrer">
                  matiasasin.is-a.dev
                </a>
              </li>
              <li>
                <a href="https://github.com/Genkaix1000" target="_blank" rel="noreferrer">
                  github.com/Genkaix1000
                </a>
              </li>
              <li>English · Spanish (native)</li>
              <li>Open to relocate to Malta</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="cv-block">
        <h2>About Me</h2>
        <p>
          Hands-on IT after a full transition from retail ops into technology. Live venue
          systems on-site, Linux VPS hosting, home lab / CCTV, and local-first software for
          the floor. Windows end-to-end; Linux daily (Arch). Methodical troubleshooting, clear
          notes, calm under time pressure — eager to grow in a live studio IT team.
        </p>
      </section>

      <section className="cv-block">
        <h2>Experience</h2>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>miBoliche</h3>
            <span>May 2026 — Present</span>
          </div>
          <p className="cv-job-role">Live ops · on-site IT &amp; systems</p>
          <ul>
            <li>
              Production POS / QR nightlife stack with overnight support; no mid-shift production
              changes — phone notes during service, fixes the next day from feedback.
            </li>
            <li>
              On-site network and devices: split Wi‑Fi into two subnets (system vs customers, different
              bandwidth); APs, printers (Bluetooth/USB), tablets and PCs; diagnosed micro-cuts and
              stabilized the floor network.
            </li>
            <li>
              Stack context: backend on Render, frontend on Vercel, Postgres, DNS / proxy / Cloudflare.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>VentaPro</h3>
            <span>Aug 2026 — Present</span>
          </div>
          <p className="cv-job-role">Solo · local-first retail POS · in development</p>
          <ul>
            <li>
              Designing and building a local-first POS for retail: stack on the merchant PC, LAN PWA
              for phones, local Postgres (Docker), barcode-oriented flows and Drive backups.
            </li>
            <li>Full ownership of product, architecture and security / permissions design.</li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Bolívar Pide</h3>
            <span>Aug 2026 — Present · Beta</span>
          </div>
          <p className="cv-job-role">Product / UX / visual lead</p>
          <ul>
            <li>
              Own product idea, user flows and graphic design for a local delivery platform; partner
              owns the backend.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>NeptunoHost</h3>
            <span>~2020</span>
          </div>
          <p className="cv-job-role">Game server hosting · Linux VPS</p>
          <ul>
            <li>
              Rented Baehost VPS, partitioned for clients (game server base image); manual account
              provisioning, assigned port per slice, cPanel + FTP for content uploads.
            </li>
            <li>
              Mitigations: Cloudflare, proxy, rate-limit; daily 08:00 restart; provider-managed
              backups. Support via Discord / WhatsApp. Fixed early lag by reducing client slots and
              raising per-client capacity.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Hardware &amp; personal IT</h3>
            <span>Ongoing</span>
          </div>
          <p className="cv-job-role">Build · repair · networking · CCTV</p>
          <ul>
            <li>
              Built and sold complete PCs from used components; offered PC repair and
              troubleshooting for clients.
            </li>
            <li>Port forwarding and self-hosted test servers on the home network.</li>
            <li>Home CCTV: physical install, Wi‑Fi provisioning and phone app link.</li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Actual Supermercados</h3>
            <span>Jan 2025 — May 2026</span>
          </div>
          <p className="cv-job-role">Logistics / retail ops · later authorized security review</p>
          <ul>
            <li>
              Non-tech logistics in high-volume retail until resignation; then full focus on IT.
            </li>
            <li>
              After leaving: responsible disclosure on Actual Online — contacted the owner after a
              public-surface finding, obtained authorization, and delivered a security assessment with
              critical issues (exposed payment credentials, unauthenticated dangerous upload path,
              secrets in API responses; weak login controls / no rate limiting). Follow-up re-audit
              verified key remediations.
            </li>
          </ul>
        </div>
      </section>

      <section className="cv-split cv-split-game">
        <div className="cv-block">
          <h2>Skills</h2>
          <div className="cv-skills-grid">
            <div>
              <p className="cv-skills-label">Hardware &amp; OS</p>
              <ul>
                <li>PC build / assembly</li>
                <li>Windows (full)</li>
                <li>Peripherals · printers · tablets</li>
              </ul>
            </div>
            <div>
              <p className="cv-skills-label">Linux &amp; networking</p>
              <ul>
                <li>Arch (daily) · Ubuntu server</li>
                <li>Subnets · DNS · TCP/IP · ports</li>
                <li>Cloudflare · proxy · LAN setups</li>
              </ul>
            </div>
            <div>
              <p className="cv-skills-label">Ops &amp; studio-adjacent</p>
              <ul>
                <li>Live device setup</li>
                <li>Home CCTV</li>
                <li>Trello (backlog / onboard)</li>
                <li>Incident notes · calm escalation</li>
              </ul>
            </div>
            <div>
              <p className="cv-skills-label">Software (criterion)</p>
              <ul>
                <li>Next.js / TypeScript</li>
                <li>Postgres · Docker local</li>
                <li>Git · deploy basics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-block">
          <h2>Education</h2>
          <div className="cv-edu">
            <strong>Higher Technical Degree in Data Science</strong>
            <span>Teclab — in progress · intermediate degree obtained</span>
          </div>
          <div className="cv-edu">
            <strong>Full Stack Web Development</strong>
            <span>Egg Cooperation — Java, React &amp; databases</span>
          </div>
          <div className="cv-edu">
            <strong>Languages</strong>
            <span>Spanish (native) · English (professional working)</span>
          </div>
        </div>
      </section>
    </article>
  );
}
