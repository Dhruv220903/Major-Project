import React from "react";
import { CalendarIcon, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <CalendarIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">TaxEase</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to ="/home" className="hover:underline">Home</Link>
          <Link to="/taxform" className="hover:underline">File Taxes</Link>
          <Link to="/taxcalculator" className="hover:underline">Tax Calculator</Link>
          <Link to="/help" className="hover:underline">Help Center</Link>
        </nav>
        <button 
          className="md:hidden p-2 rounded-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
