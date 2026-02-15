import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { MapPin } from 'lucide-react';

export function LocationMap() {
    return (
        <section className="py-24 bg-slate-950 border-t border-white/5 relative">
            <Container>
                <div className="text-center mb-16">
                    <Reveal>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 mb-6">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Onde estamos
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Venha tomar um café com a gente ou agende uma visita.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                        {/* 
                            ATENÇÃO: Substitua o src do iframe abaixo pelo link "Embed a map" do Google Maps da sua localização real.
                            1. Vá no Google Maps
                            2. Procure seu endereço
                            3. Clique em Compartilhar -> Incorporar um mapa
                            4. Copie o link do SRC e cole abaixo
                        */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.298070992336!2d-47.88684722517596!3d-15.79340982290488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3ae6c5c88b09%3A0xc3e3877943d63300!2sBras%C3%ADlia%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
