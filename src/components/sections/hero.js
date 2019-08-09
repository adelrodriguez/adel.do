import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import { useStaticQuery, graphql } from 'gatsby';
import { scale, rhythm } from '../../utils/typography';

const Hero = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `,
  );

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setHeight(window.innerHeight);
    }
  });

  return (
    <SectionWrapper height={height}>
      <Container>
        <TextContainer>
          <Logo>{'<🧔🏻/>'}</Logo>
          <h1>Hello, I&apos;m Adel!</h1>
          <h1>
            I&apos;m
            {' '}
            <Typed
              strings={[
                'a Full Stack Developer.',
                'a Mechatronic Engineer.',
                'a design thinker.',
                'a problem solver.',
                'an innovator.',
                'an awesome teammate.',
                'a maker.',
                'creating value for my clients.',
                'constantly learning.',
                'happy to meet you!',
              ]}
              typeSpeed={40}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </h1>
        </TextContainer>
        <Navbar>
          {siteMetadata.menuLinks.map(menuLink => (
            <MenuLink key={menuLink.name}>
              <Link offset={-75} smooth to={menuLink.link}>
                {menuLink.name}
              </Link>
            </MenuLink>
          ))}
        </Navbar>
      </Container>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  height: ${({ height }) => height}px;

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Logo = styled.div`
  ${scale(0.75)};
  font-family: 'CircularStd';
`;

const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${rhythm(1)};
  font-family: 'CircularStd';
`;

const MenuLink = styled.div`
  cursor: pointer;
  user-select: none;
  margin-right: ${rhythm(1)};

  &:hover {
    text-decoration: underline;
  }
`;

export default Hero;
