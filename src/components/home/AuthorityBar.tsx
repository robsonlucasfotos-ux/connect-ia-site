import { Container } from '../ui/Container';
import { ShieldCheck, Zap, Server, Lock } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function AuthorityBar() {
    const authorities = [
        { icon: Zap, label: "Respostas Rápidas" },
        { icon: ShieldCheck, label: "Tecnologia Oficial" },
        { icon: Server, label: "Sistema Estável" },
        { icon: Lock, label: "Suporte Dedicado" },
    ];

    return (
        <div className="border-y border-white/5 bg-slate-950/50 backdrop-blur-sm relative z-20">
            <Container>
                <Reveal delay={0.4}>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
                        {authorities.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 text-slate-300">
                                <item.icon className="w-5 h-5 text-blue-500" />
                                <span className="text-sm font-medium tracking-wide font-sans">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </Container>
        </div>
    );
}
