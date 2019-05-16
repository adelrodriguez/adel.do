import React, { Component } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { rhythm } from '../../utils/typography';

const strings = [
  'likes design',
  'wants your podcast suggestions',
  'wants to buy a 3D printer',
  'loves movies',
  'lives in the Dominican Republic',
  'loves pepperoni pizza',
  'is a Star Wars fan',
  'wants you to have a great day',
];

class Footer extends Component {
  componentDidMount() {
    this.typed = new Typed(this.el, {
      strings,
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      shuffle: true,
    });
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <Container>
        {`© ${new Date().getFullYear()} — Adel Rodríguez `}
        <span
          ref={(el) => {
            this.el = el;
          }}
        />
      </Container>
    );
  }
}

const Container = styled.footer`
  font-size: 0.65rem;
  border-top: 1px solid #f0f0f0;
  margin-bottom: ${rhythm(1)};
  padding: ${rhythm(0.5)} 0;
  color: ${({ theme }) => theme.gray};
`;

export default Footer;
