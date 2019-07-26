import React from 'react'

export default function CharacterCard (props) {
  return (<span>
    <img src={props.image}/>
    {props.name}
    {props.species}
    {props.status}</span>
  )}
