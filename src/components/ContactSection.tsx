import { Mail } from 'lucide-react';
import ContactLinks from './ContactLinks';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
    const { t } = useLanguage();
    return (
        <section id="contact" data-scroll-section className="min-h-screen flex items-center px-6 py-24">
            <div className="max-w-7xl mx-auto w-full">
                <div className="max-w-3xl">
                    <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
                        {t.contact.title}
                        <span className="ml-4 text-killua">{t.contact.together}</span>
                    </h2>

                    <p className="text-xl text-muted-foreground mb-12">{t.contact.description}</p>

                    <div className="space-y-6">
                        <a href="mailto:brianrd.dev@gmail.com" className="flex items-center gap-4 text-2xl hover:text-killua transition-colors group">
                            <Mail className="group-hover:scale-110 mt-1 transition-transform" />
                            {t.contact.email}
                        </a>

                        <a href="tel:+34611154764" className="flex items-center gap-4 text-2xl hover:text-killua transition-colors">
                            {t.contact.phone}
                        </a>

                        <ContactLinks />
                    </div>
                </div>
            </div>
        </section>
    );
}
