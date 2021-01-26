import React, { useContext } from "react";
import UserContext from "../../../Store/UserContext";




const Strengths = () => {
  const {skill} = useContext(UserContext)

    return (
      <>
      <h5 className="text-center caveat">Strengths</h5>
        <ul>
        {skill.map((specificSkill, i) => <li key={i}>{specificSkill}</li>)}
        

        </ul>
       </>
  );
}

export default Strengths;