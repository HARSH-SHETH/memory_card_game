import React, { useState, useEffect } from "react";

export default function MakeCard(props){
  let [isClicked, setIsClicked] = useState(false);

  const handleClickOnImage = () => {
    if(isClicked){
      if(props.score > props.bestscore){
        // reset score 
        // change bestScore
      }
      console.log(`Game Over for ${props.image}`) ;
    }else{
      props.changeScore();
      props.shuffleCards();
      setIsClicked(true);
    }
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
