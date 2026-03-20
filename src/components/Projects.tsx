import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Neural Pipeline Architecture",
    description: "Designed a distributed microservice layer for real-time AI inference, utilizing Redis queues to reduce processing latency by 40%.",
    tags: ["Python", "FastAPI", "Docker", "AWS"],
  },
  {
    title: "Enterprise RAG Infrastructure",
    description: "Built a highly concurrent Retrieval-Augmented Generation platform for automated, type-safe document analysis using vector embeddings.",
    tags: ["TypeScript", "Next.js", "Pinecone", "LangChain"],
  },
  {
    title: "High-Frequency Data Sync",
    description: "Engineered a fault-tolerant WebSocket streaming service capable of handling millions of real-time events with sub-millisecond execution.",
    tags: ["Node.js", "Redis", "WebSockets", "Go"],
  },
  {
    title: "Zero-Downtime Automation CLI",
    description: "Developed an internal CLI tool for automated, fail-safe database migrations and CI/CD pipeline deployments across distributed SQL rings.",
    tags: ["Rust", "PostgreSQL", "GitHub Actions", "CLI"],
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
