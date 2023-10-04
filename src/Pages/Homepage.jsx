import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Featuresproducts from '../components/Featuresproducts';
import Banner from '../components/Banner';
import Parintbanner from '../components/Parintbanner';
import Banner3box from '../components/Banner3box';
import Bannerlatter from '../components/Bannerlatter';
import Footer from '../components/Footer';


export default function Homepage() {
  return (
    <>
      <Header clk="active"/>
      <Hero />
      <Features />
      <Featuresproducts heading="Features Products" dis="Summer collection new model design"/>
      <Banner /> 
      <Featuresproducts heading="New Arrivals" dis="Summer collection new model design" />
      <Parintbanner />
      <Banner3box />
      <Bannerlatter />
      <Footer />
    </>
  )
}
