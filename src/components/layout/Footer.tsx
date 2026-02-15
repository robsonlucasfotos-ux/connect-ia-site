import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5 py-12 mt-auto">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-white tracking-tighter mb-4 block">
                            Connect<span className="text-blue-500">IA</span>
                        </span>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            Sistema inteligente + suporte humano. <br />
                            Você nunca fica sozinho.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Navegação</h3>
                        <ul className="space-y-3">
                            <li><a href="#features" className="text-slate-500 hover:text-blue-400 transition-colors">Soluções</a></li>
                            <li><a href="#pricing" className="text-slate-500 hover:text-blue-400 transition-colors">Planos</a></li>
                            <li><a href="#faq" className="text-slate-500 hover:text-blue-400 transition-colors">Dúvidas</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link to="/privacidade" className="text-slate-500 hover:text-blue-400 transition-colors">Privacidade</Link></li>
                            <li><Link to="/termos" className="text-slate-500 hover:text-blue-400 transition-colors">Termos de Uso</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
                    <p>© {new Date().getFullYear()} Connect IA. Todos os direitos reservados.</p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <a href="https://www.instagram.com/connectartmkt/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
                            <span className="sr-only">Instagram</span>
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
