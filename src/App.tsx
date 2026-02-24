import '@/App.css';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ReactLenis } from '@/utils/lenis';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <ReactLenis root options={{ anchors: true }}>
                <LanguageProvider>
                    <BrowserRouter>
                        <Suspense fallback={null}>
                            <Routes>
                                <Route path="/" element={<Portfolio />} />
                                <Route path="/services" element={<Services />} />
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </LanguageProvider>
            </ReactLenis>
        </ThemeProvider>
    );
}

export default App;
