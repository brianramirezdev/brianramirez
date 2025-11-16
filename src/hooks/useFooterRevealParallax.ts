import { useLayoutEffect } from 'react';

export function useFooterRevealParallax(gsap: any, ref: React.RefObject<HTMLElement | null>, opts: { backgroundSelector?: string } = {}) {
    useLayoutEffect(() => {
        if (!gsap || !ref.current) return;

        const footerEl = ref.current;
        const innerEl = footerEl.querySelector('.footer-inner');
        const bgEl = opts.backgroundSelector ? footerEl.querySelector(opts.backgroundSelector) : null;

        const ctx = gsap.context(() => {
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
                    },
                }
            );

            gsap.to(innerEl, {
                y: -10,
                scrollTrigger: {
                    trigger: footerEl,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 0.4,
                },
            });

            if (bgEl) {
                gsap.to(bgEl, {
                    y: -15,
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
    }, [gsap, ref, opts]);
}
