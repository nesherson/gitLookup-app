import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    border: 1px solid #d9d9d9;
    padding: 14px 40px;
    margin: 14px;
    border-radius: 5px;
    box-shadow: 0px 15px 30px rgba(0,0,0,0.1);
`;

const Heading = Styled.h1`
    font-size: 1.75rem;
    font-weight: 500;
`;

const Text = Styled.p`
    color: #ccc;
`;

export const NotFound = () => {
  console.log('Not found');
  return (
    <Wrapper>
      <Heading>Username not found.</Heading>
      <Text>Even our strongest octocat failed to find it. :(</Text>
    </Wrapper>
  );
};
