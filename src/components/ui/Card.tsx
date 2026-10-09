import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cream' | 'white' | 'elevated';
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'cream',
  interactive = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'rounded-card border transition-all duration-200 overflow-hidden';

  const variantStyles = {
    cream: 'bg-cream border-beige-border text-rich-black',
    white: 'bg-canvas border-beige-border text-rich-black',
    elevated: 'bg-cream border-beige-border shadow-sm text-rich-black',
  };

  const interactiveStyles = interactive
    ? 'hover:-translate-y-1 hover:border-rich-black/40 cursor-pointer'
    : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
