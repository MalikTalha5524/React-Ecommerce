import React from "react";

export default function Banner3box() {
  return (
    <>
      <section className="banner-3box px-[80px] py-12 md:py-20">
        <div className="flex flex-wrap justify-between items-center">
          <div
            className="banner-box1 bg-cover w-full md:w-[32%] h-[30vh] flex flex-col justify-start items-center md:items-start p-8"
            style={{ backgroundImage: "url('assets/images/banner/b7.jpg')" }}
          >
            <h2 className="text-white text-2xl font-semibold">Seasonal Sale</h2>
            <h3 className="text-red-500 text-base font-semibold">
              Winter collection -50% off
            </h3>
          </div>
          <div
            className="banner-box1 bg-cover w-full md:w-[32%] h-[30vh] flex flex-col justify-start items-center md:items-start p-8 mt-8 md:mt-0"
            style={{ backgroundImage: "url('assets/images/banner/b4.jpg')" }}
          >
            <h2 className="text-white text-2xl font-semibold">
              New footwear collection
            </h2>
            <h3 className="text-red-500 text-base font-semibold">
              Spring/summer 2022
            </h3>
          </div>
          <div
            className="banner-box1 bg-cover w-full md:w-[32%] h-[30vh] flex flex-col justify-start items-center md:items-start p-8 mt-8 md:mt-0"
            style={{ backgroundImage: "url('assets/images/banner/b18.jpg')" }}
          >
            <h2 className="text-white text-2xl font-semibold">T-Shirts</h2>
            <h3 className="text-red-500 text-base font-semibold">
              New Trendy prints
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
