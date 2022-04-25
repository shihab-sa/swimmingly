import React from 'react'
import {BiSearchAlt }  from 'react-icons/bi'
import './Hero.css'


const Hero=()=>{
    return(
        <div className='hero'>
        <div className='container'>
        <h1>Find The Perfect Swimming Pool</h1>
        <p className='search__text'>We Build Professional-Grade Facilities For Private, Commercial, And Governmental Clients</p>
        <form className='search'>
        <div>
            <input type="text" placeholder='Enter ...'  />
        </div>
        <div className='radio'>
           <input type="radio" checked />
           <label>Buy</label>
           <input type="radio"/>
           <label>Rent</label>
           <button type='submit' className='btn'><BiSearchAlt className="icon"/></button>

        </div>

        </form>

        </div>

        </div>
    )
}

export default Hero
