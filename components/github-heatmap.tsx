"use client";

import { useState, useEffect, useRef } from "react";

export function GitHubHeatmap() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  // Generate random contribution data (simulated)
  const weeks = 12;
  const days = 7;
  const contributions = Array.from({ length: weeks * days }, () =>
    Math.floor(Math.random() * 5)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColor = (level: number, index: number) => {
    const isHovered = hoveredIndex === index;
    const baseColors = [
      "bg-muted/20",
      "bg-secondary/30",
      "bg-secondary/50",
      "bg-secondary/70",
      "bg-secondary",
    ];
    const hoverColors = [
      "bg-muted/40",
      "bg-secondary/50",
      "bg-secondary/70",
      "bg-secondary/90",
      "bg-secondary shadow-[0_0_8px_rgba(74,222,128,0.5)]",
    ];
    return isHovered ? hoverColors[level] : baseColors[level];
  };

  return (
    <div ref={elementRef} className="space-y-2">
      <div className="text-xs text-muted-foreground mb-2">
        <span className="text-secondary">$</span> git activity --preview
      </div>
      <div className="flex gap-[2px] flex-wrap">
        {contributions.map((level, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-300 cursor-pointer ${
              isVisible ? getColor(level, index) : "bg-muted/10"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 5}ms` : "0ms",
              transform: hoveredIndex === index ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-2">
        <span>Less</span>
        <div className="flex gap-[2px]">
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-[10px] h-[10px] rounded-[2px] ${
                ["bg-muted/20", "bg-secondary/30", "bg-secondary/50", "bg-secondary/70", "bg-secondary"][level]
              }`}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
