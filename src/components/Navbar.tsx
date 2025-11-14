// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { DownloadCVButton } from './DownloadCVButton';
import { LanguageToggle } from './LanguageToggle';
import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu, X, User, Briefcase, Mail, Download } from 'lucide-react';

export default function Navbar() {
    const { t } = useLanguage();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    const navLinks = [
        { href: '#about', label: t.navbar.about, icon: User },
        { href: '#projects', label: t.navbar.projects, icon: Briefcase },
        { href: '#contact', label: t.navbar.contact, icon: Mail },
    ];

    return (
        <nav
            className={`
                fixed top-0 w-full z-50 transition-all duration-300
                ${scrolled ? 'bg-background/95 backdrop-blur-lg border-b shadow-sm' : 'bg-background/80 backdrop-blur-md border-b border-border/50'}
            `}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 h-16">
                {/* Mobile Menu Button - IZQUIERDA */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
                                {open ? <X className="h-5 w-5 transition-transform rotate-90" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0">
                            <SheetHeader className="px-6 pt-6 pb-4">
                                <SheetTitle className="text-left text-xl">{t.navbar.projects || 'Menú'}</SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col px-4 pb-6">
                                {/* Mobile Navigation Links */}
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link) => {
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
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
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
