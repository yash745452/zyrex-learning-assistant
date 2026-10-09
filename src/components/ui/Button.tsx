import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-btn focus:outline-none focus:ring-2 focus:ring-rich-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none btn-magnetic';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-rich-black text-canvas shadow-sm active:scale-[0.98]',
    secondary:
      'bg-cream text-rich-black border border-beige-border active:scale-[0.98]',
    outline:
      'bg-transparent text-rich-black border border-beige-border active:scale-[0.98]',
    ghost:
      'bg-transparent text-rich-black active:scale-[0.98]',
  };

  const layerColors = {
    primary: 'bg-near-black',
    secondary: 'bg-cream-pale',
    outline: 'bg-cream',
    ghost: 'bg-cream',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      <span className={`btn-magnetic-layer ${layerColors[variant]}`} />
      <span className="btn-content">
        {isLoading && (
          <span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1.5"
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    </button>
  );
};
