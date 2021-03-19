import React from 'react';
import { ActivityList } from './ActivityList';
import Styled from 'styled-components';

const Heading = Styled.h3`
  font-size: 1.45rem;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 0px;
  padding: 12px;
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
