import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Options {
    container: string;
    elements: string;
}

export function useContactRevealAnimation(ref: React.RefObject<HTMLElement | null>, opts: Options) {
    useLayoutEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.from(opts.elements, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.12,
                scrollTrigger: {
                    trigger: opts.container,
                    start: 'top 85%',
                    once: true,
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [ref, opts]);
}
