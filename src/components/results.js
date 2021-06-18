
import React from 'react';


export default function results(props){

    const resultados = (props.resultados).length

    return(
        <div className="col-12 col-md-6 mx-auto">
            <div className="alert alert-info mt-1 text-center" role="alert">
                {resultados} resultados
            </div>
        </div>
    )

}