import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

// Componente Navbar com logotipo, nome do painel e imagem do profile do administrador
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo_icon} alt="" />
      <h4 className='texto'>Painel de Administrador HeavenBooks</h4>
      <img className='profile' src={assets.avatar_icon} alt="" />
    </div>
  )
}

export default Navbar
