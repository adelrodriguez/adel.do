import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { rhythm } from '../utils/typography';

const BackToTop = () => <Wrapper onClick={scroll.scrollToTop}>Back to top</Wrapper>;

const Wrapper = styled.div`
  color: ${({ theme }) => theme.primary};
  margin-top: ${rhythm(1)};
  font-size: 0.75rem;
  cursor: pointer;
  float: right;

  &:hover {
    text-decoration: underline;
  }
`;

export default BackToTop;
