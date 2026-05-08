"use client";

import { TerminalWindow } from "../terminal-window";
import { useLanguage } from "@/contexts/language-context";

export function GmodConsole() {
  const { t } = useLanguage();

  const scripts = [
    {
      name: t("Active Scripts", "Scripts Activos"),
      count: 3,
      status: "live",
    },
    {
      name: t("In Development", "En Desarrollo"),
      count: 2,
      status: "dev",
    },
  ];

  return (
    <TerminalWindow
      title={t("SCRIPTING // GMOD STORE", "SCRIPTING // GMOD STORE")}
      subtitle="addons.lua"
      variant="gmod"
    >
      <div className="space-y-4">
        {/* GModStore profile style header */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#f97316]/5 border border-[#f97316]/20">
          <div className="w-10 h-10 rounded-lg bg-[#f97316]/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">Matias Asin</div>
            <div className="text-xs text-muted-foreground">{t("Verified Publisher", "Publicador Verificado")}</div>
          </div>
        </div>

        {/* Scripts summary */}
        <div className="grid grid-cols-2 gap-3">
          {scripts.map((script, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-muted/10 border border-border/50"
            >
              <div className="text-lg font-bold text-[#f97316]">{script.count}</div>
              <div className="text-xs text-muted-foreground">{script.name}</div>
              <div className="mt-1">
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    script.status === "live"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-[#f97316]/20 text-[#f97316]"
                  }`}
                >
                  {script.status === "live" ? "● LIVE" : "◐ DEV"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed">
          {t(
            "High-performance Lua scripts for multiplayer servers. Network sync, real-time HUD rendering, and custom game mechanics.",
            "Scripts Lua de alto rendimiento para servidores multijugador. Sincronización de red, renderizado HUD en tiempo real y mecánicas de juego personalizadas."
          )}
        </p>

        {/* Tags and CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/30">
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] px-2 py-1 rounded bg-[#000080]/30 text-[#5c94fc] border border-[#000080]/50">
              Lua
            </span>
            <span className="text-[10px] px-2 py-1 rounded bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/30">
              {"Garry's Mod"}
            </span>
          </div>
          
          <a
            href="https://gmodstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-lg bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] hover:bg-[#f97316]/20 transition-colors flex items-center gap-2"
          >
            [ {t("Visit GModStore", "Visitar GModStore")} 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            ]
          </a>
        </div>
      </div>
    </TerminalWindow>
  );
}
