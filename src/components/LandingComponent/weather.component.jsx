import React from 'react'
import './index.css'

export const Weather = ({city, country, temp, temp_max, temp_min, description}) =>{

    const minMax = (min, max) => {
        return(
            <>
                <span>{min}&deg; | </span>
                <span>{max}&deg;</span>
            </>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{city}, {country}</h1>
                    <h3>{temp}&deg;</h3>
                    <i className="wi wi-night-sleet mt-4"></i>
                    <h4 className="mt-4">{minMax(temp_min, temp_max)}</h4>
                    <h4 className="mt-4">{description}</h4>
                </div>
            </div>
        </div>
    )
}

