import { useLayoutEffect } from 'react';

export function useHeroRevealAnimation(gsap: any, ref: any, config?: any) {
    useLayoutEffect(() => {
        if (!gsap || !ref.current) return;

        const ctx = gsap.context(() => {
            const { titleSelector = '.hero-title', subtitleSelector = '.hero-subtitle', logosSelector = '.hero-logos > *', backgroundSelector = '.hero-background' } = config || {};

            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

            tl.to('.hero-content', { opacity: 1, duration: 0 });
            tl.from(backgroundSelector, { opacity: 0, scale: 8, duration: 1 }, 0);

            tl.from(
                titleSelector,
                {
                    y: 45,
                    opacity: 0,
                    scale: 1.03,
                    duration: 0.55,
                    stagger: 0.06,
                },
                '-=0.4',
            );

            tl.from(
                subtitleSelector,
                {
                    x: 25,
                    opacity: 0,
                    duration: 0.55,
                },
                '-=0.2',
            );

            tl.from(
                '.hero-contacts div',
                {
                    y: 20,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.45,
                    stagger: 0.08,
                },
                '-=0.35',
            );

            tl.from(
                logosSelector,
                {
                    y: 60,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.04,
                },
                '-=0.8',
            );
        }, ref);

        return () => ctx.revert();
    }, [gsap, ref, config]);
}
