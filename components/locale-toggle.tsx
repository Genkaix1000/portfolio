"use client";

import { useLocale } from "@/components/locale-provider";

export function LocaleToggle() {
  const { locale, toggleLocale, t } = useLocale();

  return (
    <button
      type="button"
      className="locale-toggle"
      onClick={toggleLocale}
      aria-label={t.nav.langAria}
      title={t.nav.langAria}
    >
      <span className={locale === "es" ? "is-active" : undefined}>ES</span>
      <i aria-hidden="true">/</i>
      <span className={locale === "en" ? "is-active" : undefined}>EN</span>
    </button>
  );
}
