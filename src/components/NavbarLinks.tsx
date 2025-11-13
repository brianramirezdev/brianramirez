import { useLanguage } from '@/contexts/LanguageContext';

export default function NavbarLinks() {
    const { t } = useLanguage();
    return (
        <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-killua transition-colors">
                {t.navbar.about}
            </a>
            <a href="#work" className="hover:text-killua transition-colors">
                {t.navbar.works}
            </a>
            <a href="#contact" className="hover:text-killua transition-colors">
                {t.navbar.contact}
            </a>
        </div>
    );
}
