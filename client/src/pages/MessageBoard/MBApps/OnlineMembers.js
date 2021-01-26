import React from "react";


function OnlineMembers({ onlineUsers }) {
    return (
        <>
            {/* <h5 className="text-center caveat"></h5>
            <div className="grid-container chat">
                <div className="grid-x grid-padding-x"> */}
            <div className="card online-members">
                <h4 className="card-divider online caveat">Online Members</h4>
                <ul className="">

                    {onlineUsers.map(user =>
                    (
                        <li className="header"> {user} </li>
                    )
                    )
                    }

                </ul>
            </div>
        </>

    );
}

export default OnlineMembers;