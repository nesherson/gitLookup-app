import React from 'react';
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

const ActivityList = Styled.div`
    padding: 12px;
`;

export const UserActivitySection = () => {
  return (
    <Wrapper>
      <Heading>LATEST ACTIVITIES</Heading>
      <ActivityList>
        <p>Starred a repo</p>
        <p>Created a comment</p>
        <p>Oppened an issue</p>
      </ActivityList>
    </Wrapper>
  );
};
