import React from "react";

export default function GameHeader(props){
  return(
    <main className="gameheader">
      <h1>Naruto Memory Cards</h1>
      <span>Score: {props.score}</span>
      <span>BestScore: {props.bestScore}</span>
    </main>
  )
}
