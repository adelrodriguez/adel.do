import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project, { Props } from './Project';
import Section from '../../layout/Section';
import Header from '../../shared/Header';

interface ProjectProps extends Props {
  id: string;
}

const Projects = () => {
  const { projectContent } = useStaticQuery(
    graphql`
      {
        projectContent: allProjectsYaml {
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
    `
  );

  return (
    <Section name="projects-section">
      <Header>🔧 Projects.</Header>
      {projectContent.nodes.map(({ id, ...project }: ProjectProps) => (
        <Project {...project} key={id} />
      ))}
    </Section>
  );
};

export default Projects;
