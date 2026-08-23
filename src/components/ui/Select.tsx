import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  required?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, helperText, required, className = '', id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    const errorId = selectId ? `${selectId}-error` : undefined;
    const helperId = selectId ? `${selectId}-helper` : undefined;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-mono uppercase tracking-wider text-[#f7f6f2]"
          >
            {label} {required && <span className="text-[#c5a059]">*</span>}
          </label>
        )}
        <select
          id={selectId}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`w-full px-3.5 py-2.5 bg-[#0c0c0b] border text-sm text-[#f7f6f2] rounded-sm transition-all duration-300 focus:outline-none cursor-pointer ${
            error
              ? 'border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-white/10 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]/40 hover:border-white/20'
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#141412] text-[#f7f6f2]">
              {opt.label}
            </option>
          ))}
        </select>
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

Select.displayName = 'Select';
export default Select;
