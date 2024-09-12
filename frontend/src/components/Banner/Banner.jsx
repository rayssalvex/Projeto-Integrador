import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import './Banner.css'; // Adicione estilos específicos se necessário
import { assets } from '../../assets/assets';

const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleBannerClick = (anchor) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.banner1} alt="Promoção 1" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.banner2} alt="Promoção 2" className="carousel-banner" />
        </div>
        <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.banner3} alt="Promoção 3" className="carousel-banner" />
        </div>
        {/* <div onClick={() => handleBannerClick('#explore-menu')}>
          <img src={assets.banner4} alt="Promoção 4" className="carousel-banner" />
        </div> */}
      </Slider>
    </div>
  );
};

export default Banner;
