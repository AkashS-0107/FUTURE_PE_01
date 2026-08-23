import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { BrandLogo } from '../shared/BrandLogo';
import { Button } from '../ui/Button';

export interface NavItem {
  label: string;
  href: string;
}

export interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onOpenEnquiry: () => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  navItems,
  onOpenEnquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0c0c0b]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#141412] border-l border-white/15 p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <BrandLogo />
            <button
              onClick={onClose}
              className="p-2 text-[#a8a69e] hover:text-[#f7f6f2] hover:bg-white/10 rounded-full transition-colors cursor-pointer active-spring"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-8 flex flex-col gap-5" aria-label="Mobile links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="text-base font-serif-editorial text-[#f7f6f2] hover:text-[#c5a059] flex items-center justify-between transition-colors group py-1"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-[#737168] group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Action */}
        <div className="pt-6 border-t border-white/[0.08] space-y-4">
          <Button
            variant="accent"
            size="lg"
            className="w-full justify-between font-mono text-xs uppercase tracking-wider"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
          >
            Start Your Journey
          </Button>
          <p className="text-[11px] font-mono text-center text-[#737168]">
            Design Haven &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavDrawer;
