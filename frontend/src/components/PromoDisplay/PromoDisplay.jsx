import React, { useContext, useState } from 'react';
import './PromoDisplay.css';
import BookItem from '../BookItem/BookItem';
import { StoreContext } from '../../Context/StoreContext';

const PromoDisplay = () => {
  const { book_list } = useContext(StoreContext);

  // Estado local para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState('');

  // Função para atualizar o termo de busca quando o usuário digita no campo de busca
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtra a lista de livros para incluir apenas aqueles com promoção ativa
  const promoList = book_list.filter((item) => item.promotion === true);

  // Filtra a lista de livros com base na promoção, no termo de busca e no status
  const filteredBookList = promoList.filter((item) => {
    // Verifica se o item corresponde ao termo de busca no nome ou na descrição
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Retorna verdadeiro se o item corresponder ao termo de busca e se o status do item for verdadeiro
    return matchesSearch && item.status === true;
  });

  return (
    <div className='promo-display' id='promo-display'>
      <div className='promo-display-header'>
        <h2>Livros em promoção hoje</h2>
        <input
          type='text'
          placeholder='Pesquisar...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='book-search-input'
        />
      </div>
      <div className='promo-display-list'>
        {/* Mapeando a lista de livros filtrada para exibir os itens */}
        {filteredBookList.map((item) => (
          <BookItem
            key={item._id}
            image={item.image}
            name={item.name}
            desc={item.description}
            price={item.price}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoDisplay;
