import React from 'react';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export interface EnquiryGatewayProps {
  onOpenEnquiry: () => void;
}

export const EnquiryGateway: React.FC<EnquiryGatewayProps> = ({ onOpenEnquiry }) => {
  const { ref, revealClasses } = useScrollReveal();

  return (
    <section id="enquiry" className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#0c0c0b] relative overflow-hidden scroll-section-offset">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 architectural-grid-bg opacity-20 pointer-events-none" />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c5a059]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center space-y-8 ${revealClasses}`}
        >
          {/* Eyebrow Line */}
          <div className="flex justify-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              PROJECT VISION GATEWAY
            </span>
          </div>

          {/* Headline & Description */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight max-w-xl mx-auto leading-tight">
              Ready to Shape Your Living Space?
            </h2>
            <p className="text-sm sm:text-base text-[#a8a69e] font-sans-architectural leading-relaxed max-w-xl mx-auto pt-1">
              Share your property context, aesthetic preferences, and vision. We will conduct a thoughtful review and outline a tailored spatial path forward for your home.
            </p>
          </div>

          {/* Reassurance Feature Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#a8a69e] pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
              <span>3-Step Questionnaire</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c5a059]" />
              <span>Takes under 3 minutes</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              <span>Zero pressure response</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2 flex justify-center">
            <Button
              variant="accent"
              size="lg"
              className="px-10 py-4 uppercase tracking-wider font-semibold shadow-2xl shadow-[#c5a059]/20"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={onOpenEnquiry}
            >
              Begin Your Project Vision
            </Button>
          </div>

          {/* Confidentiality Guarantee */}
          <p className="text-[11px] font-mono text-[#737168] pt-1">
            Your property details are held with strict confidentiality. No unsolicited marketing.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default EnquiryGateway;

