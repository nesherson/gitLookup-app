import React from 'react';
import Styled from 'styled-components';

const Item = Styled.li`
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 10px;
    margin: 20px;
    color: #4d4d4d;
    display: flex;
    justify-content: space-between;
`;

const ItemText = Styled.div`
  flex: 1;
`;

const Text = Styled.p`
  margin: 5px 0;
  display: inline;
`;

const Icon = Styled.img`
  padding-right: 5px;
  vertical-align: text-top;
`;

const Date = Styled.span`
  color: #ccc;
`;

interface IProps {
  icon: string;
  date: string;
  children: React.ReactNode;
}

const ListItem: React.FC<IProps> = ({ icon, date, children }) => {
  return (
    <Item>
      <ItemText>
        <Icon src={icon} alt='' />
        <Text>{children}</Text>
      </ItemText>
      <Date>{date}</Date>
    </Item>
  );
};

export default ListItem;
