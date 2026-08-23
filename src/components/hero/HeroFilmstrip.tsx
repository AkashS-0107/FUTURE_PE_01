import React, { useRef, useState, useEffect } from 'react';
import type { HeroSlide } from '../../data/heroSlides';

export interface HeroFilmstripProps {
  slides: HeroSlide[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
}

const getCircularDistance = (
  index: number,
  activeIndex: number,
  total: number
) => {
  let distance = index - activeIndex;

  if (distance > total / 2) {
    distance -= total;
  }

  if (distance < -total / 2) {
    distance += total;
  }

  return distance;
};

export const HeroFilmstrip: React.FC<HeroFilmstripProps> = ({
  slides,
  activeIndex,
  onSlideChange,
}) => {
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const isPointerDownRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const dragDeltaRef = useRef<number>(0);

  // Pointer drag event handlers with explicit button exemption
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }

    isPointerDownRef.current = true;
    startXRef.current = e.clientX;
    dragDeltaRef.current = 0;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current) return;
    const delta = e.clientX - startXRef.current;
    dragDeltaRef.current = delta;
    setDragOffset(delta);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    setIsDragging(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    const finalDelta = dragDeltaRef.current;
    setDragOffset(0);

    if (finalDelta < -35) {
      onSlideChange((activeIndex + 1) % slides.length);
    } else if (finalDelta > 35) {
      onSlideChange((activeIndex - 1 + slides.length) % slides.length);
    }
  };

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (document.activeElement?.tagName || '').toUpperCase();
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') return;

      if (e.key === 'ArrowLeft') {
        onSlideChange((activeIndex - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        onSlideChange((activeIndex + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, slides.length, onSlideChange]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Architectural inspiration carousel"
      className="relative w-full overflow-hidden py-6 sm:py-8 lg:py-12 select-none touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="relative mx-auto h-[280px] sm:h-[400px] lg:h-[540px] max-w-[1500px]">
        {slides.map((slide, index) => {
          const distance = getCircularDistance(
            index,
            activeIndex,
            slides.length
          );

          if (Math.abs(distance) > 2) {
            return null;
          }

          const absDistance = Math.abs(distance);

          const scale =
            distance === 0
              ? 1
              : absDistance === 1
                ? 0.86
                : 0.72;

          const opacity =
            distance === 0
              ? 1
              : absDistance === 1
                ? 0.65
                : absDistance === 2
                  ? 0.3
                  : 0;

          const brightness =
            distance === 0
              ? 1
              : absDistance === 1
                ? 0.7
                : 0.45;

          const zIndex =
            distance === 0
              ? 30
              : absDistance === 1
                ? 20
                : 10;

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.title}`}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('button')) return;
                if (Math.abs(dragDeltaRef.current) < 10 && distance !== 0) {
                  onSlideChange(index);
                }
              }}
              style={{
                transform: `translate(-50%, -50%) translateX(calc(${
                  distance * 42
                }% + ${dragOffset}px)) scale(${scale})`,
                opacity,
                zIndex,
                filter: `brightness(${brightness})`,
              }}
              className={`absolute left-1/2 top-1/2 w-[72vw] max-w-[720px] aspect-[4/3] will-change-transform rounded-xs overflow-hidden border ${
                isDragging
                  ? 'transition-none cursor-grabbing'
                  : 'transition-all duration-700 ease-out cursor-grab'
              } ${
                distance === 0
                  ? 'border-white/20 shadow-2xl shadow-black/90 ring-1 ring-white/10'
                  : 'border-white/[0.08] hover:opacity-85 hover:border-white/15'
              }`}
            >
              <div className="relative w-full h-full bg-[#141412] group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={distance === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />

                {/* Hairline Inner Architectural Frame */}
                <div className="absolute inset-3 sm:inset-4 border border-white/[0.06] pointer-events-none" />

                {/* Active Slide Subtle Glow Framing */}
                {distance === 0 && (
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#c5a059]/20 pointer-events-none" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroFilmstrip;
