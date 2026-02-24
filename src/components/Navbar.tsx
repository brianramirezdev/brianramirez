// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { DownloadCVButton } from './DownloadCVButton';
import { LanguageToggle } from './LanguageToggle';
import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu, X, User, Briefcase, Mail, Wrench } from 'lucide-react';

export default function Navbar() {
    const { t } = useLanguage();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isHome = location.pathname === '/';
    const isServices = location.pathname === '/services';

    // Detectar scroll para cambiar estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar el Sheet al hacer click en un link
    const handleNavClick = () => {
        setOpen(false);
    };

    // Home-page anchor links: use hash when on home, absolute path when on another route
    const homeAnchorLinks = [
        { href: isHome ? '#about' : '/#about', label: t.navbar.about, icon: User },
        { href: isHome ? '#projects' : '/#projects', label: t.navbar.projects, icon: Briefcase },
        { href: isHome ? '#contact' : '/#contact', label: t.navbar.contact, icon: Mail },
    ];

    return (
        <nav
            className={`
                fixed top-0 w-full py-4 z-50 transition-all duration-300
                ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm' : 'bg-transparent backdrop-blur-none border-none'}
            `}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 h-16">
                {/* Mobile Menu Button - IZQUIERDA */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative" aria-label={open ? t.navbar.closeMenu : t.navbar.openMenu}>
                                {open ? <X className="h-5 w-5 transition-transform rotate-90" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0">
                            <SheetHeader className="px-6 pt-6 pb-4">
                                <SheetTitle className="text-left text-xl">{t.navbar.sidebarTitle}</SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col px-4 pb-6">
                                {/* Mobile Navigation Links */}
                                <nav className="flex flex-col gap-1">
                                    {/* Home anchor links */}
                                    {homeAnchorLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                onClick={handleNavClick}
                                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-all duration-200 group"
                                            >
                                                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-killua transition-colors" />
                                                <span className="font-medium">{link.label}</span>
                                            </a>
                                        );
                                    })}

                                    {/* Services — React Router Link */}
                                    <Link
                                        to="/services"
                                        onClick={handleNavClick}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                                            isServices
                                                ? 'text-killua bg-killua/10'
                                                : 'text-foreground hover:bg-accent'
                                        }`}
                                    >
                                        <Wrench className={`h-5 w-5 transition-colors ${isServices ? 'text-killua' : 'text-muted-foreground group-hover:text-killua'}`} />
                                        <span className="font-medium">{t.navbar.services}</span>
                                    </Link>
                                </nav>

                                <Separator className="my-4" />

                                {/* Mobile Download CV Button */}
                                <DownloadCVButton />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Navigation - IZQUIERDA */}
                <div className="hidden md:flex items-center gap-1">
                    {homeAnchorLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Services — React Router Link */}
                    <Link
                        to="/services"
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                            isServices
                                ? 'text-killua bg-killua/10 hover:bg-killua/15'
                                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                    >
                        {t.navbar.services}
                    </Link>
                </div>

                {/* Actions - DERECHA */}
                <div className="flex items-center gap-2">
                    {/* Desktop Download Button */}
                    <div className="hidden md:block">
                        <DownloadCVButton />
                    </div>

                    {/* Desktop Separator */}
                    <Separator orientation="vertical" className="h-6 hidden md:block" />

                    {/* Theme & Language Toggles */}
                    <ModeToggle />
                    <LanguageToggle />
                </div>
            </div>
        </nav>
    );
}
