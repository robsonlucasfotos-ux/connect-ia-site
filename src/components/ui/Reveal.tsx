import { type PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = PropsWithChildren<{
    delay?: number;
    y?: number;
    className?: string;
}>;

export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
    const shouldReduceMotion = useReducedMotion();
    const reduce = shouldReduceMotion ?? false;

    if (reduce) return <div className={className}>{children}</div>;

    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
