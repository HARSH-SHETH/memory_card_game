import React, { useState } from "react";
import './App.css';

import GameHeader from './GameHeader.js';
import GameCards from './GameCards.js';

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(4);
  const [bestScore, setBestScore] = useState(0);

  const changeScore = () => {
    if(score < cards)
      setScore(score+1);
    else{
      resetScore();
    }
  }

  const resetScore = () => {
    if(bestScore < score){
      setBestScore(score);
      if(score === cards)
        setCards(cards + 4);
    }    
    setScore(0);
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
        bestScore={bestScore}
        resetScore={resetScore}
      />
    </>
  );
}

export default App;
