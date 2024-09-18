import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo_icon} alt="" />
      <h4 className='texto'>Painel de Administrador E-Bookstore</h4>
      <img className='profile' src={assets.avatar_icon} alt="" />
    </div>
  )
}

export default Navbar
