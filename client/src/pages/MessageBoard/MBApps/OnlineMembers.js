import React from "react";


function OnlineMembers({ onlineUsers }) {
    return (
        <>
            <div className="card online-members">
                <h4 className="card-divider online caveat">Online Members</h4>
                <ul className="">

                    {onlineUsers.map(user =>
                    (
                        <li className="header onlineUsers"> {user} </li>
                    )
                    )
                    }

                </ul>
            </div>
        </>

    );
}

export default OnlineMembers;