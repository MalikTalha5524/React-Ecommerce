import React from 'react'

export default function Footer() {
  return (
    <>
<footer className="py-12 px-4 bg-gray-100">
  <div className="flex pl-[20px] flex-wrap justify-between items-center">
    <div className="main flex w-full justify-around md:w-1/2 lg:w-1/2 xl:w-1/2">
      <div className="main1">
        <img src="/assets/images/brand/logo.png" alt="images" />
        <h4>Contact</h4>
        <p><strong>Address:</strong> 256 walitown Road, street 32. son fronce</p>
        <p><strong>Phone:</strong>+012222365/ (+92)3496590022</p>
        <p><strong>Hours:</strong>10-00 7-00 Mon to Sat</p>
        <h4>Follow us</h4>
        <div className="social-icon flex items-center space-x-4">
          <div className="icon1"><i className="fa fa-facebook" aria-hidden="true"></i></div>
          <div className="icon1"><i className="fa fa-twitter" aria-hidden="true"></i></div>
          <div className="icon1"><i className="fa fa-instagram" aria-hidden="true"></i></div>
          <div className="icon1"><i className="fa fa-pinterest-p" aria-hidden="true"></i></div>
          <div className="icon1"><i className="fa fa-youtube-play" aria-hidden="true"></i></div>
        </div>
      </div>
      <div className="main1 flex flex-col">
        <h4 className='text font-bold'>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery information</a>
        <a href="#">Privacy policy</a>
        <a href="#">Terms and conditions</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
    <div className="main flex justify-around w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
      <div className="main1 flex flex-col">
        <h4 className='text font-bold'>My Account</h4>
        <a href="#">Sign up</a>
        <a href="#">View cart</a>
        <a href="#">My wishlist</a>
        <a href="#">Track My order</a>
        <a href="#">View cart</a>
        <a href="#">My wishlist</a>
        <a href="#">Help</a>
      </div>
      <div className="main1">
        <h4 className="app text font-bold">Install App</h4>
        <a href="https://play.google.com/store/apps/details?id=com.clicky.pk&hl=en&gl=US">From app store or Google Play</a>
        <div className="din flex">
        <img src="/assets/images/pay/app.jpg" className="social-img w-[50%] mr-3" alt="images" />
        <img src="/assets/images/pay/play.jpg" className="social-img w-[50%] ml-3" alt="images" />
        </div>
        <a href="#">Secure Payment Gateways</a>
        <img src="/assets/images/pay/pay.png" className="v-img" alt="images" />
      </div>
    </div>
  </div>
  <div className="p-text text-center pt-6 text-gray-600">
    <p>2023 .Teach etc - HTML CSS Ecommerce Template</p>
  </div>
</footer>


    </>
  )
}
