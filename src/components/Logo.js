import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  color: red;
  font-size: 3.2rem;
`;

export const Logo = () => {
  return (
    <div>
      <Heading>gitLookup</Heading>
      <p>Discover who's upto what</p>
    </div>
  );
};
