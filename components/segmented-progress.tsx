"use client";

import { useRef, useState, useEffect } from "react";

interface SegmentedProgressProps {
  label: string;
  value: number;
  color?: "cyan" | "green" | "purple" | "orange" | "teal";
}

const colorMap = {
  cyan: "text-primary",
  green: "text-secondary",
  purple: "text-[#a855f7]",
  orange: "text-[#f97316]",
  teal: "text-[#14b8a6]",
};

export function SegmentedProgress({
  label,
  value,
  color = "cyan",
}: SegmentedProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  
  const totalBlocks = 12;
  const filledBlocks = Math.round((value / 100) * totalBlocks);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let current = 0;
    const increment = value / 20;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.round(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const blocks = Array.from({ length: totalBlocks }, (_, i) => {
    const isFilled = isVisible && i < filledBlocks;
    return isFilled ? "█" : "░";
  });

  return (
    <div ref={elementRef} className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className={colorMap[color]}>{displayValue}%</span>
      </div>
      <div className="font-mono text-xs tracking-tighter">
        <span className="text-muted-foreground">[</span>
        {blocks.map((block, i) => (
          <span
            key={i}
            className={`transition-all duration-100 ${
              block === "█" ? colorMap[color] : "text-muted-foreground/30"
            }`}
            style={{
              transitionDelay: isVisible ? `${i * 50}ms` : "0ms",
            }}
          >
            {block}
          </span>
        ))}
        <span className="text-muted-foreground">]</span>
      </div>
    </div>
  );
}
