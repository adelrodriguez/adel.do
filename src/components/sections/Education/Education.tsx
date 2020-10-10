import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Degree, { Props } from './Degree';
import Section from '../../layout/Section';
import Header from '../../shared/Header';

interface DegreeProps extends Props {
  id: string;
}

const Education = () => {
  const { educationContent } = useStaticQuery(graphql`
    {
      educationContent: allEducationYaml {
        nodes {
          id
          school
          degree
          field
          description
          startYear
          endYear
        }
      }
    }
  `);

  return (
    <Section name="education-section">
      <Header>🎓 Education.</Header>
      {educationContent.nodes.map(({ id, ...degree }: DegreeProps) => (
        <div className="mb-8">
          <Degree {...degree} key={id} />
        </div>
      ))}
    </Section>
  );
};

export default Education;
