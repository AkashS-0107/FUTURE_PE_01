import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { SpatialDirection } from '../../data/spatialDirections';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CoverflowCarouselProps {
  items: SpatialDirection[];
  activeIndex: number;
  onChange: (index: number) => void;
  showPagination?: boolean;
  showCaption?: boolean;
  showNavigation?: boolean;
  className?: string;
}

interface CoverflowConfig {
  cardWidth: number;
  cardHeight: number;
  perspective: number;
  rotate: number;
  depth: number;
  gap: number;
}

export const CoverflowCarousel: React.FC<CoverflowCarouselProps> = ({
  items,
  activeIndex,
  onChange,
  showNavigation = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Responsive dimensions & perspective configuration
  const [config, setConfig] = useState<CoverflowConfig>({
    cardWidth: 520,
    cardHeight: 360,
    perspective: 1100,
    rotate: 30,
    depth: 200,
    gap: 240,
  });

  // Track prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Position tracking refs for silky 60fps RAF loop
  const targetPosRef = useRef<number>(activeIndex);
  const currentPosRef = useRef<number>(activeIndex);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startPosRef = useRef<number>(activeIndex);
  const dragDeltaXRef = useRef<number>(0);

  const numItems = items.length;

  // Sync target position when activeIndex prop updates externally
  useEffect(() => {
    if (!isDraggingRef.current) {
      // Calculate shortest distance in circular array
      const current = currentPosRef.current;
      
      // Keep target close to current to avoid unnecessary multi-rotation wraps
      const currentNormalized = ((current % numItems) + numItems) % numItems;
      let diff = activeIndex - currentNormalized;
      if (diff > numItems / 2) diff -= numItems;
      if (diff < -numItems / 2) diff += numItems;
      
      targetPosRef.current = current + diff;
    }
  }, [activeIndex, numItems]);

  // Window resize handler for responsive coverflow tuning
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1280) {
        setConfig({
          cardWidth: 540,
          cardHeight: 370,
          perspective: 1100,
          rotate: 32,
          depth: 210,
          gap: 250,
        });
      } else if (w >= 1024) {
        setConfig({
          cardWidth: 460,
          cardHeight: 320,
          perspective: 950,
          rotate: 28,
          depth: 170,
          gap: 210,
        });
      } else if (w >= 768) {
        setConfig({
          cardWidth: 380,
          cardHeight: 270,
          perspective: 850,
          rotate: 22,
          depth: 130,
          gap: 160,
        });
      } else {
        // Mobile (430px, 390px, 360px)
        const mobileWidth = Math.min(300, w - 64);
        setConfig({
          cardWidth: mobileWidth,
          cardHeight: Math.round(mobileWidth * 0.72),
          perspective: 650,
          rotate: 15,
          depth: 80,
          gap: 115,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Continuous animation loop using RAF
  const updateDOMTransforms = useCallback(() => {
    if (!containerRef.current) return;

    // Smooth lerp towards target position
    const lerpFactor = isDraggingRef.current ? 0.35 : 0.12;
    const diff = targetPosRef.current - currentPosRef.current;

    if (Math.abs(diff) > 0.0001) {
      currentPosRef.current += diff * lerpFactor;
    } else {
      currentPosRef.current = targetPosRef.current;
    }

    const currentP = currentPosRef.current;
    const slideElements = containerRef.current.querySelectorAll<HTMLDivElement>('.coverflow-slide');

    slideElements.forEach((el) => {
      const slideIndex = parseInt(el.getAttribute('data-index') || '0', 10);

      // Calculate circular relative distance [-numItems/2, numItems/2]
      let relOffset = (slideIndex - (currentP % numItems)) % numItems;
      if (relOffset > numItems / 2) relOffset -= numItems;
      if (relOffset < -numItems / 2) relOffset += numItems;

      const absOffset = Math.abs(relOffset);

      if (prefersReducedMotion) {
        // Reduced motion: flat 2D layout with subtle scale and fade
        const tx = relOffset * config.gap * 0.85;
        const scale = absOffset < 0.2 ? 1 : absOffset < 1.5 ? 0.88 : 0.75;
        const opacity = absOffset < 0.2 ? 1 : absOffset < 1.5 ? 0.65 : 0.3;
        const brightness = absOffset < 0.2 ? 1 : absOffset < 1.5 ? 0.7 : 0.45;
        const zIndex = 100 - Math.round(absOffset * 10);

        el.style.transform = `translate3d(${tx}px, 0, 0) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.filter = `brightness(${brightness})`;
        el.style.zIndex = `${zIndex}`;
      } else {
        // 3D Coverflow Perspective Depth Hierarchy
        const tx = relOffset * config.gap;
        const tz = -absOffset * config.depth;
        
        // Dynamic rotation angle smoothly scaling near center
        let ry = 0;
        if (relOffset < -0.05) {
          ry = config.rotate;
        } else if (relOffset > 0.05) {
          ry = -config.rotate;
        } else {
          ry = -relOffset * (config.rotate / 0.05);
        }

        // Active slide: opacity 1, scale 1, brightness 1
        // Adjacent slides: opacity 0.65, scale 0.88, brightness 0.7
        // Outer slides: opacity 0.3, scale 0.75, brightness 0.45
        let opacity = 1;
        let scale = 1;
        let brightness = 1;

        if (absOffset < 0.1) {
          opacity = 1;
          scale = 1;
          brightness = 1;
        } else if (absOffset <= 1.2) {
          opacity = 1 - absOffset * 0.35;
          scale = 1 - absOffset * 0.12;
          brightness = 1 - absOffset * 0.3;
        } else {
          opacity = Math.max(0.2, 0.65 - (absOffset - 1) * 0.35);
          scale = Math.max(0.68, 0.88 - (absOffset - 1) * 0.13);
          brightness = Math.max(0.35, 0.7 - (absOffset - 1) * 0.25);
        }

        const zIndex = 100 - Math.round(absOffset * 10);

        el.style.transform = `translate3d(${tx}px, 0, ${tz}px) rotateY(${ry}deg) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.filter = `brightness(${brightness})`;
        el.style.zIndex = `${zIndex}`;
      }
    });

    animFrameRef.current = requestAnimationFrame(updateDOMTransforms);
  }, [config, numItems, prefersReducedMotion]);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(updateDOMTransforms);
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [updateDOMTransforms]);

  // Handle pointer down (drag / swipe start)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Prevent drag if pointer target is a button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    // Only handle primary button / touch pointer
    if (e.button !== 0) return;

    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startPosRef.current = currentPosRef.current;
    dragDeltaXRef.current = 0;

    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  // Handle pointer move (dragging)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    dragDeltaXRef.current = deltaX;

    // Convert pixel displacement to index offset
    const indexOffset = -deltaX / (config.gap * 0.95);
    targetPosRef.current = startPosRef.current + indexOffset;
  };

  // Handle pointer up / cancel (drag end & snap to nearest index)
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }

    // Snap target position to nearest integer
    const rawTarget = Math.round(targetPosRef.current);
    targetPosRef.current = rawTarget;

    const normalizedIndex = ((rawTarget % numItems) + numItems) % numItems;
    onChange(normalizedIndex);
  };

  // Click handler on side cards to select directly
  const handleSlideClick = (index: number) => {
    if (Math.abs(dragDeltaXRef.current) > 8) return; // ignore if was a drag operation
    onChange(index);
  };

  // Key navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      const nextIndex = (activeIndex + 1) % numItems;
      onChange(nextIndex);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (activeIndex - 1 + numItems) % numItems;
      onChange(prevIndex);
    }
  };

  const handlePrev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + numItems) % numItems;
    onChange(prevIndex);
  }, [activeIndex, numItems, onChange]);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % numItems;
    onChange(nextIndex);
  }, [activeIndex, numItems, onChange]);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Curated Spatial Directions Coverflow"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative isolate w-full overflow-hidden select-none outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059]/50 ${className}`}
      style={{
        perspective: `${config.perspective}px`,
        height: `${config.cardHeight + 40}px`,
      }}
    >
      {/* 3D Stage Container */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={item.id}
              data-index={index}
              onClick={() => handleSlideClick(index)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${item.narrativeNumber}: ${item.title}`}
              aria-hidden={!isActive}
              className="coverflow-slide absolute top-1/2 left-1/2 cursor-pointer pointer-events-auto transition-opacity duration-300 will-change-transform"
              style={{
                width: `${config.cardWidth}px`,
                height: `${config.cardHeight}px`,
                marginTop: `-${config.cardHeight / 2}px`,
                marginLeft: `-${config.cardWidth / 2}px`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Image Frame with Clean Minimal Architectural Border */}
              <div className="relative w-full h-full overflow-hidden bg-[#141412] shadow-2xl border border-white/10 transition-colors duration-300 hover:border-white/30">
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center pointer-events-none filter contrast-[1.03] transition-transform duration-700"
                />

                {/* Subtle Gradient vignette for active card depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Active Indicator Top Tag */}
                {isActive && (
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#c5a059] border border-[#c5a059]/30">
                    {item.narrativeNumber} / 0{numItems}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls with explicit z-[200] stacking above transformed slides */}
      {showNavigation && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }}
            onPointerDown={(event) => {
              event.stopPropagation();
            }}
            aria-label="Previous spatial direction"
            style={{ touchAction: 'manipulation' }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[200] pointer-events-auto w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#f7f6f2] hover:bg-black/80 hover:border-white/30 active-spring transition-all focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
          >
            <ChevronLeft className="w-5 h-5 text-[#f7f6f2]" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
            onPointerDown={(event) => {
              event.stopPropagation();
            }}
            aria-label="Next spatial direction"
            style={{ touchAction: 'manipulation' }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[200] pointer-events-auto w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#f7f6f2] hover:bg-black/80 hover:border-white/30 active-spring transition-all focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
          >
            <ChevronRight className="w-5 h-5 text-[#f7f6f2]" />
          </button>
        </>
      )}
    </div>
  );
};
