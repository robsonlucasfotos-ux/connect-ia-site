import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Soluções', href: '#features' },
        { name: 'Processo', href: '#process' },
        { name: 'Planos', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
            }`}>
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo area */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="relative w-8 h-8 md:w-10 md:h-10">
                            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <img src="/brand/logo-connect.png.png" alt="Connect IA" className="relative w-full h-full object-contain" />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                            Connect<span className="text-blue-500">IA</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="secondary" size="sm" href="https://wa.me/5561998519123" external>
                            Área do Cliente
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/5 p-4 flex flex-col space-y-4 shadow-xl border-t border-white/5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="w-full" href="https://wa.me/5561998519123" external>
                            Falar no WhatsApp
                        </Button>
                    </div>
                )}
            </Container>
        </nav>
    );
}
