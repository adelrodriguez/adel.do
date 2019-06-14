import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rhythm, scale } from '../../utils/typography';
import resume from '../../assets/pdfs/resume.pdf';

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
        <Link href={`mailto:${siteMetadata.email}`}>Let&apos;s talk.</Link>
      </Text>
      <SocialLinks>
        {allSocialJson.nodes.map(({ site, url, icon }) => (
          <SocialLink href={url} target="__blank" key={site} aria-label={`Follow me on ${site}`}>
            <FontAwesomeIcon icon={['fab', icon]} />
          </SocialLink>
        ))}
      </SocialLinks>
      <Resume href={resume}>Download my resume.</Resume>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin: ${rhythm(10)} 0 ${rhythm(5)} 0;
  text-align: center;
`;

const Text = styled.h1`
  ${scale(1.5)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    ${scale(1)};
  }
`;

const Resume = styled.a`
  ${scale(0.25)};
  font-weight: 800;
  font-family: 'CircularStd';
  text-decoration: none;
  color: ${({ theme }) => theme.gray};
  transition: color 0.5s;
  margin: 0 auto;

  &:hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
  }
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

const SocialLinks = styled.div`
  margin: ${rhythm(1.5)} 0;
  display: flex;
  justify-content: center;
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
