import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export const FilterWeather = ({handleClickButtonSort}) =>{
    return(
        <div className="container pt-4 d-flex justify-content-center">
            <button id="South America" name="ISPUD93Or8" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons">South America</button>
            <button name="vZNZcahFvu" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons" id="North America">North America</button>
            <button name="28HX8qDZHw" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons" id="Europa">Europa</button>
            <button name="X2rEcTJnsE" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons" id="Africa">Africa</button>
            <button name="mSxk54vkg6" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons" id="Asia">Asia</button>
            <button name="E6LHZzkHr6" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons" id="Oceania">Oceania</button>
            <button name="xwS5b1G6tn" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons" id="Antartica">Antartica</button>
        </div>
    )
}