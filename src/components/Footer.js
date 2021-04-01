import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    text-align: center;
    font-size: 0.85rem;
    color: #aaa;
`;

const Link = Styled.a`
    color: #705df2;
    text-decoration: none;
`;

const Text = Styled.p`
    margin: 7px;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Text>This project is based on gitstalk</Text>
      <Link
        href='https://github.com/thelittlewonder/gitstalk'
        target='_blank'
        rel='noopener noreferrer'
      >
        thelittlewonder/gitstalk
      </Link>
    </Wrapper>
  );
};
