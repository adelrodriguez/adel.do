import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rhythm, scale } from '../../utils/typography';

const Contact = () => {
  const {
    allSocialJson,
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            email
          }
        }
        allSocialJson {
          nodes {
            site
            icon
            url
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
      <div style={{ marginTop: rhythm(1.5) }}>
        {allSocialJson.nodes.map(({ site, url, icon }) => (
          <SocialLink href={url} target="__blank" key={site} aria-label={`Follow me on ${site}`}>
            <FontAwesomeIcon icon={['fab', icon]} />
          </SocialLink>
        ))}
      </div>
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
    text-decoration: underline;
  }
`;

const SocialLink = styled.a`
  margin: ${rhythm(0.5)} ${rhythm(0.75)};
  ${scale(1.25)};
  color: ${({ theme }) => theme.inactiveColor};
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    margin: ${rhythm(0.5)};
    ${scale(1)};
  }
`;

export default Contact;
