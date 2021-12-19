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

interface Props {
  type?: string,
  url: string,
  children: string
}

export const Link:React.FC<Props> = ({type, url, children}) => {
  return (
    <>
      {type === 'blog' ? (
        <BlogLink href={url} target='_blank' rel='noopener noreferrer'>
          {children}
        </BlogLink>
      ) : (
        <Anchor href={url} target='_blank' rel='noopener noreferrer'>
          {children}
        </Anchor>
      )}
    </>
  );
};
