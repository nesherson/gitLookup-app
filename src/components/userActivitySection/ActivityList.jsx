import React from 'react';
import Styled from 'styled-components';

const List = Styled.div`
    padding: 12px;
`;

export const ActivityList = (props) => {
  const activities = props.activities;

  return (
    <List>
      {activities &&
        activities.map((activity, i) => {
          switch (activity.type) {
            case 'WatchEvent':
              return (
                <li key={activity.type + i}>
                  Starred a repo{' '}
                  <a
                    href={activity.repoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {activity.name}
                  </a>
                </li>
              );
            case 'IssueCommentEvent':
              return (
                <li key={activity.type + i}>
                  Created a{' '}
                  <a
                    href={activity.commentUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    comment
                  </a>{' '}
                  on an issue in{' '}
                  <a
                    href={activity.repoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {activity.name}
                  </a>
                </li>
              );
            case 'IssuesEvent':
              return (
                <li key={activity.type + i}>
                  Opened an{' '}
                  <a
                    href={activity.issueUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    issue
                  </a>{' '}
                  in{' '}
                  <a
                    href={activity.repoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {activity.name}
                  </a>
                </li>
              );
            default:
              return null;
          }
        })}
    </List>
  );
};
