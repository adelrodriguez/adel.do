import React from 'react';
import Typed from 'react-typed';

function Footer() {
  return (
    <footer className="font-display text-gray-700 text-sm py-4 border-solid border-t border-gray-200">
      {`© ${new Date().getFullYear()} — Adel Rodríguez `}
      <Typed
        strings={[
          'likes design',
          'wants your podcast suggestions',
          'wants to buy a 3D printer',
          'loves movies',
          'lives in the Dominican Republic',
          'loves pepperoni pizza',
          'is a Star Wars fan',
          'wants you to have a great day',
        ]}
        typeSpeed={40}
        backSpeed={40}
        backDelay={1500}
        loop
        shuffle
      />
    </footer>
  );
}

export default Footer;
