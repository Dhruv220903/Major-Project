import React, { useState } from 'react';
import '../index.css'
const TaxFilingForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    income: '',
    deductions: '',
  });

  // State to handle form errors
  const [errors, setErrors] = useState({});

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation logic
  const validate = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.income) errors.income = 'Income is required';
    if (!formData.deductions) errors.deductions = 'Deductions are required';
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed with form submission
      console.log('Form data submitted:', formData);
      
      // Call your backend API here (e.g., using fetch or axios)
      // axios.post('/api/submitTaxForm', formData)
      //     .then(response => console.log(response))
      //     .catch(error => console.log(error));

    } else {
      // If there are errors, update the errors state
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>File Your Taxes</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Income */}
        <div>
          <label>Income</label>
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            placeholder="Enter your annual income"
          />
          {errors.income && <p className="error">{errors.income}</p>}
        </div>

        {/* Deductions */}
        <div>
          <label>Deductions</label>
          <input
            type="number"
            name="deductions"
            value={formData.deductions}
            onChange={handleChange}
            placeholder="Enter deductions (if any)"
          />
          {errors.deductions && <p className="error">{errors.deductions}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaxFilingForm;
