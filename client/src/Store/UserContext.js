import React from "react";

const UserContext = React.createContext({
    username: "",
    skill: [],
    onSignIn: () => undefined,
    onLogOut: () => undefined,
    setSkills: () => undefined
});

export default UserContext;

