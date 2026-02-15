import { Container } from '../ui/Container';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';

export function FAQ() {
    const faqItems = [
        {
            title: "O trabalho é todo feito por robôs?",
            content: "Não. A automação faz a parte repetitiva (atender rápido, qualificar). Mas a estratégia, a criação dos anúncios e o acompanhamento são feitos pela nossa equipe humana. Somos seus parceiros."
        },
        {
            title: "Vocês fazem os anúncios e o site?",
            content: "Sim. No plano 'Crescer', nossa equipe de design cria seu site/página de vendas e nossa equipe de tráfego cria e gerencia seus anúncios (Google/Facebook/Instagram)."
        },
        {
            title: "Eu preciso configurar alguma coisa?",
            content: "Não precisa. Nós configuramos tudo para você. Desde a conexão do WhatsApp até os scripts de venda. Você recebe o sistema pronto para usar."
        },
        {
            title: "E se eu precisar de ajuda?",
            content: "Você terá nosso WhatsApp de suporte direto. Não somos aquela empresa que some depois de vender. Acompanhamos você para garantir que o sistema continue funcionando."
        }
    ];

    return (
        <section className="py-24 bg-slate-900 border-t border-white/5" id="faq">
            <Container className="max-w-3xl">
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Perguntas Comuns
                        </h2>
                        <p className="text-lg text-slate-400">
                            Tudo explicado de forma simples.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                        <Accordion items={faqItems} />
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
