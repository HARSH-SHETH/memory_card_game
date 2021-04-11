import React, { useState, useEffect } from "react";
import './App.css';

import GameHeader from './GameHeader.js';
import GameCards from './GameCards.js';

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(4);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if(score === cards){
      resetScore();
    }
  }, [score]); 

  const changeScore = () => {
    if(score < cards){
      setScore(score + 1);
    }
    else{
      resetScore();
    }
  }

  const resetScore = () => {
    if(bestScore < score){
      setBestScore(score);
      if(score === cards){
        setLevel(level + 1);
        setCards(cards + 4);
      }
    }    
    setScore(0);
  }

  const resetGame = () => {
    setScore(0);
    setBestScore(0);
    setLevel(1);
    setCards(4);
  }

  return (
    <>
      <GameHeader 
        score={score} 
        bestScore={bestScore}
        level={level}
        resetGame={resetGame}
      />
      <GameCards 
        cards={cards} 
        score={score} 
        changeScore={changeScore} 
        bestScore={bestScore}
        resetScore={resetScore}
        level={level}
      />
    </>
  );
}

export default App;
