// src/hooks/useGsapFloatReveal.ts
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapFloatReveal(ref: React.RefObject<HTMLElement | null>, selector = '.gsap-reveal') {
    useLayoutEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const targets = gsap.utils.toArray<HTMLElement>(selector);

            // Animación revelado artístico + float
            gsap.set(targets, {
                opacity: 0,
                y: 15,
                clipPath: 'inset(0 100% 0 0)', // oculto desde la derecha
            });

            gsap.to(targets, {
                opacity: 1,
                y: 0,
                clipPath: 'inset(0 0% 0 0)', // revela completamente
                duration: 1.4,
                ease: 'cubic-bezier(0.23, 1, 0.32, 1)', // tipo expo suave
                stagger: 0.12,
                scrollTrigger: {
                    trigger: targets,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true,
                    // markers: true,
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [ref, selector]);
}
