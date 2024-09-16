import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
const Footer = () => {
  return (
    <div className='min-h-20 bg-gray-600 text-s    text-white text-center flex justify-evenly'>
      <div>
        <h1>Company</h1>
      <ul>
        <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/taxcalculator">Tax Calculator</Link>
          </li>
         
          {/* Profile Button on Desktop */}
        
        </ul>
      </div>

      <div>
        <h1>Company</h1>
      <ul>
        <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/taxcalculator">Tax Calculator</Link>
          </li>
         
          {/* Profile Button on Desktop */}
        
        </ul>
      </div>
    </div>
  )
}

export default Footer
