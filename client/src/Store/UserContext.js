import React from "react";

const UserContext = React.createContext({
    username: "",
    onSignIn: () => undefined
});

export default UserContext;

