import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../../utils/typography';
import { BackToTop, Project } from '..';

const Projects = () => {
  const { allProjectsYaml } = useStaticQuery(
    graphql`
      {
        allProjectsYaml {
          nodes {
            id
            title
            url
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            skills
          }
        }
      }
    `,
  );

  return (
    <SectionWrapper name="projects-section">
      <h1>Projects.</h1>
      {allProjectsYaml.nodes.map(({ id, ...project }) => (
        <Project {...project} key={id} />
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

export default Projects;
