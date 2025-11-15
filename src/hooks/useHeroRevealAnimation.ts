// src/hooks/useHeroRevealAnimation.ts
import { useLayoutEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHeroRevealAnimation(
    ref: RefObject<HTMLElement | null>,
    config?: {
        titleSelector?: string;
        subtitleSelector?: string;
        logosSelector?: string;
        backgroundSelector?: string;
    }
) {
    useLayoutEffect(() => {
        console.log('FOUND:', document.querySelectorAll('.hero-contacts a[data-slot="button"]'));

        const ctx = gsap.context(() => {
            const { titleSelector = '.hero-title', subtitleSelector = '.hero-subtitle', logosSelector = '.hero-logos > *', backgroundSelector = '.hero-background' } = config || {};

            // timeline
            const tl = gsap.timeline({
                defaults: { ease: 'power2.out' },
            });

            // Background reveal (más suave y rápido)
            tl.from(
                backgroundSelector,
                {
                    opacity: 0,
                    scale: 8,
                    duration: 1,
                    ease: 'power1.out',
                },
                0
            );

            // Title reveal: más rápido y con stagger suave
            tl.from(
                titleSelector,
                {
                    y: 45,
                    opacity: 0,
                    scale: 1.03,
                    duration: 0.55,
                    stagger: {
                        each: 0.06,
                    },
                    ease: 'power2.out',
                },
                '-=0.4' // solapa más con el background
            );

            // Subtitle: rápido pero elegante
            tl.from(
                subtitleSelector,
                {
                    x: 25,
                    opacity: 0,
                    duration: 0.55,
                    ease: 'power2.out',
                },
                '-=0.2' // justo después del título
            ).to(
                subtitleSelector,
                {
                    duration: 0.5,
                    repeat: 1,
                    yoyo: true,
                },
                '-=0.35' // overlap para dinamismo natural
            );

            tl.from(
                '.hero-contacts div',
                {
                    y: 20,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.45,
                    stagger: {
                        each: 0.08,
                        from: 'center',
                    },
                    ease: 'power2.out',
                },
                '-=0.35' // Se solapa un poco con el subtítulo para un efecto natural
            );

            // Logos wave entrance: compacto y expresivo
            tl.from(
                logosSelector,
                {
                    y: 60,
                    opacity: 0,
                    duration: 0.5,
                    stagger: {
                        each: 0.04,
                        from: 'center',
                    },
                    ease: 'power2.out',
                },
                '-=0.8' // empieza antes para no dejar vacío al final
            );
        }, ref);

        return () => ctx.revert();
    }, [ref, config]);
}
