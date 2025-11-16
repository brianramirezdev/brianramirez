import '@/App.css';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Portfolio from '@/pages/Portfolio';
import { useEffect } from 'react';
import { ReactLenis } from '@/utils/lenis';
import { LanguageProvider } from '@/contexts/LanguageContext';

function App() {
    useEffect(() => {
        // Solo ejecutar cuando el navegador está libre
        requestIdleCallback(async () => {
            const { default: Lenis } = await import('lenis');
            const lenis = new Lenis({ anchors: true });

            function raf(time: any) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        });
    }, []);

    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <ReactLenis root />
            <LanguageProvider>
                <Portfolio />
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
