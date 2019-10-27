import React, { useEffect, useState } from "react";
import axios from 'axios';
import GitUsersCard from './GitUsersCard';
import Loading from "../Loading/Loading";

export default function GitUsersList() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${users}`)
      .then(res => {
        setUser(res.data.results);
        console.log('users', users)
      })
      .catch(err => console.log('Something went wrong', err))
  }, []);

  return (
    <section>
      {users.length ? (
        users.map(u => {
          return <GitUsersCard key={users.id} user={u} />
        })
      ) : (
        <Loading />
      )}
    </section>
  )
}