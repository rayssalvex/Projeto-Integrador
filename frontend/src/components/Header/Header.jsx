import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2600,
    };
  
    const handleBannerClick = (anchor) => {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

   return (
      <div className='header'>
         <div className='header-contents'>
            <h2>Explore e encontre seu<br></br><span className='header-highlight'>próximo livro favorito</span></h2>
            <p>"Um leitor vive mil vidas antes de morrer. O homem que nunca lê vive apenas uma."</p>
            <a href='#explore-menu'><h4>Explorar</h4></a>
         </div>
         <div className="carousel-container">
      <Slider {...settings}>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.header1} alt="Promoção 1" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.header2} alt="Promoção 2" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.header3} alt="Promoção 3" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.header4} alt="Promoção 4" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.header5} alt="Promoção 5" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.header6} alt="Promoção 6" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.header7} alt="Promoção 7" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.header8} alt="Promoção 8" className="carousel-banner" />
        </div>
      </Slider>
    </div>
         </div>
   );
};

export default Header;