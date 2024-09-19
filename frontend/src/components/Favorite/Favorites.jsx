// import React, { useEffect, useState } from 'react';
// import { getFavorites, addFavorite, removeFavorite } from '../../../../backend/controllers/userController'; 

// const Favorites = () => {
//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//         const fetchFavorites = async () => {
//             const favoritesData = await getFavorites();
//             setFavorites(favoritesData);
//         };
//         fetchFavorites();
//     }, []);

//     return (
//         <div>
//             <h2>Meus Favoritos</h2>
//             <ul>
//                 {favorites.length > 0 ? (
//                     favorites.map((item) => (
//                         <li key={item._id}>
//                             <span>{item.name}</span>
//                             <button onClick={() => removeFavorite(item._id)}>Remover</button>
//                         </li>
//                     ))
//                 ) : (
//                     <p>Você não possui itens favoritos.</p>
//                 )}
//             </ul>
//         </div>
//     );
// }

// export default Favorites;
