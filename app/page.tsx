"use client";

import { HeroConsole } from "@/components/consoles/hero-console";
import { PortraitConsole } from "@/components/consoles/portrait-console";
import { EducationConsole } from "@/components/consoles/education-console";
import { BolivarAppConsole } from "@/components/consoles/bolivar-app-console";
import { CocktrailConsole } from "@/components/consoles/cocktrail-console";
import { GmodConsole } from "@/components/consoles/gmod-console";
import { SkillsConsole } from "@/components/consoles/skills-console";
import { ContactConsole } from "@/components/consoles/contact-console";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LanguageProvider, useLanguage } from "@/contexts/language-context";
import Link from "next/link";

function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-16 md:px-8">
      <LanguageSwitcher />
      
      <div className="max-w-6xl mx-auto">
        {/* Header with typing effect */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs text-muted-foreground font-mono">
              system.active
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-mono text-foreground mb-4 text-balance">
            <span className="text-primary">{"{"}</span>
            {" Matias Asin "}
            <span className="animate-blink">_</span>
            <span className="text-primary">{"}"}</span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm md:text-base">
            {t(
              "Programmer • Data Scientist • UX Designer",
              "Programador • Científico de Datos • Diseñador UX"
            )}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/cv"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 font-mono text-sm font-bold text-foreground bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 shadow-xl active:scale-95"
            >
              <span className="text-primary animate-pulse">{">"}</span>
              {t("View Full CV", "Ver CV Completo")}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
            </Link>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Row 1: Hero (2 cols) + Portrait (1 col) */}
          <HeroConsole />
          <PortraitConsole />

          {/* Row 2: Education (full width) */}
          <div className="md:col-span-3">
            <EducationConsole />
          </div>

          {/* Row 3: Projects */}
          <div className="md:col-span-2">
            <BolivarAppConsole />
          </div>
          <CocktrailConsole />

          {/* Row 4: GMod + Skills */}
          <GmodConsole />
          <div className="md:col-span-2">
            <SkillsConsole />
          </div>

          {/* Row 5: Contact (full width) */}
          <ContactConsole />
        </div>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">©</span> 2026 Matias Asin
            <span className="mx-2 text-border">|</span>
            <span className="text-secondary">{"</"}</span>
            {t("Built with passion", "Hecho con pasión")}
            <span className="text-secondary">{">"}</span>
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </main>
  );
}

export default function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
