"use client";

import { useLanguage } from "@/contexts/language-context";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-card border border-border font-mono text-xs hover:border-primary/50 hover:bg-primary/5 transition-all group"
    >
      <span className="text-muted-foreground">{"[ "}</span>
      <span className="text-primary">LANG:</span>
      <span className="mx-1 text-muted-foreground">/</span>
      <span
        className={`transition-colors ${
          language === "es" ? "text-secondary font-bold" : "text-muted-foreground"
        }`}
      >
        ES
      </span>
      <span className="mx-1 text-muted-foreground">/</span>
      <span
        className={`transition-colors ${
          language === "en" ? "text-secondary font-bold" : "text-muted-foreground"
        }`}
      >
        EN
      </span>
      <span className="text-muted-foreground">{" ]"}</span>
    </button>
  );
}
