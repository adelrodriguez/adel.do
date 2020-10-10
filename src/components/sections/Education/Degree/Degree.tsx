import React from 'react';

export interface Props {
  school: string;
  degree: string;
  field: string;
  description: string;
  startYear: string;
  endYear: string;
}

function Degree({
  school,
  degree,
  field,
  description,
  startYear,
  endYear,
}: Props) {
  return (
    <div className="mb-4">
      <h4 className="font-bold mb-2 text-xl md:text-2xl">{school}</h4>
      <p className="text-gray-700 text-lg md:text-xl">{degree}</p>
      <p className="text-gray-700 mb-2 text-lg md:text-xl">
        {`${startYear} - ${endYear || 'Present'}`}
      </p>
      <p className="text-gray-700 text-md">{description}</p>
    </div>
  );
}

export default Degree;
