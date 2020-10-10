import React from 'react';
import generateClassName from '../../../utils/generate-class-name';

interface Props {
  children: React.ReactNode;
}

function Tag({ children }: Props) {
  const classes = {
    colors: 'bg-blue-200 bg-opacity-50 text-blue-800',
    hover: 'hover:bg-blue-800 hover:text-blue-200',
    layout: 'flex justify-center',
    spacing: 'py-2 px-4',
    shaped: 'rounded-full',
    transition: 'duration-500 ease-in-out transition-colors',
  };

  return <div className={generateClassName(classes)}>{children}</div>;
}
export default Tag;
