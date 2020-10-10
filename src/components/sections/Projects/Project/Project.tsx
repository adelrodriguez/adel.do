import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';
import Image from 'gatsby-image';
import Tag from '../../../shared/Tag';

export interface Props {
  title: string;
  url: string;
  description: string;
  image: any;
  skills: [string];
}

const Project = ({ title, url, description, image, skills }: Props) => (
  <div className="flex flex-col mb-4 md:flex-row items-center md:items-start">
    <Image
      fluid={image.childImageSharp.fluid}
      alt={title}
      className="mb-8 w-screen h-96 md:mb-0 md:h-64 md:min-w-64 md:w-64"
    />
    <div className="md:ml-8">
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
      <p className="text-lg md:text-xl text-gray-700">{description}</p>
      <div className="flex flex-wrap mt-4">
        {skills.map(skill => (
          <div className="my-2 mx-2">
            <Tag key={skill}>{skill}</Tag>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Project;
