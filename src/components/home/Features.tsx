import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { MessageSquare, Users, Zap, Database, Globe, Megaphone } from 'lucide-react';

export function Features() {
    const modules = [
        {
            icon: MessageSquare,
            title: "Atendimento 24h",
            description: "O sistema responde rápido em qualquer horário. Seu cliente nunca fica no vácuo, de dia ou de noite."
        },
        {
            icon: Users,
            title: "Fechamento de Vendas",
            description: "A automação ajuda a negociar e tirar dúvidas, repassando para você apenas o cliente pronto."
        },
        {
            icon: Zap,
            title: "Resposta Instantânea",
            description: "Quando o cliente clica no anúncio, o sistema chama na hora. Velocidade automática para não perder vendas."
        },
        {
            icon: Database,
            title: "Retomada Automática de Leads",
            description: "O cliente pediu orçamento e sumiu? A nossa IA retoma a conversa no WhatsApp no tempo certo, tira dúvidas e mantém o lead quente — sem você precisar lembrar de tudo. A automação executa, nossa equipe ajusta."
        },
        {
            icon: Globe,
            title: "SITES E PÁGINAS",
            description: "NOSSA EQUIPE cria sites profissionais e páginas de vendas (landing pages) no padrão da sua marca.",
            highlight: true
        },
        {
            icon: Megaphone,
            title: "TRÁFEGO PAGO COMPLETO",
            description: "NOSSA EQUIPE produz as imagens, escreve os textos e gerencia seus anúncios para trazer clientes certos.",
            highlight: true
        }
    ];

    return (
        <section className="py-24 bg-slate-950 relative" id="features">
            <Container>
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <Reveal>
                        <span className="text-blue-500 font-sans text-sm tracking-wider uppercase mb-2 block">
                            Tudo o que você precisa
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            O Sistema faz a rotina. <br />
                            Nós cuidamos da estratégia.
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            A Connect IA une automação inteligente com uma equipe de especialistas. Você nunca fica sozinho tentando configurar ferramentas.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className={`p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 h-full flex flex-col ${module.highlight
                                    ? 'bg-gradient-to-br from-blue-900/20 to-slate-900/50 border-blue-500/30'
                                    : 'bg-slate-900/50 border-white/5 hover:border-white/10'
                                }`}>
                                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                                    <module.icon className={`w-7 h-7 ${module.highlight ? 'text-blue-400' : 'text-slate-200 group-hover:text-blue-400'} transition-colors`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide text-sm">{module.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-base flex-grow">
                                    {module.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
