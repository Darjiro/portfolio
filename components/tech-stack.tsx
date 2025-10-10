"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function TechStack() {
  const { t } = useLanguage()

  const techStack = {
    backend: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
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
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
      }
    ],
  }

  return (
    <section id="tech-stack" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t.techStack.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.techStack.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend */}
            <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{t.techStack.backend}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {techStack.backend.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card hover:bg-accent/10 transition-colors group"
                  >
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Frontend/Mobile */}
            <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{t.techStack.frontend}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {techStack.frontend.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card hover:bg-accent/10 transition-colors group"
                  >
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* DevOps */}
            <Card className="p-8 space-y-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-chart-5/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-5/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-chart-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                </div>
                <h3 className="text-xl font-bold">{t.techStack.devops}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {techStack.devops.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card hover:bg-accent/10 transition-colors group"
                  >
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
