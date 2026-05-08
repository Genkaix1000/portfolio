"use client";

import { useRef, useState, useEffect } from "react";

interface AnimatedProgressProps {
  label: string;
  value: number;
  color?: "cyan" | "green";
}

export function AnimatedProgress({
  label,
  value,
  color = "cyan",
}: AnimatedProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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

  const bgColor = color === "cyan" ? "bg-primary" : "bg-secondary";

  return (
    <div ref={elementRef} className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
        <div
          className={`h-full ${bgColor} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${value}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}
