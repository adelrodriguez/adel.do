import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm, scale } from '../../utils/typography';

const Contact = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            email
          }
        }
      }
    `,
  );

  return (
    <SectionWrapper name="contact-section">
      <Text>
        Want us to work together on a project?
        <br />
        <Link href={`mailto:${siteMetadata.email}`}>Let&apos;s talk!</Link>
      </Text>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin: ${rhythm(10)} 0;
`;

const Text = styled.h1`
  max-width: 800px;
  ${scale(1.5)};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export default Contact;
