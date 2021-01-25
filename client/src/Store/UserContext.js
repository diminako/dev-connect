import React from "react";

const UserContext = React.createContext({
    username: "",
    onSignIn: () => undefined,
    onLogOut: () => undefined
});

export default UserContext;

