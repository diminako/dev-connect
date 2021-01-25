import React, { useContext } from "react";
import EditCard from "./EditCard";
import users from "./users.json";
import Strengths from "./EditCard/StrengthsCard";
import UserContext from "../../Store/UserContext";
import { Redirect } from "react-router";

const SelfEdit = () => {

  const { username } = useContext(UserContext);



  return (
    username ? (

      <div>
        <h1>Edit Skills</h1>
        <Strengths />

        <EditCard
          id={users.id}
          key={users.id}
          firstName={users[0].firstName}
          lastName={users[0].lastName}
          strengths={users[0].strengths}
          weaknesses={users[0].weaknesses}
        />
      </div>

    )

      : <Redirect to = "/" />
  );
}


export default SelfEdit;


