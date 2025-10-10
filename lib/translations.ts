export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Fullstack Developer",
      description:
        "Passionate about building scalable applications, DevOps automation, and learning new technologies every day.",
      cta: "View My Work",
    },
    about: {
      title: "About Me",
      intro:
        "I'm a 23-year-old fullstack developer with a strong focus on backend development and DevOps practices. I love creating efficient, scalable solutions and automating workflows.",
      learning: "Continuous Learning",
      learningDesc:
        "I'm passionate about staying up-to-date with the latest technologies and constantly expanding my skill set. Always exploring new frameworks, tools, and best practices.",
      current: "Currently",
      currentItems: [
        "Building robust backend systems with Python and FastAPI",
        "Developing modern web applications with Next.js and React",
        "Implementing DevOps practices and automation",
        "Exploring new technologies and frameworks",
      ],
    },
    techStack: {
      title: "Tech Stack",
      subtitle: "Technologies and tools I use to build amazing applications",
      backend: "Backend",
      frontend: "Frontend & Mobile",
      devops: "DevOps & Tools",
    },
    projects: {
      title: "Featured Projects",
      remittance: {
        title: "RemesasCu",
        description:
          "A comprehensive full-stack platform for international money transfers with real-time exchange rates and secure payment processing.",
        tech: "Next.js, React Native, FastAPI, MongoDB, Supabase",
      },
      p2p: {
        title: "PeerTrade",
        description:
          "Peer-to-peer cryptocurrency trading platform with escrow system, real-time chat, and secure wallet integration.",
        tech: "React+Vite, FastAPI, MongoDB, Celery, RabbitMQ",
      },
    },
    contact: {
      title: "Get In Touch",
      description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
      email: "Email",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "Built with Next.js",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Fullstack",
      description:
        "Apasionado por construir aplicaciones escalables, automatización DevOps y aprender nuevas tecnologías cada día.",
      cta: "Ver Mi Trabajo",
    },
    about: {
      title: "Sobre Mí",
      intro:
        "Soy un desarrollador fullstack de 23 años con un fuerte enfoque en desarrollo backend y prácticas DevOps. Me encanta crear soluciones eficientes y escalables, y automatizar flujos de trabajo.",
      learning: "Aprendizaje Continuo",
      learningDesc:
        "Me apasiona mantenerme actualizado con las últimas tecnologías y expandir constantemente mis habilidades. Siempre explorando nuevos frameworks, herramientas y mejores prácticas.",
      current: "Actualmente",
      currentItems: [
        "Construyendo sistemas backend robustos con Python y FastAPI",
        "Desarrollando aplicaciones web modernas con Next.js y React",
        "Implementando prácticas DevOps y automatización",
        "Explorando nuevas tecnologías y frameworks",
      ],
    },
    techStack: {
      title: "Stack Tecnológico",
      subtitle: "Tecnologías y herramientas que uso para construir aplicaciones increíbles",
      backend: "Backend",
      frontend: "Frontend y Móvil",
      devops: "DevOps y Herramientas",
    },
    projects: {
      title: "Proyectos Destacados",
      remittance: {
        title: "Plataforma de Remesas",
        description:
          "Una plataforma fullstack completa para transferencias internacionales de dinero con tasas de cambio en tiempo real y procesamiento de pagos seguro.",
        tech: "Next.js, FastAPI, MongoDB, Stripe",
      },
      p2p: {
        title: "App P2P de Criptomonedas",
        description:
          "Plataforma de trading P2P de criptomonedas con sistema de custodia, chat en tiempo real e integración segura de billeteras.",
        tech: "React Native, Expo, FastAPI, PostgreSQL",
      },
    },
    contact: {
      title: "Contacto",
      description:
        "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión. ¡No dudes en contactarme!",
      email: "Correo",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
    },
    footer: {
      rights: "Construido con Next.js & v0",
    },
  },
}

export type Language = keyof typeof translations
