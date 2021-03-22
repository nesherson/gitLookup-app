import React from 'react';
import Styled from 'styled-components';
import { Link } from './Link';
import Star from '../icons/star.svg';
import Comment from '../icons/comment.svg';
import Plus from '../icons/plus.svg';
import Trash from '../icons/trash.svg';
import Branch from '../icons/branch.svg';

const Item = Styled.li`
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 10px;
    margin: 10px 20px 0 20px;
    color: #4d4d4d;
    display: flex;
`;

const Text = Styled.p`
  margin: 5px 0;
`;

const Icon = Styled.img`
  padding-right: 5px;
  vertical-align: text-top;
`;

export const ListItem = ({ activity }) => {
  switch (activity.type) {
    case 'WatchEvent':
      return (
        <Item>
          <Icon src={Star} alt='' />
          <Text>
            Starred a repo{' '}
            <Link url={activity.repo} color='#705df2'>
              {activity.name}
            </Link>
          </Text>
        </Item>
      );
    case 'IssueCommentEvent':
      const commentUrl = activity.payload.comment.html_url;
      return (
        <Item>
          <Text>
            <Icon src={Comment} alt='' />
            Created a <Link url={commentUrl}>comment</Link> on an issue in{' '}
            <Link url={activity.repo}>{activity.name}</Link>
          </Text>
        </Item>
      );
    case 'IssuesEvent':
      const issueUrl = activity.payload.issue.html_url;
      return (
        <Item>
          <Text>
            <Icon src={Plus} alt='' />
            Opened an <Link url={issueUrl}>issue</Link> in{' '}
            <Link url={activity.repo}>{activity.name}</Link>
          </Text>
        </Item>
      );
    case 'PushEvent':
      const pushSize = activity.payload.size;
      const branch = activity.payload.ref
        .split('/')
        .filter((item) => item === 'master')
        .join();
      const branchUrl = `https://github.com/${activity.author}/tree/${branch}`;

      return (
        <Item>
          <Text>
            <Icon src={Plus} alt='' />
            Pushed {pushSize} commit to <Link url={branchUrl}>{branch}</Link> in{' '}
            <Link url={activity.repo}>{activity.name}</Link>
          </Text>
        </Item>
      );

    case 'PullRequestEvent':
      const pullReq = activity.payload.pull_request.html_url;
      return (
        <Item>
          <Text>
            <Icon src={Trash} alt='' />
            Closed a <Link url={pullReq}>pull request</Link> in{' '}
            <Link url={activity.repo}>{activity.name}</Link>
          </Text>
        </Item>
      );
    case 'CreateEvent':
      if (activity.payload.ref_type === 'branch') {
        const ref = activity.payload.ref;
        const branchUrl = `https://github.com/${activity.author}/tree/${ref}`;
        return (
          <Item>
            <Text>
              <Icon src={Branch} alt='' />
              Created a branch <Link url={branchUrl}>{ref}</Link> in{' '}
              <Link url={activity.repo}>{activity.name}</Link>
            </Text>
          </Item>
        );
      } else {
        return (
          <Item>
            <Text>
              <Icon src={Plus} alt='' />
              Created a repository{' '}
              <Link url={activity.repo}>{activity.name}</Link>
            </Text>
          </Item>
        );
      }

    default:
      return null;
  }
};
