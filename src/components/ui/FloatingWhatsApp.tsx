import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/5561998519123"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-bounce-slow"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
            <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
                Falar com consultor
            </span>
        </a>
    );
}
