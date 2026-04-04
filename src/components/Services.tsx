"use client";

import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";

const SERVICES = [
  {
    icon: "⚙️",
    title: "Full-Stack Development",
    desc: "End-to-end web applications with modern frameworks — Next.js, React, Node.js — engineered for performance and scale.",
    accent: "#e040fb",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Intelligent workflow automation and AI integration — from LLM-powered chatbots to RAG pipelines and complex data processing.",
    accent: "#00c8ff",
    tags: ["LangChain", "OpenAI", "Python", "RAG"],
  },
  {
    icon: "🗄️",
    title: "Backend & APIs",
    desc: "Scalable RESTful APIs, real-time systems, and robust database architectures designed for high throughput and reliability.",
    accent: "#a78bfa",
    tags: ["PostgreSQL", "Redis", "GraphQL", "Docker"],
  },
  {
    icon: "☁️",
    title: "Cloud & Deployment",
    desc: "CI/CD pipelines, containerised deployments, and cloud infrastructure to ship products fast and keep them running.",
    accent: "#34d399",
    tags: ["Vercel", "Docker", "GitHub Actions", "AWS"],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000 0%, #050d1a 6%, #050d1a 94%, #000 100%)" }}
    >
      <NeuralBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Services
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
            What I bring to the table — from frontend polish to backend power to AI innovation.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative group p-8 rounded-2xl overflow-hidden cursor-default transition-all duration-300"
              style={{
                background: "rgba(5, 13, 26, 0.7)",
                border: `1px solid ${svc.accent}22`,
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top left, ${svc.accent}15 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: `${svc.accent}18`,
                  border: `1px solid ${svc.accent}44`,
                }}
              >
                {svc.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">{svc.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-md"
                    style={{
                      background: `${svc.accent}12`,
                      border: `1px solid ${svc.accent}30`,
                      color: svc.accent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
