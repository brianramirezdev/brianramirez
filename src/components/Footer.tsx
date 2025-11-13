import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t px-6 py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
                <p>© 2025 Brian Ramírez</p>
                <p>{t.footer.location}</p>
            </div>
        </footer>
    );
}
