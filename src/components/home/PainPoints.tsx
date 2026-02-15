import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { AlertTriangle, TrendingUp, BarChart3 } from 'lucide-react';

export function PainPoints() {
    const pains = [
        {
            icon: TrendingUp,
            title: "Vendas sem rotina",
            description: "Pare de contar com a sorte. Tenha um site inteligente que transforma seu processo de vendas em uma máquina automática de resultados, mês após mês.",
            value: "Crescimento travado"
        },
        {
            icon: AlertTriangle,
            title: "Apagando incêndio",
            description: "Trabalhar sem processos é focar na correção de erros em vez da geração de resultados!",
            value: "Estresse diário"
        },
        {
            icon: BarChart3,
            title: "Depende de você",
            description: "Pare de correr atrás de clientes. Tenha uma gestão de tráfego que gere demanda, um  site de alta conversão  e automações que trabalhem por você 24h por dia, no automático.",
            value: "Sem liberdade"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.03),transparent_70%)] pointer-events-none" />

            <Container>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                            Sem estrutura, sua empresa não sai do lugar.
                        </h2>
                        <Reveal delay={0.1}>
                            <p className="text-lg text-slate-400">
                                Organizar a casa é o único jeito de parar de vender por sorte e começar a vender com rotina.
                            </p>
                        </Reveal>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pains.map((pain, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-glow-sm">
                                <div className="absolute top-0 right-0 p-4 opacity-70 font-sans text-xs text-orange-400 font-bold border-l border-b border-white/5 rounded-bl-xl bg-slate-950/50">
                                    {pain.value}
                                </div>
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <pain.icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {pain.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
