import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Check, MessageCircle } from 'lucide-react';

export function Pricing() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="pricing">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <Container>
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Escolha o melhor caminho para o seu negócio
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Soluções diretas, sem pegadinhas.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Começar */}
                    <Reveal delay={0}>
                        <div className="p-8 rounded-2xl bg-slate-900 border border-white/5 flex flex-col h-full hover:border-white/20 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-2">Começar</h3>
                            <p className="text-slate-500 text-sm mb-6">Automação + Suporte Básico.</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center gap-3 text-slate-400 text-sm"><Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Atendimento Automático 24h</li>
                                <li className="flex items-center gap-3 text-slate-400 text-sm"><Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Resposta Imediata</li>
                                <li className="flex items-center gap-3 text-slate-400 text-sm"><Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Configuração pela nossa equipe</li>
                            </ul>
                            <Button variant="outline" className="w-full" href="https://wa.me/5561998519123" external>
                                <MessageCircle className="w-4 h-4 mr-2" /> Falar no WhatsApp
                            </Button>
                        </div>
                    </Reveal>

                    {/* Crescer */}
                    <Reveal delay={0.1}>
                        <div className="p-8 rounded-2xl bg-slate-900 border border-blue-500/50 flex flex-col h-full relative shadow-glow-sm scale-105 z-10">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                RECOMENDADO
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Crescer</h3>
                            <p className="text-slate-400 text-sm mb-6">Automação + Sites + Anúncios.</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center gap-3 text-white text-sm"><Check className="w-5 h-5 text-blue-500 flex-shrink-0" /> Tudo do plano Começar</li>
                                <li className="flex items-center gap-3 text-white text-sm"><Check className="w-5 h-5 text-blue-500 flex-shrink-0" /> Criação de Site (NOSSA EQUIPE)</li>
                                <li className="flex items-center gap-3 text-white text-sm"><Check className="w-5 h-5 text-blue-500 flex-shrink-0" /> Gestão de Tráfego (NOSSA EQUIPE)</li>
                                <li className="flex items-center gap-3 text-white text-sm"><Check className="w-5 h-5 text-blue-500 flex-shrink-0" /> Produção de Criativos e Textos</li>
                            </ul>
                            <Button variant="primary" className="w-full" href="https://wa.me/5561998519123" external>
                                <MessageCircle className="w-4 h-4 mr-2" /> Quero Crescer
                            </Button>
                        </div>
                    </Reveal>

                    {/* Máquina Completa */}
                    <Reveal delay={0.2}>
                        <div className="p-8 rounded-2xl bg-slate-900 border border-white/5 flex flex-col h-full hover:border-white/20 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-2">Máquina Completa</h3>
                            <p className="text-slate-500 text-sm mb-6">Parceria VIP e Consultoria.</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                <li className="flex items-center gap-3 text-slate-400 text-sm"><Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Tudo do plano Crescer</li>
                                <li className="flex items-center gap-3 text-slate-400 text-sm"><Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Gestão Completa de CRM</li>
                                <li className="flex items-center gap-3 text-slate-400 text-sm"><Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Reuniões de Acompanhamento</li>
                                <li className="flex items-center gap-3 text-slate-400 text-sm"><Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> Consultor Dedicado</li>
                            </ul>
                            <Button variant="outline" className="w-full" href="https://wa.me/5561998519123" external>
                                <MessageCircle className="w-4 h-4 mr-2" /> Falar com Consultor
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
