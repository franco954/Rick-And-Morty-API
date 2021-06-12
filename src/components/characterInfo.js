


import React from 'react';
import './characterInfo.css'

function characterInfo(props) {

    const { name, status, gender, species, image, episode, location, origin, error } = props

    return (

        <div>

            {
                props.error &&

                <div className="alert alert-danger mt-1">
                    <p>{error}</p>
                </div>
            }

            {
                props.name ?

                    <div className="card card-body mt-1">
                        <div className="card-title">
                            <span>{name}</span>
                        </div>
                        <div className="card-image mx-auto">
                            <img className="img-character" src={image} alt="img-character"></img>
                        </div>
                        <div className="card-content mt-2">
                            <div>
                                <span>Genero:</span> {gender}
                            </div>
                            <div>
                                <span>Especie:</span> {species}
                            </div>
                            <div>
                                <span>Estado:</span> {status}
                            </div>
                            <div>
                                <span>Apariciones:</span> {episode} episodios
                            </div>
                            <div>
                                <span>Ubicacion:</span> {location}
                            </div>
                            <div>
                                <span>Origen:</span> {origin}
                            </div>
                        </div>
                    </div>
                    :
                    <div>

                    </div>
            }

        </div>

    )
}

export default characterInfo;