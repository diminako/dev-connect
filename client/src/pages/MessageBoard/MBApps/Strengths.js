import React, { useContext } from "react";
import UserContext from "../../../Store/UserContext";




const Strengths = () => {
  const {skill} = useContext(UserContext)

    return (
      <>
      <h4 className="text-center orange-underline">Strengths</h4>
        <ul>
        {skill.map((specificSkill, i) => <li key={i}>{specificSkill}</li>)}
        

        </ul>
       </>
  );
}

export default Strengths;