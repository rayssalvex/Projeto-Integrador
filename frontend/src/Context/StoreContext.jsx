import { createContext, useEffect, useState } from "react";
import { book_list, menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [book_list, setBookList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const currency = "R$";
    const deliveryCharge = 10;

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
              if (cartItems[item] > 0) {
                let itemInfo = book_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalAmount;
    }

    const fetchBookList = async () => {
        const response = await axios.get(url + "/api/book/list");
        setBookList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchBookList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    const contextValue = {
        url,
        book_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;

// import { createContext, useEffect, useState } from "react";
// import { book_list, menu_list } from "../assets/assets";
// import axios from "axios";
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {

//     const url = "http://localhost:4000"
//     const [book_list, setBookList] = useState([]);
//     const [cartItems, setCartItems] = useState({});
//     const [favorites, setFavorites] = useState([]); 
//     const [token, setToken] = useState("");
//     const currency = "R$";
//     const deliveryCharge = 10;

//     const addToCart = async (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//         } else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         }
//         if (token) {
//             await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
//         }
//     };

//     const removeFromCart = async (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         if (token) {
//             await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
//         }
//     };

//     const addToFavorites = (book) => {
//         setFavorites((prev) => {
//             if (prev.find((fav) => fav._id === book._id)) {
//                 return prev; 
//             }
//             return [...prev, book];
//         });
//     };

//     const removeFromFavorites = (bookId) => {
//         setFavorites((prev) => prev.filter((book) => book._id !== bookId));
//     };

  
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             try {
//                 if (cartItems[item] > 0) {
//                     let itemInfo = book_list.find((product) => product._id === item);
//                     totalAmount += itemInfo.price * cartItems[item];
//                 }
//             } catch (error) {
//                 console.error("Erro ao calcular total:", error);
//             }
//         }
//         return totalAmount;
//     };

//     const fetchBookList = async () => {
//         const response = await axios.get(url + "/api/book/list");
//         setBookList(response.data.data);
//     };

//     const loadCartData = async (token) => {
//         const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
//         setCartItems(response.data.cartData);
//     };

//     useEffect(() => {
//         async function loadData() {
//             await fetchBookList();
//             if (localStorage.getItem("token")) {
//                 setToken(localStorage.getItem("token"));
//                 await loadCartData({ token: localStorage.getItem("token") });
//             }
//         }
//         loadData();
//     }, []);

//     const contextValue = {
//         url,
//         book_list,
//         menu_list,
//         cartItems,
//         favorites, 
//         addToCart,
//         removeFromCart,
//         addToFavorites, 
//         removeFromFavorites, 
//         getTotalCartAmount,
//         token,
//         setToken,
//         loadCartData,
//         setCartItems,
//         currency,
//         deliveryCharge,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;
