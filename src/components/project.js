import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-gtag';
import Image from 'gatsby-image';
import Tag from './tag';
import { rhythm } from '../utils/typography';

const Project = ({
  title, url, description, image, skills,
}) => (
  <Container>
    <Information>
      <Title>{title}</Title>
      <Link href={url} target="__blank">
        {url}
      </Link>
      <Description>{description}</Description>
      <>
        {skills.map(skill => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </>
    </Information>
    <ProjectImage fluid={image.childImageSharp.fluid} alt={title} />
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: ${rhythm(2)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column-reverse;
  }
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(0.25)};
`;

const Information = styled.div`
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    text-align: center;
  }
`;

const Link = styled(OutboundLink)`
  color: ${({ theme }) => theme.primary};
  font-size: 0.75rem;
  text-decoration: none;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.gray};
  margin-top: ${rhythm(0.5)};
  font-size: 0.9rem;
`;

const ProjectImage = styled(Image)`
  width: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-bottom: ${rhythm(1)};
  }
`;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
