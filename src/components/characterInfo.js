


import React from 'react';
import './characterInfo.css'

function characterInfo(props) {

    console.log(props.datos.name)
    
    return (

        <div className="col-12 col-lg-4 col-md-6">

            <div className="card card-body mt-2">
                <div className="card-title">
                    <span>{props.datos.name}</span>
                </div>
                <div className="card-image mx-auto">
                    <img className="img-character img-fluid" src={props.datos.image} alt="img-character"></img>
                </div>
                <div className="card-content mt-2">
                    <div>
                        <span>Genero:</span> {props.datos.gender}
                    </div>
                    <div>
                        <span>Especie:</span> {props.datos.species}
                    </div>
                    <div>
                        <span>Estado:</span> {props.datos.status}
                    </div>
                    <div>
                        <span>Apariciones:</span> {Object.keys(props.datos.episode).length} episodios
                    </div>
                    <div>
                        <span>Ubicacion:</span> {props.datos.location.name}
                    </div>
                    <div>
                        <span>Origen:</span> {props.datos.origin.name}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default characterInfo;