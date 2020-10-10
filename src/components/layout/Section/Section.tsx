import React from 'react';
import BackToTop from '../../shared/BackToTop';

interface Props {
  name: string;
  children: React.ReactNode;
}

function Section({ name, children }: Props) {
  function getHeight() {
    switch (name) {
      case 'writing-section':
      case 'projects-section':
        return 'h-auto min-h-1/2-screen';
      default:
        return 'min-h-screen';
    }
  }

  return (
    <section
      name={name}
      className={`flex flex-col justify-center ${getHeight()}`}
    >
      {children}
      {name !== 'hero-section' && <BackToTop />}
    </section>
  );
}

export default Section;
