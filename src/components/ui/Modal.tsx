import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'lg',
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
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0c0c0b]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${maxWidthClasses[maxWidth]} bg-[#141412] border border-white/15 rounded-sm shadow-2xl shadow-black z-10 my-8 overflow-hidden animate-in zoom-in-95 duration-300`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/[0.08] bg-[#0c0c0b]/80">
          <div>
            {title && (
              <h2
                id="modal-title"
                className="text-xl font-serif-editorial font-bold text-[#f7f6f2]"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs text-[#a8a69e] mt-1 font-mono">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#a8a69e] hover:text-[#f7f6f2] hover:bg-white/10 rounded-full transition-colors cursor-pointer active-spring"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto font-sans-architectural">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
