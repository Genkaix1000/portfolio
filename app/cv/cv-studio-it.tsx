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
                Hands-on IT support · live venue ops · Windows, networking &amp; Linux
              </p>
            </div>
            <ul className="cv-contact">
              <li>Bolívar, BA, Argentina</li>
              <li>
                <a href="tel:+5491170623866">+54 9 11 70623866</a>
              </li>
              <li>
                <a href="mailto:matiasasin123@icloud.com">matiasasin123@icloud.com</a>
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
          25-year-old hands-on IT support after moving from retail ops into technology.
          Experience with live venue devices and networks (PCs, tablets, printers, Wi‑Fi),
          home lab / CCTV, and Linux. Methodical troubleshooting, clear notes, calm under
          time pressure — eager to learn studio IT under guidance in a live production team.
        </p>
      </section>

      <section className="cv-block">
        <h2>Experience</h2>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>miBoliche</h3>
            <span>May 2026 — Present</span>
          </div>
          <p className="cv-job-role">Live venue IT support · on-site</p>
          <ul>
            <li>
              First-line support during overnight service: tablets, PCs, printers and floor
              devices. Phone notes during shifts; fixes the next day from staff feedback.
            </li>
            <li>
              On-site network: split Wi‑Fi into two subnets (ops vs customers), configured APs,
              and diagnosed intermittent micro-cuts until the floor network stabilized.
            </li>
            <li>
              Day-to-day device setup and connectivity — Bluetooth/USB printers, tablets and
              PCs — keeping service running when hardware misbehaved mid-shift.
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
              Built and sold complete PCs from used components; repair and troubleshooting for
              clients (boot issues, drivers, peripherals).
            </li>
            <li>
              Home network lab: port forwarding, self-hosted test servers, basic LAN setup and
              device connectivity checks.
            </li>
            <li>
              Home CCTV: physical camera install, Wi‑Fi provisioning, NVR-style phone app link
              and basic monitoring.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>Actual Supermercados</h3>
            <span>Jan 2025 — May 2026</span>
          </div>
          <p className="cv-job-role">Retail ops · first-line PC &amp; printer support</p>
          <ul>
            <li>
              High-volume retail logistics; reliable under time pressure and shift-critical
              deadlines.
            </li>
            <li>
              Floor IT when ops stopped: diagnosed and repaired store PCs, fixed printers
              (jams, connectivity, drivers) so checkout and warehouse could keep running.
            </li>
            <li>
              After leaving: authorized responsible disclosure on a public web surface;
              reported findings to ownership.
            </li>
          </ul>
        </div>

        <div className="cv-job">
          <div className="cv-job-meta">
            <h3>NeptunoHost</h3>
            <span>2020</span>
          </div>
          <p className="cv-job-role">Game server hosting · Linux VPS · user support</p>
          <ul>
            <li>
              Ran a Linux VPS partitioned for clients: account provisioning, assigned ports,
              cPanel and FTP for content uploads.
            </li>
            <li>
              Day-to-day user support via Discord and WhatsApp — clear instructions and
              follow-up until each client was back online.
            </li>
          </ul>
        </div>
      </section>

      <section className="cv-block">
        <h2>Skills</h2>
        <div className="cv-skills-grid cv-skills-grid-studio">
          <div>
            <p className="cv-skills-label">Hardware &amp; Windows</p>
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
              <li>TCP/IP · DNS · subnets · ports</li>
              <li>APs · LAN setups · basic proxy</li>
            </ul>
          </div>
          <div>
            <p className="cv-skills-label">Live support</p>
            <ul>
              <li>First-line device support</li>
              <li>Home CCTV install</li>
              <li>Incident notes · calm escalation</li>
              <li>Trello (task / backlog habit)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cv-block">
        <h2>Education</h2>
        <div className="cv-edu-row">
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
