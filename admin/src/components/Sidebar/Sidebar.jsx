import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

// Sidebar componente para o display de opções no dashboard de admin. Esse componente é funcional e intuitivo.
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        {/* Navlinks trazem as páginas de Adição de livros, Lista de edição dos livros e controle das compras feitas */}
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Adicionar Livros</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.books_icon} alt="" />
          <p>Livros Cadastrados</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Compras</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
