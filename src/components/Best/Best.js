import React from 'react'
import './Best.css'

const Best=()=>{
    return(
        <div className='best'>
        <h1>Find The Best Swmming Pool</h1>
        <div>
            <p> <span className='bold'>All</span>  </p>
            <p>Commercial</p>
            <p>Resendential</p>
            <p>Agricultural</p>
        </div>
        <div className='container'>
        <img src='https://images.unsplash.com/photo-1602075432748-82d264e2b463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjB3aXRoJTIwcG9vbHxlbnwwfHwwfHw%3D&w=1000&q=80' alt=''/>
        <img src='https://images.adsttc.com/media/images/6114/cd22/c158/ab01/650a/2683/newsletter/pinkhouse-photos-01.jpg?1628753243' alt=''/>
        <img src='https://cooganslandscape.com/wp-content/uploads/2019/04/pic_pool-house-design-01.jpg' alt=''/>
        
        </div>
        <button className='btn'>View All</button>
        
            
        </div>
    )
}

export default Best