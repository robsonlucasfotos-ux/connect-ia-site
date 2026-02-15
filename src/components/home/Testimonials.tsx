import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { Star } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
            name: "Ricardo Silva",
            role: "Dono de E-commerce",
            content: "Antes eu perdia vendas porque não conseguia responder de madrugada. Agora acordo com vendas feitas.",
            result: "+35% conversão"
        },
        {
            name: "Fernanda Lima",
            role: "Clínica de Estética",
            content: "A IA agenda consultas e tira dúvidas sobre procedimentos melhor que minha secretária anterior.",
            result: "Agenda lotada"
        },
        {
            name: "João Pedro",
            role: "Infoprodutor",
            content: "Recuperou 60% dos carrinhos abandonados no meu último lançamento. O ROI foi absurdo.",
            result: "60% recuperação"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 border-y border-white/5">
            <Container>
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Resultados Reais
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 relative">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                                    ))}
                                </div>
                                <p className="text-slate-300 mb-6 italic">"{item.content}"</p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <div className="font-bold text-white">{item.name}</div>
                                        <div className="text-sm text-slate-500">{item.role}</div>
                                    </div>
                                    <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                        {item.result}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
