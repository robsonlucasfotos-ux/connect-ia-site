import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Phone, Mail, Instagram } from 'lucide-react';

export function Contact() {
    return (
        <div className="min-h-screen bg-surface-light flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <section className="bg-white py-16 md:py-24">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Fale Conosco</h1>
                            <p className="text-xl text-slate-600">
                                A forma mais rápida de falar com a gente é, claro, pelo WhatsApp.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="bg-surface-light p-8 rounded-2xl text-center border border-gray-100 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                                <p className="text-slate-500 mb-6">Atendimento Comercial</p>
                                <Button variant="primary" className="w-full" href="https://wa.me/5561998519123" external>
                                    Chamar Agora
                                </Button>
                            </div>

                            <div className="bg-surface-light p-8 rounded-2xl text-center border border-gray-100 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Email</h3>
                                <p className="text-slate-500 mb-6">Parcerias e Suporte</p>
                                <Button variant="outline" className="w-full" href="mailto:contato@connectia.com.br" external>
                                    Enviar Email
                                </Button>
                            </div>

                            <div className="bg-surface-light p-8 rounded-2xl text-center border border-gray-100 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Instagram</h3>
                                <p className="text-slate-500 mb-6">Acompanhe updates</p>
                                <Button variant="outline" className="w-full" href="https://www.instagram.com/connectartmkt/" external>
                                    Seguir
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}
