"use client";

import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import { motion } from "framer-motion";

// Variantes para la animación secuencial
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function TechStack() {
  const { t } = useLanguage();
  // ... (Mantén tu objeto techStack aquí igual que antes) ...
  const techStack = {
    // ... tu data existente
    backend: [
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
    frontend: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Expo",
        icon: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    devops: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Cloudflare",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      },
      {
        name: "Railway",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg",
      },
    ],
  };

  // Componente auxiliar para renderizar las categorías
  const TechCategory = ({ title, icon: IconPath, items, colorClass }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`h-full p-8 space-y-6 hover:shadow-2xl transition-all duration-300 border-2 hover:${colorClass} bg-card/50 backdrop-blur-sm`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg ${colorClass.replace("border-", "bg-")}/10 flex items-center justify-center`}
          >
            {IconPath}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {items.map((tech: any) => (
            <motion.div
              variants={itemVariants}
              key={tech.name}
              className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background/80 border border-border/50 hover:border-primary/50 hover:bg-accent/5 transition-all group"
            >
              <div className="relative w-12 h-12 transition-transform group-hover:scale-110 duration-300">
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </motion.div>
  );

  return (
    <section id="tech-stack" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.techStack.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.techStack.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <TechCategory
              title={t.techStack.backend}
              items={techStack.backend}
              colorClass="border-primary/50"
              icon={
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              }
            />

            <TechCategory
              title={t.techStack.frontend}
              items={techStack.frontend}
              colorClass="border-accent/50"
              icon={
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
            />

            <TechCategory
              title={t.techStack.devops}
              items={techStack.devops}
              colorClass="border-chart-5/50"
              icon={
                <svg
                  className="w-6 h-6 text-chart-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
