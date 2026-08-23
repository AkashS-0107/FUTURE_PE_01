import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0b] disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide rounded-sm active-spring';

  const variants = {
    primary:
      'bg-[#f7f6f2] text-[#0c0c0b] hover:bg-[#e2e0d8] active:scale-[0.98] shadow-md shadow-black/20',
    secondary:
      'bg-[#1c1b18] text-[#f7f6f2] border border-white/10 hover:bg-[#252420] hover:border-white/20 active:scale-[0.98]',
    outline:
      'border border-white/12 text-[#e2e0d8] hover:text-[#f7f6f2] hover:border-white/25 hover:bg-white/[0.04] active:scale-[0.98]',
    ghost:
      'text-[#a8a69e] hover:text-[#f7f6f2] hover:bg-white/[0.05] active:scale-[0.98]',
    accent:
      'bg-[#c5a059] text-[#0c0c0b] font-semibold hover:bg-[#d8b268] active:scale-[0.98] shadow-lg shadow-[#c5a059]/15',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-mono uppercase tracking-wider',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-7 py-3.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
