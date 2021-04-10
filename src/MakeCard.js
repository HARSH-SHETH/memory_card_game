import React, { useState, useEffect } from "react";

export default function MakeCard(props){
  let [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if(props.score === 0)
      setIsClicked(false);
  }, [props.bestScore, props.score])

  const handleClickOnImage = () => {
    if(isClicked){
      // reset score 
      props.resetScore();
      console.log(`Game Over for ${props.image}`) ;
    }else{
      props.changeScore();
      setIsClicked(true);
    }
    props.shuffleCards();
  }
  return(
    <div>
    <img 
    onClick={handleClickOnImage}
    src={props.image} 
    alt={props.image}/> 
    </div>
  )
}
