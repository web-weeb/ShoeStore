import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalStorage = () => {
  let localCartData = localStorage.getItem("NikeCart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState ={
    cart: getLocalStorage(),
    total_item: "",
    total_price: "",
    shipping_fee: 5000,
}

const CartProvider = ({ children }) => {

   const  [state, dispatch] = useReducer(reducer, initialState);

   const  addToCart = (id, color, amount, product) => {

         dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
   };

  const setDecrease = (id) => {
       dispatch({ type: "SET_DECREMENT", payload: id });
     };

  const setIncrement = (id) => {
       dispatch({ type: "SET_INCREMENT", payload: id });
     };

     // to remove the individual item from cart
  const removeItem = (_id) => {
       dispatch({ type: "REMOVE_ITEM", payload: _id });
     };

    // to clear all cart items

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART"});
  }

  // add data in local storage

  useEffect(()=>{
    dispatch({type: "GET_TOTAL_ITEM"})
    dispatch({type: "GET_TOTALS"})
    localStorage.setItem("NikeCart", JSON.stringify(state.cart))
  },[state.cart]);

    return (
      <CartContext.Provider
        value={{
          ...state,
          addToCart,
          setDecrease,
          setIncrement,
          removeItem,
          clearCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
};

const useCartContext = () =>{
    return useContext(CartContext);
}

export { CartProvider, useCartContext };