'use client';
import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => 1 - Math.pow(2, -10 * t), // easing más fluido
            smoothWheel: true,
        });

        // Guardamos la instancia global
        (window as any).lenis = lenis;

        // 🔹 Vinculamos el ticker de GSAP al de Lenis
        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateLenis);

        // 🔹 Cada vez que Lenis hace scroll, actualiza ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // 🔹 Refresca al cargar
        ScrollTrigger.refresh();

        return () => {
            gsap.ticker.remove(updateLenis);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
