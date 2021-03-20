import React from 'react';

export const ListItem = ({ activity }) => {
  switch (activity.type) {
    case 'WatchEvent':
      return (
        <li>
          Starred a repo{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </li>
      );
    case 'IssueCommentEvent':
      const commentUrl = activity.payload.comment.html_url;
      return (
        <li>
          Created a{' '}
          <a href={commentUrl} target='_blank' rel='noopener noreferrer'>
            comment
          </a>{' '}
          on an issue in{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </li>
      );
    case 'IssuesEvent':
      const issueUrl = activity.payload.issue.html_url;
      return (
        <li>
          Opened an{' '}
          <a href={issueUrl} target='_blank' rel='noopener noreferrer'>
            issue
          </a>{' '}
          in{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </li>
      );
    case 'PushEvent':
      const pushSize = activity.payload.size;
      const branch = activity.payload.ref
        .split('/')
        .filter((item) => item === 'master')
        .join();
      const branchUrl = `https://github.com/${activity.author}/tree/${branch}`;
      console.log(activity.author);
      return (
        <li>
          Pushed {pushSize} commit to{' '}
          <a href={branchUrl} target='_blank' rel='noopener noreferrer'>
            {branch}
          </a>{' '}
          in{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </li>
      );

    case 'PullRequestEvent':
      const pullReq = activity.payload.pull_request.html_url;
      return (
        <li>
          Closed a{' '}
          <a href={pullReq} target='_blank' rel='noopener noreferrer'>
            pull request
          </a>{' '}
          in{' '}
          <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
            {activity.name}
          </a>
        </li>
      );
    case 'CreateEvent':
      if (activity.payload.ref_type === 'branch') {
        const ref = activity.payload.ref;
        const branchUrl = `https://github.com/${activity.author}/tree/${ref}`;
        return (
          <li>
            Created a branch{' '}
            <a href={branchUrl} target='_blank' rel='noopener noreferrer'>
              {ref}
            </a>{' '}
            in{' '}
            <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
              {activity.name}
            </a>
          </li>
        );
      } else {
        return (
          <li>
            Created a repository{' '}
            <a href={activity.repo} target='_blank' rel='noopener noreferrer'>
              {activity.name}
            </a>
          </li>
        );
      }

    default:
      return null;
  }
};
