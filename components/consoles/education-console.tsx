"use client";

import { TerminalWindow } from "../terminal-window";
import { useLanguage } from "@/contexts/language-context";

interface EducationEntry {
  title: { en: string; es: string };
  institution: string;
  status: { en: string; es: string };
  verifyUrl?: string;
}

const educationData: EducationEntry[] = [
  {
    title: {
      en: "Data Science Associate Degree",
      es: "Tecnicatura Superior en Ciencia de Datos",
    },
    institution: "Teclab",
    status: {
      en: "Finalizing - Intermediate Diploma obtained",
      es: "Finalizando - Diploma Intermedio obtenido",
    },
    verifyUrl: "#",
  },
  {
    title: {
      en: "Professional Update in AI",
      es: "Actualización Profesional en IA",
    },
    institution: "Teclab",
    status: {
      en: "120 hrs Certificate",
      es: "Certificado de 120 hrs",
    },
    verifyUrl: "#",
  },
  {
    title: {
      en: "Full Stack Web Developer",
      es: "Desarrollador Web Full Stack",
    },
    institution: "EGG Cooperation",
    status: {
      en: "518 hrs Certificate",
      es: "Certificado de 518 hrs",
    },
    verifyUrl: "#",
  },
  {
    title: {
      en: "Backend Specialist",
      es: "Especialista en Backend",
    },
    institution: "EGG Cooperation",
    status: {
      en: "150 hrs Certificate",
      es: "Certificado de 150 hrs",
    },
    verifyUrl: "#",
  },
];

export function EducationConsole() {
  const { language, t } = useLanguage();

  return (
    <TerminalWindow
      title={t("02 // EDUCATION", "02 // FORMACIÓN")}
      subtitle="education_records.log"
      variant="education"
    >
      <div className="space-y-3">
        {educationData.map((entry, index) => (
          <div
            key={index}
            className="group p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors border border-transparent hover:border-[#3b82f6]/20"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1 flex-1 min-w-0">
                <p className="text-xs text-foreground font-medium leading-tight">
                  {language === "en" ? entry.title.en : entry.title.es}
                </p>
                <p className="text-xs text-[#3b82f6]">{entry.institution}</p>
                <p className="text-xs text-muted-foreground">
                  {language === "en" ? entry.status.en : entry.status.es}
                </p>
              </div>
              {entry.verifyUrl && (
                <a
                  href={entry.verifyUrl}
                  className="shrink-0 text-[10px] px-2 py-1 rounded border border-[#3b82f6]/30 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-colors"
                >
                  [{t("Verify", "Verificar")}]
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </TerminalWindow>
  );
}
