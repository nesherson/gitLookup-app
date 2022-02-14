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

interface Props {
  createdAt?: string | null;
  updatedAt?: string | null;
  location?: string | null;
}

const UserDates: React.FC<Props> = ({ createdAt, updatedAt, location }) => {
  return (
    <Wrapper>
      <StatsWrapper>
        <Heading>Joined</Heading>
        <Text>{createdAt}</Text>
      </StatsWrapper>
      <StatsWrapper>
        <Heading>Location</Heading>
        <LocationText>{location}</LocationText>
      </StatsWrapper>
      <TextSpan>Last Updated on {updatedAt}</TextSpan>
    </Wrapper>
  );
};

export default UserDates;
