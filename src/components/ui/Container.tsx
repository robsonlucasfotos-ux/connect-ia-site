import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ReactNode } from 'react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
    return (
        <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
            {children}
        </div>
    );
}
