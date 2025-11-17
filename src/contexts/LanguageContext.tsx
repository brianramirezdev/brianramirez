// src/contexts/LanguageContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language } from '@/locales';
import { type Translations } from '@/locales';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    // Detectar idioma del navegador o usar español por defecto
    const getInitialLanguage = (): Language => {
        const stored = localStorage.getItem('language') as Language;

        // 1. Si hay valor guardado en localStorage → úsalo
        if (stored && (stored === 'es' || stored === 'en' || stored === 'ja')) {
            return stored;
        }

        // 2. Detectar idioma del navegador
        const browserLang = navigator.language.toLowerCase();

        if (browserLang.startsWith('en')) return 'en';
        if (browserLang.startsWith('ja')) return 'ja';

        // 3. Por defecto → inglés
        return 'es';
    };

    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        // Actualizar el atributo lang del HTML para accesibilidad
        document.documentElement.lang = lang;
    };

    useEffect(() => {
        // Setear el idioma inicial en el HTML
        document.documentElement.lang = language;
    }, []);

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language] as Translations,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// Hook personalizado para usar el contexto de idioma
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
