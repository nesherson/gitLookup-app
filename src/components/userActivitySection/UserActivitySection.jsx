import React from 'react';
import { ActivityList } from './ActivityList';
import Styled from 'styled-components';

const Heading = Styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 10px 0 0 0;
  padding: 12px 25px;
  border-bottom: 1px solid #d9d9d9;
  color: #333333;
`;

const Wrapper = Styled.div`
    border: 1px solid #d9d9d9;
    margin: 0px 15px 0 10px;  
    border-radius: 5px;
    box-shadow: 0px 50px 60px rgba(0,0,0,0.1);
    width: 70%;
    @media (max-width: 768px) {
    width: 90%;
    margin: 10px 30px 10px 30px;
  }
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
