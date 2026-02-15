import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes } from 'react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    external?: boolean;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    href,
    external,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-light focus:ring-primary',
        secondary: 'bg-surface-light text-primary-dark hover:bg-gray-100 focus:ring-gray-200',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary',
        ghost: 'text-primary hover:bg-primary/5 focus:ring-primary',
        accent: 'bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-lg shadow-accent/20 hover:shadow-accent/30',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
    };

    const classes = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    if (href) {
        if (external) {
            return (
                <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return (
            <Link to={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
