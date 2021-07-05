import React, { Component } from 'react';

// componentes
import CharacterInfo from '../components/card-personaje'
import CharacterForm from '../components/form-personaje'
import Error from '../components/pop-error'
import Results from '../components/pop-resultados'


export default class Inicio extends Component {

  state = {
    Items: [],
    response: false,
    error: false,
    results: false,
  }

  obtenerPersonaje = async (e) => {
    e.preventDefault();

    const name = e.target.elements.personaje.value;
    if (name == '') {
      this.setState({ error: true, results: false })
    }
    if (name) {
      const API_URL = `https://rickandmortyapi.com/api/character/?name=${name}`
      const response = await fetch(API_URL)
      const data = await response.json()
      console.log(response.status)
      if (response.status !== 200) {
        this.setState({ response: true, error: true, results: false })
      }
      else {
        this.setState({
          Items: data.results,
          response: true,
          error: false,
          results: true
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
          <Error />
        }
        {
          this.state.results &&
          <Results resultados={this.state.Items}/>
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


