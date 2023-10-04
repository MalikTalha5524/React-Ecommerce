import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "./Datafake";

export default function ProductDetail() {
  const { id } = useParams();

  const selectedProduct = Products.find(
    (product) => product.id === parseInt(id)
  );
  console.log(selectedProduct);
  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <h2 className="pt-5 text-4xl font-bold text-center">
        {selectedProduct.productName}
      </h2>
      <div className="product-detail px-4 md:px-20 py-10 flex w-[100%]">
        <div className="w-[30%]">
          <img
            src={selectedProduct.productImage}
            alt={selectedProduct.productName}
            className="w-[100%] h-[auto] object-cover  border rounded-lg mb-4"
          />
        </div>
        <div className="w-[70%] p-10">
          <p className="text-gray-600 mb-4 text-2xl">
            {selectedProduct.description}
          </p>
          <p className="text-lg font-semibold mb-2 mt-[40px]">
            Price: ${selectedProduct.productPrice}
          </p>
          <p className="text-lg font-semibold mb-4">
            Rating: {selectedProduct.productRating}
          </p>
          <button
            href="/"
            className="bag text-green-600 w-12 h-12 bg-gray-200 flex justify-center items-center rounded-full text-xl absolute bottom-[180px] right-[620px]"
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
}
