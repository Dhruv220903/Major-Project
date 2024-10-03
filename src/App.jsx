import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import TaxFilingForm from './components/Taxforms';
import Taxform from './components/Taxform'
import { Footer } from "./components/Footer";
import Home from './components/Home'; // Assuming you have a homepage component
import TaxCalculator from './components/TaxCalculator'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header will be displayed on all pages */}
        <Header />

        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            {/* Define the different routes in the application */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/taxform" element={
              <>
                <h2 className="text-3xl font-bold mb-6">File Your Taxes</h2>
                <Taxform />
              </>
            } />
            {/* Add other routes as needed */}
            <Route path='/taxcalculator' element={<TaxCalculator/>}></Route>
          </Routes>
        </main>

        {/* Footer will be displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}
