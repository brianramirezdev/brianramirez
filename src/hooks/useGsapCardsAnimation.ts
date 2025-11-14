import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapCardsAnimation(ref: React.RefObject<HTMLElement | null>, cardSelector = '.gsap-card') {
    useLayoutEffect(() => {
        if (!ref.current) return;
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(cardSelector).forEach((card) => {
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
                            // markers: true,
                        },
                    }
                );
            });
        }, ref);

        return () => ctx.revert();
    }, [ref, cardSelector]);
}
