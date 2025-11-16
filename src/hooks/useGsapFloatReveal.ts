import { useLayoutEffect } from 'react';

export function useGsapFloatReveal(gsap: any, ref: React.RefObject<HTMLElement | null>, selector = '.gsap-reveal') {
    useLayoutEffect(() => {
        if (!gsap || !ref.current) return;

        const ctx = gsap.context(() => {
            const targets = gsap.utils.toArray(selector);

            gsap.set(targets, {
                opacity: 0,
                y: 15,
                clipPath: 'inset(0 100% 0 0)',
            });

            gsap.to(targets, {
                opacity: 1,
                y: 0,
                clipPath: 'inset(0 0% 0 0)',
                duration: 1.4,
                stagger: 0.12,
                ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
                scrollTrigger: {
                    trigger: targets,
                    start: 'top 80%',
                    end: 'bottom 45%',
                    scrub: true,
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [gsap, ref, selector]);
}
