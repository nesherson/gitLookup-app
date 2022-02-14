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

interface Props {
  followers?: number | null;
  following?: number | null;
  stars?: number | null;
  forks?: number | null;
}

const UserStats: React.FC<Props> = ({ followers, following, stars, forks }) => {
  return (
    <Wrapper>
      <StatsWrapper>
        <Stat>Followers</Stat>
        <StatNumber>{followers}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Stat>Following</Stat>
        <StatNumber>{following}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Stat>Stars received</Stat>
        <StatNumber>{stars}</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Stat>Forks By Users</Stat>
        <StatNumber>{forks}</StatNumber>
      </StatsWrapper>
    </Wrapper>
  );
};

export default UserStats;
