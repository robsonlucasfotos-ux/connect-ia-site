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
                        <div className="flex flex-col leading-none">
                            <div className="flex items-baseline gap-2">
                                <span className="text-white font-extrabold text-xl">Connect</span>
                                <span className="text-[#FF6A00] font-extrabold text-xl">IA</span>
                            </div>
                            <span className="text-white/60 text-[11px] tracking-wide">
                                Marketing digital e automações
                            </span>
                        </div>
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
