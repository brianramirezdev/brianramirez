import { useLayoutEffect } from 'react';

export function useGsapScrollReveal(gsap: any, ref: React.RefObject<HTMLElement | null>, selector = '.gsap-card') {
    useLayoutEffect(() => {
        if (!gsap || !ref.current) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray(selector).forEach((card: HTMLElement) => {
                gsap.fromTo(
                    card,
                    { y: 80, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 95%',
                            end: 'top 45%',
                            scrub: true,
                        },
                    }
                );
            });
        }, ref);

        return () => ctx.revert();
    }, [gsap, ref, selector]);
}
