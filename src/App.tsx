import '@/App.css';
import { ThemeProvider } from '@/components/theme-provider';
import Portfolio from '@/pages/Portfolio';
import SmoothScroll from '@/components/SmoothScroll';

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <SmoothScroll>
                <Portfolio />
            </SmoothScroll>
        </ThemeProvider>
    );
}

export default App;
