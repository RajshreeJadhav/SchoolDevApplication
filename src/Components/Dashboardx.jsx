import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

import { GrEmoji } from "react-icons/gr";

import myImage from "../Assets/Rectshape.jpg";
import { TbFileSpreadsheet } from "react-icons/tb";
import { BiBell } from "react-icons/bi";

import { MdAssignment } from "react-icons/md";

import { IoBookSharp } from "react-icons/io5";
import { BiMoney } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
// import DateTime from 'react-datetime'

const Dashboardx = () => {
  // className=" p-2 flex justify-center items-center gap-4

  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className=" p-2 flex justify-around items-center gap-10">
        {/* <img src="/path/to/school-logo.png" alt="School Logo" className="h-8 mr-2" /> */}

        <div>
          <FaSchool className="ml-14 text-2xl text-blue-400" />
          <span className="text-black  text-sm font-serif font-bold mr-2">
            Akshara Student Portal
          </span>
          <a
            href="#"
            className="text-black font-bold bg-yellow-200 hover:outline-dotted outline-2 outline-offset-2 px-4 py-2 rounded-md mr-4"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black font-bold  bg-orange-100 hover:outline-dotted outline-2 outline-offset-2 px-4 py-2 rounded-md mr-4 "
          >
            Highlights
          </a>
          <a
            href="#"
            className="text-black font-bold bg-green-200 hover:outline-dotted outline-2 outline-offset-2 px-4 py-2 rounded-md mr-4"
          >
            Complaints Box
          </a>
          <a
            href="#"
            className="text-black font-bold  bg-rose-200 hover:outline-dotted outline-2 outline-offset-2 px-4 py-2 rounded-md mr-4"
          >
            Help
          </a>
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

      <div className="bg-sky-100 h-14 flex justify-between">
        <h1 className="p-2 font-sans font-bold flex gap-2 text-3xl">
          HELLO RAMESH
          <button className="h-4 w-4 p-2 mr-2">
            <GrEmoji />
          </button>
          <button className="h-4 w-4 p-2">
            <MdEdit />
          </button>
        </h1>

        <button
          onClick={handleClick}
          className="p-2  mr-10 rounded-full w-12 h-12 hover:bg-white"
        >
          <FaCalendarAlt size={24} />
        </button>
        {isOpen && (
          <div className="absolute top-28  left-3/4 bg-white shadow-lg rounded-md">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          </div>
        )}
      </div>

      <div className=" flex justify-center items-center absolute right-[28%] top-[25%] </div>">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
          Add Event
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
          Edit
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Remove
        </button>
      </div>

      <div className="absolute right-[28%] top-[35%]">
        <h2 className="text-lg font-bold items-center mt-2">Today's Tasks</h2>
        <h3>1.Homework in Science ch:1 pg:20</h3>
        <h3>2.Physics lab on Glasses</h3>
        <h3>3.Practice Hindi Grammar</h3>
      </div>

      <div className="flex ml-2 h-screen h-full">
        {/* Add your image */}
        <img
          src={myImage}
          alt="Description of your image"
          className="w-[45%] h-[70%] ml-2"
        />
      </div>

      <div className="absolute top-[34%] left-[23%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-sm font-bold font-serif w-40 h-40 flex items-center justify-center flex-col">
          <TbFileSpreadsheet className="text-3xl" />
          Student Details
        </h1>
      </div>
      <div className="absolute top-[34%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-sm font-bold font-serif flex items-center justify-center px-2 flex-col">
          <BiBell className="text-3xl mr-2" />
          Notifications
        </h1>
      </div>

      <div className="absolute top-[34%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-sm font-bold font-serif w-40 h-40 flex items-center justify-center flex-col">
          <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em">
            <path d="M14 12h1.5v2.82l2.44 1.41-.75 1.3L14 15.69V12M4 2h14a2 2 0 012 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 01-7 7c-1.91 0-3.64-.76-4.9-2H4a2 2 0 01-2-2V4a2 2 0 012-2m0 13v3h4.67c-.43-.91-.67-1.93-.67-3H4m0-7h6V5H4v3m14 0V5h-6v3h6M4 13h4.29c.34-1.15.97-2.18 1.81-3H4v3m11-2.85A4.85 4.85 0 0010.15 15c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0019.85 15c0-2.68-2.17-4.85-4.85-4.85z" />
          </svg>
          Class-TimeTable
        </h1>
      </div>

      <div className="absolute top-[57%] left-[24%] p-4 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-sm font-bold font-serif w-36 h-36 flex items-center justify-center px-2 py-2">
          Student Name <br /> Student Id <br /> class sec
        </h1>
      </div>

      <div className="absolute top-[55%] left-[8%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-sm font-bold font-serif flex items-center justify-center px-2">
          <MdAssignment className=" text-3xl mr-2" />
          Report <br />
          Card
        </h1>
      </div>

      <div className="absolute top-[55%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-sm font-bold font-serif flex items-center justify-center px-2">
          <FaCalendarAlt className=" text-3xl mr-2" />
          Exam <br />
          TimeTable
        </h1>
      </div>

      <div className="absolute top-[78%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-sm font-bold font-serif flex items-center justify-center px-2">
          <IoBookSharp className="text-3xl mr-2" />
          Library
          <br /> System
        </h1>
      </div>

      <div className="absolute top-[78%] left-[24%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-sm font-bold font-serif w-40 h-40 flex items-center justify-center flex-col">
          <BiMoney className="text-3xl mr-2" />
          Fees & Payments
        </h1>
      </div>

      <div className="absolute top-[78%] left-[36%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text- font-bold font-serif flex items-center justify-center px-2 ml-4">
          <BiHistory className="text-4xl mr-2" />
          Attendence
          <br />
          History
        </h1>
      </div>

      <div className="flex  bg-black w-full flex justify-center py-4">
        {/* Left side navigation */}

        <div>
          <div>
            <h1 className="text-gray-400 ml-36">
              &copy; Copyright Mak Tech Studio
            </h1>
          </div>
          <div>
            <a href="#" className="text-white ml-2 ">
              Home
            </a>
            <a href="#" className="text-white ml-2">
              Fees
            </a>
            <a href="#" className="text-white ml-2">
              Events
            </a>
            <a href="#" className="text-white ml-2">
              Library
            </a>
            <a href="#" className="text-white ml-2">
              Contact Us
            </a>
            <a href="#" className="text-white ml-2">
              About Us
            </a>
            <a href="#" className="text-white ml-2 ">
              About School
            </a>
          </div>
        </div>

        {/* Right side navigation */}
        <div className="flex flex-col mr-2"></div>
      </div>

      {/* <div className="flex justify-between bg-black ">
  {/* Left side navigation 
  <div className="flex flex-col ml-2 ">
    <a href="#" className="text-white ">Home</a>
    <a href="#" className="text-white ">Fees</a>
    <a href="#" className="text-white ">Events</a>
    <a href="#" className="text-white ">Library</a>
  </div>

  <div className="flex flex-col items-center mb-4">
    <span className="text-gray-400 mt-16">&copy; Copyright Mak Tech Studio</span>
    
  </div> */}
      {/* Right side navigation */}
      {/* <div className="flex flex-col mr-2">
    <a href="#" className="text-white">Contact Us</a>
    <a href="#" className="text-white">About Us</a>
    <a href="#" className="text-white ">About School</a>
  </div>
  
</div> */}
    </nav>
  );
};
export default Dashboardx;
