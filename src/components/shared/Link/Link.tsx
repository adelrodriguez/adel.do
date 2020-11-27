import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';

interface Props {
  url: string;
}

const Link: React.FC<Props> = ({ url }) => (
  <>
    <span>🔗</span>{' '}
    <OutboundLink
      href={url}
      target="__blank"
      className="text-lg md:text-xl text-blue-700 hover:underline"
    >
      {url.replace(/https?:\/\//, '')}
    </OutboundLink>
  </>
);

export default Link;
