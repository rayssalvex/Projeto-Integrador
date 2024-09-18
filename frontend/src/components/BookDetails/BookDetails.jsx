// src/components/BookDetails/BookDetails.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();  // Pega o ID da URL
  const [book, setBook] = useState(null);  // Estado para guardar os detalhes do livro
  const { addToCart, url, currency } = useContext(StoreContext);  // Pega funções do contexto

  useEffect(() => {
    // Faz a requisição para buscar os detalhes do livro pelo ID
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${url}/api/book/get/${id}`);
        const data = await response.json();
        if (data.success) {
          setBook(data.data);  // Guarda os detalhes do livro
        }
      } catch (error) {
        console.error("Erro ao buscar os detalhes do livro:", error);
      }
    };

    fetchBookDetails();  // Chama a função assim que o componente for montado
  }, [id, url]);

  // Se ainda não carregou os dados, exibe uma mensagem de carregamento
  if (!book) return <p>Carregando...</p>;

  return (
    <div className="book-details">
    <img src={`${url}/images/${book.image}`} alt={book.name} className="book-details-image" />
      <div className="book-details-info">
        <h2>Livro: {book.name} <br/>Autor: {book.author} <br/>{book.page} páginas</h2>
        <p>{book.description}</p>
        <p className="book-details-price">{currency}{book.price.toFixed(2).replace('.', ',')}</p>
        <button onClick={() => addToCart(book._id)} className="add-to-cart-button">
            Adicionar ao carrinho
          </button>
          
        {/* <div className='favorite-icon' onClick={() => isFavorited ? removeFromFavorites(id) : addToFavorites(id)}>
          <img src={isFavorited ? assets.heart_filled_icon : assets.heart_outline_icon} alt="Favoritar" />
        </div> */}
      </div>
    </div>
  );
};

export default BookDetails;
