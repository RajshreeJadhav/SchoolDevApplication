import React, { useEffect, useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../Assets/lp.jpeg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    "email": "",
    "password": ""
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("LoginData", loginData);
    // Validation logic
    // const errors = {};
    // if (!email) errors.email = "Email is required";
    // if (!password) errors.password = "Password is required";

    // if (Object.keys(errors).length === 0) {
    //   // Proceed with login
    //   console.log("Logging in...");
    //   navigate('/dashboard');
    // } else {
    //   setErrors(errors);
    // }

    axios.post("https://2h0lpm3d-8000.inc1.devtunnels.ms/User/login/", loginData, {
      headers: {
        Accept: "application/json"
      }
    })

      .then((res) => {
        if (res) {
          sessionStorage.setItem("userToken", res.data.token.access);
          if (res.data.user_type === "admin") navigate('/admin')
          else if (res.data.user_type === "teacher") navigate('/teacherdash')
          else if (res.data.user_type === "student") navigate('/dashboarddemo')
          else alert("User Role Not Found!")
        }
      })

      .catch(err => {
        alert("error");
        console.log(err);
      })
  };

  const handleLoginDataChange = (e) => {
    const clone = { ...loginData };
    // clone[e.target.name] = e.target.value;
    setLoginData((val) => ({
      ...val,
      [e.target.name]: e.target.value
    }));
    // setLoginData(clone);
  };

  // useEffect(() => {
  //   console.log(loginData)
  // }, [loginData]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <div className="bg-violet-500 bg-fixed h-28 w-full relative sticky top-0 flex-shrink-0">
        <div className="absolute inset-0 bg-sky-200 bg-fixed mt-2 mb-4"></div>
        <h1 className="font-serif font-bold text-2xl text-center p-2 relative z-10">
          Akshara School Management System
          <div>
            <p className="text-center text-lg font-serif">Mak Tech Studio</p>
          </div>
        </h1>
      </div>

      {/* Main content */}
      <div
        className="flex-grow flex justify-center items-center bg-cover bg-center bg-fixed bg-opacity-100"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-white bg-opacity-40 border-glitter rounded-3xl shadow-md px-6 sm:px-10 md:px-20 pt-6 pb-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl animate-fade-in">
          <h2 className="text-2xl font-serif font-bold text-center mb-4">
            LOGIN
          </h2>
          {/* <form onSubmit={() => handleLogin}> */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-serif font-bold mb-2"
              htmlFor="email"
            >
              Email Id:
            </label>
            <input
              className={`shadow appearance-none border ${errors.email ? "border-red-500" : "border-gray-200"
                } rounded w-full py-2 px-3 bg-gray-100 text-gray-700`}
              id="email"
              type="email"
              placeholder="Email Address"
              value={loginData.email}
              name="email"
              // onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => handleLoginDataChange(e)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-serif font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border ${errors.password ? "border-red-500" : "border-gray-200"
                } rounded w-full py-2 px-3 bg-gray-100 text-gray-700`}
              id="password"
              type="password"
              placeholder="Password"
              value={loginData.password}
              name="password"
              // onChange={(e) => setPassword(e.target.value)}
              onChange={(e) => handleLoginDataChange(e)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>

          <div className="w-full mb-6">
            {/* <Link to="/Dashboarddemo">
                <input
                  type="button"
                  value="Log In"
                  className="rubber-button bg-orange-400 border border-black w-full py-2 px-2 sm:px-3 text-black font-serif font-bold text-lg sm:text-xl focus:outline-none focus:shadow-outline"
                />
              </Link> */}
            <button className="rubber-button bg-orange-400 border border-black w-full py-2 px-2 sm:px-3 text-black font-serif font-bold text-lg sm:text-xl focus:outline-none focus:shadow-outline" type="submit" onClick={(e) => handleLogin(e)}>Log In</button>
          </div>
          {/* </form> */}
          <p className="text-center mt-4 font-serif">
            Don't have an Account?{" "}
            {/* <Link to="/register" className="text-blue-800 font-serif">
              Register
            </Link> */}
          </p>
          <div className="text-center">
          <Link to="/fpass" className="text-blue-800 font-serif">
          Forgot Password/Email Id?
            </Link>
           
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="bg-black h-14 w-full flex-shrink-0 flex items-center justify-center">
        <div>
          <h1 className="text-white text-center">Copyright @Mak Tech Studio</h1>
          <a href="#" className="text-white text-center">
            V1.0
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
