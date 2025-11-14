import { Mail } from 'lucide-react';
import ContactLinks from './ContactLinks';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionLayout from '@/layouts/SectionLayout';

export default function ContactSection() {
    const { t } = useLanguage();
    return (
        <SectionLayout id="contact">
            <div className="max-w-7xl mx-auto w-full">
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                        {t.contact.title}
                        <span className="block md:inline ml-0 md:ml-4 text-killua">{t.contact.together}</span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">{t.contact.description}</p>

                    <div className="space-y-6">
                        <a href="mailto:brianrd.dev@gmail.com" className="flex items-center gap-3 md:gap-4 text-lg md:text-2xl hover:text-killua transition-colors group break-all">
                            <Mail className="group-hover:scale-110 mt-1 transition-transform" />
                            {t.contact.email}
                        </a>

                        <a href="tel:+34611154764" className="flex items-center gap-3 md:gap-4 text-lg md:text-2xl hover:text-killua transition-colors">
                            {t.contact.phone}
                        </a>

                        <ContactLinks />
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
