import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
          <img src="#" alt="" />
      </div>
      <div className="header-menu">
        <li>HOME</li>
        <li>SERVICE</li>
        <li>BIO</li>
        <li>CONTACT</li>
      </div>

    </div>
  )
}

export default Header