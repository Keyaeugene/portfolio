"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll of the ENTIRE page, not just the container.
  // This gives us a reliable, full 0→1 range as the user scrolls through the 500vh zone.
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-black min-h-screen text-white selection:bg-white/20">
      {/*
        500vh container creates the scrollable space for the sequence scrubbing.
        scrollYProgress comes from the full page — the Projects section adds extra height,
        so the actual scrolly zone takes up ~500/520 ≈ 0–0.96 of total page progress.
      */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        {/* The sticky container handles both the canvas and the text */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          <ScrollyCanvas progress={scrollYProgress} />
          <Overlay progress={scrollYProgress} />
        </div>
      </div>

      {/*
        Projects grid located after the scroll zone.
      */}
      <Projects />
    </main>
  );
}
