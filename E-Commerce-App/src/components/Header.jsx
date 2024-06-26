import React, { useState } from 'react'
import  '../css/Header.css'
import { FaMoon, FaShoppingBasket } from 'react-icons/fa'
import { MdLightMode } from 'react-icons/md'

const Header = () => {

  const [theme, setTheme] = useState(false)

  const changeTheme = () => {
    const root = document.getElementById('root')
    setTheme(!theme)

    if(theme) {
      root.style.backgroundColor = 'black';
      root.style.color = '#fff'
    }else{
      root.style.backgroundColor = '#fff';
      root.style.color = 'black'
    }
  }

  return (
    <div className='header'>
      <div className="flex-row">
        <img className="logo" src="./src/images/logo.png"/>
        <p className="logo-text">Lion City</p>
      </div>

      <div className="flex-row">
        <input className="header-search" type="text" placeholder="Search" />

        <div >
        {
          theme ? <FaMoon onClick={changeTheme} className='icon'/> :<MdLightMode onClick={changeTheme} className='icon'/> 
        }
        <FaShoppingBasket className='icon'/>
        </div>

      </div>
    </div>
  )
}

export default Header