import '@/App.css';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Portfolio from '@/pages/Portfolio';
import { ReactLenis } from '@/utils/lenis';
import { LanguageProvider } from '@/contexts/LanguageContext';

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <ReactLenis root options={{ anchors: true }}>
                <LanguageProvider>
                    <Portfolio />
                </LanguageProvider>
            </ReactLenis>
        </ThemeProvider>
    );
}

export default App;
