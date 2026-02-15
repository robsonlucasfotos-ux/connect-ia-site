import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Plans } from './pages/Plans';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQPage } from './pages/FAQPage';
import { ScrollToTop } from './components/layout/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solucoes" element={<Solutions />} />
                <Route path="/planos" element={<Plans />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/faq" element={<FAQPage />} />
            </Routes>
        </Router>
    );
}

export default App;
