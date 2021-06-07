import React from "react";

import rock from "./assets/rock.svg";
import paper from "./assets/paper.svg";
import scissors from "./assets/scissors.svg";

const PlayerTwo = ({ 
    playerTwoWeapon
}) => {

    return(
        <>
        <div>
        {playerTwoWeapon.length > 0 && <img src={
            playerTwoWeapon === "rock" ? rock : playerTwoWeapon === "scissors" ? scissors : playerTwoWeapon === "paper" ? paper : null } 
            alt="rock paper scissors">
            </img>}
            {playerTwoWeapon.length > 0 && <h2 className="player-selected-text">COMPUTER selected { playerTwoWeapon }</h2>}
        </div>
        </>
    )
};

export default PlayerTwo;