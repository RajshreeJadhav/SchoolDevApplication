// Login.js

import React, { useState } from 'react';
import backgroundImage from '../Assets/lp.jpeg';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';

    if (Object.keys(errors).length === 0) {
      // Proceed with login
      console.log('Logging in...');
    } else {
      setErrors(errors);
    }
  };

  return (
   <div>
    {/* your header section */}

    <div className='bg-violet-500 bg-fixed h-24 w-full relative sticky top-0'>
      <div className='absolute inset-0 bg-sky-100 bg-fixed mt-2 mb-4'></div>
      <h1 className='font-serif font-bold text-2xl text-center p-2 relative z-10'>
        Akshara School Management System
         
        <div><p className='text-center text-lg font-serif'>Mak Tech Studio</p></div>
      </h1>
    </div>


    <div className="flex justify-center h-screen h-full mb-3 bg-cover bg-center bg-fixed bg-opacity-100" style={{ backgroundImage: `url(${backgroundImage})` }}>
    
    {/* Your login form or other content */}
    {/* border border-black rounded-3xl */}
    {/* border-glitter rounded-3xl */}
    {/* shadow-md rounded px-20 pt-6 pb-6 mt-2 h-4/5 animate-fade-in */}
      <div className="bg-white bg-opacity-40 border-glitter rounded-3xl shadow-md rounded px-20 pt-6 pb-6 mt-2 h-[75%] animate-fade-in">
        <h2 className="text-2xl font-serif font-bold text-center mb-4">LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <label className="block text-gray-700 text-xl font-serif font-bold mb-2" htmlFor="email">
              Email Id:
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              } rounded w-full py-2 px-3 bg-gray-100 text-gray-700`}
              id="email"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-2">
            <label className="block text-gray-700  text-xl font-serif font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              } rounded w-full py-2 px-3 bg-gray-100 text-gray-700 `}
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold">
              <input
                className="  mr-2 leading-tight"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-sm font-serif">Remember Me</span>
            </label>
          </div>
          <div className="flex justify-center">
            <button
              className=" bg-orange-400 border border-black w-full py-2 px-3 text-black font-serif font-bold text-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-center mt-4 font-serif">
          Don't have an Account?{' '}
          <a className="text-blue-800 font-serif" href="#">
            Register
          </a>
        </p>
        <div>
          <a className="text-black-500 font-serif"  href="#">
          Forgot Password/Email Id?
          </a>
          </div>
      </div> 
    </div>

    <div className='bg-black absolute h-14 inset-x-0'>
       <div >
       {/* text-gray-400  */}
           <h1 className="text-white ml-2">Copyright @Mak Tech Studio</h1>
           <a href="#" className="text-white ml-2 ">V1.0</a>
        </div>
    </div>
    </div>
  );
};

export default LogInPage ;
