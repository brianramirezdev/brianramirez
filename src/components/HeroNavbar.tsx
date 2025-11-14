import { useState } from 'react';
import { DownloadCVButton } from './DownloadCVButton';
import { LanguageToggle } from './LanguageToggle';
import { ModeToggle } from './ModeToggle';
import NavbarLinks from './NavbarLinks';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function HeroNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
                {/* Links desktop */}
                <div className="hidden md:block">
                    <NavbarLinks />
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center ">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Menú">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 max-w-xs">
                            <div className="p-6 pt-12 space-y-8">
                                <NavbarLinks />
                                <DownloadCVButton />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Botones a la derecha */}
                <div className="flex gap-2 md:gap-6 items-center">
                    {/* Solo escritorio */}
                    <div className="hidden md:block">
                        <DownloadCVButton />
                    </div>
                    <ModeToggle />
                    <LanguageToggle />
                </div>
            </div>
        </nav>
    );
}
