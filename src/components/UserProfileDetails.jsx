import React from 'react';
import Styled from 'styled-components';
import { UserName } from './UserName';
import { UserStats } from './UserStats';

const Wrapper = Styled.div`
    border: 1px solid #000;
    width: 280px;
`;

export const UserProfileDetails = () => {
  return (
    <Wrapper>
      <UserName />
      <UserStats />
    </Wrapper>
  );
};
