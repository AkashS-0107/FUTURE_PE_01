import React from 'react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { homeContent } from '../../data/homeContent';
import { ArrowRight } from 'lucide-react';

export interface ProcessRoadmapProps {
  onOpenEnquiry: () => void;
}

export const ProcessRoadmap: React.FC<ProcessRoadmapProps> = ({ onOpenEnquiry }) => {
  const { ref, revealClasses } = useScrollReveal();

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#0c0c0b] relative overflow-hidden scroll-section-offset">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 architectural-grid-bg opacity-20 pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        {/* Section Header */}
        <div ref={ref} className={`space-y-4 max-w-3xl ${revealClasses}`}>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            4-PHASE COLLABORATIVE FRAMEWORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight">
            Collaborative Process Roadmap
          </h2>
          <p className="text-base text-[#a8a69e] leading-relaxed font-sans-architectural">
            We demystify how your initial ideas transition into a refined living reality. Every milestone is built around transparent checkpoints, collaborative feedback, and complete creative clarity.
          </p>
        </div>

        {/* Sequential Architectural Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          
          {/* Subtle Horizontal Guide Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

          {homeContent.processSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative p-6 sm:p-8 bg-[#141412] border border-white/[0.08] rounded-sm flex flex-col justify-between space-y-6 group hover:border-[#c5a059]/40 transition-all duration-300 shadow-xl"
            >
              {/* Step Number Anchor */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono font-bold text-[#c5a059] text-2xl group-hover:scale-105 transition-transform">
                  0{step.stepNumber}
                </span>
                <span className="text-[10px] font-mono text-[#737168] uppercase tracking-widest font-semibold">
                  PHASE 0{step.stepNumber}
                </span>
              </div>

              {/* Step Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-serif-editorial font-bold text-[#f7f6f2] group-hover:text-[#c5a059] transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-[#c5a059]">
                  {step.subtitle}
                </div>
                <p className="text-xs text-[#a8a69e] leading-relaxed font-sans-architectural pt-2">
                  {step.description}
                </p>
              </div>

              {/* Role Breakdown */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs font-sans-architectural">
                <div>
                  <span className="text-[#c5a059] font-mono text-[11px] font-semibold">Your Role: </span>
                  <span className="text-[#a8a69e] text-[11px]">{step.clientRole}</span>
                </div>
                <div>
                  <span className="text-[#737168] font-mono text-[11px] font-semibold">Our Role: </span>
                  <span className="text-[#a8a69e] text-[11px]">{step.designHavenRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Reassurance Callout */}
        <div className="p-8 bg-[#141412] border border-white/[0.08] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif-editorial font-bold text-[#f7f6f2]">
              Unsure which phase your property is currently in?
            </h3>
            <p className="text-xs sm:text-sm text-[#a8a69e] font-sans-architectural max-w-xl">
              Our guided enquiry questionnaire takes under 3 minutes and helps define your exact project readiness and scope parameters.
            </p>
          </div>
          <Button
            variant="accent"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={onOpenEnquiry}
          >
            Start Guided Inquiry
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ProcessRoadmap;

