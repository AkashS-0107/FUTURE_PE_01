import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  showCount?: boolean;
  required?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      maxLength,
      showCount = false,
      value,
      required,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const currentLength = typeof value === 'string' ? value.length : 0;
    const errorId = textareaId ? `${textareaId}-error` : undefined;
    const helperId = textareaId ? `${textareaId}-helper` : undefined;

    return (
      <div className="w-full space-y-1.5">
        <div className="flex justify-between items-center">
          {label && (
            <label
              htmlFor={textareaId}
              className="block text-xs font-mono uppercase tracking-wider text-[#f7f6f2]"
            >
              {label} {required && <span className="text-[#c5a059]">*</span>}
            </label>
          )}
          {showCount && maxLength && (
            <span className="text-xs font-mono text-[#737168]">
              {currentLength} / {maxLength}
            </span>
          )}
        </div>
        <textarea
          id={textareaId}
          ref={ref}
          value={value}
          maxLength={maxLength}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`w-full px-3.5 py-2.5 bg-[#0c0c0b] border text-sm text-[#f7f6f2] placeholder-[#737168] rounded-sm transition-all duration-300 focus:outline-none resize-y min-h-[100px] ${
            error
              ? 'border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-white/10 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]/40 hover:border-white/20'
          } ${className}`}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs text-red-400 font-medium">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="text-xs text-[#737168] font-mono">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
