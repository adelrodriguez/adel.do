import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../../utils/typography';
import { BackToTop, Tag } from '..';

const About = () => {
  const { allSkillsJson, profilePicture } = useStaticQuery(
    graphql`
      {
        allSkillsJson {
          nodes {
            name
          }
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
      <Container>
        <ProfilePicture fluid={profilePicture.childImageSharp.fluid} alt="Adel Rodríguez" />

        <AboutText>
          <p>
            I&apos;m a Full Stack Developer and Mechatronic Engineer based in Santo Domingo,
            experienced in delivering high-quality web products and using a design-oriented approach
            to solving problems. I&apos;m passionate about startups, helping companies become more
            innovative, and using tech to make a positive impact in society.
          </p>
          {allSkillsJson.nodes.map(skill => (
            <Tag key={skill.name}>{skill.name}</Tag>
          ))}
        </AboutText>
      </Container>
      <BackToTop />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  margin-bottom: ${rhythm(10)};
`;

const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column;
  }

  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfilePicture = styled(Image)`
  min-width: ${rhythm(10)};
  width: auto;
  height: auto;
  border-radius: 50%;
`;

const AboutText = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    text-align: center;
  }

  color: ${({ theme }) => theme.gray};
  margin: ${rhythm(1)};
  max-width: 700px;
`;

export default About;
