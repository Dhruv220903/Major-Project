import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

const SimplifiedTaxReturnForm = () => {
  const [formData, setFormData] = useState({
    AssesseeName: '',
    PAN: '',
    Address: '',
    DOB: '',
    TotalIncome: '',
    Deductions: '',
    TaxPaid: '',
    Verification: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Income Tax Return Details', 10, 10);
    doc.text(`Name: ${formData.AssesseeName}`, 10, 20);
    doc.text(`PAN: ${formData.PAN}`, 10, 30);
    doc.text(`Address: ${formData.Address}`, 10, 40);
    doc.text(`DOB: ${formData.DOB}`, 10, 50);
    doc.text(`Total Income: ${formData.TotalIncome}`, 10, 60);
    doc.text(`Deductions: ${formData.Deductions}`, 10, 70);
    doc.text(`Tax Paid: ${formData.TaxPaid}`, 10, 80);
    doc.text(`Verification: ${formData.Verification}`, 10, 90);
    doc.save('income_tax_return.pdf');
  };

  const generateJSON = () => {
    const fileData = JSON.stringify(formData, null, 2);
    const blob = new Blob([fileData], { type: 'application/json' });
    saveAs(blob, 'income_tax_return.json');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-lg font-semibold mb-6">Income Tax Return Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="AssesseeName" className="block text-sm font-medium text-gray-700">
            Assessee Name
          </label>
          <input
            id="AssesseeName"
            name="AssesseeName"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            value={formData.AssesseeName}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="PAN" className="block text-sm font-medium text-gray-700">
            PAN (Format: ABCDE1234F)
          </label>
          <input
            id="PAN"
            name="PAN"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            value={formData.PAN}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            id="Address"
            name="Address"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            value={formData.Address}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="DOB" className="block text-sm font-medium text-gray-700">
            Date of Birth (YYYY-MM-DD)
          </label>
          <input
            id="DOB"
            name="DOB"
            type="date"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            value={formData.DOB}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="TotalIncome" className="block text-sm font-medium text-gray-700">
            Total Income
          </label>
          <input
            id="TotalIncome"
            name="TotalIncome"
            type="number"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            value={formData.TotalIncome}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="Deductions" className="block text-sm font-medium text-gray-700">
            Deductions
          </label>
          <input
            id="Deductions"
            name="Deductions"
            type="number"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            value={formData.Deductions}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="TaxPaid" className="block text-sm font-medium text-gray-700">
            Tax Paid
          </label>
          <input
            id="TaxPaid"
            name="TaxPaid"
            type="number"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            value={formData.TaxPaid}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="Verification" className="block text-sm font-medium text-gray-700">
            Verification
          </label>
          <input
            id="Verification"
            name="Verification"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            value={formData.Verification}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={generatePDF}
            className="w-full flex justify-center py-2 px-4 border rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Generate PDF
          </button>
          <button
            type="button"
            onClick={generateJSON}
            className="w-full flex justify-center py-2 px-4 border rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Download JSON
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimplifiedTaxReturnForm;
