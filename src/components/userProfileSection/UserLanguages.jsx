import React from 'react';
import Styled from 'styled-components';

const List = Styled.ul`
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

export const UserLanguages = (props) => {
  const languages = props.languages;

  return (
    <List>
      {languages &&
        languages.map((lang) => {
          return <Item key={lang}>{lang}</Item>;
        })}
    </List>
  );
};