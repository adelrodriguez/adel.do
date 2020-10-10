import React from 'react';
import Tag from '../../../shared/Tag';

export interface Props {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: [string];
  skills: [string];
}

const Position = ({
  company,
  position,
  startDate,
  endDate,
  achievements,
  skills,
}: Props) => (
  <div className="flex flex-col mb-4 md:flex-row">
    <div className="mb-4 md:mb-0 md:w-4/12">
      <h4 className="font-bold mb-2 text-xl md:text-2xl">{position}</h4>
      <p className="text-gray-700 text-lg md:text-xl">{company}</p>
      <p className="text-gray-700 text-lg md:text-xl">
        {`${startDate} - ${endDate || 'Present'}`}
      </p>
    </div>
    <div className="md:w-8/12">
      <ul>
        {achievements.map((text, index) => (
          <li
            className="flex text-gray-700 text-lg mb-2 md:text-xl"
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
