import React from 'react';
import Styled from 'styled-components';

const Avatar = Styled.div`
    background-color: red;
    
`;

const Heading = Styled.h1`
    font-size: 1.30rem;
`;

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #000;
    padding: 12px;
`;

export const About = () => {
  return (
    <Wrapper>
      <Avatar>Picture</Avatar>
      <div>
        <Heading>John Doe</Heading>
        <a href='#'>linkedin.com/JohnDoe</a>
      </div>
    </Wrapper>
  );
};
