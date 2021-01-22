/* eslint-disable react/prefer-stateless-function */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/NavTabs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MessageBoard from "./components/MessageBoard";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import UserContext from "./Store/UserContext";
import TestBoard from "./components/TestBoard";

function App() {

  const [user, setUser] = useState({
    username: "",
    onSignIn: (user) => setUser((o)=>({...o, username:user}))
  });

  return (
    <Router>
      <UserContext.Provider value={user}>

        <NavBar />
        <div>
          <NavTabs />
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/message" component={MessageBoard} />
          <Route exact path="/testboard" component={TestBoard}/>
        </div>

        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;

