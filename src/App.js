import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

import NavBar from "./components/NavBar";
import FormikSignUpForm from './components/SignUpForm';
import FormikLoginForm from './components/LoginForm';
import GitUsersList from './components/Users/GitUsersList';

// SL have every student
//TL all their students
// and Admin

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/signup' component={ FormikSignUpForm } />
      <Route exact path='/' component={ FormikLoginForm } />
      <PrivateRoute path='/students' component={ GitUsersList } />
    </>
  );
}

export default App;
