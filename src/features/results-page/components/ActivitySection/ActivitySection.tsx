import React from 'react';
import Styled from 'styled-components';

import { Activity } from "src/types";

import ActivityList from './ActivityList';


const Heading = Styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  padding: 12px 30px;
  border-bottom: 1px solid #d9d9d9;
  color: #333333;
  text-transform: uppercase;
`;

const Wrapper = Styled.div`
    border: 1px solid #d9d9d9;
    margin: 0px 15px 0 10px;  
    border-radius: 5px;
    box-shadow:
  0px 0.7px 2.1px -3px rgba(0, 0, 0, 0.028),
  0px 2.2px 7.1px -3px rgba(0, 0, 0, 0.042),
  0px 10px 32px -3px rgba(0, 0, 0, 0.07)
;
    width: 70%;
    @media (max-width: 768px) {
    width: 90%;
    margin: 10px 30px 10px 30px;
  }
`;

type ActivitySectionProps = {
  activities: Activity[] 
}

function ActivitySection ({
  activities
}: ActivitySectionProps) {
  return (
    <Wrapper>
      <Heading>Latest activities</Heading>
      <ActivityList activities={activities} />
    </Wrapper>
  );
};

export default ActivitySection;
