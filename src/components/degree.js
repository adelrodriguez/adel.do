import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

const Degree = ({
  school, degree, field, details, startYear, endYear,
}) => (
  <Container>
    <School>{school}</School>
    <Field>{`${degree}, ${field}`}</Field>
    <Year>{`${startYear} - ${endYear}`}</Year>
    <Details>{details}</Details>
  </Container>
);

const Container = styled.div`
  max-width: 600px;
  margin-top: ${rhythm(2)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    text-align: center;
  }
`;

const School = styled.h3`
  margin-bottom: ${rhythm(0.3)};
  text-decoration: underline;
`;

const Field = styled.h4`
  margin-bottom: ${rhythm(0.25)};
`;

const Year = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: 0.9rem;
`;

const Details = styled.p`
  color: ${({ theme }) => theme.gray};
  font-size: 0.9rem;
`;

Degree.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  startYear: PropTypes.string.isRequired,
  endYear: PropTypes.string.isRequired,
};

export default Degree;
