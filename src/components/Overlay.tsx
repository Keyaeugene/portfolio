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

      {/* SECTION 1 - Matches Requested Typography & Layout */}
      {showSection1 && (
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 lg:px-24"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-2 text-white">
            Hi, I'm Eugene Keya
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#00a2ff] mb-6 drop-shadow-[0_0_10px_rgba(0,162,255,0.4)]">
            Software Developer & AI Automation Engineer
          </h2>
          <p className="text-base md:text-lg font-light text-neutral-300 max-w-2xl mb-8 leading-relaxed">
            I craft digital experiences that combine robust engineering with elegant design.
            From architecting scalable software ecosystems to automating complex workflows,
            everything I build is meant to perform seamlessly.
          </p>
          <div className="flex flex-wrap gap-4 lg:gap-6 pointer-events-auto">
            <a 
              href="mailto:Keyaeugene@gmail.com"
              className="px-6 lg:px-8 py-3 bg-[#00a2ff] hover:bg-[#0081cc] text-black font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(0,162,255,0.4)] hover:shadow-[0_0_25px_rgba(0,162,255,0.6)] text-center"
            >
              Hire Me
            </a>
            <a 
              href="mailto:Keyaeugene@gmail.com"
              className="px-6 lg:px-8 py-3 bg-transparent border-2 border-[#00a2ff] text-[#00a2ff] hover:bg-[#00a2ff]/10 font-bold rounded-lg transition-all text-center"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}

      {/* SECTION 2 - Left */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 lg:px-24"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-2xl">
          Architecting scalable <br />
          <span className="text-[#00a2ff] drop-shadow-[0_0_10px_rgba(0,162,255,0.4)] italic">software ecosystems.</span>
        </h2>
      </motion.div>

      {/* SECTION 3 - Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 lg:px-24"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-2xl">
          Automating complexity. <br />
          <span className="text-[#00a2ff] drop-shadow-[0_0_10px_rgba(0,162,255,0.4)] italic">Built to scale.</span>
        </h2>
      </motion.div>

    </div>
  );
}
