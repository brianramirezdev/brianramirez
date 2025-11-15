import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Options {
    backgroundSelector?: string;
}

export function useFooterRevealParallax(ref: React.RefObject<HTMLElement | null>, opts: Options = {}) {
    useLayoutEffect(() => {
        if (!ref.current) return;

        const footerEl = ref.current;
        const innerEl = footerEl.querySelector('.footer-inner');
        const bgEl = opts.backgroundSelector ? footerEl.querySelector(opts.backgroundSelector) : null;

        if (!innerEl) {
            console.warn('useFooterRevealParallax: Missing .footer-inner inside footer.');
            return;
        }

        const ctx = gsap.context(() => {
            // --- REVEAL INICIAL ---
            gsap.fromTo(
                innerEl,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: footerEl,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // --- PARALLAX DEL CONTENIDO ---
            gsap.to(innerEl, {
                y: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: footerEl,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 0.4,
                },
            });

            // --- PARALLAX DEL FONDO ---
            if (bgEl) {
                gsap.to(bgEl, {
                    y: -15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: footerEl,
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: 0.4,
                    },
                });
            }
        }, ref);

        return () => ctx.revert();
    }, [ref, opts]);
}
