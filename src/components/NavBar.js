import React from "react";
import { Link } from 'react-router-dom';
import "../components/Nav.css";
import {logout} from "../utils/Authentication";


const Nav = props => (
  <header className='toolbar'>
    <nav className='toolbar_navigation'>
     
      <div className='toolbar_logo'><h1 >Dashboard</h1></div>
      <div className='spacer'></div>
      <div className='toolbar-navigation-items'>
        <Link to="/welcome">Home</Link>
        <Link to="/">Login</Link>
        <Link to="/signup">Sign Up</Link>
        
        <Link onClick={logout}>Sign Out</Link>
      </div>
    </nav>
  </header>
);

export default Nav;