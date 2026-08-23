import React, { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { HERO_SLIDES } from '../../data/heroSlides';
import { HeroFilmstrip } from '../../components/hero/HeroFilmstrip';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import type { HeroCandidate } from '../../types/content';

export interface HeroSectionProps {
  content?: HeroCandidate;
  onOpenEnquiry?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry: _onOpenEnquiry,
}) => {
  const { ref, revealClasses } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeSlide = HERO_SLIDES[activeIndex] || HERO_SLIDES[0];
  const totalSlides = HERO_SLIDES.length;

  const handlePrevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section
      id="hero"
      aria-label="Spatial Identity & Personal Vision"
      className="relative pt-[calc(var(--header-height)+1rem)] sm:pt-[calc(var(--header-height)+2rem)] pb-12 sm:pb-16 overflow-hidden bg-[#0c0c0b] border-b border-white/[0.08] scroll-section-offset isolation-auto"
    >
      {/* Hero-Only Atmospheric Treatment (Strictly contained inside #hero) */}
      <div
        className="hero-atmosphere absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out z-0"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 35%, ${activeSlide.accent} 0%, rgba(12, 12, 11, 0) 80%)`,
          opacity: 0.85,
        }}
      />

      <Container className="relative z-10 space-y-6 sm:space-y-8">
        {/* Top Editorial Identity & Vision Header */}
        <div
          ref={ref}
          className={`flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto ${revealClasses}`}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#c5a059] font-medium">
              SPATIAL IDENTITY &amp; PERSONAL VISION
            </span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="text-[clamp(2.75rem,5.5vw,6rem)] font-serif-editorial font-bold text-[#f7f6f2] leading-[1.05] tracking-tight">
            A Living Space<br className="hidden sm:inline" /> Shaped by the Way<br className="hidden sm:inline" /> You Live.
          </h1>

          {/* Short Editorial Supporting Statement */}
          <p className="text-base sm:text-lg lg:text-xl text-[#a8a69e] font-sans-architectural leading-relaxed max-w-2xl pt-1">
            We partner with creative homeowners to transform living spaces into authentic, cohesive environments through thoughtful spatial planning, natural light integration, and collaborative guidance.
          </p>
        </div>

        {/* Cinematic Architectural Image Filmstrip */}
        <div className="relative z-20">
          <HeroFilmstrip
            slides={HERO_SLIDES}
            activeIndex={activeIndex}
            onSlideChange={setActiveIndex}
          />
        </div>

        {/* Dynamic Slide Metadata & Navigation Controls */}
        <div className="max-w-2xl mx-auto text-center space-y-4 pt-1 relative z-[150]">
          {/* Dynamic Counter & Category */}
          <div className="text-xs font-mono tracking-[0.2em] text-[#c5a059] uppercase font-semibold flex items-center justify-center gap-2">
            <span>0{activeIndex + 1} / 0{totalSlides}</span>
            <span>&bull;</span>
            <span>{activeSlide.category}</span>
          </div>

          {/* Active Slide Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight">
            {activeSlide.title}
          </h2>

          {/* Atmospheric Description */}
          <p className="text-sm sm:text-base text-[#a8a69e] font-sans-architectural leading-relaxed max-w-xl mx-auto">
            {activeSlide.description}
          </p>

          {/* Separate Navigation Controls (High Stacking Context, Ignored by Pointer Drag) */}
          <div className="flex items-center justify-between gap-4 pt-3 max-w-sm sm:max-w-md mx-auto">
            <button
              type="button"
              aria-label="Previous interior slide"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevSlide();
              }}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a8a69e] hover:text-[#f7f6f2] transition-colors cursor-pointer py-2 px-4 border border-white/10 hover:border-white/20 rounded-xs bg-[#0c0c0b]/80 backdrop-blur-xs active-spring"
            >
              <ChevronLeft className="w-4 h-4 text-[#c5a059]" />
              <span>Previous</span>
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(idx);
                  }}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    idx === activeIndex ? 'w-6 bg-[#c5a059]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next interior slide"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                handleNextSlide();
              }}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a8a69e] hover:text-[#f7f6f2] transition-colors cursor-pointer py-2 px-4 border border-white/10 hover:border-white/20 rounded-xs bg-[#0c0c0b]/80 backdrop-blur-xs active-spring"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 text-[#c5a059]" />
            </button>
          </div>

          {/* Action Trigger Group (CTAs) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="accent"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => {
                const target = document.querySelector('#curated-directions');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="shadow-xl shadow-[#c5a059]/10"
            >
              EXPLORE SPATIAL INSPIRATION
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const target = document.querySelector('#trust');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              READ OUR PHILOSOPHY
            </Button>
          </div>
        </div>

        {/* Smooth Scroll Cue */}
        <div className="flex justify-center pt-4 text-[#737168]">
          <a
            href="#curated-directions"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-[#c5a059] transition-colors active-spring"
          >
            <span>Begin Spatial Journey</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
