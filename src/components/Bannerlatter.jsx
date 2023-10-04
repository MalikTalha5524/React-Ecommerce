import React from 'react'

export default function Bannerlatter() {
  return (
    <>
      <section className="banner-latter py-12">
  <div className="flex flex-wrap justify-between items-center bg-cover bg-no-repeat bg-center w-full h-[26vh] bg-banner-image bg-banner-color px-[80px]">
    <div className="text">
      <h4 className="text-white text-xl font-semibold">Sign up For Newsletters</h4>
      <p className="text-gray-600 text-base font-medium">
        Get E-Mail updates about our latter shop and <span className="text-green-400">special offers</span>
      </p>
    </div>
    <div className="form flex md:w-30%">
      <input type="text" placeholder="Your e-mail" className="h-12 px-4 text-sm border border-transparent rounded-l-md focus:ring-2 focus:ring-green-300 focus:border-transparent" />
      <button className="px-4 py-2 text-base font-normal text-white bg-green-400 border border-transparent rounded-r-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition duration-200 ease-in-out">
        Sign up
      </button>
    </div>
  </div>
</section>

    </>
  )
}
