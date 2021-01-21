/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/NavTabs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MessageBoard from "./components/MessageBoard";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <NavTabs />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/message" component={MessageBoard} />
       
      </div>
      
     <Footer />
    </Router>
  );
}

export default App;

