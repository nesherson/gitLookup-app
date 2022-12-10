import React from "react";
import Styled from "styled-components";

import Star from "src/assets/icons/star.svg";
import Comment from "src/assets/icons/comment.svg";
import Plus from "src/assets/icons/plus.svg";
import Trash from "src/assets/icons/trash.svg";
import Branch from "src/assets/icons/branch.svg";
import ListItem from "./ListItem";
import Link from "src/components/link/Link";

import { timeSince } from "src/util/helpers";

import {
  WATCH_EVENT,
  ISSUE_COMMENT_EVENT,
  ISSUES_EVENT,
  PUSH_EVENT,
  PULL_REQUEST_EVENT,
  CREATE_EVENT,
} from "src/features/results-page/constants/activityEvents";
import { GITHUB_URL } from "src/features/results-page/constants/common";

import { Activity } from "src/types";

const List = Styled.div`
    padding: 10px 20px;
    list-style: none;
`;

type ActivityListProps = {
  activities: Activity[];
};

function ActivityList({ activities }: ActivityListProps) {
  return (
    <List>
      {activities &&
        activities.map((a, index) => {
          const createdAt = timeSince(new Date(a.created_at));
          const isLast = index === activities.length - 1;

          switch (a.type) {
            case WATCH_EVENT: {
              const repoUrl = `${GITHUB_URL}/${a.repo.name}`;
              return (
                <ListItem icon={Star} date={createdAt} key={a.id} isLast={isLast}>
                  Starred a repo <Link url={repoUrl}>{a.repo.name}</Link>
                </ListItem>
              );
            }
            case ISSUE_COMMENT_EVENT:
              const commentUrl = a.payload.comment.html_url;
              return (
                <ListItem icon={Comment} date={createdAt} key={a.id} isLast={isLast}>
                  Created a <Link url={commentUrl}>comment</Link> on an issue in{" "}
                  <Link url={a.repo.url}>{a.repo.name}</Link>
                </ListItem>
              );
            case ISSUES_EVENT:
              const issueUrl = a.payload.issue.html_url;
              return (
                <ListItem icon={Plus} date={createdAt} key={a.id} isLast={isLast}>
                  Opened an <Link url={issueUrl}>issue</Link> in{" "}
                  <Link url={a.repo.url}>{a.repo.name}</Link>
                </ListItem>
              );
            case PUSH_EVENT:
              const pushSize = a.payload.size;
              const lastIndex = a.payload.ref.split("/").length - 1;
              const branch = a.payload.ref.split("/")[lastIndex];
              const branchUrl = `${GITHUB_URL}/${a.repo.name}/tree/${branch}`;
              const repoUrl = `${GITHUB_URL}/${a.repo.name}`;
              return (
                <ListItem icon={Plus} date={createdAt} key={a.id} isLast={isLast}>
                  Pushed {pushSize} commit to{" "}
                  <Link url={branchUrl}>{branch}</Link> in{" "}
                  <Link url={repoUrl}>{a.repo.name}</Link>
                </ListItem>
              );
            case PULL_REQUEST_EVENT:
              const pullReq = a.payload.pull_request.html_url;
              return (
                <ListItem icon={Trash} date={createdAt} key={a.id} isLast={isLast}>
                  Closed a <Link url={pullReq}>pull request</Link> in{" "}
                  <Link url={a.repo.url}>{a.repo.name}</Link>
                </ListItem>
              );
            case CREATE_EVENT:
              if (a.payload.ref_type === "branch") {
                const ref = a.payload.ref;
                const branchUrl = `${GITHUB_URL}/${a.repo.name}/tree/${ref}`;
                return (
                  <ListItem icon={Branch} date={createdAt} key={a.id} isLast={isLast}>
                    Created a branch <Link url={branchUrl}>{ref}</Link> in{" "}
                    <Link url={a.repo.url}>{a.repo.name}</Link>
                  </ListItem>
                );
              } else {
                return (
                  <ListItem icon={Plus} date={createdAt} key={a.id} isLast={isLast}>
                    Created a repository{" "}
                    <Link url={a.repo.url}>{a.repo.name}</Link>
                  </ListItem>
                );
              }
            default:
              return null;
          }
        })}
    </List>
  );
}

export default ActivityList;
