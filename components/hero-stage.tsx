"use client";

import Image from "next/image";
import { useLocale } from "@/components/locale-provider";

export function HeroStage() {
  const { t } = useLocale();

  return (
    <section className="hero-stage" aria-labelledby="hero-title">
      <div className="stage-copy">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 id="hero-title">
          {t.hero.title}
          <br />
          <span>{t.hero.titleSub}</span>
        </h1>
        <p className="hero-statement">{t.hero.statement}</p>
        <p className="hero-context">{t.hero.context}</p>
        <div className="hero-actions">
          <a href="#proyectos">
            {t.hero.projects} <span>↓</span>
          </a>
          <a href="mailto:matiasasin123@icloud.com">
            {t.hero.contact} <span>↗</span>
          </a>
        </div>
      </div>

      <div className="stage-portrait">
        <div className="portrait-frame">
          <Image
            src="/portrait.png"
            alt={t.hero.photoAlt}
            fill
            sizes="(max-width: 760px) 80vw, 385px"
            priority
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
        <span className="role-badge badge-engineer">SOFTWARE ENGINEER</span>
        <span className="role-badge badge-data">DATA SCIENCE</span>
        <span className="role-badge badge-fullstack">FULL STACK DEV</span>
      </div>
    </section>
  );
}
