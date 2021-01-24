import React from "react";




function WeakCard(props) {
  const  pushToStr = () => {
        console.log("Weakness was clicked")
    }
  return (
    <div className="card">
      
      <div className="content">
        
            <button onClick={pushToStr} type='button'>I have mastered this.</button> {props.weaknesses}
          
      </div>
     
    </div>
  );
}

export default WeakCard;