import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../../layout/Section';
import Header from '../../shared/Header';
import Position, { Props } from './Position';

interface PositionProps extends Props {
  id: string;
}

function Experience() {
  const { experienceContent } = useStaticQuery(
    graphql`
      {
        experienceContent: allExperienceYaml {
          nodes {
            id
            company
            website
            position
            startDate
            endDate
            achievements
            skills
          }
        }
      }
    `
  );

  return (
    <Section name="experience-section">
      <Header>💼 Experience.</Header>
      {experienceContent.nodes.map(({ id, ...job }: PositionProps) => (
        <div key={id} className="mb-8">
          <Position {...job} />
        </div>
      ))}
    </Section>
  );
}

export default Experience;
