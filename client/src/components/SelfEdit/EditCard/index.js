import React from "react";
import StrengthsCard from "./StrengthsCard";
import WeakCard from "./WeakCard";

function EditCard(props) {
  return (
    <div className="card">
      <div className="content">
        <p>
          <strong>Name:</strong> {props.firstName + " " + props.lastName}
        </p>
        <h1>Strengths!</h1>
        <p>
          {props.strengths.map(strength => (
            <StrengthsCard
              strengths={strength}
            />
          ))}
        </p>
        <h1> Weaknesses!</h1>
        <p>
          {props.weaknesses.map(weakness => (
            <WeakCard
              weaknesses={weakness}
            />
          ))}
        </p>
      </div>
    </div>
  );
}

export default EditCard;
