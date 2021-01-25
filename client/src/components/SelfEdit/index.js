import React, { useContext } from "react";
import EditCard from "./EditCard";
import users from "./users.json";
import Strengths from "./EditCard/StrengthsCard";
import UserContext from "../../Store/UserContext";
import { Redirect } from "react-router";

<<<<<<< HEAD
class SelfEdit extends Component {
  state = {
    users
  };

  render() {
    return (
      <div>
        <h1>Edit Skills</h1>
=======
const SelfEdit = () => {

  const { username } = useContext(UserContext);



  return (
    username ? (

      <div>
        <h1>Edit Skills</h1>
        <Strengths />

>>>>>>> 89788f429f54aede6186ea3b1e0c3e69a22c2ad2
        <EditCard
          id={users.id}
          key={users.id}
          firstName={users[0].firstName}
          lastName={users[0].lastName}
          strengths={users[0].strengths}
          weaknesses={users[0].weaknesses}
        />
      </div>
<<<<<<< HEAD
    );
  }
=======

    )

      : <Redirect to = "/" />
  );
>>>>>>> 89788f429f54aede6186ea3b1e0c3e69a22c2ad2
}


export default SelfEdit;


