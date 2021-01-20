/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavTabs from "./components/NavTabs"
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
       
      </div>
      
     
    </Router>
  );
}

export default App;

