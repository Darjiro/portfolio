"use client"

import { ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground font-medium">{t.hero.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Andy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">@Darjiro</p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.hero.role}</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="text-base group">
              <a href="#projects" className="flex items-center gap-2">
                {t.hero.cta}
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
              <a href="#contact">{t.nav.contact}</a>
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <a href="#about" className="inline-block text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
