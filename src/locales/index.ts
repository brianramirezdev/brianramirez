// src/locales/index.ts
import { es } from '@/locales/es';
import { en } from '@/locales/en';
import { ja } from '@/locales/ja';
import { fr } from '@/locales/fr';
import { de } from '@/locales/de';

// Definir el tipo base de traducciones de forma genérica
export type TranslationValue = string | string[] | Record<string, any>;

export interface Translations {
    navbar: {
        about: string;
        services: string;
        projects: string;
        contact: string;
        sidebarTitle: string;
        openMenu: string;
        closeMenu: string;
    };
    hero: {
        name: string;
        title: string;
    };
    about: {
        title: string;
        bio: string[];
        education: string;
        educationList: Array<{
            degree: string;
            institution: string;
        }>;
        skillsTitle: string;
        frontend: string;
        backend: string;
        tools: string;
    };
    projects: {
        featuredTitle: string;
        description: string;
        projectImageAlt: string;
    };
    contact: {
        title: string;
        together: string;
        tagline: string;
        description: string;
        email: string;
        phone: string;
        closingMessage: string;
    };
    contactForm: {
        title: string;
        name: string;
        email: string;
        message: string;
        submit: string;
        sending: string;

        placeholders: {
            name: string;
            email: string;
            message: string;
        };

        errors: {
            name: {
                required: string;
                min: string;
            };
            email: {
                required: string;
                invalid: string;
            };
            message: {
                required: string;
                min: string;
            };
        };

        status: {
            success: string;
            error: string;
        };
    };

    footer: {
        copyright: string;
        location: string;

        // New CTA (short)
        ctaMiniTitle: string;
        ctaMiniSubtitle: string;

        // Columns
        colAboutTitle: string;
        colAboutText: string;

        colLocationTitle: string;
        colWorld: string;

        colLinksTitle: string;
        linkAbout: string;
        linkServices: string;
        linkProjects: string;
        linkContact: string;

        // Bottom bar (optional)
        rights: string;
        crafted: string;
    };

    services: {
        title: string;
        subtitle: string;
        intro: string;
        areas: Array<{ icon: string; title: string; description: string }>;
        pricingTitle: string;
        pricingSubtitle: string;
        packageTitle: string;
        packageDescription: string;
        packageHours: string;
        packagePrice: string;
        packageRate: string;
        packages: Array<{ hours: string; price: string; rate: string }>;
        hourlyTitle: string;
        hourlyPrice: string;
        hourlyDescription: string;
        fixedTitle: string;
        fixedDescription: string;
        fixedProjects: Array<{ type: string; price: string }>;
        fixedNote: string;
        maintenanceTitle: string;
        maintenancePrice: string;
        maintenanceIncludes: string[];
        availabilityTitle: string;
        schedule: string;
        scheduleValue: string;
        mode: string;
        modeValue: string;
        ctaTitle: string;
        ctaButton: string;
    };

    downloadCV: {
        label: string;
    };
    theme: {
        toggle: string;
        light: string;
        dark: string;
        system: string;
    };
    language: {
        toggle: string;
    };
}

export const translations = {
    es,
    en,
    ja,
    fr,
    de,
} as const;

export type Language = keyof typeof translations;

export { es, en, ja, fr, de };
