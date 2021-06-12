


import React from 'react';
import './characterInfo.css'

function characterInfo(props) {

    const { name, status, gender, species, image, location, origin, error } = props

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
                                <span>Gender:</span> {gender}
                            </div>
                            <div>
                                <span>Species:</span> {species}
                            </div>
                            <div>
                                <span>Status:</span> {status}
                            </div>
                            <div>
                                <span>Location:</span> {location}
                            </div>
                            <div>
                                <span>Origin:</span> {origin}
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