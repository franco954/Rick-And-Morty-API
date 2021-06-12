import React, { Component } from 'react';
import './App.css';

// componentes
import CharacterInfo from './components/characterInfo'
import CharacterForm from './components/characterForm'


class App extends Component{

  state = {
    name: '',
    status: '',
    gender: '',
    species: '',
    image: '',
    location: '',
    origin: '',
    error: null
  }

  obtenerPersonaje = async (e) =>{
    e.preventDefault();
    
    const pos = 0
    const name = e.target.elements.personaje.value;

    if (name){
      const API_URL = `https://rickandmortyapi.com/api/character/?name=${name}`
      const response = await fetch(API_URL)
      const data = await response.json()
      console.log(data)

      this.setState({
        name: data.results[pos].name,
        status: data.results[pos].status,
        gender: data.results[pos].gender,
        species: data.results[pos].species,
        image: data.results[pos].image,
        location: data.results[pos].location.name,
        origin: data.results[pos].origin.name,
        error: null
      })
    }
    else{
      this.setState({
        error: 'Introduzca un personaje valido'
      })
      console.log(this.state)
    }

  }

  render(){
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
              <CharacterForm obtenerPersonaje={this.obtenerPersonaje}/>
              <CharacterInfo {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}



export default App;

