import React from "react";

export default function Inform(props){
  return(
    <div className="loading">
      <h1>{props.msg}{props.level}</h1>
    </div>
  )
}
