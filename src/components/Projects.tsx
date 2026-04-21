"use client";

import { motion } from "framer-motion";
import NeuralBackground from "./NeuralBackground";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    icon: "🎟️",
    title: "Ktickets",
    description:
      "High-throughput ticketing system for major events — Node.js backend, Redis for real-time inventory, Convex for scalable storage, deployed on Vercel.",
    tags: ["TypeScript", "Node.js", "Convex", "Redis", "Vercel"],
    github: "#",
    live: "#",
    accent: "#e040fb",
  },
  {
    icon: "🤖",
    title: "Restaurant FAQ RAG Chatbot",
    description:
      "RAG chatbot for a restaurant leveraging OpenAI LLMs and FAISS for efficient document retrieval, integrated with a Streamlit UI.",
    tags: ["Python", "OpenAI", "FAISS", "LangChain", "Streamlit"],
    github: "#",
    live: "#",
    accent: "#00c8ff",
  },
  {
    icon: "🛒",
    title: "Local Duka",
    description:
      "Local e-commerce platform for small businesses — responsive Flutter frontend with a robust Node.js + PostgreSQL backend.",
    tags: ["Flutter", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
    accent: "#a78bfa",
  },
  {
    icon: "💰",
    title: "Merry Chama Platform",
    description:
      "Community-driven savings platform for local groups — modern Next.js frontend backed by Turso for ultra-fast edge data access.",
    tags: ["Next.js", "Turso", "TypeScript", "Node.js"],
    github: "#",
    live: "#",
    accent: "#34d399",
  },
  {
    icon: "🤖",
    title: "AI Chatbot for Programming Education Platform",
    description:
      "A real-time AI Tutor chatbot built with a modern, glassmorphism web interface. It connects users to a Google Gemini-powered AI agent using a Node.js/Socket.IO message broker.",
    tags: ["Vanilla HTML, CSS, JavaScript", "Node.js, Express, Socket.IO", "Google Gemini API", "Python, Flask, Google GenAI SDK"],
    github: "#",
    live: "#",
    accent: "#60a5fa",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section
      id="portfolio"
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
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-pink mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
            A selection of high-impact systems and architectures I&apos;ve built — from AI pipelines to real-time platforms.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(5, 13, 26, 0.75)",
                border: `1px solid ${project.accent}22`,
                backdropFilter: "blur(14px)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top left, ${project.accent}14 0%, transparent 65%)`,
                }}
              />

              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${project.accent}18`,
                    border: `1px solid ${project.accent}40`,
                  }}
                >
                  {project.icon}
                </div>
                <div className="flex gap-3 text-neutral-500">
                  <a
                    href={project.live}
                    className="hover:text-white transition-colors"
                    aria-label="Live"
                  >
                    <FiExternalLink size={18} />
                  </a>
                  <a
                    href={project.github}
                    className="hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <SiGithub size={18} />
                  </a>
                </div>
              </div>

              <h3 className="relative z-10 text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="relative z-10 text-neutral-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full"
                    style={{
                      background: `${project.accent}12`,
                      border: `1px solid ${project.accent}30`,
                      color: project.accent,
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
