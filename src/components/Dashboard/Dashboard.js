import React, {
  useEffect,
  useState
} from "react";
import axios from 'axios';
import GitUserList from '../Users/GitUsersList';
import DropdownMenu from './Dropdown';
import './Dashboard.css';

const initialState = {
  username: '',
}

function Dashboard() {
  const [gitUser, setGitUser] = useState(initialState);

  const addUser = e => {
    e.preventDefault();
    axios.post('https://reactjscode', gitUser)
      .then(res => {
        console.log(res)

      })
  }


  return ( <
    div className = "user-dashboard" >
    <
    div className = "input-area" >
    <
    div className = "how-it-works" >
    <
    h3 > Please enter student 's gitHub username into input fields.</h3> <
    /div> <
    div className = "dashboard-form" >
    <
    form >
    <
    input className = "input"
    type = "text"
    name = "name"
    placeholder = "Git User Name" /
    >
    <
    /form>

    <
    button type = "submit"
    className = "btnSignUp" > + < /button> <
    p > 10 users max. < /p> <
    DropdownMenu / >
    <
    /div>


    <
    GitUserList / >
    <
    /div> <
    /div>
  )
}

export default Dashboard;