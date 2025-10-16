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
        "I'm a 24-year-old fullstack developer with a strong focus on backend development and DevOps practices. I love creating efficient, scalable solutions and automating workflows.",
      learning: "Continuous Learning",
      learningDesc:
        "I'm passionate about staying up-to-date with the latest technologies and constantly expanding my skill set. Always exploring new frameworks, tools, and best practices.",
      current: "Currently",
      currentItems: [
        "Developing a MiniSaaS focused on inventory management using FastAPI and Next.js",
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
          "A comprehensive full-stack platform for money transfers powered by stable cryptocurrencies. The backend serves three frontends: a client application, a provider application, and a moderation panel. Clients create orders, and providers pay them.",
        tech: "Next.js, React Native, Expo, FastAPI, MongoDB, Supabase, Docker, MinioS3, Cloudflare",
      },
      p2p: {
        title: "PeerTrade",
        description:
          "Peer-to-peer cryptocurrency trading platform with an escrow system, real-time chat, and secure wallet integration. It also includes a KYC system for user verification, a feedback and rewards system to incentivize users, and a leveling and trophy system to gamify the experience.",
        tech: "React+Vite, FastAPI, MongoDB, Celery, RabbitMQ, Telegram, AWS KMS, AWS S3, SMTP, Tatum, Docker, CoinMarketCap API",
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
        "Soy un desarrollador fullstack de 24 años con un fuerte enfoque en desarrollo backend y prácticas DevOps. Me encanta crear soluciones eficientes y escalables, y automatizar flujos de trabajo.",
      learning: "Aprendizaje Continuo",
      learningDesc:
        "Me apasiona mantenerme actualizado con las últimas tecnologías y expandir constantemente mis habilidades. Siempre explorando nuevos frameworks, herramientas y mejores prácticas.",
      current: "Actualmente",
      currentItems: [
        "Desarrollando un MiniSaaS enfocado en la gestión de inventario con FastAPI y Next.js",
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
        title: "RemesasCu",
        description:
          "Una plataforma fullstack completa para transferencias de dinero potenciado con el uso de criptomonedas estables. El backend sirve a tres frontends: una aplicación para clientes, una para proveedores y un panel de moderación. Los clientes crean órdenes y los proveedores las pagan.",
        tech: "Next.js, React Native, Expo, FastAPI, MongoDB, Supabase, Docker, MinioS3, Cloudflare",
      },
      p2p: {
        title: "PeerTrade",
        description:
          "Plataforma de trading P2P de criptomonedas con sistema de custodia, chat en tiempo real e integración segura de billeteras. También incluye un sistema de KYC para la verificación de usuarios, un sistema de feedbacks y recompensas para incentivar a los usuarios, y un sistema de niveles y trofeos para gamificar la experiencia.",
        tech: "React+Vite, FastAPI, MongoDB, Celery, RabbitMQ, Telegram, AWS KMS, AWS S3, SMTP, Tatum, Docker, CoinMarketCap API",
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
