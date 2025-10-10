"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Rocket, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">{t.about.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <Card className="p-8 md:p-12 space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">{t.about.intro}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3 p-6 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{t.about.learning}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.about.learningDesc}</p>
              </div>

              <div className="space-y-3 p-6 rounded-lg bg-accent/5 border border-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Rocket className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">{t.about.current}</h3>
                </div>
                <ul className="space-y-2">
                  {t.about.currentItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Zap className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
