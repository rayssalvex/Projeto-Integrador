import React, { useContext, useState } from 'react';
import './BookItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom'; 

const BookItem = ({ image, name, author, desc, status, price, id }) => {
  const { cartItems, addToCart, removeFromCart, url, currency, addFavorite, removeFavorite, getFavorites } = useContext(StoreContext);

  // Verifica se o livro está favoritado
  // const isFavorited = favorites.some(fav => fav._id === id);

  // Função para truncar a descrição
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <div className='book-item'>
      {/* Área da imagem e ícone de favoritos */}
      <div className='book-item-img-container'>
        {/* Exibe a imagem do item do livro */}
        <img className='book-item-image' src={url + "/images/" + image} alt={name} />

        
        {/* <div className='favorite-icon' onClick={() => isFavorited ? removeFromFavorites(id) : addToFavorites(id)}>
          <img src={isFavorited ? assets.heart_filled_icon : assets.heart_outline_icon} alt="Favoritar" />
        </div> */}

        {/* Verifica se o item está no carrinho */}
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Adicionar ao carrinho" />
          : <div className="book-item-counter">
              <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remover do carrinho" />
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Adicionar ao carrinho" />
            </div>
        }
      </div>

      {/* Informações sobre o livro */}
      <div className="book-item-info">
        <div className="book-item-name-rating">
          <p>{name.length > 24 ? name.substring(0, 19) + '...' : name}</p>
        </div>

        <p className="book-item-desc">{truncateDescription(desc, 100)}</p>
        <p>{status}</p>
        <p className="book-item-price">
          {currency}{price.toFixed(2).replace('.', ',')}
        </p>

        {/* Botão para ver mais detalhes */}
        <Link to={`/book/${id}`} className="book-item-details-button">
          Ver mais detalhes
        </Link>
      </div>
    </div>
  );
};

export default BookItem;

