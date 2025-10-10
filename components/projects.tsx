"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.remittance.title,
      description: t.projects.remittance.description,
      tech: t.projects.remittance.tech,
      icon: "/remesascu_logo.png",
    },
    {
      title: t.projects.p2p.title,
      description: t.projects.p2p.description,
      tech: t.projects.p2p.tech,
      icon: "/peertrade_logo.png",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">{t.projects.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 space-y-6 hover:shadow-xl transition-all hover:scale-105 group">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Image
                      src={project.icon}
                      alt={project.title}
                      width={40}
                      height={40}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Technologies:</p>
                  <p className="text-sm text-primary font-mono">{project.tech}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
