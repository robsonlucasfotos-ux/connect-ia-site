import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow font-sans" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen font-sans" />
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] mix-blend-screen animate-float font-sans" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm text-slate-300 font-medium">Sistema Inteligente + Suporte Humano</span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 font-sans">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                Seu WhatsApp vendendo com rotina
                            </span><br />
                            — e a nossa equipe do seu lado.
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 font-sans">
                            A Connect IA coloca um sistema de atendimento e vendas para trabalhar no seu WhatsApp todos os dias. E a nossa equipe acompanha de perto, ajusta e dá suporte contínuo — como parceiros comerciais do seu negócio.
                        </p>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto shadow-glow-md"
                                href="https://wa.me/5561998519123"
                                external
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Quero conversar no WhatsApp
                            </Button>
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto"
                                href="https://wa.me/5561998519123"
                                external
                            >
                                Quero uma avaliação
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
