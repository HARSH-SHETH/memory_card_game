import React, { useState, useEffect } from "react";
import './App.css';

import GameHeader from "./GameHeader.js";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const changeScore = () => {
    if(score < 8)
      setScore(score+1);
    else{
      if(bestScore < score){
        setBestScore(score);
      }
      setScore(0);
    }
  }
  return (
    <>
      <GameHeader score={score} bestScore={bestScore}/>
    </>
  );
}

export default App;
