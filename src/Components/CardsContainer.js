import React from 'react'
import Card from './Card'

export default function CardsContainer({characters}) {
  return (
    characters.map(character => <Card character={character}/>)
  )
}