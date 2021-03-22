import React from 'react';
import Styled from 'styled-components';

const Heading = Styled.h4`
    font-size: 0.80rem;
    font-weight: 600;
    margin: 0 10px;
`;

const Text = Styled.p`
    font-size: 0.95rem;
    margin: 3px 10px;
`;

const LocationText = Styled.p`
  font-size: 0.95rem;
  margin: 3px 10px;
  color: #705df2;
`;

const TextSpan = Styled.span`
    font-size: 0.95rem;
    margin: 5px 10px;
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
        {/* <Text>{userDates && userDates.createdAt}</Text> */}
        <Text>Apr 7, 2017</Text>
      </StatsWrapper>
      <StatsWrapper>
        <Heading>Location</Heading>
        {/* <Text>{userDates && userDates.location}</Text> */}
        <LocationText>Ireland</LocationText>
      </StatsWrapper>
      {/* <TextSpan>Last Updated on {userDates && userDates.updatedAt}</TextSpan> */}
      <TextSpan>Last Updated on Mar 20, 2021</TextSpan>
    </Wrapper>
  );
};
