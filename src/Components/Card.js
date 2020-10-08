import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.character.image} alt="" />
      <h3>{props.character.name}</h3>
    </div>
  )
}