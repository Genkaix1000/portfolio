"use client";

import { useState } from "react";
import { TerminalWindow } from "../terminal-window";
import { TypeWriter } from "../type-writer";
import { useLanguage } from "@/contexts/language-context";

export function HeroConsole() {
  const [showOutput, setShowOutput] = useState(false);
  const { t } = useLanguage();

  const intro = t(
    "I'm 25 years old, a programmer, UX/UI designer, and an advanced student in the Data Science Associate Degree at Teclab. I build tools where data logic and usability meet.",
    "Tengo 25 años, soy programador, diseñador UX/UI y estudiante avanzado de la Tecnicatura Superior en Ciencia de Datos en Teclab. Creo herramientas donde la lógica de datos y la usabilidad se encuentran."
  );

  return (
    <TerminalWindow
      title={t("01 // INTRODUCTION", "01 // PRESENTACIÓN")}
      subtitle="matias_asin_init.sh"
      variant="hero"
      className="md:col-span-2"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-secondary">{">"}</span>
          <TypeWriter
            text="./init_portfolio.sh"
            speed={50}
            onComplete={() => setShowOutput(true)}
            className="text-foreground"
          />
        </div>

        {showOutput && (
          <div className="space-y-4 mt-4 pl-4 border-l-2 border-primary/30">
            <div className="animate-fade-in">
              <p className="text-foreground/90 leading-relaxed text-sm">
                {intro}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <span className="text-[10px] px-2 py-1 rounded bg-secondary/20 text-secondary border border-secondary/30">
                San Carlos de Bolívar, Argentina
              </span>
              <span className="text-[10px] px-2 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                {t("Open to Work", "Disponible")}
              </span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </TerminalWindow>
  );
}
