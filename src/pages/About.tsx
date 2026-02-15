import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export function About() {
    return (
        <div className="min-h-screen bg-surface-light flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <section className="bg-white py-16 md:py-24">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sobre a Connect IA</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Nossa missão é trazer a previsibilidade e organização das grandes empresas para o seu negócio, através de Inteligência Artificial prática e acessível.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="bg-surface-light rounded-2xl p-8 md:p-12 border border-gray-100">
                                <h3 className="text-2xl font-bold text-primary mb-4">Por que existimos?</h3>
                                <p className="text-slate-600 mb-6">
                                    Vimos empresários perdendo vendas todos os dias por simples falta de braço operacional.
                                    Leads esfriando, clientes sem resposta, estoque bagunçado.
                                </p>
                                <p className="text-slate-600">
                                    A tecnologia para resolver isso existia, mas era complexa e cara.
                                    Decidimos empacotar essa tecnologia em soluções "plug-and-play" focadas em resultado.
                                </p>
                            </div>
                            <div>
                                {/* Placeholder for an image or graphic */}
                                <div className="aspect-video bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-premium flex items-center justify-center text-white/20">
                                    <span className="text-6xl font-bold">IA</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Nossos Valores</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-primary mb-2">Transparência</h4>
                                    <p className="text-sm text-slate-600">O que vendemos é o que entregamos. Sem letras miúdas.</p>
                                </div>
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-primary mb-2">Resultado</h4>
                                    <p className="text-sm text-slate-600">Tecnologia por tecnologia não serve. Focamos no ROI.</p>
                                </div>
                                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-primary mb-2">Simplicidade</h4>
                                    <p className="text-sm text-slate-600">Complexidade fica com a gente. Para você, é simples.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="bg-primary-dark py-20 text-center">
                    <Container>
                        <h2 className="text-3xl font-bold text-white mb-8">Vamos conversar sobre o seu negócio?</h2>
                        <Button variant="accent" size="lg" href="https://wa.me/5561998519123" external>
                            Falar com Consultor
                        </Button>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}
