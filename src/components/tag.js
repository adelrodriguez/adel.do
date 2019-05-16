import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const Tag = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  text-align: center;

  padding: ${rhythm(0.15)} 1rem;
  margin: ${rhythm(0.25)};
  border-radius: 25px;
  font-size: 0.75rem;
  user-select: none;

  background-color: ${({ theme }) => `${theme.primary}1A`};
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s;

  &:hover {
    color: #ffffff;
    background-color: ${({ theme }) => theme.primary};
  }
`;

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
