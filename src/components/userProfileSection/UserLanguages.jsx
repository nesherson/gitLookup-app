import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #000;
`;

const Item = Styled.span`
    margin: 5px;
    padding: 5px;
    background-color: #ffcccc;
    font-size: 0.9rem;
`;

export const UserLanguages = () => {
  return (
    <Wrapper>
      <Item>C++</Item>
      <Item>Python</Item>
      <Item>JavaScript</Item>
      <Item>Ruby</Item>
      <Item>CSS</Item>
    </Wrapper>
  );
};
