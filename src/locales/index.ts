// src/locales/index.ts
import { es } from './es';
import { en } from './en';
import type { Translations } from './es';

export const translations = {
    es,
    en,
} as const;

export type Language = keyof typeof translations;

export { es, en };
export type { Translations };
