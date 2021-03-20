import React from 'react';
import { ListItem } from './ListItem';
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
          return <ListItem activity={activity} key={activity.type + i} />;
        })}
    </List>
  );
};
