"use client";

import { TerminalWindow } from "../terminal-window";

export function PortraitConsole() {
  return (
    <TerminalWindow
      title="PERFIL"
      subtitle="profile.jpg"
      variant="portrait"
    >
      <div className="flex flex-col items-center justify-center h-full">
        {/* Placeholder for profile photo */}
        <div className="relative w-full aspect-square max-w-[200px] rounded-lg overflow-hidden bg-muted/20 border border-border/50 group">
          {/* Replace src with your actual photo */}
          <img
            src="/images/profile-placeholder.jpg"
            alt="Matias Asin"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
          {/* Scanline overlay effect */}
          <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50" />
        </div>
        
        <div className="mt-4 text-center">
          <div className="text-[10px] text-muted-foreground font-mono">
            <span className="text-primary">status:</span> available
          </div>
        </div>
      </div>
    </TerminalWindow>
  );
}
