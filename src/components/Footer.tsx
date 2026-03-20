import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiPython, 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiGraphql, 
  SiDocker, 
  SiFramer, 
  SiPostgresql,
  SiVercel,
  SiGithub
} from "react-icons/si";

const TECH_STACK = [
  SiNextdotjs, SiTypescript, SiPython, SiTailwindcss, SiReact, SiNodedotjs, 
  SiGraphql, SiDocker, SiFramer, SiPostgresql, SiVercel, SiGithub
];

// Duplicate to create a seamless infinite loop
const MARQUEE_ITEMS = [...TECH_STACK, ...TECH_STACK];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden border-t border-white/10 z-20">
      
      {/* Infinite Marquee Section */}
      <div className="relative w-full py-12 border-y border-white/5 mb-16 flex overflow-hidden">
        {/*
          w-max contains all items in a single row without wrapping.
          animate-marquee creates the smooth left-to-right drift.
        */}
        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {MARQUEE_ITEMS.map((Icon, idx) => (
            <div key={idx} className="flex items-center">
              <div className="px-12 md:px-20 text-neutral-600 hover:text-white transition-colors duration-500">
                <Icon className="w-16 h-16 md:w-20 md:h-20" />
              </div>
              <span className="text-white/10 text-3xl md:text-5xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Socials & Info */}
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-tight">Eugene Keya</h3>
          <p className="text-neutral-500 mt-2 text-sm leading-relaxed">
            Software Developer & AI Automation Engineer <br />
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 group">
          <a href="#" className="font-medium text-neutral-400 hover:text-white transition-colors duration-300">
            Twitter
          </a>
          <a href="#" className="font-medium text-neutral-400 hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="font-medium text-neutral-400 hover:text-white transition-colors duration-300">
            GitHub
          </a>
          <a href="mailto:hello@eugenekeya.com" className="font-medium text-neutral-400 hover:text-white transition-colors duration-300">
            Email
          </a>
        </div>
      </div>
      
    </footer>
  );
}
