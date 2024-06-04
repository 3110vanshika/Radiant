import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-white.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-white">
      <div className="container mx-auto px-10 lg:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} className="w-40" alt="Logo" />
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <div className="relative group">
            <NavLink to="/services">Services</NavLink>
            <div className="absolute top-full left-0 w-full bg-white text-black shadow-md rounded-md mt-1 hidden group-hover:block">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">Service 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Service 2</li>
                <li className="px-4 py-2 hover:bg-gray-100">Service 3</li>
              </ul>
            </div>
          </div>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <button className="hidden md:block bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Book Online
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
            <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded-md text-base font-medium">About Us</NavLink>
            <NavLink to="/services" className="block px-3 py-2 rounded-md text-base font-medium">Services</NavLink>
            <NavLink to="/blog" className="block px-3 py-2 rounded-md text-base font-medium">Blog</NavLink>
            <NavLink to="/contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact Us</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
