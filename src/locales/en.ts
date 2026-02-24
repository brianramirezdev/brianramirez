// src/locales/en.ts
export const en = {
    navbar: {
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
        sidebarTitle: 'Menu',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
    },
    hero: {
        name: 'Brian Ramírez',
        title: 'Full Stack Developer specialized in web applications, AI, and Big Data.',
    },
    about: {
        title: 'About Me',
        bio: [
            'Full Stack Developer experienced in modern web technologies, specialized in AI and Big Data.',
            'Currently expanding my knowledge in artificial intelligence while developing robust web solutions that combine performance and cutting-edge design.',
            'I approach each project with analytical reasoning, adaptability, and a strong focus on teamwork using agile methodologies like SCRUM.',
        ],
        education: 'Education',
        educationList: [
            {
                degree: 'Specialization in AI and Big Data',
                institution: 'CIFP Zonzamas • 2024 - 2025',
            },
            {
                degree: 'Higher Technician in Web Application Development',
                institution: 'CIFP Zonzamas • 2022 - 2024',
            },
        ],
        skillsTitle: 'Skills',
        frontend: 'FRONTEND',
        backend: 'BACKEND & DATABASE',
        tools: 'TOOLS & DESIGN',
    },
    projects: {
        featuredTitle: 'Featured Projects',
        description: 'Projects built with modern technologies like Laravel, React, TypeScript and Astro, focused on solving real problems with scalable architectures.',
        projectImageAlt: 'Project image',
    },
    contact: {
        title: "Let's Work",
        together: 'Together',
        tagline: "Let's build something that truly matters — from small ideas to complete products.",
        description: 'Currently available for freelance jobs and full-time opportunities. Feel free to contact me if you’d like to collaborate.',
        email: 'contact@brianramirez.dev',
        phone: '+34 611 15 47 64',
        closingMessage: "I'm open to collaborating on interesting projects, consulting, or simply chatting about ideas. Reach out anytime — I usually reply quickly.",
    },
    contactForm: {
        title: 'Get in touch',

        // Labels
        name: 'Full name',
        email: 'Email address',
        message: 'Your message',

        // Placeholders
        placeholders: {
            name: 'Your full name',
            email: 'your@email.com',
            message: 'Tell me about your project...',
        },

        // Buttons
        submit: 'Send message',
        sending: 'Sending message...',

        // Errors
        errors: {
            name: {
                required: 'Name is required.',
                min: 'The name is too short.',
            },
            email: {
                required: 'Email is required.',
                invalid: 'Please enter a valid email address.',
            },
            message: {
                required: 'A message is required.',
                min: 'The message is too short.',
            },
        },

        // Status messages
        status: {
            success: 'Message sent successfully! I will get back to you soon.',
            error: 'There was an error sending your message. Please try again.',
        },
    },

    footer: {
        copyright: '© 2025 Brian Ramírez',
        location: 'Lanzarote, Spain',

        // Light CTA
        ctaMiniTitle: 'Thanks for visiting my portfolio.',
        ctaMiniSubtitle: 'Always open to new opportunities, challenges, and collaborations.',

        // Columns
        colAboutTitle: 'ABOUT THIS SITE',
        colAboutText: 'Portfolio built with modern technologies, focused on performance, accessibility, and a clean visual experience.',

        colLocationTitle: 'LOCATION',
        colWorld: 'Available worldwide.',

        colLinksTitle: 'NAVIGATION',
        linkAbout: 'About me',
        linkServices: 'Services',
        linkProjects: 'Projects',
        linkContact: 'Contact',

        // Bottom bar (if used)
        rights: 'All rights reserved.',
        crafted: 'Designed and developed by myself.',
    },

    services: {
        title: 'Services',
        subtitle: 'What I can do for you',
        intro: 'I offer tailored technical solutions for businesses and projects that need real results. From concept to production, I get involved at every stage of the process.',

        areas: [
            { icon: 'Globe', title: 'Web Development', description: 'Creation and optimization of websites, landing pages, and management dashboards with modern design and top-tier performance.' },
            { icon: 'Settings2', title: 'Custom Systems', description: 'Business logic, internal process automation, and administrative tools adapted to your operational needs.' },
            { icon: 'Database', title: 'Data Management', description: 'Relational database design and administration, data analysis, and report generation.' },
            { icon: 'BrainCircuit', title: 'Artificial Intelligence', description: 'AI solutions for classification, prediction, task automation, and intelligent assistants.' },
            { icon: 'Plug', title: 'Integrations', description: 'Payment gateways (Stripe), messaging, external APIs, and connection between platforms and systems.' },
            { icon: 'Server', title: 'Infrastructure', description: 'Hosting, application deployment, environment configuration, and technical security for production systems.' },
        ],

        pricingTitle: 'Engagement Models',
        pricingSubtitle: 'Flexible options to fit every project and team.',

        packageTitle: 'Hour Packages',
        packageDescription: 'Designed for ongoing development, technical support, or recurring consulting. Prepaid.',
        packageHours: 'Hours',
        packagePrice: 'Price',
        packageRate: 'Rate/h',
        packages: [
            { hours: '10 hours', price: '200 €', rate: '20 €/h' },
            { hours: '20 hours', price: '360 €', rate: '18 €/h' },
        ],

        hourlyTitle: 'Hourly Rate',
        hourlyPrice: '25 € / hour',
        hourlyDescription: 'For one-off interventions, bug fixes, or specific adjustments with no long-term commitment.',

        fixedTitle: 'Fixed-Price Projects',
        fixedDescription: 'Fixed budget based on a requirements and objectives analysis. Ideal for projects with a clear scope.',
        fixedProjects: [
            { type: 'Corporate Website', price: 'From 600 €' },
            { type: 'Application / Management Dashboard', price: 'From 1,200 €' },
            { type: 'Management System / Digitalization', price: 'From 900 €' },
        ],
        fixedNote: 'The final price is defined after analyzing the complexity and the time savings it generates for the business.',

        maintenanceTitle: 'Monthly Maintenance',
        maintenancePrice: '90 € / month',
        maintenanceIncludes: [
            'Security monitoring',
            'Critical updates',
            'Backups',
            '2 hours of monthly technical support',
        ],

        availabilityTitle: 'Availability',
        schedule: 'Schedule',
        scheduleValue: 'Monday to Friday · 4:00 PM – 8:00 PM (Canary Time)',
        mode: 'Mode',
        modeValue: 'Remote · Async communication and scheduled meetings',

        ctaTitle: 'Have a project in mind?',
        ctaButton: "Let's talk",
    },

    downloadCV: {
        label: 'Download CV',
    },
    theme: {
        toggle: 'Toggle theme',
        light: 'Light',
        dark: 'Dark',
        system: 'System',
    },
    language: {
        toggle: 'Toggle language',
    },
};
