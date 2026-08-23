import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Modal } from '../ui/Modal';
import { ArrowUp, ArrowRight } from 'lucide-react';

export interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const [activeNotice, setActiveNotice] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full border-t border-white/[0.08] bg-[#0c0c0b] pt-20 pb-12 text-[#a8a69e]">
        <Container className="space-y-16">
          {/* Main Architectural Multi-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Column 1: Editorial Statement */}
            <div className="lg:col-span-4 space-y-5">
              <p className="text-xl sm:text-2xl font-serif-editorial font-normal leading-relaxed text-[#f7f6f2] max-w-sm">
                Architecture-led interiors crafted around your personal identity and everyday rituals.
              </p>
              <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase block pt-2">
                SPACES. CRAFTED WITH INTENT.
              </span>
              <div className="flex items-center gap-5 pt-3 text-[#a8a69e]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.4 2.967 7.4 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: STUDIO */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">
                STUDIO
              </h4>
              <ul className="space-y-3 text-xs font-sans-architectural">
                <li>
                  <a href="#trust" className="hover:text-[#f7f6f2] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#style-explorer" className="hover:text-[#f7f6f2] transition-colors">
                    Our Approach
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[#f7f6f2] transition-colors">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#scenarios" className="hover:text-[#f7f6f2] transition-colors">
                    Journal
                  </a>
                </li>
                <li>
                  <a href="#enquiry" className="hover:text-[#f7f6f2] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: SERVICES */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">
                SERVICES
              </h4>
              <ul className="space-y-3 text-xs font-sans-architectural">
                <li>
                  <a href="#inspiration" className="hover:text-[#f7f6f2] transition-colors">
                    Residential Interiors
                  </a>
                </li>
                <li>
                  <a href="#curated-directions" className="hover:text-[#f7f6f2] transition-colors">
                    Architectural Interiors
                  </a>
                </li>
                <li>
                  <a href="#scenarios" className="hover:text-[#f7f6f2] transition-colors">
                    Renovation & Remodeling
                  </a>
                </li>
                <li>
                  <a href="#enquiry" className="hover:text-[#f7f6f2] transition-colors">
                    Spatial Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: CONNECT */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">
                CONNECT
              </h4>
              <p className="text-xs text-[#a8a69e] leading-relaxed">
                Initiate a collaborative spatial dialogue to discover the unseen potential in your home environment.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f7f6f2] hover:text-[#c5a059] transition-colors cursor-pointer"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#737168]">
            <div>
              &copy; {new Date().getFullYear()} Design Haven. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-3">
              <button
                onClick={() => setActiveNotice('privacy')}
                className="hover:text-[#f7f6f2] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveNotice('terms')}
                className="hover:text-[#f7f6f2] transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 hover:border-white/30 text-[#a8a69e] hover:text-[#f7f6f2] transition-colors cursor-pointer rounded-sm text-xs font-mono uppercase tracking-wider"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Container>
      </footer>

      {/* Privacy Notice Modal */}
      <Modal
        isOpen={activeNotice === 'privacy'}
        onClose={() => setActiveNotice(null)}
        title="Privacy Guidelines & Data Handling"
        subtitle="Design Haven Confidentiality & Respect Commitment"
      >
        <div className="space-y-4 text-xs text-[#a8a69e] leading-relaxed font-sans-architectural">
          <p>
            At Design Haven, we respect prospective client privacy and adhere strictly to standard data minimization principles.
          </p>
          <h4 className="font-semibold text-[#f7f6f2] uppercase tracking-wider font-mono">
            Purpose-Bound Data Collection
          </h4>
          <p>
            Project enquiry details (name, email, phone, property type, and vision notes) are collected exclusively to evaluate and respond to your home design consultation request.
          </p>
          <h4 className="font-semibold text-[#f7f6f2] uppercase tracking-wider font-mono">
            No Unsolicited Marketing
          </h4>
          <p>
            Your information will never be sold, rented, or added to unapproved third-party marketing lists.
          </p>
        </div>
      </Modal>

      {/* Terms Notice Modal */}
      <Modal
        isOpen={activeNotice === 'terms'}
        onClose={() => setActiveNotice(null)}
        title="Terms of Experience"
        subtitle="Inspiration Platform & Collaborative Engagement"
      >
        <div className="space-y-4 text-xs text-[#a8a69e] leading-relaxed font-sans-architectural">
          <p>
            Design Haven is an inspiration and collaborative interior design guidance platform.
          </p>
          <h4 className="font-semibold text-[#f7f6f2] uppercase tracking-wider font-mono">
            Scope Boundaries
          </h4>
          <p>
            Submitting a project enquiry creates an exploratory dialogue. It does not constitute a legal contract or automatic financial commitment. Tailored proposals and timelines are established collaboratively following project review.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;

