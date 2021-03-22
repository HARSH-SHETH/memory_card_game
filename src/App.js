import React, { useState, useEffect } from "react";
import './App.css';

import GameHeader from './GameHeader.js';
import GameCards from './GameCards.js';

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(4);
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
      <GameHeader 
        score={score} 
        bestScore={bestScore}
      />
      <GameCards 
        cards={cards} 
        score={score} 
        changeScore={changeScore} 
      />
    </>
  );
}

export default App;
