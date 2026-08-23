import React, { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { homeContent } from '../../data/homeContent';
import { ChevronDown } from 'lucide-react';
import { DesignPhilosophyBento } from './DesignPhilosophyBento';

export interface TrustTransparencyProps {
  onOpenEnquiry?: () => void;
}

export const TrustTransparency: React.FC<TrustTransparencyProps> = ({ onOpenEnquiry }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const { ref, revealClasses } = useScrollReveal();

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="trust" className="py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] bg-[#0c0c0b] relative scroll-section-offset">
      <Container className="space-y-16 lg:space-y-20">
        {/* Section Header - Typography Led */}
        <div ref={ref} className={`space-y-4 max-w-3xl ${revealClasses}`}>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            PHILOSOPHY & TRANSPARENCY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight">
            High-Trust, Pressure-Free Guidance
          </h2>
          <p className="text-base sm:text-lg text-[#a8a69e] leading-relaxed font-sans-architectural">
            Transforming a home is an emotional and financial investment. We replace aggressive sales tactics with complete operational transparency and collaborative respect for your vision.
          </p>
        </div>

        {/* Architectural Bento Composition for Philosophy & Trust */}
        <div id="philosophy">
          <DesignPhilosophyBento onOpenEnquiry={onOpenEnquiry} />
        </div>

        {/* Editorial FAQ Accordion - Responsive Two-Column Composition */}
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-[minmax(280px,0.75fr)_minmax(500px,1.25fr)] gap-10 lg:gap-16 items-start border-t border-white/[0.08]">
          {/* Left Column: Context & Editorial Headline */}
          <div className="space-y-4 sticky top-[100px]">
            <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              COMMON QUESTIONS
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#f7f6f2] tracking-tight">
              Addressing Hesitations Before You Begin
            </h3>
            <p className="text-xs sm:text-sm text-[#a8a69e] leading-relaxed font-sans-architectural">
              Every home project brings natural questions about scope, timelines, fees, and collaboration. Here is how we ensure clarity from the initial conversation.
            </p>
          </div>

          {/* Right Column: Clean Border-Divided Accordion List */}
          <div className="space-y-0 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {homeContent.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`transition-colors duration-200 ${isOpen ? 'bg-[#181715]' : 'bg-transparent'}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 px-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-base sm:text-lg font-serif-editorial font-bold text-[#f7f6f2]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#c5a059] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-4 pb-6 pt-1 text-xs sm:text-sm text-[#a8a69e] leading-relaxed font-sans-architectural"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustTransparency;

