import React from 'react';
import {
  List,
  Image
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './GitUserCard.css';

const GitUsersCard = props => {
  console.log(props.user)
  return ( <
    List divided relaxed >
    <
    List.Item >

    <
    Image src = {
      props.user.avatar_url
    }
    className = 'tiny' / >
    <
    List.Content >
    <
    List.Header as = 'a' > {
      props.user.login
    } < /List.Header> <
    List.Description as = 'a' > Updated 10 mins ago < /List.Description> <
    /List.Content> <
    /List.Item> <
    /List>
  )
}

export default GitUsersCard;