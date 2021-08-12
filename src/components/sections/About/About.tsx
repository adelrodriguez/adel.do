import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Tag from '../../shared/Tag';
import Section from '../../layout/Section';
import Header from '../../shared/Header';

function About() {
  const { aboutContent, profilePicture } = useStaticQuery(
    graphql`
      {
        aboutContent: contentYaml(section: { eq: "about" }) {
          skills
          description
        }
        profilePicture: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <Section name="about-section">
      <Header>👨🏻‍💻 About.</Header>
      <div className="flex flex-col md:flex-row items-center">
        <Image
          fluid={profilePicture.childImageSharp.fluid}
          alt="Adel Rodríguez"
          className="mb-8 w-screen h-96 md:mb-0 md:h-64 md:min-w-64 md:w-64 md:rounded-full"
        />
        <div className="md:ml-8">
          <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed text-gray-700">
            {aboutContent.description}
          </p>
          <div className="flex flex-wrap mt-8">
            {aboutContent.skills.map(skill => (
              <div key={skill} className="my-2 mr-4">
                <Tag>{skill}</Tag>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
