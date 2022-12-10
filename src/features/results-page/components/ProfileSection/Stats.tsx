import React from 'react';
import Styled from 'styled-components';

const H3 = Styled.h3`
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
  border-bottom: 1px solid rgba(217, 217, 217, 0.5);
`;

type UserStatsProps =  {
  followers?: number | null;
  following?: number | null;
  stars?: number | null;
  forks?: number | null;
}

function UserStats({ followers, following, stars, forks }: UserStatsProps) {
  return (
    <Wrapper>
      <StatsWrapper>
        <H3>Followers</H3>
        <StatNumber>{followers}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <H3>Following</H3>
        <StatNumber>{following}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <H3>Stars received</H3>
        <StatNumber>{stars}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <H3>Forks By Users</H3>
        <StatNumber>{forks}</StatNumber>
      </StatsWrapper>
    </Wrapper>
  );
};

export default UserStats;
