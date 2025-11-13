// src/lib/i18n-helpers.ts
import type { Language } from '@/locales';

/**
 * Obtiene el texto traducido de un objeto que tiene versiones en español e inglés
 * @param obj Objeto con propiedades base (español) y propertyEn (inglés)
 * @param property Nombre de la propiedad a traducir
 * @param language Idioma actual
 * @returns El texto en el idioma solicitado
 */
export function getTranslatedProperty<T extends Record<string, any>>(obj: T, property: keyof T, language: Language): string {
    if (language === 'en') {
        const englishProperty = `${String(property)}En` as keyof T;
        return (obj[englishProperty] as string) || (obj[property] as string) || '';
    }
    return (obj[property] as string) || '';
}

/**
 * Hook helper para obtener textos traducidos de arrays de objetos
 */
export function useTranslatedField<T extends Record<string, any>>(language: Language) {
    return (obj: T, field: keyof T) => getTranslatedProperty(obj, field, language);
}

/**
 * Formatea una fecha según el idioma
 */
export function formatDate(date: Date | string, language: Language): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const locale = language === 'es' ? 'es-ES' : 'en-US';

    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(dateObj);
}

/**
 * Formatea un número según el idioma
 */
export function formatNumber(num: number, language: Language): string {
    const locale = language === 'es' ? 'es-ES' : 'en-US';
    return new Intl.NumberFormat(locale).format(num);
}
