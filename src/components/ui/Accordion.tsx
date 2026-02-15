import { useState, type ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                className="flex w-full items-center justify-between py-6 text-left font-medium text-white hover:text-blue-400 transition-colors focus:outline-none"
                onClick={onToggle}
            >
                <span className="text-lg">{title}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-blue-500" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
            </button>
            <div
                className={twMerge(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                )}
            >
                <div className="text-slate-400 leading-relaxed pr-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

interface AccordionProps {
    items: { title: string; content: ReactNode }[];
    className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={clsx("divide-y divide-white/5", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
