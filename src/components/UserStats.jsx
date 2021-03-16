import React from 'react';
import Styled from 'styled-components';

const Heading = Styled.h3`
  font-size: 1.15rem;
  Wrapper
`;

const StatNumber = Styled.p`

`;

const StatsWrapper = Styled.div`
  display: flex;
`;

const Wrapper = Styled.div`
  padding: 15px;
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
