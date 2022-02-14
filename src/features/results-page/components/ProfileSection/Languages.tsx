import React from 'react';
import Styled from 'styled-components';

const List = Styled.ul`
    margin: 0;
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #d9d9d9;
`;

const Item = Styled.span`
    margin: 5px;
    padding: 5px;
    background-color: rgba(132, 115, 245, 0.5);
    color: #262626;
    font-size: 0.80rem;
    border-radius: 3px;
`;

const UserLanguages: React.FC<{ languages?: string[] | null }> = ({
  languages,
}) => {
  return (
    <List>
      {languages &&
        languages.map((lang) => {
          return <Item key={lang}>{lang}</Item>;
        })}
    </List>
  );
};

export default UserLanguages;
