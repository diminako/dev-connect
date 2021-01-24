import React from "react";


function StrengthsCard(props) {
  const pushToWeak = () => {
    console.log("Strength was clicked")
  }
  return (
    <div className="card">
      
      <div className="content">
        
            <button onClick={pushToWeak} type='button'>I need more help on this.</button> {props.strengths}
          
      </div>
     
    </div>
  );
}

export default StrengthsCard;