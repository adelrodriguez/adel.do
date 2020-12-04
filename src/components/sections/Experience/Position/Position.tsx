import React from 'react';
import Tag from '../../../shared/Tag';
import Link from '../../../shared/Link';
import Favicon from '../../../shared/Favicon';

export interface Props {
  company: string;
  website?: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: [string];
  skills: [string];
}

const Position = ({
  company,
  website,
  position,
  startDate,
  endDate,
  achievements,
  skills,
}: Props) => (
  <div className="flex flex-col mb-4 md:flex-row">
    <div className="mb-4 md:mb-0 md:w-4/12">
      <h4 className="font-bold mb-2 text-xl md:text-2xl">{position}</h4>
      <div className="flex items-center">
        <Favicon domain={website} size={24} />
        <div className="text-gray-700 text-lg md:text-xl ml-2">{company}</div>
      </div>
      {website && <Link url={website} />}
      <p className="text-gray-700 text-lg md:text-xl">
        {`${startDate} - ${endDate || 'Present'}`}
      </p>
    </div>
    <div className="md:w-8/12">
      <ul>
        {achievements.map((text, index) => (
          <li
            className="flex text-gray-700 text-base mb-2 md:text-lg"
            key={text.length + index + new Date().getTime()}
          >
            <div className="mr-4">✔️</div>
            <div>{text}</div>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap mt-4">
        {skills.map(skill => (
          <div className="my-2 mx-2" key={skill}>
            <Tag>{skill}</Tag>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Position;
