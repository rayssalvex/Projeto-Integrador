import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
  <nav>
    <h6 className="footer-title">Empresa</h6>
    <a href='#'className="link link-hover">Sobre</a>
    <a href='/contato'className="link link-hover">Contato</a>
    <a href='#'className="link link-hover">Trabalhos</a>
    <a href='#'className="link link-hover">FAQ</a>
  </nav>
  <nav>
    <h6 className="footer-title">Navegação</h6>
    <a href='/'className="link link-hover">Home</a>
    <a href='#explore-menu'className="link link-hover">Livros</a>
    <a href='#promo-display'className="link link-hover">Promoções</a>
    <a href='/swap'className="link link-hover">Trocas</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a href='#'className="link link-hover">Termos de uso</a>
    <a href='#'className="link link-hover">Política de privacidade</a>
    <a href='#'className="link link-hover">Política de Cookies</a>
  </nav>

      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">@2024 E-BookStore - Projeto Integrador Rio Pomba Valley - Todos os direitos reservados.</p>
        <div className="footer-social-icons">
          <a href="https://www.linkedin.com/in/rayssa-santos-alves/" target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin_logo} alt="LinkedIn Logo" className="social-icon" />
          </a>
          <a href="https://github.com/rayssalvex" target="_blank" rel="noopener noreferrer">
            <img src={assets.github_logo} alt="GitHub Logo" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/rayssalvex/" target="_blank" rel="noopener noreferrer">
            <img src={assets.instagram_logo} alt="Instagram Logo" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
