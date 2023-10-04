import React from 'react'
import Header from '../components/Header'
import Herotext from '../components/Herotext'
import Bannerlatter from '../components/Bannerlatter';
import Footer from '../components/Footer';
import Location from '../components/Location';
import Contactform from '../components/Contactform';

export default function Contact() {
  
  const backgroundImage2 = './assets/images/about/banner.png'; 
  return (
    <>
      <Header clk="active" />
      <Herotext heading="#Lets Tak" para="Leave a massage we want to hear from you" bgImage={backgroundImage2} />
      <Location />
      <Contactform />
      <Bannerlatter />
      <Footer />
    </>
  )
}
