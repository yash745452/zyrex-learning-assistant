import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cream' | 'dark' | 'beige' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cream',
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide border';

  const variantStyles = {
    cream: 'bg-cream text-rich-black border-beige-border',
    dark: 'bg-rich-black text-canvas border-near-black',
    beige: 'bg-beige text-rich-black border-beige-border',
    outline: 'bg-transparent text-rich-black border-beige-border',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
