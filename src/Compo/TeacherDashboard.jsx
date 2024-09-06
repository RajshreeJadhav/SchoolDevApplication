import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Schoollogo1 from '../Assets/schoolLogo.PNG';
import Clock from "./Clock";
import redpen from '../Assets/image2.png';
import yellowpen from "../Assets/image4.png";
import pinkpen from "../Assets/image1.png";
import greenpen from "../Assets/image3.png";
import board from "../Assets/Board16.png";
import ClassTeacher from "../Assets/Notice16.png";

// Import your components
import Home from './TeacherDashBoard/Home';
import MyClasses from './TeacherDashBoard/MyClasses';
import MySubjectsTeacher from './TeacherDashBoard/MySubjectsTeacher';
import MyPlans from './TeacherDashBoard/MyPlans';
import MyTimetableTeacher from './TeacherDashBoard/MyTimetableTeacher';
import AttendanceTeacher from './TeacherDashBoard/AttendanceTeacher';
import ExamsTeacher from './TeacherDashBoard/ExamsTeacher';
import QuizTeacher from './TeacherDashBoard/QuizTeacher';
import FinanceTeacher from './TeacherDashBoard/FinanceTeacher';
import ELibraryTeacher from './TeacherDashBoard/ELibraryTeacher';

const TeacherDashboard = () => {
  const [view, setView] = useState('teacherDashboard'); // Default view to 'teacherDashboard'

  const labels = [
    'Home', 'My Classes', 'My Subjects', 'My Plans', 'My Timetable',
    'Finance', 'Attendance', 'Exams', 'Quiz', 'E-library', 'Settings', 'Logout'
  ];
  const images = [
    redpen, greenpen, yellowpen, pinkpen,
    redpen, greenpen, yellowpen, pinkpen,
    redpen, greenpen, yellowpen, pinkpen
  ];

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  
  const navigate = useNavigate();
  const handleButtonClick = (label) => {
    if (label === 'My Classes') {
      navigate('/teachermyclasses');
    } else {
      setView(label);
    }
  };
  return (
    <div className='px-4 bg-blue-200 min-h-screen'>
      {/* First Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg shadow-purple-400 sticky top-0 z-50">
        {/* Left Side: School Icon */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Schoollogo1} alt="School logo" className="w-12 h-12 rounded-full" />
            <span className="text-lg md:text-2xl lg:text-3xl font-medium font-berkshire">
              Akshra Student Portal
            </span>
          </Link>
        </div>
        {/* Center: Teacher Dashboard */}
        <div className="flex-grow flex items-center justify-center">
          <Link to="/teacherdash">
            <button
              className="text-2xl md:text-3xl lg:text-4xl font-semibold font-berkshire bg-gradient-to-r from-indigo-400 to-cyan-400 text-white p-2 rounded-lg"
              onClick={() => setView('teacherDashboard')}
            >
              Teacher Dashboard
            </button>
          </Link>
        </div>
        {/* Right Side (optional) */}
        <div className="flex items-center">
          {/* Add any additional elements like profile icon, notifications, etc. */}
        </div>
      </nav>

      {/* Second Navbar */}
      <div className='p-2 '>
        <nav className="flex items-center justify-between p-2 bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-lg shadow-teal-400 sticky top-16 z-40">
          {/* Left Side: Digital Clock */}
          <div className="flex items-center space-x-4">
            <Clock />
            <span className="text-2xl font-semibold font-fredericka">Welcome Back..Aradhana!!</span>
          </div>
        </nav>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-2 ">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-1">
          {/* First Div: Twelve Images Vertically */}
          <div className="p-2 lg:col-span-2 flex flex-col justify-center items-center bg-blue-300 rounded-b-3xl">
            {images.map((image, index) => (
              <button
                key={index}
                className="relative mb-2 w-full h-20 md:h-32 lg:h-28 flex items-center justify-center text-center bg-blue-800 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => handleButtonClick(labels[index])}
              >
                <div className="absolute inset-0 flex items-center justify-center text-center text-black text-sm md:text-base lg:text-lg font-bold font-handlee">
                  {labels[index]}
                </div>
              </button>
            ))}
          </div>

          {/* Conditional Rendering of Second and Third Div */}
          {(['teacherDashboard', 'Home'].includes(view)) && (
            <>
              {/* Second Div: Content Based on View */}
              <div className="bg-white p-4 shadow-lg rounded-lg lg:col-span-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center border-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-300 p-2 font-berkshire">
                  Timetable
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 p-2">
                    {getCurrentDate()}
                  </p>
                </h2>

                <table className="min-w-full bg-blue-100 border border-gray-600">
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold font-just-another-hand">8:45<br />to<br />9:30</td>
                      <td className="pl-2 p-2 text-purple-700 bg-pink-200 text-2xl text-center font-bold font-just-another-hand">
                        Biology class 8B
                        <div className="text-base text-gray-700 mt-2 font-just-another-hand">
                          Topic: Cardio Vascular System
                          <br />
                          Homework due: Heart Diagram
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-700">
                      <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold font-just-another-hand">9:35 <br /> to <br /> 10:20</td>
                      <td className="pl-2 p-2 text-purple-700 bg-pink-200 text-2xl text-center font-bold font-just-another-hand">
                        Chemistry Class 9A
                        <div className="text-base text-gray-700 mt-2">
                          Topic: System
                          <br />
                          Homework due: Heart Diagram
                        </div>
                        <div className="text-base text-gray-700 mt-2"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold font-just-another-hand">10:30 <br /> to  <br /> 11:15</td>
                      <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold font-just-another-hand">
                        Exam supervisor
                        <div className="text-base text-gray-700 mt-2">
                          Class:10B

                        </div>
                        <div className="text-base text-gray-700 mt-2"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold font-just-another-hand">11:15 <br /> to <br /> 12:00</td>
                      <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold font-just-another-hand">
                        Exam supervisor
                        <div className="text-base text-gray-700 mt-2">
                          Class:10B

                        </div>
                        <div className="text-base text-gray-700 mt-2"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold "></td>
                      <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold font-just-another-hand">
                        Exam supervisor
                        <div className="text-base text-gray-700 mt-2"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold font-just-another-hand">1:45 <br /> to  <br />3:00</td>
                      <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold">
                        <div className="text-base text-gray-700 mt-2"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold font-just-another-hand">1:45</td>
                      <td className="pl-2 p-2 text-purple-700 bg-pink-200 text-2xl text-center font-bold font-just-another-hand">
                        Chemistry Lab Class 9A
                        <div className="text-base text-gray-700 mt-2">
                          Topic:Iodine Test
                          <br />
                          Homework due: Lab Records Correction
                        </div>
                        <div className="text-base text-gray-700 mt-2"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="w-1/5 pr-2 border-r border-gray-500 p-2 text-center bg-blue-300 text-lg font-bold"></td>
                      <td className="pl-2 p-2 bg-pink-200 text-2xl text-center font-bold">

                        <div className="text-base text-gray-700 mt-2"></div>

                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex items-center justify-center">
                  <button className="bg-rose-400 font-handlee font-bold flex flex-col items-center justify-center rounded-2xl text-lg w-1/3 h-14 mt-4">
                    Click for more
                  </button>
                </div>
              </div>

              {/* Third Div: Notifications and Class Teacher Page */}
              <div className="bg-gradient-to-r from-amber-400 to-yellow-700 p-4 shadow-lg rounded-lg lg:col-span-3 rounded-b-3xl">
                <div className="relative w-full">
                  <img src={board} alt="Board" className="w-full max-w-4xl object-cover m-auto" />
                  {/* <div className="absolute inset-0 flex items-start justify-center p-4">
                    <textarea
                      placeholder="Type your text here"
                      className="bg-white border border-gray-300 rounded-lg px-4 py-3 w-72 max-w-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-16"
                      rows="4"
                    ></textarea>
                  </div> */}
                </div>

                <div className="relative w-full">
                  <img src={ClassTeacher} alt="Class Teacher Page" className="w-full h-auto object-cover" />

                  <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 p-4 md:p-6 lg:p-8">
                    <h2 className="bg-lime-300 border-4 border-lime-500 rounded-2xl px-4 py-4 text-xl md:text-2xl font-berkshire text-center">
                      Class Teacher Page
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                      <Link to="/attendance">
                        <button className="bg-gradient-to-r from-orange-300 to-yellow-300 rounded-xl px-4 py-2 w-full text-base md:text-lg font-just-another-hand">
                          Attendance
                        </button>
                      </Link>
                      <button className="bg-gradient-to-r from-orange-300 to-yellow-300 rounded-xl px-4 py-2 w-full text-base md:text-lg font-just-another-hand">
                        Quick quiz
                      </button>
                      <button className="bg-gradient-to-r from-orange-300 to-yellow-300 rounded-xl px-4 py-2 w-full text-base md:text-lg font-just-another-hand">
                        Class Exams
                      </button>
                      <button className="bg-gradient-to-r from-orange-300 to-yellow-300 rounded-xl px-4 py-2 w-full text-base md:text-lg font-just-another-hand">
                        Report card
                      </button>
                      <button className="bg-gradient-to-r from-orange-300 to-yellow-300 rounded-xl px-4 py-2 w-full text-base md:text-lg font-just-another-hand">
                        Class Agenda
                      </button>
                      <button className="bg-gradient-to-r from-orange-300 to-yellow-300 rounded-xl px-4 py-2 w-full text-base md:text-lg font-just-another-hand">
                        Special activities
                      </button>
                    </div>
                  </div>
                </div>


              </div>


            </>
          )}

          {(!['teacherDashboard', 'Home'].includes(view)) && (
            <div className="bg-white p-4 shadow-lg rounded-lg lg:col-span-8">
              {/* Render the component based on the view */}
              {/* {view === 'My Classes' && <MyClasses />} */}
              {/* {view === 'My Classes' && <TeacherMyClasses/>} */}
              {view === 'My Subjects' && <MySubjectsTeacher />}
              {view === 'My Plans' && <MyPlans />}
              {view === 'My Timetable' && <MyTimetableTeacher />}
              {view === 'Finance' && <FinanceTeacher />}
              {view === 'Attendance' && <AttendanceTeacher />}
              {view === 'Exams' && <ExamsTeacher />}
              {view === 'Quiz' && <QuizTeacher />}
              {view === 'E-library' && <ELibraryTeacher />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
