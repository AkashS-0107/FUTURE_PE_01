import React from 'react';

export interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
}) => {
  return (
    <a
      href="#"
      className={`inline-block group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] ${className}`}
      aria-label="Design Haven - Home"
    >
      <span className="text-lg sm:text-xl font-serif-editorial font-normal tracking-tight text-[#f7f6f2] group-hover:text-[#c5a059] transition-colors leading-none">
        Design Haven
      </span>
    </a>
  );
};

export default BrandLogo;

