import React from 'react';
import Link from '../../../shared/Link';
export interface Props {
  title: string;
  url: string;
  description: string;
}

const Publication: React.FC<Props> = ({ title, url, description }) => (
  <div>
    <h4 className="font-bold mb-2 text-xl md:text-2xl">{title}</h4>
    <div className="mb-4">
      <Link url={url} />
    </div>
    <p className="text-gray-700 mb-2 text-base md:text-lg">{description}</p>
  </div>
);

export default Publication;
