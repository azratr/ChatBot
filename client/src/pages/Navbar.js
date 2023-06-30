import React from 'react'
import '../styles/styles.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-up'>
        <NavLink to={'/'} 
        style={{float:"right",paddingRight:"70px",marginTop:"25px",textDecoration:"none",fontSize:"25px",fontWeight:"600",fontFamily:"sans-serif",color:"Highlight",cursor:"pointer"}
        }>Log out</NavLink>
    
    </div>
  )
}

export default Navbar