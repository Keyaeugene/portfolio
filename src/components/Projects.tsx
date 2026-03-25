import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Ktickets",
    description: "Designed and implemented a high-throughput ticketing system for a major event, utilizing Node.js for the backend API, Redis for real-time inventory management, and Convex for scalable data storage, all deployed on Vercel for optimal performance.",
    tags: ["TypeScript", "Node.js", "Convex", "Vercel"],
  },
  {
    title: "Restaurant FAQ RAG Chatbot",
    description: "Built a Retrieval-Augmented Generation (RAG) chatbot for a restaurant, leveraging OpenAI's language models and FAISS for efficient document retrieval, integrated seamlessly with Streamlit for an interactive user interface.",
    tags: ["Python", "OpenAI", "FAISS", "LangChain", "Streamlit"],
  },
  {
    title: "Local Duka",
    description: "Developed a local e-commerce platform for small businesses, featuring a responsive frontend and a robust backend powered by Flutter and Node.js.",
    tags: ["Flutter", "Node.js", "PostgreSQL"],
  },
  {
    title: "Merry Chama Platform",
    description: "Developed a community-driven platform for local businesses, featuring a modern frontend and a robust backend powered by Next.js and Turso.",
    tags: ["Next.js", "Turso", "TypeScript", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#050505] text-white py-32 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono text-neutral-500 tracking-widest uppercase mb-2">
              // Engineering Showcase
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Selected Systems
            </h3>
          </div>
          <p className="text-neutral-400 max-w-md text-sm leading-relaxed">
            A curation of high-impact architectures, automation workflows, and scalable backend implementations I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative p-8 md:p-10 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-2xl font-semibold mb-3 tracking-tight">{project.title}</h4>
                  <p className="text-neutral-400 mb-8 leading-relaxed font-light text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 text-xs font-mono rounded-md bg-black/50 text-neutral-300 border border-white/10 shadow-inner tracking-tight"
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
