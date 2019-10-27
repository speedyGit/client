import React, {
  useEffect,
  useState
} from "react";
import axios from 'axios';
import GitUsersCard from './GitUsersCard';
import Loading from "../Loading/Loading";

export default function GitUsersList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/eralpkor/followers`)
      .then(res => {
        setUser(res.data);
        // console.log('users', res.data)
      })
      .catch(err => console.log('Something went wrong', err))
  }, []);

  return ( <
    section > {
      users.length ? (
        users.map(u => {
          return <GitUsersCard key = {
            u.id
          }
          user = {
            u
          }
          />
        })
      ) : ( <
        Loading / >
      )
    } <
    /section>
  )
}