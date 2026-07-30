"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number };

export function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const points: Point[] = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00012,
      vy: (Math.random() - 0.5) * 0.00012,
    }));
    let frame = 0;

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const ratio = devicePixelRatio;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > 1) point.vx *= -1;
        if (point.y < 0 || point.y > 1) point.vy *= -1;
      });

      context.strokeStyle = "rgba(194, 207, 204, 0.18)";
      context.lineWidth = 0.5;
      points.forEach((point, index) => {
        points.slice(index + 1).forEach((other) => {
          const dx = (point.x - other.x) * width;
          const dy = (point.y - other.y) * height;
          if (Math.hypot(dx, dy) < 180) {
            context.beginPath();
            context.moveTo(point.x * width, point.y * height);
            context.lineTo(other.x * width, other.y * height);
            context.stroke();
          }
        });
      });
      context.fillStyle = "rgba(232, 237, 234, 0.55)";
      points.forEach((point) => {
        context.beginPath();
        context.arc(point.x * width, point.y * height, 1.25, 0, Math.PI * 2);
        context.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} className="constellation" aria-hidden="true" />;
}
