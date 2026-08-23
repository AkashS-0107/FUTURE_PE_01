import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { BrandLogo } from '../shared/BrandLogo';
import { MobileNavDrawer } from './MobileNavDrawer';
import { Menu, ArrowRight } from 'lucide-react';

export interface HeaderNavigationProps {
  onOpenEnquiry: () => void;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ onOpenEnquiry }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Inspiration', href: '#inspiration' },
    { label: 'Approach', href: '#style-explorer' },
    { label: 'Process', href: '#process' },
    { label: 'Journal', href: '#scenarios' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollSpy
      const sections = ['hero', 'inspiration', 'style-explorer', 'process', 'scenarios', 'trust'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'border-white/[0.08] bg-[#0c0c0b]/90 backdrop-blur-md py-4 shadow-xl shadow-black/30'
            : 'border-white/[0.05] bg-[#0c0c0b]/70 backdrop-blur-sm py-5'
        }`}
      >
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center w-full">
            {/* Left: Brand Wordmark */}
            <div className="flex items-center justify-start">
              <BrandLogo />
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center justify-center gap-8 lg:gap-10"
            >
              {navItems.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#f7f6f2] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#c5a059]'
                        : 'text-[#a8a69e] hover:text-[#f7f6f2]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Desktop Action Group */}
            <div className="hidden md:flex items-center justify-end">
              <button
                onClick={onOpenEnquiry}
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f7f6f2] hover:text-[#c5a059] transition-colors cursor-pointer py-1"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center justify-end gap-4 md:hidden">
              <button
                onClick={onOpenEnquiry}
                className="text-xs font-mono uppercase tracking-widest text-[#f7f6f2] hover:text-[#c5a059] transition-colors cursor-pointer"
              >
                Inquire
              </button>
              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-1.5 text-[#a8a69e] hover:text-[#f7f6f2] transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNavDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navItems={navItems}
        onOpenEnquiry={onOpenEnquiry}
      />
    </>
  );
};

export default HeaderNavigation;

