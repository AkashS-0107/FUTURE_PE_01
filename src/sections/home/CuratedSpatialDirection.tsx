import React, { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { CoverflowCarousel } from '../../components/ui/CoverflowCarousel';
import { SPATIAL_DIRECTIONS } from '../../data/spatialDirections';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface CuratedSpatialDirectionProps {
  onOpenEnquiry?: () => void;
}

export const CuratedSpatialDirection: React.FC<CuratedSpatialDirectionProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { ref, revealClasses } = useScrollReveal();

  const activeDirection = SPATIAL_DIRECTIONS[activeIndex] || SPATIAL_DIRECTIONS[0];
  const totalDirections = SPATIAL_DIRECTIONS.length;

  return (
    <section
      id="curated-directions"
      aria-label="Curated Spatial Directions"
      className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#0c0c0b] relative overflow-hidden scroll-section-offset"
    >
      <Container className="space-y-10 lg:space-y-12">
        {/* Restrained Editorial Header */}
        <div
          ref={ref}
          className={`flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto ${revealClasses}`}
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c5a059] font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            CURATED SPATIAL DIRECTIONS
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight leading-tight pt-1">
            Find the atmosphere that feels closest to the way you want to live.
          </h2>

          <p className="text-base text-[#a8a69e] leading-relaxed font-sans-architectural max-w-2xl pt-1">
            A curated selection of spatial directions created to help you articulate architectural preferences, daylight orientation, and material temperaments.
          </p>
        </div>

        {/* Primary Coverflow Interaction Area */}
        <div className="relative pt-2 pb-4">
          <CoverflowCarousel
            items={SPATIAL_DIRECTIONS}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
            showNavigation={true}
          />
        </div>

        {/* Restrained Active Content Readout */}
        <div className="max-w-xl mx-auto text-center space-y-3 pt-2">
          {/* Numeric Indicator */}
          <div className="text-xs font-mono tracking-widest text-[#c5a059] uppercase">
            {activeDirection.narrativeNumber} / 0{totalDirections} &bull; {activeDirection.spatialFocus}
          </div>

          {/* Active Title */}
          <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#f7f6f2] tracking-tight">
            {activeDirection.title}
          </h3>

          {/* Atmospheric Description */}
          <p className="text-sm sm:text-base text-[#a8a69e] font-sans-architectural leading-relaxed">
            {activeDirection.description}
          </p>

          {/* Atmosphere Detail Tag */}
          <div className="pt-2 text-xs font-mono text-[#737168] uppercase tracking-wider">
            {activeDirection.atmosphere}
          </div>
        </div>
      </Container>
    </section>
  );
};
