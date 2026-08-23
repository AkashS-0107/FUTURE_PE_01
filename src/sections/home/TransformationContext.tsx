import React, { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { InteriorImageFrame } from '../../components/shared/InteriorImageFrame';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { homeContent } from '../../data/homeContent';
import { Home, Hammer, Building2, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

export interface TransformationContextProps {
  onOpenEnquiry: () => void;
}

export const TransformationContext: React.FC<TransformationContextProps> = ({ onOpenEnquiry }) => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('refresh');
  const { ref, revealClasses } = useScrollReveal();

  const scenarioIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    refresh: Home,
    renovation: Hammer,
    construction: Building2,
    vision: Lightbulb,
  };

  const selectedScenario =
    homeContent.transformationScenarios.find((s) => s.id === activeScenarioId) ||
    homeContent.transformationScenarios[0];

  return (
    <section id="scenarios" className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#0c0c0b] relative scroll-section-offset">
      <Container className="space-y-14">
        {/* Section Header */}
        <div ref={ref} className={`space-y-4 max-w-3xl ${revealClasses}`}>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            RESIDENTIAL CONTEXT MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight">
            Tailored to Your Property Stage
          </h2>
          <p className="text-base text-[#a8a69e] leading-relaxed font-sans-architectural">
            Whether refreshing an existing residence, modernizing an aging property, or planning a new build from bare frame, discover how our space transformation applies to your home.
          </p>
        </div>

        {/* Narrative Stage Selector Rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeContent.transformationScenarios.map((scenario) => {
            const IconComponent = scenarioIcons[scenario.id] || Home;
            const isActive = scenario.id === activeScenarioId;

            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`p-5 rounded-sm border text-left transition-all duration-300 cursor-pointer active-spring flex flex-col justify-between space-y-4 ${
                  isActive
                    ? 'bg-[#1c1b18] border-[#c5a059] shadow-xl shadow-[#c5a059]/10'
                    : 'bg-[#141412]/60 border-white/[0.06] hover:border-white/20 hover:bg-[#141412]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-8 h-8 rounded-sm flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#c5a059] text-[#0c0c0b]' : 'bg-[#0c0c0b] text-[#c5a059] border border-white/10'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#737168]">
                    {scenario.audienceTag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif-editorial font-bold text-[#f7f6f2]">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-[#a8a69e] mt-1 font-sans-architectural line-clamp-2">
                    {scenario.userContext}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Narrative & Spatial Anchor Spread */}
        <div className="p-8 sm:p-10 bg-[#141412] border border-white/[0.08] rounded-sm space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold">
                STAGE NARRATIVE &bull; {selectedScenario.audienceTag}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif-editorial font-bold text-[#f7f6f2]">
                {selectedScenario.title}
              </h3>
            </div>

            <Button
              variant="accent"
              size="md"
              onClick={onOpenEnquiry}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Inquire For This Stage
            </Button>
          </div>

          {/* Narrative Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (6 cols): Situation, Challenge & Opportunity */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Situation & Challenge */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-[#a8a69e]">
                  Property Situation & Challenge
                </div>
                <p className="text-sm sm:text-base text-[#f7f6f2] leading-relaxed font-sans-architectural">
                  {selectedScenario.challenge}
                </p>
              </div>

              {/* Design Opportunity & Solution */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold">
                  Design Haven Spatial Approach
                </div>
                <p className="text-sm sm:text-base text-[#a8a69e] leading-relaxed font-sans-architectural">
                  {selectedScenario.solutionApproach}
                </p>
              </div>

              {/* Key Transformation Outcomes */}
              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                <div className="text-xs font-mono uppercase tracking-widest text-[#f7f6f2] flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>Key Transformation Outcomes</span>
                </div>

                <ul className="space-y-2">
                  {selectedScenario.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#a8a69e] font-sans-architectural">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0 mt-1.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column (6 cols): Un-cluttered Architectural Image Anchor */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-sm border border-white/15 shadow-2xl">
                {selectedScenario.image ? (
                  <InteriorImageFrame
                    src={selectedScenario.image}
                    aspectRatio="landscape"
                    title={selectedScenario.imageTitle || selectedScenario.title}
                    hoverEffect={false}
                    className="w-full h-full border-none rounded-none object-cover min-h-[300px]"
                  />
                ) : (
                  <div className="w-full h-[300px] bg-[#0c0c0b]" />
                )}

                {/* Clean Typographic Tag */}
                <div className="absolute bottom-4 left-4 z-10 pointer-events-none select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] font-medium">
                    STAGE VISUAL ANCHOR
                  </div>
                  <div className="text-xs font-mono text-[#f7f6f2] font-semibold">
                    {selectedScenario.imageTitle || selectedScenario.title}
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

export default TransformationContext;

