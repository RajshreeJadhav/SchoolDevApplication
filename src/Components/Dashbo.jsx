import React, { useState } from "react";
import { FaSchool } from "react-icons/fa6";
import { VscSearch } from "react-icons/vsc";
import { MdEdit } from "react-icons/md";

import { GrEmoji } from "react-icons/gr";

import { AiOutlineMail } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { TbFileSpreadsheet } from "react-icons/tb";
import { BiBell } from "react-icons/bi";

import { MdAssignment } from "react-icons/md";

import { FaUser } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { BiMoney } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";

const Dashbo = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="p-2 flex justify-between items-center gap-10 shadow-md">
        {/* <img src="/path/to/school-logo.png" alt="School Logo" className="h-8 mr-2" /> */}
        <div className="flex justify-around">
          <div>
            <FaSchool className="ml-14 text-2xl text-blue-400" />
            <span className="text-black  text-sm font-serif font-bold mr-2">
              Akshara Student Portal
            </span>
          </div>
          <div
            className="flex justify-end items-center gap-10"
            style={{
              width: "56vw",
            }}
          >
            <a
              href="#"
              className="text-black font-bold bg-yellow-200 hover:outline-dotted outline-2 outline-offset-2 px-3 py-2 rounded-md mr-4 shadow-md"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black font-bold  bg-orange-100 hover:outline-dotted outline-2 outline-offset-2 px-3 py-2 rounded-md mr-4 shadow-md"
            >
              Highlights
            </a>
            <a
              href="#"
              className="text-black font-bold bg-green-200 hover:outline-dotted outline-2 outline-offset-2 px-3 py-2 rounded-md mr-4 shadow-md"
            >
              Complaints Box
            </a>
            <a
              href="#"
              className="text-black font-bold  bg-rose-200 hover:outline-dotted outline-2 outline-offset-2 px-3 py-2 rounded-md mr-4 shadow-md"
            >
              Help
            </a>
          </div>
        </div>
        <div className="flex items-end gap-4 text-blue-400">
          <a href="#">
            <VscSearch className="h-8 w-8 cursor-pointer" />
          </a>
          <a href="#">
            <AiOutlineMail className="h-8 w-8 cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 h-14 flex justify-between shadow-lg rounded-md">
        <h1 className="p-2 font-sans font-bold flex gap-2 text-3xl">
          Hello Ramesh!
          <button className="h-4 w-4 p-2 mr-2">
            <GrEmoji />
          </button>
          <button className="h-4 w-4 p-2">
            <MdEdit />
          </button>
        </h1>

        <button
          onClick={handleClick}
          className="p-2  mr-10 rounded-full w-12 h-12 text-white hover:bg-white"
        >
          <FaCalendarAlt size={24} />
        </button>
        {isOpen && (
          <div className="absolute top-32  left-[80%] bg-white shadow-lg rounded-md">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          </div>
        )}
      </div>
      <div>
        {/* First div */}
        {/* <div>
          <button className="ml-2 mt-2 mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:to-yellow-500 py-10 px-12 h-36 w-48 rounded-lg">
          <span><BiBell className="text-3xl ml-6"/></span>
          <span>Notifications</span>
          </button>

          <button className=" ml-2 mt-2 mb-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-10 px-12 h-36 w-48 rounded-lg">
          <span><TbFileSpreadsheet className="text-3xl ml-8" /></span>
           <span>Student Details</span>
          </button>

          <button className="ml-2 mt-2 mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 py-10 px-12 h-36 w-48 rounded-lg">
            
          <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em">
            <path d="M14 12h1.5v2.82l2.44 1.41-.75 1.3L14 15.69V12M4 2h14a2 2 0 012 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 01-7 7c-1.91 0-3.64-.76-4.9-2H4a2 2 0 01-2-2V4a2 2 0 012-2m0 13v3h4.67c-.43-.91-.67-1.93-.67-3H4m0-7h6V5H4v3m14 0V5h-6v3h6M4 13h4.29c.34-1.15.97-2.18 1.81-3H4v3m11-2.85A4.85 4.85 0 0010.15 15c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0019.85 15c0-2.68-2.17-4.85-4.85-4.85z" />
          </svg>
          <span>Class-TimeTable</span>
        </button>
        </div>

         Second div 
        <div>
          <button className="ml-2 mb-2 bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 py-10 px-12 h-36 w-48 rounded-lg"> 
          <span><MdAssignment className=" text-3xl ml-6"/></span>
           <span>Report-Card</span>
          </button>

          <button className="ml-2 mb-2 bg-gradient-to-r from-gray-200 to-gray-300  hover:to-yellow-500 py-10 px-8 h-36 w-48 rounded-lg ">
          <FaUser className="text-3xl ml-12"/>
          <span>Student Name Student Id <br/>class sec</span>
            </button>
            {/* Student Id  class sec */}
        {/* <button className="ml-2 mb-2 bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-500 py-10 px-12 h-36 w-48 rounded-lg">
          <span><FaCalendarAlt className=" text-3xl ml-6"/> </span>
          Exam-TimeTable
            </button>
        </div>
        Third div 
        <div>
          <button className="ml-2  mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:to-yellow-500 py-10 px-12 h-36 w-48 rounded-lg">
               <IoBookSharp className="text-3xl ml-6"/>
              Library-System
          </button>

          <button className="ml-2 mb-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-10 px-12 h-36 w-48 rounded-lg">
              <BiMoney className="text-3xl ml-6"/>
              Fees & Payments
           </button>

          <button className="ml-2 mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 py-10 px-12 h-36 w-48 rounded-lg">
          <BiHistory className="text-3xl ml-6"/>
              Attendence-History
            </button>
        </div> */}
      </div>
      {/* 
second div */}

      {/* <div className=" flex justify-center items-center absolute right-[25%] top-[25%] ">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
          Add Event
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
          Edit
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Remove
        </button>
     
      <div className="absolute right-[25%] top-[35%]">
        <h2 className="text-lg font-bold items-center mt-6">Today's Tasks</h2>
        <h3>1.Homework in Science ch:1 pg:20</h3>
        <h3>2.Physics lab on Glasses</h3>
        <h3>3.Practice Hindi Grammar</h3>
      </div>

      </div> */}
      {/* changes in dashboard apply annimation */}
      <div className="min-h-screen bg-gray-100 flex ">
        <div className="grid grid-cols-3 gap-4 p-4">
          {/* <!-- First Column --> */}
          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-white font-bold">
            <BiBell className="text-3xl mb-2" />
            <span>Notifications</span>
          </button>

          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-white font-bold">
            <TbFileSpreadsheet className="text-3xl mb-2" />
            <span>Student Details</span>
          </button>

          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-white font-bold">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2em"
              width="2em"
              className="mb-2"
            >
              <path d="M14 12h1.5v2.82l2.44 1.41-.75 1.3L14 15.69V12M4 2h14a2 2 0 012 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 01-7 7c-1.91 0-3.64-.76-4.9-2H4a2 2 0 01-2-2V4a2 2 0 012-2m0 13v3h4.67c-.43-.91-.67-1.93-.67-3H4m0-7h6V5H4v3m14 0V5h-6v3h6M4 13h4.29c.34-1.15.97-2.18 1.81-3H4v3m11-2.85A4.85 4.85 0 0010.15 15c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0019.85 15c0-2.68-2.17-4.85-4.85-4.85z" />
            </svg>
            <span>Class TimeTable</span>
          </button>

          {/* <!-- Second Column --> */}
          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-white font-bold">
            <MdAssignment className="text-3xl mb-2" />
            <span>Report Card</span>
          </button>

          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-gray-700 font-bold">
            <FaUser className="text-3xl mb-2" />
            {/* <span>Student Info</span> */}
          </button>

          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-white font-bold">
            <FaCalendarAlt className="text-3xl mb-2" />
            <span>Exam TimeTable</span>
          </button>

          {/* <!-- Third Column --> */}
          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-white font-bold">
            <IoBookSharp className="text-3xl mb-2" />
            <span>Library System</span>
          </button>

          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-white font-bold">
            <BiMoney className="text-3xl mb-2" />
            <span>Fees & Payments</span>
          </button>

          <button className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 py-10 w-48 h-36 rounded-lg text-white font-bold">
            <BiHistory className="text-3xl mb-2" />
            <span>Attendance History</span>
          </button>
        </div>
      </div>

      {/* Applied Annimation on that */}
      <div className="absolute right-[22%] top-[25%] flex items-center  bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transform transition duration-300 hover:bg-blue-600 hover:scale-110">
              Add Event
            </button>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transform transition duration-300 hover:bg-blue-600 hover:scale-110">
              Edit
            </button>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transform transition duration-300 hover:bg-blue-600 hover:scale-110">
              Remove
            </button>
          </div>
          <div>
            <h2 className="text-lg font-bold text-center mb-4">
              Today's Tasks
            </h2>
            <div className="space-y-2">
              <h3 className="transition duration-500 hover:text-blue-500">
                1. Homework in Science ch:1 pg:20
              </h3>
              <h3 className="transition duration-500 hover:text-blue-500">
                2. Physics lab on Glasses
              </h3>
              <h3 className="transition duration-500 hover:text-blue-500">
                3. Practice Hindi Grammar
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashbo;
