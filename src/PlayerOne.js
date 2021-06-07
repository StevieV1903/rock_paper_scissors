import React from "react";

import rock from "./assets/rock.svg";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.svg";

const PlayerOne = ({ 
    playerOneWeapon
}) => {

    return(
        <>
        <div>
        {playerOneWeapon.length > 0 && <img src={
            playerOneWeapon === "rock" ? rock : playerOneWeapon === "scissors" ? scissors : playerOneWeapon === "paper" ? paper : null } 
            alt="rock paper scissors">
            </img>}
            {playerOneWeapon.length > 0 && <h2 className="player-selected-text">YOU selected { playerOneWeapon }</h2>}
        </div>
        </>

    )
};

export default PlayerOne;