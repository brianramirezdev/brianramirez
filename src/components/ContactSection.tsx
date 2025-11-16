import { Mail, Phone } from 'lucide-react';
import ContactLinks from './ContactLinks';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionLayout from '@/layouts/SectionLayout';
import { useRef } from 'react';
import { useGsapFloatReveal } from '@/hooks/useGsapFloatReveal';
import ContactForm from '@/components/ContactForm';
import { useGsapScrollReveal } from '@/hooks/useGsapScrollReveal';

export default function ContactSection() {
    const { t } = useLanguage();
    const contactRef = useRef<HTMLElement>(null);

    useGsapFloatReveal(contactRef, '.gsap-reveal');
    useGsapScrollReveal(contactRef, '.gsap-card');

    return (
        <SectionLayout id="contact" ref={contactRef}>
            <div className="max-w-7xl w-full mx-auto md:pt-30 md:pb-20 lg:pb-30 flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left column (text content) */}
                <div className="w-full max-w-3xl space-y-10">
                    <div className="space-y-3 gsap-reveal">
                        <h2 className="gsap-reveal text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                            {t.contact.title} <span className="block md:inline text-killua">{t.contact.together}</span>
                        </h2>

                        <p className="text-base md:text-lg text-muted-foreground max-w-xl">{t.contact.tagline}</p>
                    </div>

                    <p className="gsap-reveal text-lg md:text-xl text-muted-foreground leading-relaxed">{t.contact.description}</p>

                    <div className="pt-6 space-y-8 border-l-2 pl-6 border-foreground/10 gsap-reveal">
                        <a href={`mailto:${t.contact.email}`} className="flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-killua transition-all group">
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            {t.contact.email}
                        </a>

                        <a href={`tel:${t.contact.phone}`} className="flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-killua transition-all group">
                            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            {t.contact.phone}
                        </a>

                        <div className="pt-4">
                            <ContactLinks />
                        </div>
                    </div>

                    <p className="gsap-reveal text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed pt-4">{t.contact.closingMessage}</p>
                </div>
                <ContactForm />
            </div>
        </SectionLayout>
    );
}
