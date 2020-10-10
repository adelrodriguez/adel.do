import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

function BackToTop() {
  return (
    <div className="flex justify-end mt-8 text-lg cursor-pointer">
      <span className="animated-underline" onClick={scroll.scrollToTop}>
        Back to top.
      </span>
    </div>
  );
}

export default BackToTop;
