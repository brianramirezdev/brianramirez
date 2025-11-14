// src/locales/index.ts
import { es } from './es';
import { en } from './en';

// Definir el tipo base de traducciones de forma genérica
export type TranslationValue = string | string[] | Record<string, any>;

export interface Translations {
    navbar: {
        about: string;
        works: string;
        contact: string;
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
    works: {
        featuredTitle: string;
        description: string;
        projectImageAlt: string;
        badgeFeatured: string;
    };
    contact: {
        title: string;
        together: string;
        description: string;
        email: string;
        phone: string;
    };
    footer: {
        copyright: string;
        location: string;
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
} as const;

export type Language = keyof typeof translations;

export { es, en };
