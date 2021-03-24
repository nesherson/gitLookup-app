import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  color: #705df2;
  font-size: 3.2rem;
  margin-bottom: 15px;
`;

const ResultHeading = styled.h1`
  color: #705df2;
  font-size: 1.65rem;
  padding: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
`;

const ResultWrapper = styled.div``;

const LogoText = styled.p`
  font-size: 0.85rem;
`;

export const Logo = (props) => {
  return (
    <div>
      {props.type !== 'result' ? (
        <Wrapper>
          <Heading>gitLookup</Heading>
          <LogoText>Discover who's upto what...</LogoText>
        </Wrapper>
      ) : (
        <ResultWrapper>
          <ResultHeading>gitLookup</ResultHeading>
        </ResultWrapper>
      )}
    </div>
  );
};
