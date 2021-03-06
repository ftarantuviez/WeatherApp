import React from 'react'
import './index.css'

export const Weather = ({city, country, temp, temp_max, temp_min, description, icon}) =>{

    const minMax = (min, max) => {
        return(
            <>
                <span>{min}&deg; | </span>
                <span>{max}&deg;</span>
            </>
        )
    }

    const URL_ICON = `http://openweathermap.org/img/wn/${icon}@2x.png`

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{city}, {country}</h1>
                    <h3>{temp}&deg;</h3>
                    <i className="mt-4"> <img src={URL_ICON} alt=""/> </i>
                    <h4 className="mt-4">{minMax(temp_min, temp_max)}</h4>
                    <h4 className="mt-4">{description}</h4>
                </div>
            </div>
        </div>
    )
}

