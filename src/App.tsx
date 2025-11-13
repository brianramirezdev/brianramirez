import '@/App.css';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Portfolio from '@/pages/Portfolio';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { ReactLenis } from '@/utils/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const lenis = new Lenis({ anchors: true });
        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <ReactLenis root />
            <Portfolio />
        </ThemeProvider>
    );
}

export default App;
