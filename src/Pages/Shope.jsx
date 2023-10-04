import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Herotext from '../components/Herotext';
import Featuresproducts from '../components/Featuresproducts';
import Bannerlatter from '../components/Bannerlatter';
import Paginashion from '../components/Paginashion';

export default function Shope() {
  const backgroundImage1 = './assets/images/banner/b1.jpg'; 
  return (
    <>
      <Header clk="active" />
      <Herotext heading="#stayhome" para="save more with coupons & up to 70% off!" bgImage={backgroundImage1} />
      <Featuresproducts />
      <Paginashion />
      <Bannerlatter />
      <Footer />
    </>
  );
}
