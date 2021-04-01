import React from 'react';
import Styled from 'styled-components';

const Heading = Styled.h4`
    font-size: 0.80rem;
    font-weight: 600;
    margin: 0 10px;
    color: #4d4d4d;
`;

const Text = Styled.p`
    font-size: 0.95rem;
    margin: 3px 10px;
    color: #333333;
`;

const LocationText = Styled.p`
  font-size: 0.95rem;
  margin: 3px 10px;
  color: #705df2;
`;

const TextSpan = Styled.span`
    font-size: 0.95rem;
    margin: 5px 10px;
    color: #aaa;
`;

const StatsWrapper = Styled.div`
    margin: 10px 0;
`;

const Wrapper = Styled.div`
    padding: 12px;
`;

export const UserDates = (props) => {
  const userDates =
    props.dates.createdAt === 'Invalid Date' ||
    props.dates.updatedAt === 'Invalid Date'
      ? null
      : props.dates;

  return (
    <Wrapper>
      <StatsWrapper>
        <Heading>Joined</Heading>
        <Text>{userDates && userDates.createdAt}</Text>
      </StatsWrapper>
      <StatsWrapper>
        <Heading>Location</Heading>
        <LocationText>{userDates && userDates.location}</LocationText>
      </StatsWrapper>
      <TextSpan>Last Updated on {userDates && userDates.updatedAt}</TextSpan>
    </Wrapper>
  );
};
