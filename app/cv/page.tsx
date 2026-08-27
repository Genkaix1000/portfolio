"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CVAdaptadoSql } from "./cv-adaptado-sql";
import { CVGamePresenter } from "./cv-game-presenter";
import { CVGeneral } from "./cv-general";
import { CVStudioIT } from "./cv-studio-it";
import "./cv.css";

type Variant = "general" | "game" | "studio" | "adaptado-sql";

const STORAGE_KEY = "cv-variant";
const VARIANTS: Variant[] = ["general", "game", "studio", "adaptado-sql"];

export default function CVPage() {
  const [variant, setVariant] = useState<Variant>("general");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && VARIANTS.includes(saved as Variant)) setVariant(saved as Variant);
  }, []);

  function select(next: Variant) {
    setVariant(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <main className="cv-shell">
      <div className="cv-toolbar print-hide">
        <Link href="/">← Portfolio</Link>

        <div className="cv-switch" role="group" aria-label="Versión del CV">
          <button
            type="button"
            className={variant === "general" ? "is-active" : undefined}
            onClick={() => select("general")}
          >
            General
          </button>
          <button
            type="button"
            className={variant === "game" ? "is-active" : undefined}
            onClick={() => select("game")}
          >
            Game Presenter
          </button>
          <button
            type="button"
            className={variant === "studio" ? "is-active" : undefined}
            onClick={() => select("studio")}
          >
            Studio IT
          </button>
          <button
            type="button"
            className={variant === "adaptado-sql" ? "is-active" : undefined}
            onClick={() => select("adaptado-sql")}
          >
            Adaptados
          </button>
        </div>

        <button type="button" onClick={() => window.print()}>
          Exportar PDF
        </button>
      </div>

      {variant === "general" ? (
        <CVGeneral />
      ) : variant === "game" ? (
        <CVGamePresenter />
      ) : variant === "studio" ? (
        <CVStudioIT />
      ) : (
        <CVAdaptadoSql />
      )}
    </main>
  );
}
