import React from 'react';
import Styled from 'styled-components';
import { About } from './About';
import { UserStats } from './UserStats';
import { UserLanguages } from './UserLanguages';
import { UserDates } from './UserDates';

const Wrapper = Styled.div`
    border: 1px solid #000;
    width: 280px;
`;

export const UserProfileSection = () => {
  return (
    <Wrapper>
      <About />
      <UserStats />
      <UserLanguages />
      <UserDates />
    </Wrapper>
  );
};
