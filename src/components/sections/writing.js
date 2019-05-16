import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../../utils/typography';
import { BackToTop, Publication } from '..';

const Writing = () => {
  const { allPublicationsJson } = useStaticQuery(
    graphql`
      {
        allPublicationsJson {
          nodes {
            id
            title
            url
            description
          }
        }
      }
    `,
  );

  return (
    <SectionWrapper name="writing-section">
      <h1>Writing.</h1>
      {allPublicationsJson.nodes.map(({ id, ...publication }) => (
        <Publication {...publication} key={id} />
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

export default Writing;
