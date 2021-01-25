import React from "react";

const UserContext = React.createContext({
    username: "",
    skill: [],
    onSignIn: () => undefined,
    onLogOut: () => undefined
});

export default UserContext;

