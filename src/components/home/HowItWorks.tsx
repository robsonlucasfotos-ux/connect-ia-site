import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export function HowItWorks() {
    const steps = [
        { title: "Diagnóstico", desc: "Entendemos seu negócio e definimos a estratégia." },
        { title: "Configuração", desc: "Nossa equipe monta as mensagens e os funis." },
        { title: "Criação", desc: "Produzimos os criativos e páginas (se contratar)." },
        { title: "Validação", desc: "Testes práticos para garantir qualidade." },
        { title: "Acompanhamento", desc: "Monitoramos e ajustamos para melhorar sempre." }
    ];

    return (
        <section className="py-24 bg-slate-900 border-y border-white/5" id="process">
            <Container>
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/3 md:sticky md:top-32 self-start">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Implementação guiada e sem estresse.
                            </h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Você não precisa aprender tecnologia. Nossa equipe faz a parte pesada e te entrega tudo pronto para vender.
                            </p>
                            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                                <p className="text-blue-400 text-sm font-semibold">
                                    ⏱️ Tempo médio de setup: 7 dias
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="md:w-2/3 relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <Reveal key={index} delay={index * 0.1}>
                                    <div className="relative flex gap-8 group">
                                        <div className="relative z-10 w-16 h-16 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center font-bold text-xl text-slate-500 group-hover:text-blue-500 group-hover:border-blue-500 transition-all shadow-xl">
                                            {index + 1}
                                        </div>
                                        <div className="pt-3">
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-slate-400">{step.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
