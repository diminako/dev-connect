import React, { Component } from "react";
import EditCard from "./EditCard";
import users from "./users.json";

class SelfEdit extends Component {
  state = {
    users
  };

  render() {
    return (
      <div>
        <h1>Edit Skills</h1>
        <EditCard
          id={users.id}
          key={users.id}
          firstName={users[0].firstName}
          lastName={users[0].lastName}
          strengths={users[0].strengths}
          weaknesses={users[0].weaknesses}
        />
      </div>
    );
  }
}

export default SelfEdit;


