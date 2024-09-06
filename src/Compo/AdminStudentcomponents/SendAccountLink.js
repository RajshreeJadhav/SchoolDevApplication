import React, { useState } from "react";

import { HiChevronDoubleRight } from "react-icons/hi";
const SendAccountLink = () => {
    //   const [email, setEmail] = useState("");
    //   const [fullName, setFullName] = useState("");
    //   const [studentID, setStudentID] = useState("");
    //   const [dob, setDob] = useState("");
    //   const [userRole, setUserRole] = useState("Student");
    //   const [agreeTerms, setAgreeTerms] = useState(false);
    //   const [provideInfo, setProvideInfo] = useState(false);

    return (
        <div className="bg-sky-100 min-h-screen flex items-center justify-center">
  <div className="mt-2 bg-purple-200 p-6 md:p-8 rounded-lg shadow-md max-w-4xl w-full mx-auto">
    <h2 className="text-center font-bold text-xl md:text-2xl mb-4">Send Account Link</h2>
    <div className="flex justify-center">
      <form className="space-y-4 mb-4 w-full md:w-3/4">
        {/* Email Field */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/3 font-bold text-black md:mr-2">Email:</label>
          <input
            type="email"
            className="md:w-1/2 bg-white text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Full Name Field */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/3 font-bold text-black md:mr-2">Full Name:</label>
          <input
            type="text"
            className="md:w-1/2 bg-white text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Student ID Field */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/3 font-bold text-black md:mr-2">Student ID:</label>
          <input
            type="text"
            className="md:w-1/2 bg-white text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your student ID"
          />
        </div>

        {/* Date of Birth Field */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/3 font-bold text-black md:mr-2">Date of Birth:</label>
          <input
            type="date"
            className="md:w-1/2 bg-white text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* User Role Field */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/3 font-bold text-black md:mr-2">User Role:</label>
          <select className="md:w-1/2 bg-white text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Admin</option>
            <option>Student</option>
            <option>Teacher</option>
            <option>Parents</option>
          </select>
        </div>
      </form>
    </div>

    {/* Terms and Conditions */}
    <div className="mb-2">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <span>
          Agree to the terms and conditions of Akshara School Management System and The School
        </span>
      </label>
    </div>

    {/* Accurate Information */}
    <div className="mb-2">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <span>
          I agree that I am providing 100% accurate information which is legally appropriate in this form.
        </span>
      </label>
    </div>

    {/* Upload ID */}
    <div className="mb-6">
      <label className="block mb-1">
        Upload valid ID (Passport, Driving License, Aadhar card, or Birth Certificate)
      </label>
      <input
        type="file"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
      />
    </div>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full w-full md:w-auto">
        Send 1-time app link
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full w-full md:w-auto">
        Close
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-full flex items-center justify-center space-x-2 w-full md:w-auto">
        <span>Proceed to next step</span>
        <HiChevronDoubleRight />
      </button>
    </div>
  </div>
</div>



    );
};

export default SendAccountLink;
