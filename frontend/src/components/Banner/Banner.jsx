import React from 'react';
import { assets } from '../../assets/assets';
import './Banner.css'; // Opcional: Se quiser separar o CSS

const Banner = () => {
  return (
    <div className="banner-container">
      <a href="https://bookside-sarah9235s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src={assets.parceria} alt="Banner" className="banner-image" />
      </a>
    </div>
  );
};

export default Banner;
