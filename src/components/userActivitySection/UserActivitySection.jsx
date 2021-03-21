import React from 'react';
import { ActivityList } from './ActivityList';
import Styled from 'styled-components';

const Heading = Styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 10px 0 0 0;
  padding: 12px 25px;
  border-bottom: 1px solid #000;
`;

const Wrapper = Styled.div`
    border: 1px solid #000;
    margin-left: 25px;
    width: 700px;

`;

export const UserActivitySection = (props) => {
  const activities = props.activities;

  return (
    <Wrapper>
      <Heading>LATEST ACTIVITIES</Heading>
      <ActivityList activities={activities} />
    </Wrapper>
  );
};
