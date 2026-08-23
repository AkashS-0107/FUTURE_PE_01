import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, required, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    const errorId = inputId ? `${inputId}-error` : undefined;
    const helperId = inputId ? `${inputId}-helper` : undefined;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-mono uppercase tracking-wider text-[#f7f6f2]"
          >
            {label} {required && <span className="text-[#c5a059]">*</span>}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`w-full px-3.5 py-2.5 bg-[#0c0c0b] border text-sm text-[#f7f6f2] placeholder-[#737168] rounded-sm transition-all duration-300 focus:outline-none ${
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

Input.displayName = 'Input';
export default Input;
