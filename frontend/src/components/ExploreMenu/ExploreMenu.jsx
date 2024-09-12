import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

// Componente para listar categorias do menu
const ExploreMenu = ({ category, setCategory }) => {
  // Pega a lista de menus do contexto
  const { menu_list } = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      {/* Título da seção */}
      <h1>Explore nosso catálogo de livros</h1>
      
      {/* Descrição da seção */}
      <p className='explore-menu-text'>
      Explore um catálogo diversificado de livros cuidadosamente selecionados para todos os gostos. 
      </p>
      
      {/* Lista de categorias do menu */}
      <div className="explore-menu-list">
        {/* Mapeia cada item do menu_list para criar um item clicável */}
        {menu_list.map((item, index) => (
          <div 
            // Define a ação ao clicar no item: alterna entre a categoria atual e "All"
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
            key={index} 
            className='explore-menu-list-item'
          >
            {/* Imagem da categoria, adiciona classe 'active' se for a categoria selecionada */}
            <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="" />
            
            {/* Nome da categoria */}
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      
      {/* Linha horizontal para separar seções */}
      <hr />
    </div>
  );
};

export default ExploreMenu;
