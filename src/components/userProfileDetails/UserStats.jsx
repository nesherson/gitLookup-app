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

export const UserStats = () => {
  return (
    <Wrapper>
      <StatsWrapper>
        <Heading>Followers</Heading>
        <StatNumber>242</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Heading>Following</Heading>
        <StatNumber>30</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Heading>Stars received</Heading>
        <StatNumber>570</StatNumber>
      </StatsWrapper>

      <StatsWrapper>
        <Heading>Forks By Users</Heading>
        <StatNumber>136</StatNumber>
      </StatsWrapper>
    </Wrapper>
  );
};
