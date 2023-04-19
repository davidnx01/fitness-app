import React from 'react'
import "./logo.css"
import logo from "../../../src/assets/logo.svg";

const Logo = () => {
  return (
    <div className='logo'>
      <img 
        src={logo} 
        alt="Logo"
        title='Logo' 
      />
      <div className='logo_typography'>
        <p>
          FITNESS<br></br>
          <span>PORTFOLIO</span>
        </p>
      </div>
    </div>
  )
}

export default Logo