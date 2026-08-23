import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'accent' | 'outline' | 'subtle';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-widest uppercase rounded-full border transition-all duration-300';

  const variants = {
    neutral: 'bg-white/[0.04] border-white/10 text-[#a8a69e]',
    accent: 'bg-[#c5a059]/10 border-[#c5a059]/30 text-[#c5a059] font-medium shadow-sm shadow-[#c5a059]/5',
    outline: 'bg-transparent border-white/10 text-[#a8a69e]',
    subtle: 'bg-[#141412] border-white/5 text-[#737168]',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
