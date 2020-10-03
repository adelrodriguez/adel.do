import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../../utils/typography';
import { BackToTop, Tag } from '..';

const About = () => {
  const { contentYaml, profilePicture } = useStaticQuery(
    graphql`
      {
        contentYaml {
          skills
          description
        }
        profilePicture: file(relativePath: { eq: "profile-picture.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <SectionWrapper name="about-section">
      <h1>About.</h1>
      <Container>
        <ProfilePicture fluid={profilePicture.childImageSharp.fluid} alt="Adel Rodríguez" />

        <AboutText>
          <p>
            {contentYaml.description}
          </p>
          {contentYaml.skills.map(skill => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </AboutText>
      </Container>
      <BackToTop />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-bottom: ${rhythm(10)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    h1 {
      text-align: center;
    }
  }
`;

const Container = styled.div`
  margin: ${rhythm(2)} auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column;
  }
`;

const ProfilePicture = styled(Image)`
  min-width: ${rhythm(10)};
  width: auto;
  height: auto;
  border-radius: 50%;
`;

const AboutText = styled.div`
  color: ${({ theme }) => theme.gray};
  margin-left: ${rhythm(1)};
  max-width: 700px;

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    text-align: center;
    margin: ${rhythm(1)} 0;
  }
`;

export default About;
