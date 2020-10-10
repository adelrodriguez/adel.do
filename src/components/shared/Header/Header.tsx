import React from 'react';

const Header: React.FC = ({ children }) => (
  <h3 className="font-bold text-3xl md:text-4xl mb-8">{children}</h3>
);

export default Header;
