import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    padding: 12px;
`;

const Wrapper = Styled.div`
    margin: 10px 0;
`;

const HeadingH4 = Styled.h4`
    font-size: 0.80rem;
    font-weight: 600;
    margin: 0 10px;
    color: #4d4d4d;
`;

const Paragraph = Styled.p<{ color: string }>`
    font-size: 0.95rem;
    margin: 3px 10px;
    color: ${(props) => props.color};
`;

interface Props {
  createdAt?: string | null;
  updatedAt?: string | null;
  location?: string | null;
}

const UserDates: React.FC<Props> = ({ createdAt, updatedAt, location }) => {
  return (
    <Container>
      <Wrapper>
        <HeadingH4>Joined</HeadingH4>
        <Paragraph color='#333333'>{createdAt}</Paragraph>
      </Wrapper>
      {location && (
        <Wrapper>
          <HeadingH4>Location</HeadingH4>
          <Paragraph color='#705df2'>{location}</Paragraph>
        </Wrapper>
      )}
      <Paragraph color='#aaaaaa'>Last Updated on {updatedAt}</Paragraph>
    </Container>
  );
};

export default UserDates;
