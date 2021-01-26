import React, { useContext } from "react";
import UserContext from "../../../Store/UserContext";


const allSkills = ["API", "AJAX", "CSS", "HTML", "Java", "Javascript", "JQuery", "MySQL", "MongoDB", "NodeJS", "Python", "React", "Sequelize"];
const newOps = [];
const Improvements = () => {

  const { skill } = useContext(UserContext)

  for (var i = 0; i < skill.length; i++) {
    for (var j = 0; j < allSkills.length; j++){

      if (!allSkills[j].includes(skill[i])) {
        
        newOps.push(allSkills[j])
      }
  }
  }
  let counts = newOps.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  let maxCount = Math.max(...Object.values(counts));
  let mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);
  
  




  return (
    <>
      <h5 className="text-center caveat">Improvement Opportunities</h5>
      <ul>
        {mostFrequent.map((specificSkill, i) => <li key={i}>{specificSkill}</li>)}


      </ul>
    </>

  );
}

export default Improvements;