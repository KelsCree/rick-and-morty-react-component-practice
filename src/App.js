import React from 'react';
import './App.css';
import CardsContainer from './Components/CardsContainer'

class App extends React.Component {
  state = {
    characters: []
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then( data => this.setState({ characters: data.results }) )
  }
  render() {
    return (
      <div className="App">
        <h1>Rick and Morty App</h1>
        < CardsContainer characters={this.state.characters}/>
      </div>
  );
  }
}

export default App;
