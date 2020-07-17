import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export const FilterWeather = ({handleClickButtonSort}) =>{
    return(
        <div className="container pt-4 d-flex justify-content-center">
            <button name="ISPUD93Or8" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons">South America</button>
            <button name="vZNZcahFvu" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons">North America</button>
            <button name="28HX8qDZHw" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons">Europa</button>
            <button name="X2rEcTJnsE" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons">Africa</button>
            <button name="mSxk54vkg6" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons">Asia</button>
            <button name="E6LHZzkHr6" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons">Oceania</button>
            <button name="xwS5b1G6tn" onClick={handleClickButtonSort} className="btn mr-3 btn-dark buttons">Antartica</button>
        </div>
    )
}