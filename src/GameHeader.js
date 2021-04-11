import React from "react";

export default function GameHeader(props){
  return(
    <main className="gameheader">
      <h1>Rick and Morty Memory Cards</h1>
    <div>
      <span>Score: {props.score}</span>
      <span>BestScore: {props.bestScore}</span>
      <button onClick={() => {props.resetGame();}}>Restart Game</button>
    </div>
    </main>
  )
}
