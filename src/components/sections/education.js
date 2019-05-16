import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../../utils/typography';
import { BackToTop, Degree } from '..';

const Education = () => {
  const { allDegreesJson } = useStaticQuery(graphql`
    {
      allDegreesJson {
        nodes {
          id
          school
          degree
          field
          details
          startYear
          endYear
        }
      }
    }
  `);

  return (
    <SectionWrapper name="education-section">
      <h1>Education.</h1>
      {allDegreesJson.nodes.map(({ id, ...degree }) => (
        <Degree {...degree} key={id} />
      ))}
      <BackToTop />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-bottom: ${rhythm(5)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    h1 {
      text-align: center;
    }
  }
`;

export default Education;
