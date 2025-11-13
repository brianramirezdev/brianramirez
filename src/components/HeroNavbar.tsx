import { DownloadCVButton } from './DownloadCVButton';
import { ModeToggle } from './ModeToggle';
import NavbarLinks from './NavbarLinks';

export default function HeroNavbar() {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <NavbarLinks />
                <div className="flex gap-4 items-center">
                    <DownloadCVButton />
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
