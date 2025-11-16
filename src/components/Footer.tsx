import { useLanguage } from '@/contexts/LanguageContext';
import ContactLinks from './ContactLinks';
import { useRef } from 'react';
import { useFooterRevealParallax } from '@/hooks/useFooterRevealParallax';

export default function Footer() {
    const { t } = useLanguage();
    const footerRef = useRef<HTMLElement>(null);

    useFooterRevealParallax(footerRef, {
        backgroundSelector: '.footer-bg',
    });

    return (
        <footer
            ref={footerRef}
            className={`footer-root flex relative justify-center items-center bg-background/30 backdrop-blur-xl border-t border-foreground/10 px-6 pt-20 pb-6 overflow-hidden sm:h-[calc(100dvh-97px)]`}
        >
            <div className="footer-inner relative max-w-7xl mx-auto flex flex-col gap-20">
                {/* CTA */}
                {/* CTA ligera / mini-branding */}
                <div className="flex flex-col items-center text-center gap-4">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">{t.footer.ctaMiniTitle}</h2>

                    <p className="text-base md:text-lg text-muted-foreground max-w-xl">{t.footer.ctaMiniSubtitle}</p>

                    <div className="pt-2">
                        <ContactLinks />
                    </div>
                </div>

                {/* Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-12 place-items-stretch text-muted-foreground">
                    {/* ABOUT */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold tracking-wide text-killua">{t.footer.colAboutTitle}</h3>
                        <p>{t.footer.colAboutText}</p>
                    </div>

                    {/* LOCATION */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold tracking-wide text-killua">{t.footer.colLocationTitle}</h3>
                        <p>{t.footer.location}</p>
                    </div>

                    {/* LINKS (no contacto directo) */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold tracking-wide text-killua">{t.footer.colLinksTitle}</h3>

                        <a href="/#about" className="hover:text-killua transition-colors block">
                            {t.footer.linkAbout}
                        </a>

                        <a href="/#projects" className="hover:text-killua transition-colors block">
                            {t.footer.linkProjects}
                        </a>

                        <a href="/#contact" className="hover:text-killua transition-colors block">
                            {t.footer.linkContact}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
