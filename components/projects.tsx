"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Asumiendo que tienes un componente Badge, si no, usa un span con estilos
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import { motion } from "framer-motion";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    // ... (Mantén tu data de proyectos igual)
    {
      title: t.projects.keepAll.title,
      description: t.projects.keepAll.description,
      tech: t.projects.keepAll.tech,
      icon: "/keepall_logo.png",
      tags: ["Next.js", "FastAPI", "x402", "Supabase"],
      link: "https://keep-all.com",
      isKeepAll: true,
    },
    {
      title: t.projects.remittance.title,
      description: t.projects.remittance.description,
      tech: t.projects.remittance.tech,
      icon: "/remesascu_logo.png",
      tags: ["FastAPI", "Next.js", "Crypto"],
      link: "https:remesascu.com",
    },
    {
      title: t.projects.p2p.title,
      description: t.projects.p2p.description,
      tech: t.projects.p2p.tech,
      icon: "/peertrade_logo.png",
      tags: ["P2P", "Socket.io", "Security"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.projects.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 space-y-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-card/50 backdrop-blur-md border-muted/60">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-background border shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={`${process.env.BASE_PATH || ""}${project.icon}`}
                          alt={project.title}
                          width={project.isKeepAll ? 56 : 48} // Slightly larger for KeepAll
                          height={project.isKeepAll ? 56 : 48}
                          className={`object-cover ${project.isKeepAll ? "scale-110" : ""}`} // Additional scaling if needed
                        />
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-background border shadow-sm hover:scale-110 transition-transform duration-300 hover:text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {/* Convertimos el string de tech en badges si quieres, o lo dejamos como texto estilo código */}
                      <p className="text-sm text-primary font-mono bg-primary/5 p-2 rounded-md w-full">
                        {project.tech}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
