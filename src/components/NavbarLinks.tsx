export default function NavbarLinks() {
    return (
        <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-killua transition-colors">
                Sobre mí
            </a>
            <a href="#work" className="hover:text-killua transition-colors">
                Trabajo
            </a>
            <a href="#contact" className="hover:text-killua transition-colors">
                Contacto
            </a>
        </div>
    );
}
