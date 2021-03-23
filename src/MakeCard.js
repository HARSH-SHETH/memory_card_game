import React from "react";

export default function MakeCard(props){
  return(
    <div>
    <img 
    onClick={(e) => props.shuffleCards(e) }
    src={props.image.src} 
    alt={props.image.src}/> 
    </div>
  )
}
