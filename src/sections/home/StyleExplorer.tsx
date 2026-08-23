import React, { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { homeContent } from '../../data/homeContent';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';

export interface StyleExplorerProps {
  onOpenEnquiry: () => void;
}

export const StyleExplorer: React.FC<StyleExplorerProps> = ({ onOpenEnquiry }) => {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('mood-tactile');
  const { ref, revealClasses } = useScrollReveal();

  const selectedMood =
    homeContent.styleMoods.find((m) => m.id === selectedMoodId) || homeContent.styleMoods[0];

  return (
    <section id="style-explorer" className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#0c0c0b] relative scroll-section-offset">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 architectural-grid-bg opacity-20 pointer-events-none" />

      <Container className="relative z-10 space-y-14">
        {/* Section Header */}
        <div ref={ref} className={`space-y-4 max-w-3xl ${revealClasses}`}>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            AESTHETIC DIRECTION EXPLORER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight">
            Explore Your Design Identity
          </h2>
          <p className="text-base text-[#a8a69e] leading-relaxed font-sans-architectural">
            Struggling to articulate fragmented ideas? Select an aesthetic direction below to preview how architectural textures, light orientation, and material choices structure cohesive living environments.
          </p>
        </div>

        {/* Split Editorial Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (5 cols): Tactile Mood Rail */}
          <div className="lg:col-span-5 bg-[#141412] border border-white/[0.08] p-6 sm:p-8 rounded-sm space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#f7f6f2] flex items-center gap-2 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Style Directions</span>
              </h3>
              <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold">
                01 / 04
              </span>
            </div>

            {/* Mood Selector Rail */}
            <div className="space-y-3">
              {homeContent.styleMoods.map((mood) => {
                const isSelected = mood.id === selectedMoodId;
                return (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMoodId(mood.id)}
                    className={`w-full text-left p-4 rounded-sm border transition-all duration-300 cursor-pointer active-spring ${
                      isSelected
                        ? 'bg-[#1c1b18] border-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                        : 'bg-[#0c0c0b]/60 border-white/[0.06] hover:border-white/20 hover:bg-[#1c1b18]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base sm:text-lg font-serif-editorial font-bold text-[#f7f6f2]">
                        {mood.name}
                      </h4>
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isSelected ? 'bg-[#c5a059]' : 'bg-white/20'
                        }`}
                      />
                    </div>
                    <p className="text-xs text-[#a8a69e] mt-1 font-mono">{mood.tagline}</p>
                  </button>
                );
              })}
            </div>

            {/* Action Trigger */}
            <div className="pt-4 border-t border-white/[0.08]">
              <Button
                variant="accent"
                size="md"
                className="w-full justify-between shadow-lg shadow-[#c5a059]/10"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={onOpenEnquiry}
              >
                Inquire For This Direction
              </Button>
            </div>
          </div>

          {/* Right Column (7 cols): Dominant Architectural Visual Canvas */}
          <div className="lg:col-span-7 bg-[#141412] border border-white/[0.08] p-6 sm:p-8 rounded-sm space-y-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold">
                    AESTHETIC PREVIEW
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#f7f6f2] mt-1">
                    {selectedMood.name}
                  </h3>
                </div>

                {/* Color Swatch Indicators */}
                <div className="flex items-center gap-2">
                  {selectedMood.colorPalette.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full border border-white/20 shadow-md transition-transform duration-300 hover:scale-110"
                      style={{ backgroundColor: color }}
                      title={`Palette Tone ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Architectural Visual Viewport */}
              <div className="relative aspect-[16/10] bg-[#0c0c0b] border border-white/10 rounded-sm overflow-hidden group shadow-2xl">
                {selectedMood.image && (
                  <img
                    src={selectedMood.image}
                    alt={selectedMood.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                )}

                {/* Clean Typographic Tag */}
                <div className="absolute bottom-4 left-4 z-10 pointer-events-none select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] font-medium">
                    AESTHETIC CHARACTERISTIC
                  </div>
                  <div className="text-xs font-mono text-[#f7f6f2] font-semibold">
                    {selectedMood.tagline}
                  </div>
                </div>
              </div>

              {/* Description & Key Attributes */}
              <div className="space-y-4 pt-2">
                <p className="text-sm text-[#a8a69e] leading-relaxed font-sans-architectural">
                  {selectedMood.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#f7f6f2] flex items-center gap-1.5 font-semibold">
                    <Layers className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Materials & Attributes</span>
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selectedMood.keyMaterials.map((mat, idx) => (
                      <span
                        key={`mat-${idx}`}
                        className="px-3 py-1 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-full text-xs font-mono text-[#c5a059]"
                      >
                        {mat}
                      </span>
                    ))}
                    {selectedMood.attributes.map((attr, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#0c0c0b] border border-white/10 rounded-full text-xs font-mono text-[#a8a69e]"
                      >
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StyleExplorer;

