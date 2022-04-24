import React from 'react'
import './Navbar.css'
import {FaSwimmingPool } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar=()=>{
    return(
        <div className='navbar_section'>
          <div className='container'>
             <h2><span>swi<FaSwimmingPool/>ingly</span></h2>
             <ul className='nav__menu'> 
               <li>
                   <a href='#'>Home</a>
               </li>
               <li>
                   <a href='#'>Home</a>
               </li>
               <li>
                   <a href='#'>Home</a>
               </li>
               <li>
                   <a href='#'>Home</a>
               </li>

             </ul>
             <div className='namburger'>
                    <GiHamburgerMenu/>
             </div>

          </div>

        </div>
    )
}

export default Navbar