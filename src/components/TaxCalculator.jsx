import React, { useState } from 'react';

const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [regime, setRegime] = useState('old');
  const [tax, setTax] = useState(null);

  // Tax calculation function (same logic as Python version)
  const calculateTax = (income, regime, deductions = 0) => {
    let tax = 0;
    
    // Old Regime Tax Calculation (With Deductions)
    if (regime === 'old') {
      income -= deductions;
      if (income <= 250000) {
        tax = 0;
      } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
      } else if (income <= 1000000) {
        tax = 250000 * 0.05 + (income - 500000) * 0.20;
      } else {
        tax = 250000 * 0.05 + 500000 * 0.20 + (income - 1000000) * 0.30;
      }
    }

    // New Regime Tax Calculation (No Deductions)
    else if (regime === 'new') {
      if (income <= 250000) {
        tax = 0;
      } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
      } else if (income <= 750000) {
        tax = 250000 * 0.05 + (income - 500000) * 0.10;
      } else if (income <= 1000000) {
        tax = 250000 * 0.05 + 250000 * 0.10 + (income - 750000) * 0.15;
      } else if (income <= 1250000) {
        tax = 250000 * 0.05 + 250000 * 0.10 + 250000 * 0.15 + (income - 1000000) * 0.20;
      } else if (income <= 1500000) {
        tax = 250000 * 0.05 + 250000 * 0.10 + 250000 * 0.15 + 250000 * 0.20 + (income - 1250000) * 0.25;
      } else {
        tax = 250000 * 0.05 + 250000 * 0.10 + 250000 * 0.15 + 250000 * 0.20 + 250000 * 0.25 + (income - 1500000) * 0.30;
      }
    }

    // Applying Rebate under Section 87A (if applicable)
    if (income <= 500000) {
      tax = 0;
    }

    return Math.round(tax * 100) / 100;  
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const incomeNum = parseFloat(income);
    const deductionsNum = parseFloat(deductions) || 0;

    if (isNaN(incomeNum) || incomeNum < 0) {
      alert("Please enter a valid income.");
      return;
    }

    if (regime === 'old' && (isNaN(deductionsNum) || deductionsNum < 0)) {
      alert("Please enter valid deductions.");
      return;
    }

    const calculatedTax = calculateTax(incomeNum, regime, deductionsNum);
    setTax(calculatedTax);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md bg-slate-100 m-3">
      <h2 className="text-2xl font-bold mb-4">Income Tax Calculator</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center">
          <label htmlFor="income" className="w-1/3 mr-2 text-right">Income: </label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter your income"
            required
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="regime" className="w-1/3 mr-2 text-right">Tax Regime: </label>
          <select
            id="regime"
            value={regime}
            onChange={(e) => setRegime(e.target.value)}
            className="rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="old">Old Regime</option>
            <option value="new">New Regime</option>
          </select>
        </div>
        {regime === 'old' && (
          <div className="flex items-center">
            <label htmlFor="deductions" className="w-1/3 mr-2 text-right">Deductions: </label>
            <input
              type="number"
              id="deductions"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
              placeholder="Enter deductions"
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        )}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Calculate Tax
        </button>
      </form>

      {tax !== null && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold">Your Tax: ₹{tax}</h3>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;