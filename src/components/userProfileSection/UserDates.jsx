import React from 'react';
import Styled from 'styled-components';

const Heading = Styled.h4`
    font-size: 0.95rem;
    font-weight: 500;
    margin: 3px 10px;
`;

const Text = Styled.p`
    font-size: 1.05rem;
    margin: 3px 10px;
`;

const TextSpan = Styled.span`
    font-size: 1.05rem;
    margin: 5px 10px;
`;

const StatsWrapper = Styled.div`
    margin: 10px 0;
`;

const Wrapper = Styled.div`
    padding: 12px;
`;

export const UserDates = () => {
  return (
    <Wrapper>
      <StatsWrapper>
        <Heading>Joined</Heading>
        <Text>Aug 30, 2015</Text>
      </StatsWrapper>
      <StatsWrapper>
        <Heading>Location</Heading>
        <Text>India</Text>
      </StatsWrapper>
      <TextSpan>Last Updated on Mar 14, 2021</TextSpan>
    </Wrapper>
  );
};
