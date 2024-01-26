const cartReducer = (state, action) => {
  
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    let existingProduct = state.cart.find((curItem) => curItem.id == id + color);
    console.log(existingProduct);
    if (existingProduct) {
      let updatedCart = state.cart.map((curItem) => {
        if (curItem.id == id + color) {
          let newAmount = curItem.amount + amount;
          return { ...curItem, amount: newAmount };
        } else {
          return curItem;
        }
      });

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        imageFiles: product.imageFiles[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // set decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decAmount = curItem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return { ...curItem, amount: decAmount };
      } else {
        return curItem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  // set increment
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let incAmount = curItem.amount + 1;

        if (incAmount > curItem.max) {
          incAmount = curItem.max;
        }

        return { ...curItem, amount: incAmount };
      } else {
        return curItem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM"){
    let updatedCart = state.cart.filter((curItem) => curItem._id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  } 
  
  // cler all cart items 
 if (action.type === "CLEAR_CART"){
   return {
     ...state,
     cart: [],
   }
 }

//  total 

if (action.type === "GET_TOTALS"){
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    }
}

if (action.type === "GET_TOTAL_ITEM"){
  let total_price = state.cart.reduce((initialVal, curElem) => {
    let { amount, price } = curElem;
    initialVal = initialVal + (amount * price);
    return initialVal;
  }, 0);

  return {
    ...state,
    total_price,
  }
}

  return state;

}

export default cartReducer;