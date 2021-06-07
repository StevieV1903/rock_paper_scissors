import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerOne from './PlayerOne.js';
import PlayerTwo from './PlayerTwo.js';

import rock from "./assets/rock.svg";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.svg";

const GameContainer = () => {

  const weapons = [ "rock", "paper", "scissors" ]

  const [ playerOneWeapon, setPlayerOneWeapon ] = useState( [] )
  const [ playerTwoWeapon, setPlayerTwoWeapon ] = useState( [] )
  const [ gameWinner, setGameWinner ] = useState( "" ) 
  const [ playerOneScore, setPlayerOneScore ] = useState( 0 )
  const [ playerTwoScore, setPlayerTwoScore ] = useState( 0 )
  const [ startButtonDisplayed, setStartButtonDisplayed ] = useState( false )
  const [ weaponsButtonsDisplayed, setWeaponsButtonsDisplayed ] = useState( true )
  const [ showWeaponTwo, setShowWeaponTwo ] = useState( false )

  useEffect(()=> {
    if( playerOneWeapon.length > 0) {
    announceWinner( ) }
  }, [playerTwoWeapon])
  //whenever playerTwoWeapon changes, the UseEffect will run announceWinner() and will also run when page reloads.

  const getPlayerOneWeapon = ( weapon ) => {
    setPlayerOneWeapon( weapon )
    setGameWinner( "" )
    setStartButtonDisplayed( true )
    setWeaponsButtonsDisplayed( false )  
  };

  // const getPlayerTwoWeapon = () => {
  //       setTimeout(() => { 
  //         setShowWeaponTwo( true )
  //       setPlayerTwoWeapon( weapons[Math.floor( Math.random() * weapons.length )])
  //       announceWinner()
  //       setStartButtonDisplayed( false ) 
  //     }, 750)
  // };

  const getPlayerTwoWeapon = () => {
    let count = 0
    let gameInterval = setInterval(() => {
      count ++
      setShowWeaponTwo( true )
      setPlayerTwoWeapon( weapons[Math.floor( Math.random() * weapons.length )])
      setStartButtonDisplayed( false ) 
      if( count > 5 ){
        clearInterval( gameInterval )
        announceWinner()
      }
    }, 100)
    

  };

//   const getPlayerTwoWeapon = () => {
//       setShowWeaponTwo( true )
//     setPlayerTwoWeapon( weapons[Math.floor( Math.random() * weapons.length )])
//     announceWinner()
//     setStartButtonDisplayed( false ) 
// };

  const announceWinner = () => {
    if( playerOneWeapon === playerTwoWeapon ) 
    {
      setGameWinner( "This round is a draw" )
    } 
    else if (( playerOneWeapon === "rock" && playerTwoWeapon === "scissors" ) || ( playerOneWeapon === "scissors" && playerTwoWeapon === "paper") || (playerOneWeapon === "paper" && playerTwoWeapon === "rock" ))
    {
      setGameWinner( "YOU won this round" )
    } else 
    {
      setGameWinner( "Computer won this round" )
    }
  };
  

  const handleContinueGame = () => {
    setPlayerTwoWeapon( [] )
    setPlayerOneWeapon( [] )
    setGameWinner( "" )
    getPlayerScore()
    setWeaponsButtonsDisplayed( true )
  };

  const getPlayerScore = () => {
    if( gameWinner === "YOU won this round" ){
      setPlayerOneScore(playerOneScore + 1)
    } else if ( gameWinner === "Computer won this round" ) {
      setPlayerTwoScore(playerTwoScore + 1)
    } else {
      setPlayerOneScore(playerOneScore)
      setPlayerTwoScore(playerTwoScore)
    }
  };

  const handleResetScores = () => {
    setPlayerOneScore( 0 )
    setPlayerTwoScore( 0 )
  }

  return (
    <>
      <div className="App">
        <h1 className="game-title-text">Rock, Paper, Scissors...</h1>
        <div className="score-container">
        <h2>PLAYER Score: {playerOneScore}</h2>
        <h2>Computer Score: {playerTwoScore}</h2>
        </div>
        { playerOneWeapon.length === 0 && (playerOneScore > 0 || playerTwoScore > 0) ? <button className="start-button" onClick={ ()=> handleResetScores()} >Reset Scores</button> : null } 
        { playerOneWeapon.length === 0 ? <h2 className="game-intro-text">Please select your weapon.</h2> : null}
          <div className="player-container">
            <PlayerOne 
            playerOneWeapon={ playerOneWeapon } 
            setPlayerOneWeapon={ setPlayerOneWeapon }
            />
            <PlayerTwo
            playerTwoWeapon={ playerTwoWeapon }
            setPlayerTwoWeapon={ setPlayerTwoWeapon }
            />
          </div>
              <div>
              <h2 className="game-result-text"> { gameWinner.toUpperCase() } </h2>

              </div>
                  <div>
                    { weaponsButtonsDisplayed ? <img src={rock} alt="rock" className="weapon-button" onClick={ ()=> getPlayerOneWeapon( "rock" ) }></img> : null}
                    { weaponsButtonsDisplayed ? <img src={paper} alt="paper" className="weapon-button" onClick={ ()=> getPlayerOneWeapon( "paper" ) }></img> : null}
                    { weaponsButtonsDisplayed ? <img src={scissors} alt="scissors" className="weapon-button" onClick={ ()=> getPlayerOneWeapon( "scissors" ) }></img> : null}
                        <div>
                        { startButtonDisplayed ? <button className="start-button" onClick={ ()=> getPlayerTwoWeapon()} >Click to reveal Computer's Weapon</button> : null}
                        { gameWinner.length ? <button className="start-button" onClick={ ()=> handleContinueGame()} >Continue Game</button> : null}
                        </div>
                  </div>
      </div>
    </>
  );
}

export default GameContainer;
