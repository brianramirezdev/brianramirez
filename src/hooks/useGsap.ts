import { useEffect, useState } from 'react';

export function useGsap() {
    const [gsap, setGsap] = useState<any>(null);

    useEffect(() => {
        let mounted = true;

        async function load() {
            const gsapModule = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');

            gsapModule.default.registerPlugin(ScrollTrigger);

            if (mounted) setGsap(gsapModule.default);
        }

        load();
        return () => {
            mounted = false;
        };
    }, []);

    return gsap;
}
