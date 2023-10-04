import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function CartItemsPro({ data }) {
  const { cartItems, addTocart, removeFromCart } = useContext(ShopContext);
  const {addToCart}= useContext(ShopContext)
  return (
    <>
      <div className="pro1 w-[40%] h-[35vh]  p-2 md:p-4 shadow-md rounded-lg relative border border-gray-300  my-[20px] group flex align-center">
        <div className="d">
          <img
            src={data?.productImage}
            alt={data?.productName}
            className="w-[100%] h-[100%] object-cover border rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          />
        </div>
        <div className="desk text-start p-5 relative">
          <span className="text-gray-600">{data?.companyName}</span>
          <h3 className="text-xl font-semibold pt-1 hover:text-teal-500">
            {data?.productName}
          </h3>
          <h4 className="text-green-600 font-semibold text-xl pt-2 hover:text-green-700">
            ${data?.productPrice}
          </h4>
          <div className="countHandler">
            <button
              onClick={() => removeFromCart(data.id)}
              className=" px-2 mt-5 text-white bg-black border rounded-md focus:outline-none"
            >
              -
            </button>
            <input
              value={[data?.id]}
              className=" px-2 mt-5 mx-1 w-[90px] border rounded-md focus:outline-none"
            />
            <button
              onClick={() => addToCart(data?.id)}
              className=" px-2 mt-5 text-white bg-black border rounded-md focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
