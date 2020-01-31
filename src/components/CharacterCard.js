import React from "react";

export default function CharacterCard(props) {

  console.log(props.chars)
  return (
    <div>
    <h1>{props.chars.name}</h1>
    <img src={props.chars.image}/>
    <p>{props.chars.status}</p>
    <p>{props.chars.species}</p>

  <span>todo: character</span>
  </div>
  )
}
