// src/locales/es.ts
export const es = {
    navbar: {
        about: 'Sobre mí',
        services: 'Servicios',
        projects: 'Proyectos',
        contact: 'Contacto',
        sidebarTitle: 'Menú',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
    },
    hero: {
        name: 'Brian Ramírez',
        title: 'Desarrollador Full Stack especializado en aplicaciones web, IA y Big Data.',
    },
    about: {
        title: 'Sobre mí',
        bio: [
            'Desarrollador Full Stack con experiencia en tecnologías web modernas y especialización en IA y Big Data.',
            'Actualmente expandiendo mis conocimientos en inteligencia artificial mientras desarrollo soluciones web robustas que combinan rendimiento y diseño de vanguardia.',
            'Abordo cada proyecto con razonamiento analítico, adaptabilidad y un fuerte enfoque en el trabajo en equipo usando metodologías ágiles como SCRUM.',
        ],
        education: 'Educación',
        educationList: [
            {
                degree: 'Especialización en IA y Big Data',
                institution: 'CIFP Zonzamas • 2024 - 2025',
            },
            {
                degree: 'Técnico Superior en Desarrollo de Aplicaciones Web',
                institution: 'CIFP Zonzamas • 2022 - 2024',
            },
        ],
        skillsTitle: 'Habilidades',
        frontend: 'FRONTEND',
        backend: 'BACKEND & DATABASE',
        tools: 'HERRAMIENTAS & DISEÑO',
    },
    projects: {
        featuredTitle: 'Proyectos Destacados',
        description: 'Una selección de proyectos que destacan mi experiencia en desarrollo full stack, desde aplicaciones web hasta soluciones empresariales.',
        projectImageAlt: 'Imagen del proyecto',
    },
    contact: {
        title: 'Trabajemos',
        together: 'Juntos',
        tagline: 'Construyamos algo que realmente importe — desde ideas pequeñas hasta productos completos.',
        description: 'Actualmente disponible para trabajos freelance y oportunidades a tiempo completo. No dudes en contactarme si te gustaría colaborar.',
        email: 'contact@brianramirez.dev',
        phone: '+34 611 15 47 64',
        closingMessage:
            'Estoy abierto a colaborar en proyectos interesantes, consultorías, o simplemente conversar sobre ideas. Escríbeme cuando quieras — suelo responder rápido.',
    },
    contactForm: {
        title: 'Ponte en contacto',

        // Labels
        name: 'Nombre',
        email: 'Correo electrónico',
        message: 'Tu mensaje',

        // Placeholders
        placeholders: {
            name: 'Tu nombre completo',
            email: 'tu@email.com',
            message: 'Cuéntame sobre tu proyecto...',
        },

        // Botones
        submit: 'Enviar mensaje',
        sending: 'Enviando mensaje...',

        // Errores
        errors: {
            name: {
                required: 'El nombre es obligatorio.',
                min: 'El nombre es demasiado corto.',
            },
            email: {
                required: 'El correo electrónico es obligatorio.',
                invalid: 'Ingresa un correo electrónico válido.',
            },
            message: {
                required: 'Debes escribir un mensaje.',
                min: 'El mensaje es demasiado corto.',
            },
        },

        // Mensajes de estado
        status: {
            success: '¡Mensaje enviado con éxito! Te responderé pronto.',
            error: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
        },
    },

    footer: {
        copyright: '© 2025 Brian Ramírez',
        location: 'Lanzarote, España',

        // CTA ligera
        ctaMiniTitle: 'Gracias por visitar mi portfolio.',
        ctaMiniSubtitle: 'Siempre abierto a nuevas oportunidades, retos y colaboraciones.',

        // Columnas
        colAboutTitle: 'SOBRE ESTE SITIO',
        colAboutText: 'Portfolio creado con tecnologías modernas, enfocado en rendimiento, accesibilidad y una experiencia visual limpia.',

        colLocationTitle: 'UBICACIÓN',
        colWorld: 'Disponible globalmente.',

        colLinksTitle: 'NAVEGACIÓN',
        linkAbout: 'Sobre mí',
        linkServices: 'Servicios',
        linkProjects: 'Proyectos',
        linkContact: 'Contacto',

        // Bottom bar (si lo usas en tu barrita inferior)
        rights: 'Todos los derechos reservados.',
        crafted: 'Diseñado y desarrollado por mí mismo.',
    },

    services: {
        title: 'Servicios',
        subtitle: 'Lo que puedo hacer por ti',
        intro: 'Ofrezco soluciones técnicas a medida para empresas y proyectos que necesitan resultados reales. Desde la idea hasta la puesta en producción, me involucro en cada fase del proceso.',

        areas: [
            { icon: 'Globe', title: 'Desarrollo Web', description: 'Creación y optimización de sitios web, landing pages y paneles de gestión con diseño moderno y rendimiento superior.' },
            { icon: 'Settings2', title: 'Sistemas a Medida', description: 'Lógica de negocio, automatización de procesos internos y herramientas administrativas adaptadas a tu operativa.' },
            { icon: 'Database', title: 'Gestión de Datos', description: 'Diseño y administración de bases de datos relacionales, análisis de información y generación de informes.' },
            { icon: 'BrainCircuit', title: 'Inteligencia Artificial', description: 'Implementación de soluciones IA para clasificación, predicción, automatización de tareas y asistentes inteligentes.' },
            { icon: 'Plug', title: 'Integraciones', description: 'Pasarelas de pago (Stripe), mensajería, APIs externas y conexión entre plataformas y sistemas.' },
            { icon: 'Server', title: 'Infraestructura', description: 'Alojamiento, despliegue de aplicaciones, configuración de entornos y seguridad técnica de sistemas en producción.' },
        ],

        pricingTitle: 'Modelos de Contratación',
        pricingSubtitle: 'Flexibilidad para adaptarme a cada proyecto y equipo.',

        packageTitle: 'Bolsa de Horas',
        packageDescription: 'Orientado a desarrollo continuo, soporte técnico o consultoría recurrente. Pago por adelantado.',
        packageHours: 'Horas',
        packagePrice: 'Precio',
        packageRate: 'Tarifa/h',
        packages: [
            { hours: '10 horas', price: '200 €', rate: '20 €/h' },
            { hours: '20 horas', price: '360 €', rate: '18 €/h' },
        ],

        hourlyTitle: 'Tarifa por Hora',
        hourlyPrice: '25 € / hora',
        hourlyDescription: 'Para intervenciones puntuales, corrección de errores o ajustes específicos sin compromiso a largo plazo.',

        fixedTitle: 'Proyectos Cerrados',
        fixedDescription: 'Presupuesto fijo basado en un análisis de requisitos y objetivos definidos. Ideal para proyectos con alcance claro.',
        fixedProjects: [
            { type: 'Sitio Web Corporativo', price: 'Desde 600 €' },
            { type: 'Aplicación / Panel de Gestión', price: 'Desde 1.200 €' },
            { type: 'Sistema de Gestión / Digitalización', price: 'Desde 900 €' },
        ],
        fixedNote: 'El precio final se define tras analizar la complejidad y el ahorro de tiempo que genera al negocio.',

        maintenanceTitle: 'Mantenimiento Mensual',
        maintenancePrice: '90 € / mes',
        maintenanceIncludes: [
            'Supervisión de seguridad',
            'Actualizaciones críticas',
            'Copias de seguridad',
            '2 horas de soporte técnico mensual',
        ],

        availabilityTitle: 'Disponibilidad',
        schedule: 'Horario',
        scheduleValue: 'Lunes a Viernes · 16:00 – 20:00 (Hora Canaria)',
        mode: 'Modalidad',
        modeValue: 'Remoto · Comunicación asíncrona y reuniones programadas',

        ctaTitle: '¿Tienes un proyecto en mente?',
        ctaButton: 'Hablemos',
    },

    downloadCV: {
        label: 'Descargar CV',
    },
    theme: {
        toggle: 'Cambiar tema',
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema',
    },
    language: {
        toggle: 'Cambiar idioma',
    },
};
