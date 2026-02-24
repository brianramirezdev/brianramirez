// src/locales/de.ts
export const de = {
    navbar: {
        about: 'Über mich',
        services: 'Leistungen',
        projects: 'Projekte',
        contact: 'Kontakt',
        sidebarTitle: 'Menü',
        openMenu: 'Menü öffnen',
        closeMenu: 'Menü schließen',
    },
    hero: {
        name: 'Brian Ramírez',
        title: 'Full-Stack-Entwickler spezialisiert auf Webanwendungen, KI und Big Data.',
    },
    about: {
        title: 'Über mich',
        bio: [
            'Full-Stack-Entwickler mit Erfahrung in modernen Web-Technologien, spezialisiert auf KI und Big Data.',
            'Ich erweitere derzeit mein Wissen im Bereich künstlicher Intelligenz und entwickle robuste Weblösungen, die Leistung und modernestes Design vereinen.',
            'Ich gehe jeden Auftrag mit analytischem Denken, Anpassungsfähigkeit und einem starken Fokus auf Teamarbeit mithilfe agiler Methoden wie SCRUM an.',
        ],
        education: 'Ausbildung',
        educationList: [
            {
                degree: 'Spezialisierung in KI und Big Data',
                institution: 'CIFP Zonzamas • 2024 - 2025',
            },
            {
                degree: 'Höherer Techniker für Webanwendungsentwicklung',
                institution: 'CIFP Zonzamas • 2022 - 2024',
            },
        ],
        skillsTitle: 'Fähigkeiten',
        frontend: 'FRONTEND',
        backend: 'BACKEND & DATENBANK',
        tools: 'WERKZEUGE & DESIGN',
    },
    projects: {
        featuredTitle: 'Ausgewählte Projekte',
        description: 'Eine Auswahl an Projekten, die meine Erfahrung in der Full-Stack-Entwicklung veranschaulichen – von Webanwendungen bis hin zu Unternehmenslösungen.',
        projectImageAlt: 'Projektbild',
    },
    contact: {
        title: 'Lass uns',
        together: 'zusammenarbeiten',
        tagline: 'Lass uns etwas schaffen, das wirklich zählt – von kleinen Ideen bis hin zu vollständigen Produkten.',
        description: 'Derzeit verfügbar für Freelance-Aufträge und Vollzeitstellen. Kontaktiere mich gerne, wenn du zusammenarbeiten möchtest.',
        email: 'contact@brianramirez.dev',
        phone: '+34 611 15 47 64',
        closingMessage: 'Ich bin offen für interessante Projekte, Beratung oder einfach einen Gedankenaustausch. Schreib mir – ich antworte schnell.',
    },
    contactForm: {
        title: 'Kontakt aufnehmen',

        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        message: 'Deine Nachricht',

        placeholders: {
            name: 'Dein vollständiger Name',
            email: 'deine@email.com',
            message: 'Erzähl mir von deinem Projekt...',
        },

        submit: 'Nachricht senden',
        sending: 'Nachricht wird gesendet...',

        errors: {
            name: {
                required: 'Name ist erforderlich.',
                min: 'Der Name ist zu kurz.',
            },
            email: {
                required: 'E-Mail-Adresse ist erforderlich.',
                invalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
            },
            message: {
                required: 'Eine Nachricht ist erforderlich.',
                min: 'Die Nachricht ist zu kurz.',
            },
        },

        status: {
            success: 'Nachricht erfolgreich gesendet! Ich melde mich bald.',
            error: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.',
        },
    },

    footer: {
        copyright: '© 2025 Brian Ramírez',
        location: 'Lanzarote, Spanien',

        ctaMiniTitle: 'Danke für deinen Besuch auf meinem Portfolio.',
        ctaMiniSubtitle: 'Immer offen für neue Chancen, Herausforderungen und Kooperationen.',

        colAboutTitle: 'ÜBER DIESE SEITE',
        colAboutText: 'Portfolio mit modernen Technologien erstellt, mit Fokus auf Performance, Zugänglichkeit und ein klares visuelles Erlebnis.',

        colLocationTitle: 'STANDORT',
        colWorld: 'Weltweit verfügbar.',

        colLinksTitle: 'NAVIGATION',
        linkAbout: 'Über mich',
        linkServices: 'Leistungen',
        linkProjects: 'Projekte',
        linkContact: 'Kontakt',

        rights: 'Alle Rechte vorbehalten.',
        crafted: 'Selbst entworfen und entwickelt.',
    },

    services: {
        title: 'Leistungen',
        subtitle: 'Was ich für Sie tun kann',
        intro: 'Ich biete maßgeschneiderte technische Lösungen für Unternehmen und Projekte, die echte Ergebnisse benötigen. Von der Idee bis zur Produktion bin ich in jeder Phase dabei.',

        areas: [
            { icon: 'Globe', title: 'Webentwicklung', description: 'Erstellung und Optimierung von Websites, Landing Pages und Verwaltungs-Dashboards mit modernem Design und erstklassiger Performance.' },
            { icon: 'Settings2', title: 'Individuelle Systeme', description: 'Geschäftslogik, Automatisierung interner Prozesse und Verwaltungswerkzeuge, die auf Ihre Betriebsabläufe zugeschnitten sind.' },
            { icon: 'Database', title: 'Datenverwaltung', description: 'Design und Administration relationaler Datenbanken, Datenanalyse und Berichterstellung.' },
            { icon: 'BrainCircuit', title: 'Künstliche Intelligenz', description: 'KI-Lösungen für Klassifikation, Vorhersage, Aufgabenautomatisierung und intelligente Assistenten.' },
            { icon: 'Plug', title: 'Integrationen', description: 'Zahlungsanbieter (Stripe), Messaging, externe APIs und Verbindung zwischen Plattformen und Systemen.' },
            { icon: 'Server', title: 'Infrastruktur', description: 'Hosting, Anwendungsdeployment, Umgebungskonfiguration und technische Sicherheit für Produktionssysteme.' },
        ],

        pricingTitle: 'Vertragsmodelle',
        pricingSubtitle: 'Flexible Optionen für jedes Projekt und Team.',

        packageTitle: 'Stundenpakete',
        packageDescription: 'Geeignet für laufende Entwicklung, technischen Support oder wiederkehrende Beratung. Vorauszahlung.',
        packageHours: 'Stunden',
        packagePrice: 'Preis',
        packageRate: 'Stundensatz',
        packages: [
            { hours: '10 Stunden', price: '200 €', rate: '20 €/h' },
            { hours: '20 Stunden', price: '360 €', rate: '18 €/h' },
        ],

        hourlyTitle: 'Stundensatz',
        hourlyPrice: '25 € / Stunde',
        hourlyDescription: 'Für einmalige Eingriffe, Fehlerbehebungen oder spezifische Anpassungen ohne langfristige Verpflichtung.',

        fixedTitle: 'Festpreisprojekte',
        fixedDescription: 'Festes Budget basierend auf einer Anforderungsanalyse. Ideal für Projekte mit klar definiertem Umfang.',
        fixedProjects: [
            { type: 'Unternehmenswebsite', price: 'Ab 600 €' },
            { type: 'Anwendung / Verwaltungs-Dashboard', price: 'Ab 1.200 €' },
            { type: 'Management-System / Digitalisierung', price: 'Ab 900 €' },
        ],
        fixedNote: 'Der Endpreis wird nach Analyse der Komplexität und der eingesparten Zeit für das Unternehmen festgelegt.',

        maintenanceTitle: 'Monatliches Wartungspaket',
        maintenancePrice: '90 € / Monat',
        maintenanceIncludes: [
            'Sicherheitsüberwachung',
            'Kritische Updates',
            'Datensicherungen',
            '2 Stunden monatlicher technischer Support',
        ],

        availabilityTitle: 'Verfügbarkeit',
        schedule: 'Arbeitszeiten',
        scheduleValue: 'Montag bis Freitag · 16:00 – 20:00 Uhr (Kanarische Zeit)',
        mode: 'Modus',
        modeValue: 'Remote · Asynchrone Kommunikation und geplante Meetings',

        ctaTitle: 'Haben Sie ein Projekt im Kopf?',
        ctaButton: 'Sprechen wir',
    },

    downloadCV: {
        label: 'Lebenslauf herunterladen',
    },
    theme: {
        toggle: 'Thema wechseln',
        light: 'Hell',
        dark: 'Dunkel',
        system: 'System',
    },
    language: {
        toggle: 'Sprache wechseln',
    },
};
