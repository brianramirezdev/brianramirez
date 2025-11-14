import { Mail, Phone } from 'lucide-react';
import ContactLinks from './ContactLinks';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionLayout from '@/layouts/SectionLayout';
import { useRef } from 'react';
import { useGsapFloatReveal } from '@/hooks/useGsapFloatReveal';

export default function ContactSection() {
    const { t } = useLanguage();
    const contactRef = useRef<HTMLElement>(null);

    // Aplicar animación artística float reveal
    useGsapFloatReveal(contactRef, '.gsap-reveal');

    return (
        <SectionLayout id="contact" ref={contactRef}>
            <div className="max-w-7xl mx-auto w-full">
                <div className="max-w-3xl space-y-10">
                    {/* Title */}
                    <div className="space-y-3 gsap-reveal">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                            {t.contact.title} <span className="block md:inline text-killua">{t.contact.together}</span>
                        </h2>

                        <p className="text-base md:text-lg text-muted-foreground max-w-xl">{t.contact.tagline}</p>
                    </div>

                    {/* Main description */}
                    <p className="gsap-reveal text-lg md:text-xl text-muted-foreground leading-relaxed">{t.contact.description}</p>

                    {/* Contact block */}
                    <div className="pt-6 space-y-8 border-l-2 pl-6 border-foreground/10 gsap-reveal">
                        {/* Email */}
                        <a href="mailto:brianrd.dev@gmail.com" className="flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-killua transition-all group">
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            {t.contact.email}
                        </a>

                        {/* Phone */}
                        <a href="tel:+34611154764" className="flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-killua transition-all">
                            <Phone className="w-6 h-6 transition-transform" />
                            {t.contact.phone}
                        </a>

                        {/* Social icons */}
                        <div className="pt-4">
                            <ContactLinks />
                        </div>
                    </div>

                    {/* Closing message */}
                    <p className="gsap-reveal text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed pt-4">{t.contact.closingMessage}</p>
                </div>
            </div>
        </SectionLayout>
    );
}
