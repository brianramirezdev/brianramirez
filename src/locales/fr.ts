// src/locales/fr.ts
export const fr = {
    navbar: {
        about: 'À propos',
        services: 'Services',
        projects: 'Projets',
        contact: 'Contact',
        sidebarTitle: 'Menu',
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
    },
    hero: {
        name: 'Brian Ramírez',
        title: 'Développeur Full Stack spécialisé en applications web, IA et Big Data.',
    },
    about: {
        title: 'À propos de moi',
        bio: [
            'Développeur Full Stack expérimenté dans les technologies web modernes, spécialisé en IA et Big Data.',
            'J\'élargis actuellement mes connaissances en intelligence artificielle tout en développant des solutions web robustes alliant performance et design de pointe.',
            'J\'aborde chaque projet avec rigueur analytique, adaptabilité et un fort sens du travail en équipe via des méthodologies agiles comme SCRUM.',
        ],
        education: 'Formation',
        educationList: [
            {
                degree: 'Spécialisation IA et Big Data',
                institution: 'CIFP Zonzamas • 2024 - 2025',
            },
            {
                degree: 'Technicien Supérieur en Développement d\'Applications Web',
                institution: 'CIFP Zonzamas • 2022 - 2024',
            },
        ],
        skillsTitle: 'Compétences',
        frontend: 'FRONTEND',
        backend: 'BACKEND & BASE DE DONNÉES',
        tools: 'OUTILS & DESIGN',
    },
    projects: {
        featuredTitle: 'Projets Phares',
        description: 'Une sélection de projets illustrant mon expérience en développement full stack, des applications web aux solutions d\'entreprise.',
        projectImageAlt: 'Image du projet',
    },
    contact: {
        title: 'Travaillons',
        together: 'Ensemble',
        tagline: 'Construisons quelque chose qui compte vraiment — des petites idées aux produits complets.',
        description: 'Actuellement disponible pour des missions freelance et des opportunités à temps plein. N\'hésitez pas à me contacter pour collaborer.',
        email: 'contact@brianramirez.dev',
        phone: '+34 611 15 47 64',
        closingMessage: 'Je suis ouvert à collaborer sur des projets intéressants, du conseil ou simplement échanger des idées. Écrivez-moi — je réponds rapidement.',
    },
    contactForm: {
        title: 'Entrer en contact',

        name: 'Nom complet',
        email: 'Adresse e-mail',
        message: 'Votre message',

        placeholders: {
            name: 'Votre nom complet',
            email: 'votre@email.com',
            message: 'Parlez-moi de votre projet...',
        },

        submit: 'Envoyer le message',
        sending: 'Envoi en cours...',

        errors: {
            name: {
                required: 'Le nom est obligatoire.',
                min: 'Le nom est trop court.',
            },
            email: {
                required: 'L\'adresse e-mail est obligatoire.',
                invalid: 'Veuillez saisir une adresse e-mail valide.',
            },
            message: {
                required: 'Un message est requis.',
                min: 'Le message est trop court.',
            },
        },

        status: {
            success: 'Message envoyé avec succès ! Je vous répondrai rapidement.',
            error: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
        },
    },

    footer: {
        copyright: '© 2025 Brian Ramírez',
        location: 'Lanzarote, Espagne',

        ctaMiniTitle: 'Merci de visiter mon portfolio.',
        ctaMiniSubtitle: 'Toujours ouvert aux nouvelles opportunités, défis et collaborations.',

        colAboutTitle: 'À PROPOS DU SITE',
        colAboutText: 'Portfolio conçu avec des technologies modernes, axé sur la performance, l\'accessibilité et une expérience visuelle soignée.',

        colLocationTitle: 'LOCALISATION',
        colWorld: 'Disponible partout dans le monde.',

        colLinksTitle: 'NAVIGATION',
        linkAbout: 'À propos',
        linkServices: 'Services',
        linkProjects: 'Projets',
        linkContact: 'Contact',

        rights: 'Tous droits réservés.',
        crafted: 'Conçu et développé par moi-même.',
    },

    services: {
        title: 'Services',
        subtitle: 'Ce que je peux faire pour vous',
        intro: 'Je propose des solutions techniques sur mesure pour les entreprises et projets qui ont besoin de résultats concrets. De l\'idée à la mise en production, je m\'implique à chaque étape du processus.',

        areas: [
            { icon: 'Globe', title: 'Développement Web', description: 'Création et optimisation de sites web, landing pages et tableaux de bord avec un design moderne et des performances de premier ordre.' },
            { icon: 'Settings2', title: 'Systèmes sur Mesure', description: 'Logique métier, automatisation des processus internes et outils d\'administration adaptés à votre activité.' },
            { icon: 'Database', title: 'Gestion des Données', description: 'Conception et administration de bases de données relationnelles, analyse des données et génération de rapports.' },
            { icon: 'BrainCircuit', title: 'Intelligence Artificielle', description: 'Solutions IA pour la classification, la prédiction, l\'automatisation des tâches et les assistants intelligents.' },
            { icon: 'Plug', title: 'Intégrations', description: 'Passerelles de paiement (Stripe), messagerie, APIs externes et connexion entre plateformes et systèmes.' },
            { icon: 'Server', title: 'Infrastructure', description: 'Hébergement, déploiement d\'applications, configuration d\'environnements et sécurité technique en production.' },
        ],

        pricingTitle: 'Modèles de Facturation',
        pricingSubtitle: 'Des options flexibles pour s\'adapter à chaque projet et équipe.',

        packageTitle: 'Forfait d\'Heures',
        packageDescription: 'Idéal pour le développement continu, le support technique ou le conseil récurrent. Prépayé.',
        packageHours: 'Heures',
        packagePrice: 'Prix',
        packageRate: 'Taux/h',
        packages: [
            { hours: '10 heures', price: '200 €', rate: '20 €/h' },
            { hours: '20 heures', price: '360 €', rate: '18 €/h' },
        ],

        hourlyTitle: 'Tarif Horaire',
        hourlyPrice: '25 € / heure',
        hourlyDescription: 'Pour des interventions ponctuelles, corrections de bugs ou ajustements spécifiques sans engagement long terme.',

        fixedTitle: 'Projets à Prix Fixe',
        fixedDescription: 'Budget fixe basé sur une analyse des besoins et des objectifs définis. Idéal pour les projets au périmètre clair.',
        fixedProjects: [
            { type: 'Site Web Corporate', price: 'À partir de 600 €' },
            { type: 'Application / Tableau de Bord', price: 'À partir de 1 200 €' },
            { type: 'Système de Gestion / Digitalisation', price: 'À partir de 900 €' },
        ],
        fixedNote: 'Le prix final est défini après analyse de la complexité et des gains de temps générés pour l\'activité.',

        maintenanceTitle: 'Maintenance Mensuelle',
        maintenancePrice: '90 € / mois',
        maintenanceIncludes: [
            'Surveillance de la sécurité',
            'Mises à jour critiques',
            'Sauvegardes',
            '2 heures de support technique mensuel',
        ],

        availabilityTitle: 'Disponibilité',
        schedule: 'Horaires',
        scheduleValue: 'Lundi au Vendredi · 16h00 – 20h00 (Heure des Canaries)',
        mode: 'Mode',
        modeValue: 'À distance · Communication asynchrone et réunions planifiées',

        ctaTitle: 'Vous avez un projet en tête ?',
        ctaButton: 'Discutons-en',
    },

    downloadCV: {
        label: 'Télécharger le CV',
    },
    theme: {
        toggle: 'Changer de thème',
        light: 'Clair',
        dark: 'Sombre',
        system: 'Système',
    },
    language: {
        toggle: 'Changer de langue',
    },
};
