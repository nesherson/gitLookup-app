import React from 'react';
import Styled from 'styled-components';

const StyledFooter = Styled.footer`
    height: 60px;
    text-align: center;
    font-size: 0.85rem;
    margin: 20px 0;
`;

const Link = Styled.a`
    color: #705df2;
    text-decoration: none;
`;

const Text = Styled.p`
    margin: 7px;
    color: #aaa;
`;

function Footer() {
  return (
    <StyledFooter>
      <Text>This project is based on gitstalk</Text>
      <Link
        href='https://github.com/thelittlewonder/gitstalk'
        target='_blank'
        rel='noopener noreferrer'
      >
        thelittlewonder/gitstalk
      </Link>
    </StyledFooter>
  );
};

export default Footer;
