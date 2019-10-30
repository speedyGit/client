import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './GitUserCard.css';

const GitUsersCard = props => {
console.log(props.user)
const [repos, setRepos] = useState([]);

  const URL = `https://api.github.com/users/eralpkor/repos`;

  useEffect(() => {
    axios.get(URL)
      .then(reps => {
        console.log(reps);
        setRepos(reps)
      })
  }, [])

  function handleClick(e) {
    e.preventDefault();
    const user = e.target.textContent;
    console.log(user)
  }

  return (
  <List divided relaxed>
      <List.Item>
        
        <Image src={props.user.avatar_url} className='tiny' />
        <List.Content>
          <List.Header onClick={handleClick} as='a'>{props.user.login}</List.Header>
          <List.Description as='a'>Updated 10 mins ago</List.Description>
        </List.Content>
      </List.Item>
    </List>
  )
 }

export default GitUsersCard;