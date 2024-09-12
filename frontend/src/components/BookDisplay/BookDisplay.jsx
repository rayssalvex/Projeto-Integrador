import React, { useContext, useState } from 'react';
import './BookDisplay.css';
import BookItem from '../BookItem/BookItem';
import { StoreContext } from '../../Context/StoreContext';

// Componente para exibir uma lista de itens de livro filtrados com base na categoria selecionada e no termo de busca.
const BookDisplay = ({ category }) => {
  // Pega a lista de livro do contexto
  const { book_list } = useContext(StoreContext);
  
  // Estado local para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState('');

  // Função para atualizar o termo de busca quando o usuário digita no campo de busca
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtra a lista de livro com base na categoria selecionada, termo de busca e status do item
  const filteredBookList = book_list.filter((item) => {
    // Verifica se o item pertence à categoria selecionada ou se a categoria é "All"
    const matchesCategory = category === "All" || category === item.category;
    
    // Verifica se o item corresponde ao termo de busca no nome ou na descrição
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Retorna verdadeiro se o item corresponder à categoria e ao termo de busca, e se o status do item for verdadeiro
    return matchesCategory && matchesSearch && item.status === true;
  });

  return (
    <div className='book-display' id='book-display'>
      <div className='book-display-header'>
        {/* Título da seção */}
        <h2>Livros  </h2>
        
        {/* Campo de busca para filtrar os itens */}
        <input 
          type='text' 
          placeholder='Buscar...' 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className='book-search-input'
        />
      </div>
      <div className='book-display-list'>
        {/* Mapeia a lista filtrada de livro para exibir os itens */}
        {filteredBookList.map((item) => (
          <BookItem 
            key={item._id} 
            image={item.image} 
            name={item.name} 
            author={item.author} 
            desc={item.description} 
            price={item.price} 
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default BookDisplay;
