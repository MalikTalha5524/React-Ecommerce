import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Herotext from "../components/Herotext";
import Paginashion from "../components/Paginashion";
import Bannerlatter from "../components/Bannerlatter";
import Blogcontent from "../components/Blogcontent";

export default function Blog() {
  const backgroundImage2 = './assets/images/banner/b19.jpg'; 
  return (
    <div>
      <Header clk="active" />
      <Herotext heading="#readmore" para="read all case studies about or products" bgImage={backgroundImage2} />
      <Blogcontent />
      <Paginashion />
      <Bannerlatter />
      <Footer />
    </div>
  );
}
