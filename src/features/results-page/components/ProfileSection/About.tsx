import React from 'react';
import Styled from 'styled-components';
import Link from '../../../../components/Link/Link';

const Avatar = Styled.div`
    width: 44px;
    height: auto;
    margin: 5px;
`;

const Heading = Styled.h1`
    font-size: 1.04rem;
    font-weight: 500;
    margin: 0 5px;
`;

const ProfilePicture = Styled.img`
    width: 44px;
    height: auto;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

const UserName = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 0;
`;

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #d9d9d9;
    padding: 14px;
`;

interface Props {
  profilePicture?: string;
  userName?: string;
  profileUrl?: string;
  blog?: string | null;
}

const About: React.FC<Props> = ({
  profilePicture,
  userName,
  profileUrl,
  blog,
}) => {
  return (
    <Wrapper>
      <Avatar>
        <ProfilePicture src={`${profilePicture}`} alt={''} />
      </Avatar>
      <UserName>
        <Heading>{userName}</Heading>
        <Link url={profileUrl}>↗</Link>
        {blog ? (
          <Link url={blog} type='blog'>
            {blog}
          </Link>
        ) : (
          ''
        )}
      </UserName>
    </Wrapper>
  );
};

export default About;
