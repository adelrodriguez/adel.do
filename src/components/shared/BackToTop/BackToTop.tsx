import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll as scroll } from 'react-scroll';

function BackToTop() {
  return (
    <div
      className="flex justify-end mt-8"
      onClick={scroll.scrollToTop}
    >
      <div className="text-sm md:text-base cursor-pointer hover:animate-bounce">
        <FontAwesomeIcon
          icon={['fas', 'arrow-up']}
          className=""
        />
        <span className="ml-2">Back to top.</span>
      </div>
    </div>
  );
}

export default BackToTop;
