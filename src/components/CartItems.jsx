import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartItemsPro from './CartItemsPro';
import { Products } from './Datafake';

export default function CartItems() { 
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount =getTotalCartAmount();
  return (
    <>
      <div className="cart">
        <h1 className='text-center text-[55px]  mt-4'>Your Cart Items</h1>
      </div>
      <div className="cartItems flex items-center flex-col">
        {Products?.map((product) => (
          <CartItemsPro key={product.id} data={product} />
        ))}
      </div>
      <div className="checkout group flex items-center justify-between flex-col ">
        <p> Subtotal: ${totalAmount}</p>
        <button className=" p-2 w-[170px] my-4 text-base font-normal text-white bg-black border border-transparent rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition duration-200 ease-in-out"> Continue Shopping</button>
        
        <button className=" p-2 w-[170px] my-4 text-base font-normal text-white bg-black border border-transparent rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition duration-200 ease-in-out"> Checkout</button>
      </div>
    </>
  );
}
