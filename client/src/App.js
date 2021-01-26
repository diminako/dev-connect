/* eslint-disable react/prefer-stateless-function */
import React, {  useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/NavTabs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MessageBoard from "./components/MessageBoard";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SelfEdit from "./components/SelfEdit";
// import Logout from "./components/Logout";

import UserContext from "./Store/UserContext";
import axios from "axios";


function App() {

  const [user, setUser] = useState({
    username: "",
    skill: [],

    onSignIn: ({ username, skill }) => {
      setUser((o) => ({ ...o, username, skill }))
    },
    onSignOut: () => {
      axios.get('/api/logout')
        .then(res => {
          setUser((o) => ({ ...o, username: "" }));
          if (!redirect){
            setRedirect(true)
          }
        });
    },
    setSkills: (skills) => {
      setUser((o) => ({ ...o, skill: skills }))
    }
  });
  const [redirect, setRedirect] = useState("false");
  return (
    <Router>
      <UserContext.Provider value={user}>

        <NavBar />
        <NavTabs />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/message" component={MessageBoard} />
        <Route exact path="/selfedit" component={SelfEdit} />
        {/* <Route exact path="/logout" component={Logout} /> */}

        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;

