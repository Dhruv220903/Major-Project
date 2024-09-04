import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='flex justify-around p-4 bg-slate-100'>
      <Link to='/'><img src="./assets/logo.jpg" alt="" className='w-11 h-11'/></Link>
      <ul className='list-none flex ' > 
        <li className='p-3 bg-slate-100 text-slate-800 font-medium '>
            <Link to='/services' >Services</Link>
        </li>
        <li className='p-3 bg-slate-100 text-slate-800 font-medium'>
            <Link to='/aboutus'>About Us</Link>
        </li>
        <li className='p-3 bg-slate-100 text-slate-800 font-medium'>
            <Link to='/contactus'>Contact Us</Link>
        </li>
        <li className='p-3 bg-slate-100 text-slate-800 font-medium '>
            <Link to='/taxcalculator'>Tax Calculator</Link>
        </li>
      </ul>

      <h1 className='p-3 ml bg-blue-500 rounded-xl text-white font-medium   '>My Profile</h1>
    </div>
  )
}

export default Navbar
