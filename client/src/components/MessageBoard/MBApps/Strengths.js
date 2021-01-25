import React, { useContext } from "react";
import UserContext from "../../../Store/UserContext";




function Strengths() {
  const {skill} = useContext(UserContext)

    return (
      <>
      <h5 className="text-center caveat">Strengths</h5>
        <ul>
        {skill.map(specificSkill => <li>{specificSkill}</li>)}
        

        </ul>
       </>
  );
}

export default Strengths;