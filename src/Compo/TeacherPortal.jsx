import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faChalkboardTeacher, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import myImage from "../Assets/Teacher.png";
import { FaSchool } from 'react-icons/fa';

const TeacherPortal = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // this is for todays date
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };


  return (
    <div className="p-2 bg-gray-300">
      <div className="flex justify-between items-center bg-gradient-to-r from-orange-300 to-red-500  shadow-lg shadow-orange-600 py-4 px-6">
        {/* Left Section */}
        <div className="flex items-center h-16 p-2 ml-40">
          <div>
            <FaSchool className="ml-28 text-3xl text-blue-400" />
            <span className="text-black  text-2xl font-serif font-bold mr-2">
              Akshara Student Portal
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center text-white text-lg">
          <span className="text-black text-3xl  mr-64 mt-64 font-serif font-bold">
            Teacher's Portal
          </span>
        </div>
      </div>

      <div className="p-2">
        <nav className="bg-orange-200 font-bold  flex justify-around items-center shadow-lg shadow-orange-600">
          <div><Clock /></div>
          <div className="flex items-center space-x-4">

            <div className="text-lg font-bold flex items-center space-x-8">

              {/* <span>Time: {time.toLocaleTimeString()}</span> */}
            </div>
            <button className="bg-green-400 hover:bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded  rounded-lg text-2xl shadow-lg shadow-green-600 w-48 h-14">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </button>
            <button className="bg-lime-400 hover:bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded rounded-lg text-2xl shadow-lg shadow-lime-600 w-48 h-14">
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              My Classes
            </button>
            <button className="bg-amber-400 hover:bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded  rounded-lg text-2xl shadow-lg shadow-amber-600 w-48 h-14">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
              E-learning
            </button>
            <button className="bg-yellow-300 hover:bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded   rounded-lg text-2xl shadow-lg shadow-yellow-600 w-48 h-14">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Messages
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div>
                <div className="font-bold text-2xl">Aradhana Sharma</div>
                <div className="font-bold text-2xl">AS12342021</div>
              </div>
              <img
                src={myImage}
                alt="Profile"
                className="w-32 h-32 rounded-full border border-gray-200 bg-white"
              />
            </div>
          </div>
        </nav>
      </div>

      {/* 3rd div */}
      <div className="flex flex-col md:flex-row gap-4 p-2">
        {/* First Column */}
        <div className="md:w-1/6 bg-gray-100 p-4">
          <div className="mb-4">

            <ul>
              <li className="py-2  bg-orange-300 h-12 w-full text-center font-bold text-lg ">Syllabus</li>
              <li className="py-2 bg-amber-100 h-8 w-full "></li>
              <li className="py-2 py-1 bg-green-300 h-12 w-full text-center font-bold text-lg">Finance</li>
              <li className="py-2 bg-amber-100 h-8 w-full text-center"></li>
              <li className="py-2 bg-orange-300 h-12 w-full text-center font-bold text-lg">My Profile</li>

              <li className="py-2 bg-amber-100 h-8 w-full text-center text-lg"></li>
              <li className="py-2 bg-green-300 h-12 w-full text-center font-bold text-lg">My Reports</li>
              <li className="py-2 bg-amber-100 h-8 w-full text-center text-lg"></li>
              <li className="py-2 bg-orange-300 h-12 w-full text-center font-bold text-lg">Calender</li>
              <li className="py-2 bg-amber-100 h-8 w-full text-center text-lg"></li>
              <li className="py-2 bg-green-300 h-12 w-full text-center font-bold text-lg">Leaves Tracker</li>
              <li className="py-2 bg-amber-100 h-8 w-full text-center text-lg"></li>
              <li className="py-2 bg-orange-300 h-12 w-full text-center font-bold text-lg">Settings</li>
              <li className="py-2 bg-amber-100 h-8 w-full text-center text-lg"></li>
            </ul>
          </div>
        </div>

        {/* Second Column */}
        <div className="md:w-2/5 bg-gray-100 p-4">
          <div className="mb-4">
            <p className="text-lg font-bold mb-1 bg-red-500 text-center w-full p-2">My Timetable</p>
            <p className="text-lg font-bold mb-2 bg-rose-300 text-center p-2">{getCurrentDate()}</p>
            <table className="min-w-full bg-blue-100 border border-gray-600">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold">8:45</td>
                  <td className="pl-2 p-2 text-purple-700 bg-pink-200 text-2xl  text-center font-bold">Biology class 8B</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold">9:30</td>
                  <td className="pl-2 p-2 bg-pink-200 text-lg text-center font-bold"></td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold">10:15</td>
                  <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold">Exam supervisor</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold">11:15</td>
                  <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold">Exam supervisor</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold">12:00</td>
                  <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold">Exam supervisor</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold">1:00</td>
                  <td className="pl-2 p-2 bg-pink-200 text-2xl  text-center font-bold"></td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold">1:45</td>
                  <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold">Chemistry lab 9B</td>
                </tr>
              </tbody>
            </table>
            <div className="p-2 mt-16 w-1/4 h-12 flex justify-center items-center absolute top-[100%] left-[22%]">
              <button className="bg-rose-300 rounded-lg  text-lg text-center w-1/2 h-14" >Click for more</button>
            </div>
          </div>
        </div> 

        {/* Third Column */}
        <div className="md:w-1/4 bg-gray-100 p-4 flex flex-col h-full">
  <div className="mb-4 flex-grow">
    <div className="bg-green-200">
      <p className="text-lg font-bold mb-2 text-center">Class / Subjects Plan</p>
      <p className="font-bold text-center text-purple-500 text-lg">Biology class 8B</p>
    </div>
    <div className="mb-2 flex p-1">
      <p className="text-lg  mt-2 font-bold w-16">Topic:</p>
      <p className="bg-yellow-200 ml-2 p-2 w-64">Cardio Vascular System</p>
    </div>
    <div className="mb-2 flex p-1">
      <p className="text-lg  mt-2 font-bold w-16">Book:</p>
      <p className="bg-yellow-200 ml-2 p-2 w-64">NCERT</p>
    </div>
    <div className="mb-2">
      <p className="font-bold text-lg">Homework's Due:</p>
      <p className="bg-yellow-200 p-2 w-full h-12"></p>
    </div>
    <div className="mb-2">
      <p className="font-bold text-lg">Detailed Study:</p>
      <p className="bg-yellow-200 p-2 w-full h-28"></p>
    </div>
    <div className="mb-2">
      <p className="font-bold text-lg">References:</p>
      <p className="bg-yellow-200 p-2 w-full h-12"></p>
    </div>
  </div>
  <div className="flex justify-between mt-auto">
    <button className="bg-blue-500 text-white px-6 py-2 mt-7 rounded text-lg">Edit</button>
    <button className="bg-green-500 text-white px-6 py-2 mt-7 rounded text-lg">Submit</button>
  </div>
</div>

        {/* Fourth Column */}
        <div className="md:w-1/4 bg-gray-100 p-4">
          <div className="mb-4 bg-fuchsia-400 p-2">
            <p className="text-2xl font-bold mb-2 text-center">My Class </p>
            <p className="text-2xl font-bold mb-2 text-center"> 10 A</p>
          </div>

          <div className="bg-cyan-200">
            <p className="text-2xl font-bold mb-2 text-center">Class</p>
            <p className="text-2xl font-bold mb-2 text-center border-b-4 border-black">Attendence</p>
            <p className="text-2xl font-bold mb-2 text-center">Class Reports</p>
          </div>

          <div className="mb-4 bg-fuchsia-400 p-2 flex items-center justify-center h-28">
            <p className="text-2xl font-bold mb-2 text-center ">Notifications</p>
          </div>
          <div>
            <ul className="list-none">
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
                Exam Notifications
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
                PTA Meeting on June 19, 2024
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>
  );
};

export default TeacherPortal;
