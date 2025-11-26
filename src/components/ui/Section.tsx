import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'secondary' | 'transparent';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'default'
}) => {
  const backgrounds = {
    default: "bg-background",
    secondary: "bg-background-secondary",
    transparent: "bg-transparent",
  };

  return (
    <section id={id} className={`py-24 md:py-32 relative overflow-hidden ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
};
