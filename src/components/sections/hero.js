import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scale, rhythm } from '../../utils/typography';

const Hero = () => {
  const { allSocialJson } = useStaticQuery(
    graphql`
      {
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
    <SectionWrapper>
      <Container>
        <HeroText>Hey, I&apos;m Adel!</HeroText>
        <HeroText>Full Stack Developer and Mechatronic Engineer</HeroText>
        <div style={{ marginTop: rhythm(0.75) }}>
          {allSocialJson.nodes.map(({ site, url, icon }) => (
            <SocialLink href={url} target="__blank" key={site}>
              <FontAwesomeIcon icon={['fab', icon]} />
            </SocialLink>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  height: ${rhythm(25)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    height: ${rhythm(30)};
  }
`;

const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    margin: 0 auto;
    text-align: center;
  }

  padding-top: ${rhythm(6)};
  max-width: 700px;
`;

const HeroText = styled.h1`
  ${scale(1.5)};
  margin-bottom: 0;
`;

const SocialLink = styled.a`
  margin: ${rhythm(0.5)} ${rhythm(0.75)};
  ${scale(1.25)};
  color: ${({ theme }) => theme.inactiveColor};
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export default Hero;
