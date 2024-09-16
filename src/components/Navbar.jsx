import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the navbar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 bg-slate-100 " >
      {/* Navbar container */}
      <div className="flex justify-around items-center">
        {/* Logo */}
        <Link to="/">
          <img src="./assets/logo.webp" alt="Logo" className="w-12 h-12" />
        </Link>

        {/* Toggle Button for Mobile */}
     

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4 items-center">
        <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:text-blue-600">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:text-blue-600">
            <Link to="/services">Services</Link>
          </li>
          <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:text-blue-600">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:text-blue-600">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:text-blue-600">
            <Link to="/taxcalculator">Tax Calculator</Link>
          </li>
         
          {/* Profile Button on Desktop */}
        
        </ul>
        <button className="hidden md:block p-2 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600">
  My Profile
</button>

        <button
          className="md:hidden text-slate-800"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <span className="text-xl font-bold">×</span> // Close icon
          ) : (
            <span className="text-xl font-bold">☰</span> // Menu icon
          )}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-2 md:hidden">
          <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:bg-blue-100">
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
          <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:bg-blue-100">
            <Link to="/aboutus" onClick={toggleMenu}>About Us</Link>
          </li>
          <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:bg-blue-100">
            <Link to="/contactus" onClick={toggleMenu}>Contact Us</Link>
          </li>
          <li className="p-2 bg-slate-100 text-slate-800 font-medium rounded-xl hover:bg-blue-100">
            <Link to="/taxcalculator" onClick={toggleMenu}>Tax Calculator</Link>
          </li>
          {/* Profile Button on Mobile */}
          <li>
            <Link
              to="/profile"
              className="p-2 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600"
              onClick={toggleMenu}
            >
              My Profile
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
