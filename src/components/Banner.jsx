import React from 'react'

export default function Banner() {
  return (
    <>
      <section className="banner bg-cover text-center h-[50vh] relative text-white  bg-banner-image flex item-center justify-center">
        <div className='flex items-center flex-col w-[50%] justify-center'>
  <h4 className="text-base font-normal py-4">Repair services</h4>
  <h2 className="text-2xl font-bold py-4">
    Up to <span className="text-red-500">70% off</span> - All t-shirts and Accessories
  </h2>
  <button className="text-base font-normal w-[10rem] px-8 py-3 bg-white text-black rounded-md transition duration-200 hover:bg-[rgba(43, 208, 241, 0.426)] mt-8">
    Explore More
  </button>
  </div>
</section>

    </>
  )
}
