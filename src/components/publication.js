import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-gtag';
import { rhythm } from '../utils/typography';

const Publication = ({ title, url, description }) => (
  <Container>
    <Title>{title}</Title>
    <Link href={url} target="__blank">
      {url}
    </Link>
    <Description>{description}</Description>
  </Container>
);

const Container = styled.div`
  max-width: 600px;
  margin-top: ${rhythm(2)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    text-align: center;
  }
`;

const Title = styled.h3`
  margin-bottom: 0;
  text-decoration: underline;
`;

const Link = styled(OutboundLink)`
  color: ${({ theme }) => theme.primary};
  font-size: 0.75rem;
  text-decoration: none;
`;

const Description = styled.p`
  margin-top: ${rhythm(0.5)};
  color: ${({ theme }) => theme.gray};
  font-size: 0.9rem;
`;

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Publication;
