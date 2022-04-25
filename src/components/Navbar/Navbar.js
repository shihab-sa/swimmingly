import React, { useState } from 'react'
import './Navbar.css'
import {FaSwimmingPool } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineCloseCircle} from 'react-icons/ai'


const Navbar=()=>{

    const [click,setClick] = useState(false)
    const handleClick=()=>setClick(!click)
    return(
        <div className='navbar_section'>
          <div className='container'>
             <h2><span>swi<FaSwimmingPool/>ingly</span></h2>

             <ul className={click?'nav__menu active':'nav__menu'}> 
               <li>
                   <a href='#'>Home</a>
               </li>
               <li>
                   <a href='#'>About</a>
               </li>
               <li>
                   <a href='#'>Menu</a>
               </li>
               <li>
                   <a href='#'>Contact</a>
               </li>

               <button className='btn'>Sign-In</button>

             </ul>
             <div className='namburger' onClick={handleClick}>
                   {click? (<AiOutlineCloseCircle className='icon'/>):(<GiHamburgerMenu className='icon'/>)}
             </div>

          </div>

        </div>
    )
}

export default Navbar