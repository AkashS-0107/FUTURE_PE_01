import React from 'react';
import { INTERIOR_IMAGES } from '../../data/interiorImages';
import { homeContent } from '../../data/homeContent';
import { Button } from '../../components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface DesignPhilosophyBentoProps {
  onOpenEnquiry?: () => void;
}

export const DesignPhilosophyBento: React.FC<DesignPhilosophyBentoProps> = ({ onOpenEnquiry }) => {
  const pillar1 = homeContent.philosophyPillars[0]; // Authentic Identity
  const pillar2 = homeContent.philosophyPillars[1]; // Collaborative Validation
  const pillar3 = homeContent.philosophyPillars[2]; // Holistic Environments

  return (
    <div className="space-y-6">
      {/* 5-Block Asymmetric Bento Composition Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* ==========================================
            01. DOMINANT FEATURE BLOCK (7 Columns Desktop / 2 Columns Tablet)
            ========================================== */}
        <div className="lg:col-span-7 md:col-span-2 bg-[#141412] border border-white/[0.08] rounded-sm p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between group transition-colors duration-500 hover:border-white/20 shadow-2xl min-h-[420px]">
          {/* Subtle architectural background grid line texture */}
          <div className="absolute inset-0 architectural-grid-bg opacity-40 pointer-events-none" />
          
          {/* Background image subtle bleed on right side */}
          <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full opacity-15 sm:opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
            <img
              src={INTERIOR_IMAGES.img5.src}
              alt={INTERIOR_IMAGES.img5.title}
              className="w-full h-full object-cover object-center grayscale mix-blend-luminosity transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#141412] via-[#141412]/80 to-transparent" />
          </div>

          {/* Top content */}
          <div className="relative z-10 space-y-6 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                01 / CORE PHILOSOPHY
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight leading-[1.15]">
              Spaces Shaped by Personal Identity, Not Fleeting Decor Trends
            </h3>

            <p className="text-sm sm:text-base text-[#a8a69e] leading-relaxed font-sans-architectural max-w-lg">
              We replace standardized catalog templates with spaces that reflect your authentic lifestyle, daily movement, and restorative rituals. Your home should be an unmistakable extension of who you are.
            </p>
          </div>

          {/* Bottom quote / footer accent */}
          <div className="relative z-10 pt-10 mt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#a8a69e] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>Identity-First Spatial Architecture</span>
            </div>
            <span className="text-xs font-mono text-[#737168]">DESIGN HAVEN ARCHITECTURE</span>
          </div>
        </div>

        {/* ==========================================
            02. SUPPORTING VISUAL BLOCK (5 Columns Desktop / 1 Column Tablet)
            ========================================== */}
        <div className="lg:col-span-5 md:col-span-1 bg-[#141412] border border-white/[0.08] rounded-sm overflow-hidden flex flex-col justify-between group transition-colors duration-500 hover:border-white/20 shadow-xl min-h-[420px]">
          {/* Top Image area with natural bleed */}
          <div className="relative h-60 sm:h-64 overflow-hidden shrink-0">
            <img
              src={INTERIOR_IMAGES.img12.src}
              alt={INTERIOR_IMAGES.img12.title}
              className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-[0.88] group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141412] via-[#141412]/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#f7f6f2] bg-[#0c0c0b]/90 px-2.5 py-1 border border-white/10 rounded-xs">
                02 / AUTHENTIC IDENTITY
              </span>
            </div>
          </div>

          {/* Bottom editorial content */}
          <div className="p-6 sm:p-8 space-y-3 relative z-10 bg-[#141412] flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-serif-editorial font-bold text-[#f7f6f2]">
                {pillar1.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#a8a69e] leading-relaxed font-sans-architectural">
                {pillar1.description}
              </p>
            </div>
            <div className="pt-4 text-xs font-mono text-[#c5a059] uppercase tracking-wider font-medium flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#c5a059]" />
              {pillar1.tagline}
            </div>
          </div>
        </div>

        {/* ==========================================
            03. TYPOGRAPHY-LED MINIMAL BLOCK (4 Columns Desktop / 1 Column Tablet)
            ========================================== */}
        <div className="lg:col-span-4 md:col-span-1 bg-[#141412] border border-white/[0.08] rounded-sm p-6 sm:p-8 flex flex-col justify-between group transition-colors duration-500 hover:border-white/20 shadow-xl min-h-[340px]">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold">
                03 / COLLABORATIVE VALIDATION
              </span>
              <div className="w-8 h-[1px] bg-[#c5a059]/40" />
            </div>

            <div className="space-y-3">
              <h4 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#f7f6f2] leading-tight">
                {pillar2.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#a8a69e] leading-relaxed font-sans-architectural">
                {pillar2.description}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.06] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#737168] block">
              OUR PROMISE
            </span>
            <p className="text-xs text-[#c5a059] font-sans-architectural italic leading-relaxed">
              "We validate and structure your creative taste without imposing rigid corporate rules."
            </p>
          </div>
        </div>

        {/* ==========================================
            04. HORIZONTAL EDITORIAL COMPOSITION (8 Columns Desktop / 2 Columns Tablet)
            ========================================== */}
        <div className="lg:col-span-8 md:col-span-2 bg-[#141412] border border-white/[0.08] rounded-sm overflow-hidden grid grid-cols-1 sm:grid-cols-12 group transition-colors duration-500 hover:border-white/20 shadow-xl min-h-[340px]">
          {/* Image side (5 cols) */}
          <div className="sm:col-span-5 relative h-56 sm:h-full min-h-[220px] overflow-hidden">
            <img
              src={INTERIOR_IMAGES.img2.src}
              alt={INTERIOR_IMAGES.img2.title}
              className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-[0.88] group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-[#141412]/30 to-[#141412]" />
          </div>

          {/* Editorial Content side (7 cols) */}
          <div className="sm:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                04 / HOLISTIC ENVIRONMENTS
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#f7f6f2] leading-tight">
                {pillar3.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#a8a69e] leading-relaxed font-sans-architectural">
                {pillar3.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-[#a8a69e]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span>Natural Daylight</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span>Tactile Surfaces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span>Spatial Volume</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            05. WIDE CONCLUDING TRANSITION BLOCK (12 Columns Desktop / 2 Columns Tablet)
            ========================================== */}
        <div className="lg:col-span-12 md:col-span-2 bg-[#1c1b18] border border-white/10 rounded-sm p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group transition-all duration-300 hover:border-white/20 shadow-2xl">
          <div className="absolute inset-0 architectural-grid-bg opacity-30 pointer-events-none" />
          
          <div className="relative z-10 space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              05 / SPATIAL DISCOVERY JOURNEY
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#f7f6f2]">
              Ready to Translate Your Vision into Architectural Clarity?
            </h4>
            <p className="text-xs sm:text-sm text-[#a8a69e] font-sans-architectural">
              Share your property details, style inspirations, and spatial priorities through our unhurried enquiry framework.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            {onOpenEnquiry && (
              <Button
                variant="accent"
                size="lg"
                onClick={onOpenEnquiry}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-lg shadow-[#c5a059]/10 hover:shadow-[#c5a059]/25 transition-all duration-300 w-full sm:w-auto"
              >
                Begin Guided Enquiry
              </Button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DesignPhilosophyBento;
