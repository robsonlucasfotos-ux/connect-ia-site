import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10 text-center">
                <Reveal>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight max-w-4xl mx-auto">
                        Sua concorrência não vai esperar você se modernizar.
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Implemente sua Máquina de Vendas com IA hoje e comece a escalar sem aumentar a equipe.
                    </p>
                    <Button size="lg" variant="accent" className="shadow-glow-lg text-lg px-10 py-5" href="https://wa.me/5561998519123" external>
                        Falar com Especialista Agora <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="mt-6 text-sm text-slate-500">
                        Setup em 7 dias • Garantia de Satisfação • Suporte Dedicado
                    </p>
                </Reveal>
            </Container>
        </section>
    );
}
