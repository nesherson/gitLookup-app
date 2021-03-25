import React from 'react';
import Styled from 'styled-components';
import Star from '../icons/star.svg';
import Comment from '../icons/comment.svg';
import Plus from '../icons/plus.svg';
import Trash from '../icons/trash.svg';
import Branch from '../icons/branch.svg';
import { ListItem } from './ListItem';
import { Link } from './Link';

const List = Styled.div`
    padding: 15px 0 25px 0;
    list-style: none;
`;

export const ActivityList = (props) => {
  const activities = props.activities;
  console.log(activities);
  return (
    <List>
      {activities &&
        activities.map((activity, i) => {
          switch (activity.type) {
            case 'WatchEvent':
              return (
                <ListItem
                  icon={Star}
                  date={activity.created_at}
                  key={activity.id + i}
                >
                  Starred a repo{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );
            case 'IssueCommentEvent':
              const commentUrl = activity.payload.comment.html_url;
              return (
                <ListItem icon={Comment} date={activity.created_at}>
                  Created a <Link url={commentUrl}>comment</Link> on an issue in{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );
            case 'IssuesEvent':
              const issueUrl = activity.payload.issue.html_url;
              return (
                <ListItem icon={Plus} date={activity.created_at}>
                  Opened an <Link url={issueUrl}>issue</Link> in{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );
            case 'PushEvent':
              const pushSize = activity.payload.size;
              const branch = activity.payload.ref
                .split('/')
                .filter((item) => item === 'master')
                .join();
              const branchUrl = `https://github.com/${activity.author}/tree/${branch}`;

              return (
                <ListItem icon={Plus} date={activity.created_at}>
                  Pushed {pushSize} commit to{' '}
                  <Link url={branchUrl}>{branch}</Link> in{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );

            case 'PullRequestEvent':
              const pullReq = activity.payload.pull_request.html_url;
              return (
                <ListItem icon={Trash} date={activity.created_at}>
                  Closed a <Link url={pullReq}>pull request</Link> in{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );
            case 'CreateEvent':
              if (activity.payload.ref_type === 'branch') {
                const ref = activity.payload.ref;
                const branchUrl = `https://github.com/${activity.author}/tree/${ref}`;
                return (
                  <ListItem icon={Branch} date={activity.created_at}>
                    Created a branch <Link url={branchUrl}>{ref}</Link> in{' '}
                    <Link url={activity.repo}>{activity.name}</Link>
                  </ListItem>
                );
              } else {
                return (
                  <ListItem icon={Plus} date={activity.created_at}>
                    Created a repository{' '}
                    <Link url={activity.repo}>{activity.name}</Link>
                  </ListItem>
                );
              }
            default:
              return null;
          }
        })}
    </List>
  );
};
