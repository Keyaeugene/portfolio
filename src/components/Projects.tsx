import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Project Alpha",
    description: "A high-end e-commerce experience with WebGL features.",
    tags: ["Next.js", "Three.js", "Tailwind"],
  },
  {
    title: "Neon Nights",
    description: "An interactive editorial piece exploring digital brutalism.",
    tags: ["React", "Framer Motion", "GLSL"],
  },
  {
    title: "Quantum Dashboard",
    description: "Financial analytics platform with real-time data visualization.",
    tags: ["TypeScript", "D3.js", "Node.js"],
  },
  {
    title: "Aura Component Library",
    description: "An open-source UI kit focused on micro-interactions.",
    tags: ["React", "CSS", "Storybook"],
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-black text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-neutral-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 text-sm rounded-full bg-white/10 text-neutral-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
