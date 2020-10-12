import React from 'react';
import './App.css';
import CardsContainer from './Components/CardsContainer'
import SearchCharacterForm from './Components/SearchCharacterForm'
import Favorites from './Components/Favorites.js'

class App extends React.Component {
  state = {
    allCharacters: [],
    selectedCharacters: [],
    inputValue: '',
    favorites: []
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then( data => {
      this.setState({ allCharacters: data.results })
      this.setState({ selectedCharacters: data.results })
    }
  )}

  filterCharacters = (event) => {
    const input = event.target.value
    const filteredCharacters = this.state.allCharacters
      .filter(character => character.name.toLowerCase().includes(input.toLowerCase()))
    this.setState({ selectedCharacters: filteredCharacters })
  }

  removeFavorite = (character) => {
    let favorites = this.state.favorites.filter(favorite => favorite !== character)
    this.setState({ favorites })
  }

  addToFavorites = (character) => {
    let foundCharacter = this.state.favorites.find(favorite => character.id === favorite.id)
    if(!foundCharacter){
      this.setState({
        favorites: [...this.state.favorites, character]
      })
    }
  }

  render() {
    const {selectedCharacters} = this.state
    return (
      <div className="App">
        <h1>Dammit Morty</h1>
        < SearchCharacterForm filterCharacters={this.filterCharacters}/>
        <Favorites clickAction={this.removeFavorite} favorites={this.state.favorites}/>
        < CardsContainer clickAction={this.addToFavorites} characters={selectedCharacters}/>
      </div>
  );
  }
}

export default App;
