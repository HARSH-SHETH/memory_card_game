import React from "react";

export default function MakeCard(props){
  return(
    <div>
      <img src={props.image} alt={props.image}/> 
    </div>
  )
}
