import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
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
        <TextContainer>
          <h1>Hey, I&apos;m Adel!</h1>
          <h1>
            I&apos;m
            {' '}
            <Typed
              strings={[
                'a Full Stack Developer.',
                'a Mechatronic Engineer.',
                'a design thinker.',
                'a problem solver.',
                'constantly learning.',
                'an innovator.',
                'an awesome teammate.',
                'a maker.',
                'creating value for my clients.',
                'happy to meet you!',
              ]}
              typeSpeed={40}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </h1>
        </TextContainer>
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
  margin-bottom: ${rhythm(10)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    margin-bottom: ${rhythm(5)};
  }
`;

const Container = styled.div`
  padding-top: ${rhythm(6)};
`;

const TextContainer = styled.div`
  min-height: ${rhythm(5)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    min-height: ${rhythm(8)};
  }

  h1 {
    ${scale(1.5)};
    margin-bottom: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint}) {
      ${scale(1)};
    }
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

export default Hero;
