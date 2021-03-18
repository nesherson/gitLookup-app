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

export const UserDates = (props) => {
  const userDates = props.dates;

  return (
    <Wrapper>
      <StatsWrapper>
        <Heading>Joined</Heading>
        <Text>{userDates.createdAt}</Text>
      </StatsWrapper>
      <StatsWrapper>
        <Heading>Location</Heading>
        <Text>{userDates.location}</Text>
      </StatsWrapper>
      <TextSpan>Last Updated on {userDates.updatedAt}</TextSpan>
    </Wrapper>
  );
};
