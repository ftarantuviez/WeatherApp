import React from 'react'

import './index.css'
export const Searcher = ({handleChangeCity, handleChangeCountry, handleSubmit}) => {
    return(
        <>
            <div className="container">
                <span className="mr-4"> <input type="text" className="inputSearcher" placeholder="search" onChange={handleChangeCity}/> </span>
                <span className=""> <input type="text" className="inputSearcher" placeholder="search" onChange={handleChangeCountry}/> </span>
                <button onClick={handleSubmit} className='submitButton'>Search</button>
            </div>
        </>
    )
}