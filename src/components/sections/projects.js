import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../../utils/typography';
import { BackToTop, Project } from '..';

const Projects = () => {
  const { allProjectsJson } = useStaticQuery(
    graphql`
      {
        allProjectsJson {
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
      {allProjectsJson.nodes.map(({ id, ...project }) => (
        <Project {...project} key={id} />
      ))}
      <BackToTop />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-bottom: ${rhythm(5)};
`;

export default Projects;
