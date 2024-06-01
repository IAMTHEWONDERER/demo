import React, { useState } from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white p-6 flex items-center justify-between font-koulen h-30 z-50">
      <div className="flex items-center pl-10">
        <a href="home">
          <img src={logo} alt="Logo" className="h-16 mr-4" />
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-10 text-lg pr-10">
        <a href="home" className="text-white hover:text-yellow-500 transition duration-300">Home</a>
        <a href="about-us" className="text-white hover:text-yellow-500 transition duration-300">About Us</a>
        <a href="services" className="text-white hover:text-yellow-500 transition duration-300">Services</a>
        <a href="faqs" className="text-white hover:text-yellow-500 transition duration-300">FAQs</a>
        <a href="blog" className="text-white hover:text-yellow-500 transition duration-300">Blog</a>
        <Link to="/contactus">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-4 py-2 rounded transition duration-300 ease-in-out">Contact Us</button>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 bg-black bg-opacity-70 text-white p-4 absolute w-full top-24 text-lg">
          <a href="home" className="text-white hover:text-yellow-500 transition duration-300">Home</a>
          <a href="about-us" className="text-white hover:text-yellow-500 transition duration-300">About Us</a>
          <a href="services" className="text-white hover:text-yellow-500 transition duration-300">Services</a>
          <a href="faqs" className="text-white hover:text-yellow-500 transition duration-300">FAQs</a>
          <a href="blog" className="text-white hover:text-yellow-500 transition duration-300">Blog</a>
          <Link to="/contactus">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-4 py-2 rounded transition duration-300 ease-in-out">Contact Us</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
  