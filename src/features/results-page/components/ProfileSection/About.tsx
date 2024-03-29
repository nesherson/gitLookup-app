import React from "react";
import Styled from "styled-components";

import Link from "src/components/link/Link";

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
    border-bottom: 1px solid rgba(217, 217, 217, 0.5);
    padding: 14px;
`;

type AboutProps = {
  profilePicture?: string;
  userName?: string;
  profileUrl?: string;
  blog?: string | null;
};

function About({ profilePicture, userName, profileUrl, blog }: AboutProps) {
  return (
    <Wrapper>
      <Avatar>
        <ProfilePicture src={`${profilePicture}`} alt={"Profile picture"} />
      </Avatar>
      <UserName>
        <Heading>{userName}</Heading>
        <Link url={profileUrl}>↗</Link>
        {blog && (
          <Link url={blog} type="blog">
            {blog}
          </Link>
        )}
      </UserName>
    </Wrapper>
  );
}

export default About;
