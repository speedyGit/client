import React from 'react';
import { Route } from "react-router-dom";

import './App.css';

import NavBar from "./components/NavBar";
import FormikSignUpForm from './components/SignUpForm';

// SL have every student
//TL all their students
// and Admin

function App() {
  return (
    <>
    <NavBar />
    <h1>Hello</h1>
    <Route exact path='/signup' component={FormikSignUpForm} />
    </>
   
  );
}

export default App;
