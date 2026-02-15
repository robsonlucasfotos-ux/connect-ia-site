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
                        <div className="relative inline-flex mb-8">
                            <span className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-[#FF3B30] beacon" />
                            <span className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-[#FF3B30]/35 blur-md beacon" />

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-sm text-slate-300 font-medium">Sistema Inteligente + Suporte Humano</span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
                            Transforme sua empresa em uma{" "}
                            <span className="bg-[linear-gradient(90deg,#1E4ED8_0%,#7C3AED_55%,rgba(255,106,0,0.72)_100%)] bg-clip-text text-transparent">
                                máquina de vendas autônoma com IA
                            </span>
                            .
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="mt-5 max-w-2xl text-base md:text-lg text-white/75 mx-auto mb-10">
                            Pare de perder leads por falta de acompanhamento. Implementamos agentes de IA e automações
                            que vendem, atendem e qualificam seus clientes 24 horas por dia.
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
