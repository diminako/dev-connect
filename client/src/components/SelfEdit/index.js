import React, {useState, useContext, useEffect } from "react";
import UserContext from "../../Store/UserContext";
import { Redirect } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";


const allSkills = ["API", "AJAX", "CSS", "HTML", "Java", "Javascript", "JQuery", "MySQL", "MongoDB", "NodeJS", "Python", "React", "Sequelize"];
const newOps = [];

const SelfEdit = () => {

  const [registerSkill, setRegisterSkill] = useState([]);
  const [mostFrequent, setMostFrequent] = useState([])
  const { username, skill, setSkills } = useContext(UserContext);


  const history = useHistory();

  const register = (event) => {
    event.preventDefault();
    console.log("skills were changed");
    axios.put("/api/selfedit",{
        skill: registerSkill})
        .then((res) => {
      console.log(res);
      setSkills(registerSkill)
      history.push("/message");
    })

  };

  let fullSkillsList = allSkills
  useEffect(()=>{
    const unskilledArray = fullSkillsList.filter(singleSkill => skill.includes(singleSkill))
    setMostFrequent(unskilledArray)
  },[skill])

  // for (var i = 0; i < skill.length; i++) {
  //   for (var j = 0; j < allSkills.length; j++) {

  //     if (!allSkills[j].includes(skill[i])) {

  //       newOps.push(allSkills[j])
  //     }
  //   }
  // }
  // let counts = newOps.reduce((a, c) => {
  //   a[c] = (a[c] || 0) + 1;
  //   return a;
  // }, {});
  // let maxCount = Math.max(...Object.values(counts));
  // let mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);

  
  const handleMultiSelect = e => {
    const options = e.target.options;
    const selectedArray = []

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedArray.push(options[i].value);
      }

    }
    setRegisterSkill(selectedArray)
  }

  return (
    username ? (

      <div>
        <h1>Edit Skills</h1>

        <>
          <h5 className="text-center caveat">Strengths</h5>
          <ul>
            {skill.map(specificSkill => <li> {specificSkill} </li>)}


          </ul>
        </>
        
        <form onSubmit={register}>
          <div className="grid-x">
            <div className="small-3 cell"></div>
            <div className="small-6 cell">
              <label>
                <h4 className="header"><span>Select Your Skills</span></h4><h5 className="header"><span> (Multiple Select Menu)</span></h5>
              </label>
              <label className="caveat"><h5>
                <select onChange={handleMultiSelect} multiple>
                  <option id="skillAPI" value="API">API</option>
                  <option id="skillAJAX" value="AJAX">AJAX</option>
                  <option id="skillCSS" value="CSS">CSS</option>
                  <option id="skillHTML" value="HTML">HTML</option>
                  <option id="skillJava" value="Java">Java</option>
                  <option id="skillJavaScript" value="Javascript">Javascript</option>
                  <option id="skillJQuery" value="JQuery">JQuery</option>
                  <option id="skillMySQL" value="MySQL">MySQL</option>
                  <option id="skillMongoDB" value="MongoDB">MongoDB</option>
                  <option id="skillNodeJS" value="NodeJS">NodeJS</option>
                  <option id="skillPython" value="Python">Python</option>
                  <option id="skillReact" value="React">React</option>
                  <option id="skillSequelize" value="Sequelize">Sequelize</option>
                </select></h5>
              </label>
            </div>
          </div>
          <div className="small-8 cell">
            <button className="button large hover" type='submit' >Submit</button>
          </div>
   </form>
      </div>
    )

      : <Redirect to="/" />
  );
}


export default SelfEdit;


