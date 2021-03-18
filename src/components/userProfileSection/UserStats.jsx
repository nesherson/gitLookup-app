import React from 'react';
import Styled from 'styled-components';

const Heading = Styled.h3`
  font-size: 1.15rem;
  font-weight: 500;
  margin: 5px 10px;
`;

const StatNumber = Styled.p`
  margin: 5px 10px;
`;

const StatsWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = Styled.div`
  padding: 12px;
  border-bottom: 1px solid #000;
`;

export const UserStats = (props) => {
  const userStats = props.stats;

  return (
    <Wrapper>
      <StatsWrapper>
        <Heading>Followers</Heading>
        <StatNumber>{userStats.followers}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Heading>Following</Heading>
        <StatNumber>{userStats.following}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Heading>Stars received</Heading>
        <StatNumber>{userStats.stars}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Heading>Forks By Users</Heading>
        <StatNumber>{userStats.forks}</StatNumber>
      </StatsWrapper>
    </Wrapper>
  );
};
