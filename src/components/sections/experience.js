import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../../utils/typography';
import { BackToTop, Position } from '..';

const Experience = () => {
  const { allJobsJson } = useStaticQuery(
    graphql`
      {
        allJobsJson {
          nodes {
            id
            company
            position
            startDate
            endDate
            achievements
            skills
          }
        }
      }
    `,
  );

  return (
    <SectionWrapper name="experience-section">
      <h1>Experience.</h1>
      {allJobsJson.nodes.map(({ id, ...job }) => (
        <Position {...job} key={id} />
      ))}
      <BackToTop />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-bottom: ${rhythm(5)};
`;

export default Experience;
