import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('https://2h0lpm3d-8000.inc1.devtunnels.ms/User/password_reset/', { email: email }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('userToken')}`
        }
      });

      // if (response.data.success) {
      //   setMessage('OTP has been sent to your email address.');
      //   setTimeout(() => navigate('/'), 2000);
      // } else {
      //   setMessage('Error sending OTP. Please try again.');
      // }
      if (response.status === 200 && response.data.msg === "Password reset email has been sent.") {
        setMessage('OTP has been sent to your email address.');
        setTimeout(() => navigate('/NewPass12'), 2000);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Code'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Remember your password? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default FPassword;
