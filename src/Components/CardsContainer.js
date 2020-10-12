import React from 'react'
import Card from './Card'

export default function CardsContainer({ characters, clickAction }) {

  return (
    <section id="cards-container">
      {characters.map(character => (<Card character={character} clickAction={clickAction}/>))}
    </section>
    )
}