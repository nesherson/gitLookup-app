import React from 'react';
import Styled from 'styled-components';
import Star from '../../../assets/icons/star.svg';
import Comment from '../../../assets/icons/comment.svg';
import Plus from '../../../assets/icons/plus.svg';
import Trash from '../../../assets/icons/trash.svg';
import Branch from '../../../assets/icons/branch.svg';
import { ListItem } from './ListItem';
import { Link } from './Link';

const List = Styled.div`
    padding: 15px 0 25px 0;
    list-style: none;
`;

const WATCH_EVENT = 'WatchEvent';
const ISSUE_COMMENT_EVENT = 'IssueCommentEvent';
const ISSUES_EVENT = 'IssuesEvent';
const PUSH_EVENT = 'PushEvent';
const PULL_REQUEST_EVENT = 'PullRequestEvent';
const CREATE_EVENT = 'CreateEvent';

export const ActivityList = (props) => {
  const activities = props.activities;
  return (
    <List>
      {activities &&
        activities.map((activity) => {
          switch (activity.type) {
            case WATCH_EVENT:
              return (
                <ListItem
                  icon={Star}
                  date={activity.created_at}
                  key={activity.id}
                >
                  Starred a repo{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );
            case ISSUE_COMMENT_EVENT:
              const commentUrl = activity.payload.comment.html_url;
              return (
                <ListItem
                  icon={Comment}
                  date={activity.created_at}
                  key={activity.id}
                >
                  Created a <Link url={commentUrl}>comment</Link> on an issue in{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );
            case ISSUES_EVENT:
              const issueUrl = activity.payload.issue.html_url;
              return (
                <ListItem
                  icon={Plus}
                  date={activity.created_at}
                  key={activity.id}
                >
                  Opened an <Link url={issueUrl}>issue</Link> in{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );
            case PUSH_EVENT:
              const pushSize = activity.payload.size;
              const branch = activity.payload.ref
                .split('/')
                .filter((item) => item === 'master')
                .join();
              const branchUrl = `https://github.com/${activity.author}/tree/${branch}`;

              return (
                <ListItem
                  icon={Plus}
                  date={activity.created_at}
                  key={activity.id}
                >
                  Pushed {pushSize} commit to{' '}
                  <Link url={branchUrl}>{branch}</Link> in{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );

            case PULL_REQUEST_EVENT:
              const pullReq = activity.payload.pull_request.html_url;
              return (
                <ListItem
                  icon={Trash}
                  date={activity.created_at}
                  key={activity.id}
                >
                  Closed a <Link url={pullReq}>pull request</Link> in{' '}
                  <Link url={activity.repo}>{activity.name}</Link>
                </ListItem>
              );
            case CREATE_EVENT:
              if (activity.payload.ref_type === 'branch') {
                const ref = activity.payload.ref;
                const branchUrl = `https://github.com/${activity.author}/tree/${ref}`;
                return (
                  <ListItem
                    icon={Branch}
                    date={activity.created_at}
                    key={activity.id}
                  >
                    Created a branch <Link url={branchUrl}>{ref}</Link> in{' '}
                    <Link url={activity.repo}>{activity.name}</Link>
                  </ListItem>
                );
              } else {
                return (
                  <ListItem
                    icon={Plus}
                    date={activity.created_at}
                    key={activity.id}
                  >
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
