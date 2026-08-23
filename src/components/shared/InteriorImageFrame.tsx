import React from 'react';

export interface InteriorImageFrameProps {
  src?: string;
  category?: 'living' | 'kitchen' | 'dining' | 'suite' | 'hero' | 'blueprint';
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide' | 'auto';
  title?: string;
  caption?: string;
  className?: string;
  hoverEffect?: boolean;
  priority?: boolean;
  objectPosition?: string;
}

export const InteriorImageFrame: React.FC<InteriorImageFrameProps> = ({
  src,
  aspectRatio = 'landscape',
  title,
  caption,
  className = '',
  hoverEffect = true,
  priority = false,
  objectPosition = 'center',
}) => {
  const aspectClasses = {
    landscape: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
    wide: 'aspect-[16/9] sm:aspect-[21/9]',
    auto: 'h-full w-full',
  };

  return (
    <div
      className={`relative group overflow-hidden bg-[#141412] border border-white/[0.08] rounded-sm shadow-2xl transition-all duration-500 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* Real Image or Fallback SVG */}
      <div
        className={`w-full h-full transition-transform duration-700 ease-out ${
          hoverEffect ? 'group-hover:scale-105' : ''
        }`}
      >
        {src ? (
          <img
            src={src}
            alt={title || 'Interior Design Haven Asset'}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            style={{ objectPosition }}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[#141412] flex items-center justify-center text-[#737168] font-mono text-xs">
            <span>[Interior Perspective Asset]</span>
          </div>
        )}
      </div>

      {/* Atmospheric Hairline Frame Overlay */}
      <div className="absolute inset-2 border border-white/[0.05] pointer-events-none transition-colors duration-300 group-hover:border-white/10" />

      {/* Subtle Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/90 via-[#0c0c0b]/20 to-transparent pointer-events-none" />

      {/* Content Overlay */}
      {(title || caption) && (
        <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1 z-10">
          {title && (
            <h3 className="text-base font-serif-editorial font-bold text-[#f7f6f2] group-hover:text-[#c5a059] transition-colors">
              {title}
            </h3>
          )}
          {caption && (
            <p className="text-xs text-[#a8a69e] font-mono tracking-wide line-clamp-2">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InteriorImageFrame;
