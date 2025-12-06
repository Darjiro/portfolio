"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Andy (@darjiro). {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}
