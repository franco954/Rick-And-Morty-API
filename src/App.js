import React, { Component } from 'react';
import './App.css';

// componentes
import CharacterInfo from './components/characterInfo'
import CharacterForm from './components/characterForm'
import Error from './components/error'


class App extends Component {

  state = {
    Items: [],
    response: true,
    error: false,
  }

  obtenerPersonaje = async (e) => {
    e.preventDefault();

    const name = e.target.elements.personaje.value;
    if (name == ''){
      this.setState({error: true})
    }
    if (name) {
      const API_URL = `https://rickandmortyapi.com/api/character/?name=${name}`
      const response = await fetch(API_URL)
      const data = await response.json()
      console.log(response.status)
      if (response.status !== 200){
        this.setState({response: true, error: true})
      }
      else{
        this.setState({
          Items: data.results,
          response: true,
          error: false
        })
      }
    }
  }



  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <CharacterForm obtenerPersonaje={this.obtenerPersonaje} />
          </div>
        </div>
        {
          this.state.error &&
          <Error/>
        }
        {
          this.state.response &&
        <div className="row justify-content-center d-flex flex-wrap mt-3">
              {this.state.Items.map(i => <CharacterInfo datos={i} />)}
        </div>
        }
      </div>
    );
  }
}



export default App;

