import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Pricing } from '../components/home/Pricing';
import { Container } from '../components/ui/Container';

export function Plans() {
    return (
        <div className="min-h-screen bg-surface-light flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20">
                <section className="bg-primary-dark text-white py-16 text-center">
                    <Container>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Planos</h1>
                        <p className="text-xl text-primary-light max-w-2xl mx-auto">
                            Investimento que se paga com a primeira venda recuperada.
                        </p>
                    </Container>
                </section>
                <Pricing />
            </main>
            <Footer />
        </div>
    );
}
