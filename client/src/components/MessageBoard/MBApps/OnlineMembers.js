import React from "react";


function OnlineMembers() {
    return (
        <>
            {/* <h5 className="text-center caveat"></h5>
            <div className="grid-container chat">
                <div className="grid-x grid-padding-x"> */}
                        <div className="card online-members">
                        <div className="card-divider online">Online Members</div>
                        {/* <div className="small-1 cell"></div>
                        <div className="small-3 cell">*/}
                            <ul className=""> 
                                <li className="header ">Dimi</li>
                                <li className="header">David</li>
                                <li className="header">Avery</li>
                                <li className="header">Lorena</li>
                                <li className="header">Randy</li>
                               
                               </ul>
                         {/* <div className="small-8 cell"></div> */}
                    {/* </div> */}
                {/* </div>*/}
            </div> 
        </>

    );
}

export default OnlineMembers;