import React from 'react'
import Header from '../components/Header'
import Bannerlatter from '../components/Bannerlatter'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Herotext from '../components/Herotext'
import Cottonbox from '../components/Cottonbox'
import Downloadapp from '../components/Downloadapp'

export default function About() {
  const backgroundImage2 = './assets/images/about/banner.png'; 
  return (
    <div>
      <Header clk="active" />
      <Herotext heading="#KNOWUS" para="ready all case studies about or products" bgImage={backgroundImage2} />
      <Cottonbox />
      <Downloadapp />
      <Features />
      <Bannerlatter />
      <Footer />
    </div>
  )
}
