import React, { createContext, useState } from 'react'
import { Products } from '../components/Datafake';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart ={};
    for (let i = 1; i <Products.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

export default function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState([]);
    
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = Products.find((Product) => Product.id === Number (item));
          totalAmount += cartItems[item] * itemInfo?.productPrice;
        }
      }
      return totalAmount;
    };
    const addToCart = (itemId) =>{
      let newArray = [];
      newArray.push(itemId);
        setCartItems(prev=> [...prev,...newArray]);
        // if(cartItems.fi)
    };
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] -1}))
    };
    const cartItemAmount =() => {
      console.log('cart item')
    }

    const contextValue = {cartItems, addToCart, removeFromCart, getTotalCartAmount, cartItemAmount};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
