"use client";

import { useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";

const FRAME_COUNT = 192; // 0 to 191

interface ScrollyCanvasProps {
  progress: MotionValue<number>;
}

export default function ScrollyCanvas({ progress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Fill array so we don't have gaps if images load out of order
    imagesRef.current = new Array(FRAME_COUNT).fill(null);
    
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, '0');
        img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.png`;
        
        img.onload = () => {
          imagesRef.current[i] = img;
          // Draw the very first frame immediately once loaded
          if (i === 0 && canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0);
          }
        };
        // Also put it in directly in case it comes from cache quickly
        imagesRef.current[i] = img;
    }
  }, []);

  const frameIndex = useTransform(progress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const idx = Math.min(Math.max(Math.round(latest), 0), FRAME_COUNT - 1);
    const img = imagesRef.current[idx];

    if (img && img.complete && img.naturalWidth > 0) {
      if (canvas.width !== img.naturalWidth) {
        // Match natural resolution and let CSS object-cover scale the canvas
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
  );
}
