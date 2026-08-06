"use client";

import { LocaleToggle } from "@/components/locale-toggle";
import { useLocale } from "@/components/locale-provider";

export function SiteHeader() {
  const { t } = useLocale();

  return (
    <header className="topbar">
      <div className="topbar-shell">
        <a href="#" className="wordmark">
          MATÍAS ASIN <span>· DATA &amp; SOFTWARE</span>
        </a>
        <nav aria-label={t.nav.aria}>
          <a href="#resumen">{t.nav.summary}</a>
          <a href="#proyectos">{t.nav.projects}</a>
          <a href="#contacto">{t.nav.contact}</a>
          <LocaleToggle />
        </nav>
      </div>
    </header>
  );
}
