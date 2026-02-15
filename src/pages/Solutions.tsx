import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { MessageSquare, Users, Zap, Database, Box, Cpu } from 'lucide-react';

export function Solutions() {
    const modules = [
        {
            icon: MessageSquare,
            title: "Atendimento 24/7",
            description: "Seu cliente não espera. Nossa IA responde dúvidas, envia catálogos e qualifica leads instantaneamente, em qualquer horário.",
            details: [
                "Respostas humanizadas e personalizadas",
                "Envio de áudios (opcional)",
                "Transbordo para humano quando necessário"
            ]
        },
        {
            icon: Users,
            title: "Closer IA",
            description: "Transforme conversas em contratos. O Closer IA é treinado para negociar, contornar objeções de preço e fechar vendas complexas.",
            details: [
                "Negociação de valores e condições",
                "Geração de links de pagamento",
                "Follow-up automático"
            ]
        },
        {
            icon: Zap,
            title: "Speed-to-Lead",
            description: "Integração nativa com Facebook/Instagram Ads. O lead preencheu o formulário, o WhatsApp toca em menos de 5 segundos.",
            details: [
                "Aumento de 300% na taxa de contato",
                "Impedimento do esfriamento do lead",
                "Notificação para equipe de vendas"
            ]
        },
        {
            icon: Database,
            title: "Prospecção Ativa",
            description: "Não espere o cliente vir. A IA busca leads qualificados e inicia conversas de forma ativa e contextualizada.",
            details: [
                "Enriquecimento de listas",
                "Abordagem fria personalizada",
                "Agendamento de reuniões"
            ]
        },
        {
            icon: Box,
            title: "Gestão de Estoque",
            description: "Controle seu estoque pelo WhatsApp. Baixa automática, consulta de disponibilidade e alertas de reposição.",
            details: [
                "Integração com ERP (consulte)",
                "Consulta rápida de preços",
                "Relatórios diários"
            ]
        },
        {
            icon: Cpu,
            title: "Roadmap (Beta)",
            description: "Agentes autônomos que navegam na web, buscam oportunidades e trazem inteligência de mercado para sua operação.",
            isBeta: true
        }
    ];

    return (
        <div className="min-h-screen bg-surface-light flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <section className="bg-primary-dark text-white py-16">
                    <Container>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossas Soluções</h1>
                        <p className="text-xl text-primary-light max-w-2xl">
                            Tecnologia de ponta para automatizar cada etapa do seu funil de vendas.
                        </p>
                    </Container>
                </section>

                <section className="py-20">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {modules.map((module, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 flex flex-col">
                                    <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                                        <module.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                        {module.title}
                                        {module.isBeta && (
                                            <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full border border-accent/20">BETA</span>
                                        )}
                                    </h2>
                                    <p className="text-slate-600 mb-6 flex-grow">{module.description}</p>

                                    {module.details && (
                                        <ul className="space-y-2 mb-8 bg-surface-light p-4 rounded-lg">
                                            {module.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-slate-700">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <Button variant="outline" className="w-full" href={`https://wa.me/5561998519123?text=Quero saber mais sobre ${module.title}`} external>
                                        Quero esse módulo
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}
