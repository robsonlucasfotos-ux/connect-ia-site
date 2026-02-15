import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/home/Hero';
import { AuthorityBar } from '../components/home/AuthorityBar';
import { PainPoints } from '../components/home/PainPoints';
import { Features } from '../components/home/Features';
import { HowItWorks } from '../components/home/HowItWorks';
import { Pricing } from '../components/home/Pricing';
import { Testimonials } from '../components/home/Testimonials';
import { FAQ } from '../components/home/FAQ';
import { FinalCTA } from '../components/home/FinalCTA';
import { Footer } from '../components/layout/Footer';

import { LocationMap } from '../components/home/LocationMap';

export function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
            <Navbar />
            <main>
                <Hero />
                <AuthorityBar />
                <PainPoints />
                <Features />
                <HowItWorks />
                <Pricing />
                <Testimonials />
                <FAQ />
                <LocationMap />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
