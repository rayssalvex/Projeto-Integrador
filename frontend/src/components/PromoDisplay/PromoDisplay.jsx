import React, { useContext } from 'react';
import './PromoDisplay.css';
import BookItem from '../BookItem/BookItem';
import { StoreContext } from '../../Context/StoreContext';

const PromoDisplay = () => {
    const { book_list } = useContext(StoreContext);

    // Filtra a lista de alimentos para incluir apenas aqueles com promoção ativa
    const promoList = book_list.filter(item => item.promotion === true);

    return (
        <div className='promo-display' id='promo-display'>
            <div className='promo-display-header'>
                <h2>Livros em promoção hoje</h2>
            </div>
            <div className='promo-display-list'>
                {promoList.map((item) => (
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
}

export default PromoDisplay;
