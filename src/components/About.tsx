"use client";

import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";

const CHIPS = [
  { icon: "</>", label: "Full-Stack Engineer" },
  { icon: "⚡", label: "AI Automation" },
  { icon: "❤️", label: "Passionate Builder" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000 0%, #050d1a 6%, #050d1a 94%, #000 100%)" }}
    >
      <NeuralBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center gradient-text-pink"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Outer dashed ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed animate-spin"
                style={{
                  borderColor: "#e040fb55",
                  animationDuration: "20s",
                }}
              />
              {/* Inner glow ring */}
              <div
                className="absolute inset-3 rounded-full"
                style={{
                  border: "2px solid #e040fb",
                  boxShadow: "0 0 30px #e040fb66, inset 0 0 20px #e040fb22",
                }}
              />
              {/* Avatar circle */}
              <div
                className="absolute inset-3 rounded-full flex items-center justify-center text-6xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #0a1628 0%, #0d2049 100%)",
                  color: "#e040fb",
                }}
              >
                EK
              </div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <div className="flex flex-col gap-5">
            <motion.h3
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white leading-snug"
            >
              Software Developer & AI Automation Engineer{" "}
              <span className="gradient-text">passionate about building intelligent systems.</span>
            </motion.h3>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-neutral-400 leading-relaxed"
            >
              I craft digital experiences that combine robust engineering with elegant design.
              From architecting scalable software ecosystems to automating complex workflows,
              I specialise in building systems that&apos;re fast, reliable, and built to last.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-neutral-400 leading-relaxed"
            >
              With experience spanning full-stack web development, RESTful APIs, AI integrations,
              and cloud deployments, I&apos;m constantly pushing the boundaries of what&apos;s
              possible with modern technology.
            </motion.p>

            {/* Chips */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-2"
            >
              {CHIPS.map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-neutral-300"
                  style={{
                    background: "rgba(224,64,251,0.08)",
                    border: "1px solid rgba(224,64,251,0.2)",
                  }}
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-2 px-5 py-4 rounded-xl text-sm italic text-neutral-300"
              style={{
                background: "rgba(0,200,255,0.06)",
                border: "1px solid rgba(0,200,255,0.2)",
                borderLeft: "3px solid #00c8ff",
              }}
            >
              &ldquo;Engineering the future, one scalable system at a time.&rdquo;
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
