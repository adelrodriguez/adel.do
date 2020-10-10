import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';

export interface Props {
  title: string;
  url: string;
  description: string;
}

const Publication = ({ title, url, description }: Props) => (
  <div>
    <h4 className="font-bold mb-2 text-xl md:text-2xl">{title}</h4>
    <div className="mb-4">
      <span>🔗</span>{' '}
      <OutboundLink
        href={url}
        target="__blank"
        className="text-lg md:text-xl text-blue-700 hover:underline"
      >
        {url}
      </OutboundLink>
    </div>
    <p className="text-gray-700 mb-2 text-base md:text-lg">{description}</p>
  </div>
);

export default Publication;
