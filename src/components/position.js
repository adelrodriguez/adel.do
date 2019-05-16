import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './tag';
import { rhythm } from '../utils/typography';

const Position = ({
  company, position, startDate, endDate, achievements, skills,
}) => (
  <Container>
    <div>
      <Title>{position}</Title>
      <Info>
        <span>{company}</span>
        <span>{`${startDate} - ${endDate || 'Present'}`}</span>
      </Info>
    </div>
    <Achievements>
      <ul>
        {achievements.map(text => (
          <li key={text.length}>{text}</li>
        ))}
      </ul>
      <>
        {skills.map(skill => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </>
    </Achievements>
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: ${rhythm(2)};

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(0.25)};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    margin-bottom: ${rhythm(1)};
  }
`;

const Achievements = styled.div`
  max-width: 600px;
  color: ${({ theme }) => theme.gray};
  font-size: 0.9rem;
`;

Position.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Position.defaultProps = {
  endDate: '',
};

export default Position;
