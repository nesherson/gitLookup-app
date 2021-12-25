import React from 'react';
import Styled from 'styled-components';
import { ActivityList } from './ActivityList';
import { IActivity } from '../ResultsPage';

const Heading = Styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 10px 0 0 0;
  padding: 12px 25px;
  border-bottom: 1px solid #d9d9d9;
  color: #333333;
  text-transform: uppercase;
`;

const Wrapper = Styled.div`
    border: 1px solid #d9d9d9;
    margin: 0px 15px 0 10px;  
    border-radius: 5px;
    box-shadow:
  1.9px 5.1px 5.3px -4px rgba(0, 0, 0, 0.028),
  6.5px 17.2px 19.7px -4px rgba(0, 0, 0, 0.038),
  29px 77px 93px -4px rgba(0, 0, 0, 0.07)
;
    width: 70%;
    @media (max-width: 768px) {
    width: 90%;
    margin: 10px 30px 10px 30px;
  }
`;

export const ActivitySection:React.FC<{activities: IActivity[]}> = ({ activities }) => {
  return (
    <Wrapper>
      <Heading>Latest activities</Heading>
      <ActivityList activities={activities} />
    </Wrapper>
  );
};
