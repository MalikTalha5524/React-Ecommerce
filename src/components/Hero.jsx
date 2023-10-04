import React from "react";

export default function Hero() {
  return (
    <>
      <section className="hero bg-hero-image bg-cover h-[114vh] w-full md: px-[80px] overflow-hidden">
        <div className="hero-text w-[90%] h-[114vh] flex justify-center items-center md:items-start flex-col overflow-hidden">
          <div className="ht w-[90%] h-[100vh] text-center md:text-left">
            <h5 className="py-3 mt-[10rem] text-base md:text-[17px] text-[rgb(147, 144, 137)]">
              Trade-in-offer
            </h5>
            <h2 className="text-2xl md:text-4xl font-bold text-[rgb(147, 144, 137)] py-2 md:py-5">
              Super value deals
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold text-teal-500 py-2 md:py-5">
              On all products
            </h2>
            <p className="py-2 md:py-5 text-[16px]">
              save more with coupons & up to 70% off!
            </p>
            <button className="w-[25%] h-[8vh] bg-button-image bg-cover bg-center border-none bg-[#e3e6f3] text-teal-500 font-bold text-base cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
