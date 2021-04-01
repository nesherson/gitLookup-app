import React from 'react';
import Styled from 'styled-components';

const Stat = Styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 5px 10px;
  color: #4d4d4d;
`;

const StatNumber = Styled.p`
  margin: 5px 10px;
  color: #333333;
`;

const StatsWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = Styled.div`
  padding: 12px;
  border-bottom: 1px solid #d9d9d9;
`;

export const UserStats = (props) => {
  const userStats = props.stats;

  return (
    <Wrapper>
      <StatsWrapper>
        <Stat>Followers</Stat>
        <StatNumber>{userStats.followers}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Stat>Following</Stat>
        <StatNumber>{userStats.following}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Stat>Stars received</Stat>
        <StatNumber>{userStats.stars}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Stat>Forks By Users</Stat>
        <StatNumber>{userStats.forks}</StatNumber>
      </StatsWrapper>
    </Wrapper>
  );
};
