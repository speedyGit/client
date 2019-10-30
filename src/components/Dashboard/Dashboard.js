import React, { useEffect, useState } from "react";
import axios from 'axios';
import GitUserList from '../Users/GitUsersList';
import DropdownMenu from './Dropdown';
import './Dashboard.css';

const initialState = {
  users: [],
}

function Dashboard() {
  const [gitUser, setGitUser] = useState(initialState);

  const addUser = e => {
    e.preventDefault();
    
  }

 
  return (
    <div className="user-dashboard">
      <div className="input-area">
        <div className="how-it-works">
          <h3>Please enter student's gitHub username into input field.</h3>
        </div>
        <div className="dashboard-form">
          <form>
            <input 
            className="user-input"
            type="text"
            name="name"
            placeholder="Git User Name"
            />
          </form>
          
          <button type="submit" className="add-button">+</button>
          <p>10 users max.</p>

          <DropdownMenu />
        </div>
        

      <GitUserList />
      </div>
    </div>
  )
}

export default Dashboard;