import React, { useState } from 'react'
import  '../css/Header.css'
import { FaMoon, FaShoppingBasket } from 'react-icons/fa'
import { MdLightMode } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from '../redux/slices/basketSlice'

const Header = () => {

  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  const {products}= useSelector((store)=> store.basket)
  const dispatch = useDispatch();

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
      <div className="flex-row" onClick={() => navigate('/')}>
        <img className="logo" src="./src/images/logo.png" alt="logo"/>
        <p className="logo-text">Lion City</p>
      </div>

      <div className="flex-row">
        <input className="header-search" type="text" placeholder="Search" />

        <div >
        {
          theme ? <FaMoon onClick={changeTheme} className='icon'/> :<MdLightMode onClick={changeTheme} className='icon'/> 
        }
           <Badge onClick={()=>dispatch(setDrawer())} badgeContent={products.length} color="error">
               <FaShoppingBasket className='icon' style={{marginRight: '7px'}}/> 
           </Badge>
        </div>

      </div>
    </div>
  )
}

export default Header
