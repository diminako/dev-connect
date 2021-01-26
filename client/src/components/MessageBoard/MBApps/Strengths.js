import React, { useContext } from "react";
import UserContext from "../../../Store/UserContext";




function Strengths() {
  const {skill} = useContext(UserContext)

    return (
      <>
      <h4 className="text-center caveat">Strengths</h4>
        <ul>
        {skill.map((specificSkill, i) => <li key={i}>{specificSkill}</li>)}
        

        </ul>
       </>
  );
}

export default Strengths;