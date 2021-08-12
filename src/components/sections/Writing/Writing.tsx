import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from '../../layout/Section';
import Header from '../../shared/Header';
import Publication, { Props } from './Publication';

interface PublicationProps extends Props {
  id: string;
}

const Writing = () => {
  const { allWritingYaml } = useStaticQuery(
    graphql`
      {
        allWritingYaml {
          nodes {
            id
            title
            url
            description
          }
        }
      }
    `
  );

  return (
    <Section name="writing-section">
      <Header>🖋 Writing.</Header>
      {allWritingYaml.nodes.map(({ id, ...publication }: PublicationProps) => (
        <Publication {...publication} key={id} />
      ))}
    </Section>
  );
};

export default Writing;
