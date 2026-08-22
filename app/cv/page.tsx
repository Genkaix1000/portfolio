"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CVGamePresenter } from "./cv-game-presenter";
import { CVGeneral } from "./cv-general";
import { CVStudioIT } from "./cv-studio-it";
import "./cv.css";

type Variant = "general" | "game" | "studio";

const STORAGE_KEY = "cv-variant";

export default function CVPage() {
  const [variant, setVariant] = useState<Variant>("general");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "general" || saved === "game" || saved === "studio") setVariant(saved);
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
        </div>

        <button type="button" onClick={() => window.print()}>
          Exportar PDF
        </button>
      </div>

      {variant === "general" ? (
        <CVGeneral />
      ) : variant === "game" ? (
        <CVGamePresenter />
      ) : (
        <CVStudioIT />
      )}
    </main>
  );
}
