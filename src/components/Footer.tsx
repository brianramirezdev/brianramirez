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
            {/* Artistic soft background */}
            <div className="footer-bg absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-foreground/5 to-transparent opacity-20" />

            <div className="footer-inner relative max-w-7xl mx-auto flex flex-col gap-20">
                {/* CTA */}
                <div className="flex flex-col items-center text-center gap-6">
                    <h2
                        className="text-4xl md:text-6xl font-bold tracking-tight leading-tight
                        bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent"
                    >
                        {t.footer.ctaTitle}
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">{t.footer.ctaDescription}</p>

                    <div className="pt-4">
                        <ContactLinks />
                    </div>
                </div>

                {/* Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-muted-foreground">
                    {/* ABOUT */}
                    <div className="space-y-3">
                        <h3 className="text-sm  font-semibold tracking-wide text-killua">{t.footer.colAboutTitle}</h3>
                        <p>{t.footer.colAboutText}</p>
                    </div>

                    {/* LOCATION */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold tracking-wide text-killua">{t.footer.colLocationTitle}</h3>
                        <p>{t.footer.location}</p>
                        {/* <p className="opacity-60">{t.footer.colWorld}</p> */}
                    </div>

                    {/* CONTACT */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold tracking-wide text-killua">{t.footer.colContactTitle}</h3>

                        <a href="mailto:brianrd.dev@gmail.com" className="hover:text-killua transition-colors block">
                            brianrd.dev@gmail.com
                        </a>

                        <a href="tel:+34611154764" className="hover:text-killua transition-colors block">
                            +34 611 154 764
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-2">
                    <p>
                        {t.footer.copyright} — {t.footer.rights}
                    </p>
                    <p className="opacity-80">{t.footer.crafted}</p>
                </div>
            </div>
        </footer>
    );
}
