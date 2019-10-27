import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

import NavBar from "./components/NavBar";
import FormikSignUpForm from './components/SignUpForm';
import FormikLoginForm from './components/LoginForm';
import GitUsersList from './components/Users/GitUsersList';
import Dashboard from './components/Dashboard/Dashboard';

// SL have every student
//TL all their students
// and Admin

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/signup' component={ FormikSignUpForm } />
      <Route exact path='/' component={ FormikLoginForm } />
      {/* <PrivateRoute path='/students' component={ GitUsersList } /> */}
      <Route path='/dashboard' component= { Dashboard } />
    </>
  );
}

export default App;
