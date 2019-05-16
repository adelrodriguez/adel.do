import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { rhythm } from '../../utils/typography';

const Footer = () => (
  <Container>
    {`© ${new Date().getFullYear()} — Adel Rodríguez `}
    <Typed
      strings={[
        'likes design',
        'wants your podcast suggestions',
        'wants to buy a 3D printer',
        'loves movies',
        'lives in the Dominican Republic',
        'loves pepperoni pizza',
        'is a Star Wars fan',
        'wants you to have a great day',
      ]}
      typeSpeed={40}
      backSpeed={40}
      backDelay={1500}
      loop
      shuffle
    />
  </Container>
);

const Container = styled.footer`
  font-size: 0.65rem;
  border-top: 1px solid #f0f0f0;
  margin-bottom: ${rhythm(1)};
  padding: ${rhythm(0.5)} 0;
  color: ${({ theme }) => theme.gray};
`;

export default Footer;
