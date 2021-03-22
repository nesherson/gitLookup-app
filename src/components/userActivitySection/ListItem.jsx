import React from 'react';
import Styled from 'styled-components';

const Item = Styled.li`
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 10px;
    margin: 10px 20px 0 20px;
`;

export const ListItem = ({ activity }) => {
  switch (activity.type) {
    case 'WatchEvent':
      return (
        <Item>
          Starred a repo{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </Item>
      );
    case 'IssueCommentEvent':
      const commentUrl = activity.payload.comment.html_url;
      return (
        <Item>
          Created a{' '}
          <a href={commentUrl} target='_blank' rel='noopener noreferrer'>
            comment
          </a>{' '}
          on an issue in{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </Item>
      );
    case 'IssuesEvent':
      const issueUrl = activity.payload.issue.html_url;
      return (
        <Item>
          Opened an{' '}
          <a href={issueUrl} target='_blank' rel='noopener noreferrer'>
            issue
          </a>{' '}
          in{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
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
          Pushed {pushSize} commit to{' '}
          <a href={branchUrl} target='_blank' rel='noopener noreferrer'>
            {branch}
          </a>{' '}
          in{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </Item>
      );

    case 'PullRequestEvent':
      const pullReq = activity.payload.pull_request.html_url;
      return (
        <Item>
          Closed a{' '}
          <a href={pullReq} target='_blank' rel='noopener noreferrer'>
            pull request
          </a>{' '}
          in{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </Item>
      );
    case 'CreateEvent':
      if (activity.payload.ref_type === 'branch') {
        const ref = activity.payload.ref;
        const branchUrl = `https://github.com/${activity.author}/tree/${ref}`;
        return (
          <Item>
            Created a branch{' '}
            <a href={branchUrl} target='_blank' rel='noopener noreferrer'>
              {ref}
            </a>{' '}
            in{' '}
            <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
              {activity.name}
            </a>
          </Item>
        );
      } else {
        return (
          <Item>
            Created a repository{' '}
            <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
              {activity.name}
            </a>
          </Item>
        );
      }

    default:
      return null;
  }
};
