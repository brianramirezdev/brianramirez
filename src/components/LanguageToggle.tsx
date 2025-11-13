// src/components/LanguageToggle.tsx
import { useLanguage } from '@/contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe, SquareCheck } from 'lucide-react';

const languages = {
    es: {
        name: 'Español',
        flag: '🇪🇸',
    },
    en: {
        name: 'English',
        flag: '🇬🇧',
    },
} as const;

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const { t } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative" aria-label="Cambiar idioma / Change language">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">{t.language.toggle}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="flex flex-col gap-1 min-w-[150px]">
                {Object.entries(languages).map(([key, { name, flag }]) => (
                    <DropdownMenuItem key={key} onClick={() => setLanguage(key as keyof typeof languages)} className={`cursor-pointer ${language === key ? 'bg-accent' : ''}`}>
                        <span className="mr-2 text-lg">{flag}</span>
                        <span>{name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
