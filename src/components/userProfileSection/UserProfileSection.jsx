import React from 'react';
import Styled from 'styled-components';
import { About } from './About';
import { UserStats } from './UserStats';
import { UserLanguages } from './UserLanguages';
import { UserDates } from './UserDates';

const Wrapper = Styled.div`
    border: 1px solid #d9d9d9;
    width: 28%;
    min-width: 280px;
    border-radius: 15px;
    box-shadow: 0px 50px 60px rgba(0,0,0,0.1);
    margin: 0 10px 0 15px;
    @media (max-width: 768px) {
    width: 90%;
    margin: 0 30px 10px 30px;
    box-shadow: 0px 15px 60px rgba(0,0,0,0.1);
  }
`;

export const UserProfileSection = (props) => {
  const userAbout = props.about;
  const userStats = props.stats;
  const languages = props.languages;
  const userDates = props.dates;

  return (
    <Wrapper>
      <About about={userAbout} />
      <UserStats stats={userStats} />
      <UserLanguages languages={languages} />
      <UserDates dates={userDates} />
    </Wrapper>
  );
};
