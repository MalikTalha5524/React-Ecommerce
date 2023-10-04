import React from "react";

export default function Parintbanner() {
  return (
    <>
      <section className="parint-banner px-[80px]">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div
            className="banner-box bg-cover w-full md:w-[580px] h-[50vh] flex flex-col justify-start items-center md:items-start p-8 md:p-12"
            style={{ backgroundImage: "url('assets/images/banner/b17.jpg')" }}
          >
            <h4 className="text-white text-base font-normal">Craze deals</h4>
            <h2 className="text-white text-4xl font-bold">buy 1 get 1 free</h2>
            <span className="text-white text-sm font-normal pb-4">
              The best classic dress is on sale at cara
            </span>
            <button className="text-base font-normal border border-gray-400 px-6 py-2 transition duration-200 ease-in-out hover:bg-gray-400 hover:text-white">
              Collection
            </button>
          </div>
          <div
            className="banner-box bg-cover w-full md:w-[580px] h-[50vh] flex flex-col justify-start items-center md:items-start p-8 md:p-12 mt-8 md:mt-0"
            style={{ backgroundImage: "url('assets/images/banner/b10.jpg')" }}
          >
            <h4 className="text-white text-base font-normal">Spring/summer</h4>
            <h2 className="text-white text-4xl font-bold">Upcoming season</h2>
            <span className="text-white text-sm font-normal pb-4">
              The best classic dress is on sale at cara
            </span>
            <button className="text-base font-normal border border-gray-400 px-6 py-2 transition duration-200 ease-in-out hover:bg-gray-400 hover:text-white">
              Collection
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
