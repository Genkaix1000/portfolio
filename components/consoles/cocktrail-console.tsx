"use client";

import { TerminalWindow } from "../terminal-window";
import { useLanguage } from "@/contexts/language-context";

export function CocktrailConsole() {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      text: t("Smart digital menu system", "Sistema de menú digital inteligente"),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      text: t("Admin dashboard for bars", "Panel de administración para bares"),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      text: t("Dark mode for low-light venues", "Modo oscuro para ambientes con poca luz"),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      text: t("SQL-powered inventory tracking", "Seguimiento de inventario con SQL"),
    },
  ];

  return (
    <TerminalWindow
      title={t("PROJECT // COCKTRAIL", "PROYECTO // COCKTRAIL")}
      subtitle="smart_menu.tsx"
      variant="cocktrail"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Features list */}
        <div className="flex-1 space-y-3">
          <div className="text-xs text-muted-foreground mb-3">
            <span className="text-[#a855f7]">Next.js</span> + <span className="text-[#a855f7]">Tailwind</span> + <span className="text-[#a855f7]">SQL</span>
          </div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-xs group"
            >
              <span className="text-[#a855f7] group-hover:text-secondary transition-colors">
                {feature.icon}
              </span>
              <span className="text-foreground/80">{feature.text}</span>
            </div>
          ))}
          
          <div className="flex flex-wrap gap-2 pt-3 border-t border-border/30">
            <span className="text-[10px] px-2 py-1 rounded bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/30">
              Next.js
            </span>
            <span className="text-[10px] px-2 py-1 rounded bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/30">
              Tailwind
            </span>
            <span className="text-[10px] px-2 py-1 rounded bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/30">
              SQL
            </span>
          </div>
        </div>

        {/* Dashboard mockup placeholder */}
        <div className="w-full md:w-40 lg:w-48 shrink-0">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/20 border border-border/50 group">
            <img
              src="/images/cocktrail-mockup.jpg"
              alt="Cocktrail Dashboard"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            {/* Browser frame overlay */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-foreground/5 flex items-center gap-1 px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#27ca40]" />
            </div>
          </div>
        </div>
      </div>
    </TerminalWindow>
  );
}
