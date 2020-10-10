import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSiteMetadata from '../../../hooks/use-site-metadata';
import Section from '../../layout/Section';

const Contact = () => {
  const siteMetadata = useSiteMetadata();
  const { socialContent } = useStaticQuery(
    graphql`
      {
        socialContent: allSocialYaml {
          nodes {
            site
            icon
            url
          }
        }
      }
    `
  );

  return (
    <Section name="contact-section">
      <h3 className="text-4xl md:text-5xl text-center font-black">
        Want us to work together on a project?
        <br />
        <a className="animated-underline" href={`mailto:${siteMetadata.email}`}>
          Let&apos;s talk!
        </a>
      </h3>
      <div className="flex my-16 mx-auto">
        {socialContent.nodes.map(({ site, url, icon }) => (
          <div className="mx-4 md:mx-8" key={site}>
            <a
              href={url}
              target="__blank"
              aria-label={`Follow me on ${site}`}
              className="text-4xl md:text-5xl text-gray-700 hover:text-blue-900 hover:animate-pulse transition-colors duration-500 ease-in-out"
            >
              <FontAwesomeIcon icon={['fab', icon]} />
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mb-12">
        <a
          href="/Adel-Rodriguez_resume.pdf"
          className="text-3xl md:text-4xl font-black text-gray-700 hover:text-blue-900 hover:animate-pulse transition-colors duration-500 ease-in-out"
        >
          Download my resume.
        </a>
      </div>
    </Section>
  );
};

export default Contact;
