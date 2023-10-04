import React from "react";

export default function Features() {
  return (
    <>
      <section className="features px-4 md:px-[80px] pt-16">
        <div className="features-counter flex flex-wrap justify-between items-center py-2 animate-bounce inline-block">
          <div className="fc1 border border-gray-300 w-full md:w-[15%] h-[30vh] mb-4 md:mb-0">
            <img src={"/assets/images/features/f1.png"} alt="images" />
            <button className="py-1 px-2 h-[5vh] w-[60%] mt-8 mx-auto md:mx-10 text-xs font-bold cursor-pointer bg-pink-300 rounded">
              Free shopping
            </button>
          </div>
          <div className="fc1 border border-gray-300 w-full md:w-[15%] h-[30vh] mb-4 md:mb-0">
            <img src={"/assets/images/features/f2.png"} alt="images" />
            <button className="py-1 px-2 h-[5vh] w-[60%] mt-8 mx-auto md:mx-10 text-xs font-bold cursor-pointer bg-green-300 rounded">
              Online order
            </button>
          </div>
          <div className="fc1 border border-gray-300 w-full md:w-[15%] h-[30vh] mb-4 md:mb-0">
            <img src={"/assets/images/features/f3.png"} alt="images" />
            <button className="py-1 px-2 h-[5vh] w-[60%] mt-8 mx-auto md:mx-10 text-xs font-bold cursor-pointer bg-blue-300 rounded">
              save Money
            </button>
          </div>
          <div className="fc1 border border-gray-300 w-full md:w-[15%] h-[30vh] mb-4 md:mb-0">
            <img src={"/assets/images/features/f4.png"} alt="images" />
            <button className="py-1 px-2 h-[5vh] w-[60%] mt-8 mx-auto md:mx-10 text-xs font-bold cursor-pointer bg-gray-300 rounded">
              Promotion
            </button>
          </div>
          <div className="fc1 border border-gray-300 w-full md:w-[15%] h-[30vh] mb-4 md:mb-0">
            <img src={"/assets/images/features/f5.png"} alt="images" />
            <button className="py-1 px-2 h-[5vh] w-[60%] mt-8 mx-auto md:mx-10 text-xs font-bold cursor-pointer bg-pink-300 rounded">
              Happy sell
            </button>
          </div>
          <div className="fc1 border border-gray-300 w-full md:w-[15%] h-[30vh]">
            <img src={"/assets/images/features/f6.png"} alt="images" />
            <button className="py-1 px-2 h-[5vh] w-[60%] mt-8 mx-auto md:mx-10 text-xs font-bold cursor-pointer bg-pink-300 rounded">
              F42/17 support
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
