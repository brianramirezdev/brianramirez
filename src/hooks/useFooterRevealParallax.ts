import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Options {
    footerSelector?: string; // opcional ahora
    backgroundSelector?: string;
}

export function useFooterRevealParallax(ref: React.RefObject<HTMLElement | null>, opts: Options = {}) {
    useLayoutEffect(() => {
        if (!ref.current) return;

        const footerEl = ref.current;
        const bgEl = opts.backgroundSelector ? document.querySelector(opts.backgroundSelector) : null;

        const ctx = gsap.context(() => {
            // --- REVEAL SUAVE ---
            gsap.fromTo(
                footerEl,
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

            // --- PARALLAX VERTICAL (SUAVE, SIN CONFLICTOS) ---
            gsap.to(footerEl, {
                y: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: footerEl,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 0.4,
                },
            });

            // --- PARALLAX DE FONDO (OPCIONAL) ---
            if (bgEl) {
                gsap.to(bgEl, {
                    y: -35,
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
