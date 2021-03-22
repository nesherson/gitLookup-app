import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  color: #705df2;
  font-size: 3.2rem;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
`;

const LogoText = styled.p`
  font-size: 0.85rem;
`;

export const Logo = () => {
  return (
    <Wrapper>
      <Heading>gitLookup</Heading>
      <LogoText>Discover who's upto what...</LogoText>
    </Wrapper>
  );
};
