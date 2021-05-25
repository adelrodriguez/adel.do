import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typed from 'react-typed';
import useSiteMetadata from '../../../hooks/use-site-metadata';
import Section from '../../layout/Section';
import NavLink from './NavLink';

function Hero() {
  const siteMetadata = useSiteMetadata();
  const { heroContent } = useStaticQuery(
    graphql`
      {
        heroContent:contentYaml(section: { eq: "hero" }) {
          content
          header
        }
      }
    `
  );

  return (
    <Section name="hero-section">
      <div className="flex flex-col justify-center font-black">
        <span className="text-3xl md:text-5xl">{'<🧔🏻‍♂️/>'}</span>
        <h1 className="text-4xl md:text-6xl">{heroContent.header}</h1>
        <div className="h-32 md:h-48 xl:h-auto">
          <h2 className="text-4xl md:text-6xl">
            I&apos;m{' '}
            <Typed
              strings={heroContent.content}
              typeSpeed={40}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </h2>
        </div>
      </div>
      <nav className="flex flex-wrap mt-4">
        {siteMetadata.navLinks.map(navLink => (
          <NavLink key={navLink.value} {...navLink} />
        ))}
      </nav>
    </Section>
  );
}

export default Hero;
