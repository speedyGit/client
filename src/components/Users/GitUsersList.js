import React, { useEffect, useState } from "react";
import axiosWithAuth from '../../utils/axiosWithAuth';
import GitUsersCard from './GitUsersCard';
import Loading from "../Loading/Loading";

export default function GitUsersList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://hello')
      .then(res => {
        setUser(res.data.results);
        console.log('users', user)
      })
      .catch(err => console.log('Something went wrong', err))
  }, []);

  return (
    <section>
      {user.length ? (
        user.map(u => {
          return <GitUsersCard key={user.id} user={u} />
        })
      ) : (
        <Loading />
      )}
      
    </section>
  )
}