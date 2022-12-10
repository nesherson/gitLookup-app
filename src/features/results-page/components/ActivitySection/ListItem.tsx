import React from 'react';
import Styled from 'styled-components';

const StyledListItem = Styled.li<{isLast: boolean}>`
    border-bottom: ${(props) => (props.isLast ? "" : " 1px solid rgba(217, 217, 217, 0.5)")};
    padding-bottom: 10px;
    margin-top: 20px;
    color: #4d4d4d;
    display: flex;
    justify-content: space-between;
`;

const ItemText = Styled.div`
  flex: 1;
`;

const StyledParagraph = Styled.p`
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

type ListItemProps = {
  icon: string;
  date?: string;
  children: React.ReactNode;
  isLast: boolean
}

function ListItem({ icon, date, children, isLast }: ListItemProps) {
  return (
    <StyledListItem isLast={isLast}>
      <ItemText>
        <Icon src={icon} alt='' />
        <StyledParagraph>{children}</StyledParagraph>
      </ItemText>
      { date && <Date>{date}</Date> }
    </StyledListItem>
  );
};

export default ListItem;
