



import React from 'react';
import '../styles/form.css'
import  Presentacion from '../resources/presentacion.jpg'


function CharacterForm(props) {


    return (
        <div className="card card-body">
            <div className="card-logo">
                <img className="rounded mx-auto d-block mb-3" width="135px" src={Presentacion} alt="rick and morty logo"></img>
            </div>
            <form onSubmit={props.obtenerPersonaje}>
                <div className="form-group mt-4">
                    <input type="text" name="personaje" className="form-control" autoFocus autoComplete="off"/>
                    <div class="d-grid gap-2 col-4 mx-auto mt-3">
                        <button class="btn btn-primary" type="submit">Obtener Personaje</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CharacterForm;