import React from 'react'
import Card from './Card'

export default function Favorites({ favorites, clickAction}) {

  const showCharacters = () => favorites.map(character => <Card clickAction={clickAction} character={character}/>)

  return (
    <ul className="favorites-list">
      <h1>My Favorites</h1>
      {showCharacters()}
    </ul>
  )

}