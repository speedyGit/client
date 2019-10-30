import React, { useEffect, useState } from "react";
import axios from 'axios';
import GitUsersCard from './GitUsersCard';
import Loading from "../Loading/Loading";

import data from '../data';

export default function GitUsersList() {
//   const [users, setUser] = useState([]);
//   const URL = 'https://api.github.com/users/';

  // useEffect(() => {
  //   axios
  //     .get(data)
  //     .then(res => {
  //       setUser(res);
  //       console.log('users', res)
  //     })
  //     .catch(err => console.log('Something went wrong', err))
  // }, []);
  
// console.log(data)
//   return (
//     <>
//       {data.map(users => {
//         return <p>{users}</p>
//       })}
//     </>
//   )

  return (
    <section>
      {/* {users.length ? (
        users.map(u => {
          return <GitUsersCard key={u.id}  user={u}/>
        })
      ) : (
        <Loading />
      )} */}
    </section>
  )
}