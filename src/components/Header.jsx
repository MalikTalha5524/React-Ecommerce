import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();

  return (
    <header className="bg-gray-300 shadow-md fixed top-0 left-0 w-full h-[60px] flex justify-between px-[80px] z-10">
    <div className="logo flex items-center">
      <img src={"/assets/images/brand/logo.png"} alt="images" />
    </div>
    <div className="navbar flex items-center space-x-4 w-[50%] flex justify-around">
      <input type="checkbox" name="" id="nav_btn" className="hidden bg-black" />
      <label htmlFor="nav_btn" className="nav_btn close cursor-pointer hidden">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </label>
      <ul className="hidden md:flex space-x-4 flex justify-around w-[100%]">
        <li
          className={`flex items-center relative ${location.pathname === "/" ? props.clk : ""}`}
        >
          <Link to="/">HOME</Link>
        </li>
        <li
          className={`flex items-center relative ${location.pathname === "/shope" ? props.clk : ""}`}
        >
          <Link to="/shope">SHOP</Link>
        </li>
        <li
          className={`flex items-center relative ${location.pathname === "/blog" ? props.clk : ""}`}
        >
          <Link to="/blog">BLOG</Link>
        </li>
        <li
          className={`flex items-center relative ${location.pathname === "/about" ? props.clk : ""}`}
        >
          <Link to="/about">ABOUT</Link>
        </li>
        <li
          className={`flex items-center relative ${location.pathname === "/contact" ? props.clk : ""}`}
        >
          <Link to="/contact">CONTACT</Link>
        </li>
        <li
          className={`flex items-center relative ${location.pathname === "/cart" ? props.clk : ""}`}
        >
          <Link to="/cart">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  </header>
  
  );
}

