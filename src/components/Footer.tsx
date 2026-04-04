"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NeuralBackground from "./NeuralBackground";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

import {
  SiNextdotjs, SiTypescript, SiPython, SiTailwindcss, SiReact,
  SiNodedotjs, SiGraphql, SiDocker, SiFramer, SiPostgresql, SiVercel
} from "react-icons/si";

const TECH_STACK = [
  SiNextdotjs, SiTypescript, SiPython, SiTailwindcss, SiReact, SiNodedotjs,
  SiGraphql, SiDocker, SiFramer, SiPostgresql, SiVercel
];
const MARQUEE_ITEMS = [...TECH_STACK, ...TECH_STACK];

const SOCIALS = [
  { Icon: HiMail, label: "Keyaeugene@gmail.com", href: "mailto:Keyaeugene@gmail.com", accent: "#e040fb" },
  { Icon: SiGithub, label: "GitHub Profile", href: "https://github.com/Keyaeugene", accent: "#00c8ff" },
  { Icon: FaLinkedinIn, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/eugene-keya-500698234/", accent: "#0ea5e9" },
  { Icon: FaXTwitter, label: "Twitter / X", href: "#", accent: "#a78bfa" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with the form data
    const mailto = `mailto:Keyaeugene@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000 0%, #050d1a 6%)" }}
    >
      <NeuralBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-28 pb-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto text-sm leading-relaxed">
            Ready to collaborate on the next big project? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          {/* Left: Contact Form */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 rounded-2xl p-8"
            style={{
              background: "rgba(5, 13, 26, 0.75)",
              border: "1px solid rgba(224,64,251,0.2)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg" style={{ color: "#e040fb" }}>✉️</span>
              <h3 className="font-semibold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#e040fb]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#e040fb]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-neutral-500 outline-none resize-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #e040fb 0%, #00c8ff 100%)",
                  boxShadow: "0 0 25px rgba(224,64,251,0.35)",
                }}
              >
                {sent ? "✓ Message Sent!" : "🚀 Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Right: Socials */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-4 justify-center"
          >
            <div className="text-center mb-4">
              <div
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl font-bold mb-3"
                style={{
                  background: "linear-gradient(135deg, #e040fb22, #00c8ff22)",
                  border: "2px solid #e040fb44",
                }}
              >
                EK
              </div>
              <p className="text-neutral-400 text-sm italic">
                &quot;Ready to turn your ideas into reality!&quot;
              </p>
              <h3 className="font-bold text-white mt-2">Connect With Me</h3>
            </div>

            {SOCIALS.map(({ Icon, label, href, accent }, i) => (
              <motion.a
                key={label}
                href={href}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300"
                style={{
                  background: `${accent}10`,
                  border: `1px solid ${accent}30`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accent}20`, color: accent }}
                >
                  <Icon size={20} />
                </div>
                <span className="text-sm font-medium text-neutral-300">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Tech Marquee */}
        <div className="relative w-full py-8 border-y mb-10 flex overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <div className="flex w-max animate-marquee items-center whitespace-nowrap">
            {MARQUEE_ITEMS.map((Icon, idx) => (
              <div key={idx} className="flex items-center">
                <div className="px-10 md:px-16 text-neutral-700 hover:text-[#e040fb] transition-colors duration-500">
                  <Icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <span className="text-white/5 text-3xl">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-sm">
          <p>
            <span className="text-white font-bold">Eugene<span style={{ color: "#e040fb" }}>.</span></span>
            {" "}Software Developer & AI Automation Engineer
          </p>
          <p>© {new Date().getFullYear()} Eugene Keya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
