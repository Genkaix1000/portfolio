"use client";

import { TerminalWindow } from "../terminal-window";
import { SegmentedProgress } from "../segmented-progress";
import { GitHubHeatmap } from "../github-heatmap";
import { useLanguage } from "@/contexts/language-context";

export function SkillsConsole() {
  const { t } = useLanguage();

  const skills = [
    { label: t("Software Dev / UX", "Desarrollo / UX"), value: 85, color: "cyan" as const },
    { label: t("Data Analysis", "Análisis de Datos"), value: 75, color: "green" as const },
    { label: "Lua Scripting", value: 65, color: "orange" as const },
  ];

  const techStack = [
    { category: t("Languages", "Lenguajes"), items: ["Python", "TypeScript", "Dart", "Lua"] },
    { category: t("Frameworks", "Frameworks"), items: ["Next.js", "Flutter", "Tailwind CSS"] },
    { category: t("Data", "Datos"), items: ["SQL", "Pandas", "NumPy"] },
    { category: t("Design", "Diseño"), items: ["Figma", "Photoshop", "Illustrator"] },
  ];

  return (
    <TerminalWindow
      title={t("03 // DATA & STACK", "03 // DATOS & STACK")}
      subtitle="tech_stack.py"
      variant="skills"
    >
      <div className="space-y-5">
        {/* Skills progress */}
        <div className="space-y-3">
          <div className="text-xs text-muted-foreground mb-3">
            <span className="text-[#14b8a6]">{">"}</span> metrics.analyze()
          </div>
          {skills.map((skill) => (
            <SegmentedProgress
              key={skill.label}
              label={skill.label}
              value={skill.value}
              color={skill.color}
            />
          ))}
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/30">
          {techStack.map((stack) => (
            <div key={stack.category} className="space-y-1">
              <div className="text-[10px] text-[#14b8a6] font-medium">{stack.category}</div>
              <div className="flex flex-wrap gap-1">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="text-[9px] px-1.5 py-0.5 rounded bg-muted/20 text-muted-foreground border border-border/30 hover:border-[#14b8a6]/30 hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub heatmap */}
        <div className="pt-3 border-t border-border/30">
          <GitHubHeatmap />
        </div>
      </div>
    </TerminalWindow>
  );
}
