import React, { useContext, useState } from "react";
import { Products } from "./Datafake";
import { Link } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';

export default function Featuresproducts(props) {


  const [data,setData] = useState();

  console.log('product',data);


  const {addToCart,cartItemAmount}= useContext(ShopContext)


  return (
    <>
      <section className="features-products w-full bg-gray-100 px-4 md:px-20 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-2">{props.heading}</h2>
        <p className="text-lg text-gray-600 mb-6">{props.dis}</p>
        <div className="features-allpro w-full flex flex-wrap justify-around items-center mt-8">
          {Products.map((product, index) => (
            <div
              className="pro1 w-full md:w-[30%] lg:w-[22%] p-2 md:p-4 shadow-md rounded-lg relative border border-gray-300 overflow-hidden transform transition-transform hover:scale-105 my-[20px] group "
              key={index}
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-[36vh] object-cover border rounded-lg"
                />
              </Link>
              <div className="desk text-start p-2 relative">
                <span className="text-gray-600">{product.companyName}</span>
                <h3 className="text-xl font-semibold pt-1 hover:text-teal-500">
                  {product.productName}
                </h3>
                <div className="cart text-yellow-400 pt-1">
                  {Array.from({ length: product.productRating }, (_, index) => (
                    <i
                      key={index}
                      className="fa fa-star"
                      aria-hidden="true"
                    ></i>
                  ))}
                </div>
                <h4 className="text-green-600 font-semibold text-xl pt-2 hover:text-green-700">
                  ${product.productPrice}
                </h4>
                <button
                  href="/"
                  className="addToCartBttn bag text-green-600 w-12 h-12 bg-gray-200 flex justify-center items-center rounded-full text-xl absolute bottom-[-20px] right-[-20px] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100"
                onClick={() => 
                  {
                    addToCart(product.id)
                    setData(product)
                  }
                }>
                  {cartItemAmount > 0 && <>({cartItemAmount})</>}
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
