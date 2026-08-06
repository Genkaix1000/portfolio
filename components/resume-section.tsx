"use client";

import { useLocale } from "@/components/locale-provider";

export function ResumeSection() {
  const { t } = useLocale();

  return (
    <section id="resumen" className="section-band resume-band" aria-labelledby="resume-title">
      <div className="section-shell">
        <p className="section-kicker">{t.resume.kicker}</p>
        <h2 id="resume-title">{t.resume.title}</h2>

        <div className="resume-lead">
          <p>{t.resume.p1}</p>
          <p>
            {t.resume.p2Before}
            <strong>miBoliche</strong>
            {t.resume.p2Mid}
            <strong>Bolívar Pide</strong>
            {t.resume.p2After}
          </p>
          <p>
            {t.resume.p3Before}
            <strong>responsible disclosure</strong>
            {t.resume.p3Mid}
          </p>
        </div>

        <div className="resume-grid">
          <div>
            <h3>{t.resume.focusTitle}</h3>
            <ul className="skill-list">
              {t.resume.focus.map((item, index) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>{" "}
                  {index === 3 ? (
                    <>
                      {item.text}
                      <a href="https://www.instagram.com/matiasasin/" target="_blank" rel="noreferrer">
                        @matiasasin ↗
                      </a>
                    </>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t.resume.stackTitle}</h3>
            <ul className="skill-list">
              {t.resume.stack.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t.resume.eduTitle}</h3>
            {t.resume.edu.map((item) => (
              <div className="education-item" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
                <p className="credential-links">
                  {item.links.map((link) => (
                    <a key={link.href + link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
