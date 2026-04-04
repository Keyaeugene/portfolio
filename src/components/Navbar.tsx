"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver to highlight active section
    const sections = LINKS.map(({ href }) =>
      document.getElementById(href.replace("#", ""))
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-24 py-4 font-sans pointer-events-none"
    >
      {/* Logo */}
      <div
        className="text-xl font-extrabold tracking-tight pointer-events-auto"
        style={{ color: "#e8f0fe" }}
      >
        Eugene<span style={{ color: "#e040fb" }}>.</span>
      </div>

      {/* Nav links — glassmorphism pill */}
      <div
        className={`hidden md:flex items-center gap-1 pointer-events-auto rounded-full px-4 py-2 transition-all duration-500 ${
          scrolled
            ? "bg-[#050d1a]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        {LINKS.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = active === id;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #e040fb44 0%, #00c8ff44 100%)",
                    border: "1px solid #e040fb55",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        onClick={(e) => handleClick(e, "#contact")}
        className="hidden md:block pointer-events-auto px-5 py-2 text-sm font-bold rounded-full text-white transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, #e040fb 0%, #00c8ff 100%)",
          boxShadow: "0 0 20px rgba(224,64,251,0.35)",
        }}
      >
        Hire Me
      </a>
    </motion.nav>
  );
}
