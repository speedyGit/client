import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';

import NavBar from "./components/NavBar";
import FormikSignUpForm from './components/SignUpForm';
import FormikLoginForm from './components/LoginForm';

// SL have every student
//TL all their students
// and Admin

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/signup' component={ FormikSignUpForm } />
      <Route exact path='/' component={ FormikLoginForm } />
    </>
  );
}

export default App;
