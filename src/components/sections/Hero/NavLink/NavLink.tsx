import React from 'react';
import { Link } from 'react-scroll';

interface Props {
  label: string;
  value: string;
}

function NavLink({ label, value }: Props) {
  return (
    <div className="animated-underline text-xl md:text-2xl mr-8 cursor-pointer">
      <Link offset={-50} smooth to={value}>
        {label}
      </Link>
    </div>
  );
}

export default NavLink;
