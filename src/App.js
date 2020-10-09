import React from 'react';
import './App.css';
import CardsContainer from './Components/CardsContainer'
import SearchCharacterForm from './Components/SearchCharacterForm'

class App extends React.Component {
  state = {
    allCharacters: [],
    selectedCharacters: [],
    inputValue: ''
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

  render() {
    const {selectedCharacters} = this.state
    return (
      <div className="App">
        <h1>Dammit Morty</h1>
        < SearchCharacterForm filterCharacters={this.filterCharacters}/>
        < CardsContainer characters={selectedCharacters}/>
      </div>
  );
  }
}

export default App;
