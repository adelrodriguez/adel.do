import React from 'react';
import cleanUrl from '../../../utils/clean-url';

interface Props {
  domain: string
  size?: number
}

function Favicon({ size = 16, domain }: Props) {
  return (
    <img
      src={`https://icons.duckduckgo.com/ip3/${cleanUrl(domain)}.ico`}
      alt=""
      role="presentation"
      style={{ width: size, height: size }}
    />
  );
}

export default Favicon;
