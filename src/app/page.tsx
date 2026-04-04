"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress still drives the canvas image sequence
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-black min-h-screen text-white selection:bg-white/20">
      <Navbar />

      {/* ── HERO: scrollytelling canvas zone ────────────────────────────── */}
      <section id="home" className="relative">
        {/*
          500vh container = scrollable space for image-sequence scrubbing.
        */}
        <div ref={containerRef} className="relative h-[500vh] w-full">
          {/* Sticky viewport: canvas + overlay text */}
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
            <ScrollyCanvas progress={scrollYProgress} />
            <Overlay progress={scrollYProgress} />
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────────── */}
      <About />

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <Services />

      {/* ── PORTFOLIO / PROJECTS ────────────────────────────────────────── */}
      <Projects />

      {/* ── CONTACT / FOOTER ────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
