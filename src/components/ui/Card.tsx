import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'flat' | 'outline' | 'elevated';
  hoverable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'outline',
  hoverable = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-sm transition-all duration-300 overflow-hidden';

  const variants = {
    flat: 'bg-[#141412]/80 border border-transparent',
    outline: 'bg-[#141412]/50 border border-white/[0.08] backdrop-blur-sm',
    elevated: 'bg-[#1c1b18] border border-white/10 shadow-2xl shadow-black/60',
  };

  const hoverStyles = hoverable
    ? 'hover:border-white/20 hover:bg-[#1c1b18]/80 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40'
    : '';

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
