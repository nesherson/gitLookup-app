import React from 'react';
import Styled from 'styled-components';

const Anchor = Styled.a`
  color: #705df2;
  text-decoration: none;
`;

const BlogLink = Styled(Anchor)`
  margin: 0 5px;
  font-size: 0.85rem;   
`;

export const Link = (props) => {
  return (
    <>
      {props.type === 'blog' ? (
        <BlogLink href={props.url} target='_blank' rel='noopener noreferrer'>
          {props.children}
        </BlogLink>
      ) : (
        <Anchor href={props.url} target='_blank' rel='noopener noreferrer'>
          {props.children}
        </Anchor>
      )}
    </>
  );
};
