"use client";

import { motion, MotionValue, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Track whether section 1 should still be mounted in the DOM.
  // Once scrolled past 10%, completely remove it so it can never ghost.
  const [showSection1, setShowSection1] = useState(true);

  useMotionValueEvent(progress, "change", (v) => {
    if (v > 0.10) {
      setShowSection1(false);
    } else {
      setShowSection1(true);
    }
  });

  // Section 1 — fades out from 4% to 8% of scroll, then is unmounted
  const opacity1 = useTransform(progress, [0, 0.04, 0.08], [1, 1, 0]);

  // Section 2 — starts at 25%, well past section 1's disappearance
  const opacity2 = useTransform(progress, [0.25, 0.32, 0.38, 0.44], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.25, 0.44], [40, -40]);

  // Section 3 — starts at 55%, well past section 2's disappearance
  const opacity3 = useTransform(progress, [0.55, 0.61, 0.68, 0.74], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.55, 0.74], [40, -40]);

  return (
    <div className="absolute inset-0 pointer-events-none text-white font-sans">

      {/* SECTION 1 - Center — unmounted from DOM once scrolled past threshold */}
      {showSection1 && (
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
            Eugene Keya
          </h1>
          <p className="text-xl md:text-3xl font-light text-neutral-300 tracking-wide">
            Software Developer & AI Automation Engineer
          </p>
        </motion.div>
      )}

      {/* SECTION 2 - Left */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 lg:px-24"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-2xl">
          I build digital <br />
          <span className="text-neutral-400 italic">experiences.</span>
        </h2>
      </motion.div>

      {/* SECTION 3 - Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 lg:px-24"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-2xl">
          Bridging design <br />
          and <span className="text-white italic">engineering.</span>
        </h2>
      </motion.div>

    </div>
  );
}
