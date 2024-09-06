import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../Assets/bgreg.jpeg";
import './Login.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    schoolId: '',
    role: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (formData.password !== formData.password2) {
      errors.password2 = 'Passwords do not match';
    }
    if (!formData.schoolId) {
      errors.schoolId = 'School ID is required';
    }
    if (!formData.role) {
      errors.role = 'Please select your role';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log('Form submitted:', formData);
      setFormData({
        email: '',
        password: '',
        password2: '',
        schoolId: '',
        role: ''
      });
      setFormErrors({});
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
    <div className="bg-violet-500 h-28 w-full flex-shrink-0 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-sky-200 mt-2 mb-4"></div>
      <h1 className="font-serif font-bold text-2xl relative z-10">
        Akshara School Management System
      </h1>
      <p className="text-lg font-serif relative z-10">
        Mak Tech Studio
      </p>
    </div>
    <div className="flex-1 flex items-center justify-center bg-cover bg-center bg-fixed bg-opacity-100" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-white bg-opacity-40 border-2 border-slate-300 rounded-3xl shadow-lg px-4 sm:px-10 md:px-20 pt-6 pb-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-2xl text-center font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm text-gray-700 font-medium font-bold">School Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
              required
            />
            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium font-bold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
              required
            />
            {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password2" className="block text-sm font-medium font-bold text-gray-700">Re-enter Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${formErrors.password2 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
              required
            />
            {formErrors.password2 && <p className="text-red-500 text-sm mt-1">{formErrors.password2}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-lg shadow-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Create An Account
          </button>
        </form>
        <div className="mt-6 flex justify-between text-sm">
          <div className="flex items-center">
            <a href="#" className="text-blue-500 hover:underline font-bold" onClick={() => navigate('/')}>Go back</a>
          </div>
          <div className="flex items-center">
            <p className="text-center font-serif font-bold">
              Already have an Account?{' '}
              <a className="text-blue-800 font-serif font-bold" href="/" onClick={() => navigate('/')}>
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default RegistrationForm;
