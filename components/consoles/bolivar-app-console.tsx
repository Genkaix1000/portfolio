"use client";

import { TerminalWindow } from "../terminal-window";
import { useLanguage } from "@/contexts/language-context";

export function BolivarAppConsole() {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: t("Interactive local business map", "Mapa interactivo de comercios locales"),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      text: t("Geolocated real-time reviews", "Reseñas geolocalizadas en tiempo real"),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      text: t("Premium mobile UX design", "Diseño UX móvil de alta gama"),
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      text: t("Civic tech for local commerce", "Civic tech para comercio local"),
    },
  ];

  return (
    <TerminalWindow
      title={t("PROJECT // BOLIVARAPP", "PROYECTO // BOLÍVARAPP")}
      subtitle="local_market.dart"
      variant="bolivar"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Features list */}
        <div className="flex-1 space-y-3">
          <div className="text-xs text-muted-foreground mb-3">
            <span className="text-primary">Flutter</span> + <span className="text-primary">Dart</span>
          </div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-xs group"
            >
              <span className="text-primary group-hover:text-secondary transition-colors">
                {feature.icon}
              </span>
              <span className="text-foreground/80">{feature.text}</span>
            </div>
          ))}
          
          <div className="flex flex-wrap gap-2 pt-3 border-t border-border/30">
            <span className="text-[10px] px-2 py-1 rounded bg-[#0277bd]/20 text-[#4fc3f7] border border-[#0277bd]/30">
              Flutter
            </span>
            <span className="text-[10px] px-2 py-1 rounded bg-[#0277bd]/20 text-[#4fc3f7] border border-[#0277bd]/30">
              Dart
            </span>
            <span className="text-[10px] px-2 py-1 rounded bg-secondary/20 text-secondary border border-secondary/30">
              Civic Tech
            </span>
          </div>
        </div>

        {/* App mockup placeholder */}
        <div className="w-full md:w-32 lg:w-40 shrink-0">
          <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-muted/20 border border-border/50 group">
            <img
              src="/images/bolivarapp-mockup.jpg"
              alt="BolivarApp Mockup"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            {/* Phone frame overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-lg border-4 border-foreground/10" />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-foreground/20" />
          </div>
        </div>
      </div>
    </TerminalWindow>
  );
}
