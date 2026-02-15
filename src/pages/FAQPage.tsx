import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FAQ } from '../components/home/FAQ';
import { Container } from '../components/ui/Container';

export function FAQPage() {
    return (
        <div className="min-h-screen bg-surface-light flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <section className="bg-white py-16 text-center">
                    <Container>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Central de Ajuda</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Perguntas frequentes sobre nossa tecnologia e serviços.
                        </p>
                    </Container>
                </section>
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
