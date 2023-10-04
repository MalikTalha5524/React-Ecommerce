import React from 'react'
import Header from '../components/Header'
import Herotext from '../components/Herotext'
// import Bannerlatter from '../components/Bannerlatter'
import Footer from '../components/Footer'
import CartItems from '../components/CartItems'

export default function Cart() {
  
  const backgroundImage2 = './assets/images/about/banner.png'; 
  return (
    <>
      <Header clk="active" />
      <Herotext heading="#Lets Tak" para="Leave a massage we want to hear from you" bgImage={backgroundImage2} />
      <CartItems />
      {/* <Bannerlatter /> */}
      <Footer />
    </>
  )
}
