import React, { useState } from 'react';
import Schoollogo1 from '../Assets/schoolLogo.PNG';
import './ClassTimetable.css';
import { Link,useNavigate } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import { FaSchool, FaBell, FaEnvelope, FaCog, FaBars,FaTimes  } from "react-icons/fa";
// import { FaCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar'; // Assuming you have a calendar component or use 'react-calendar'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayComponent from './DayComponent';
import WeekComponent from './WeekComponent';
import MonthComponent from './MonthComponent';
import { FaChevronUp } from "react-icons/fa";

const ClassTimetable = () => {
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  // this is for calender
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  // const [isCalendarOpen, setIsCalendarOpen] = useState();

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };


  // this if for day week month 
  const [isDayVisible, setIsDayVisible] = useState(false);
  const [isWeekVisible, setIsWeekVisible] = useState(true);
  const [isMonthVisible, setIsMonthVisible] = useState(false);


  const toggleVisibility = (component) => {
    setIsDayVisible(component === 'day');
    setIsWeekVisible(component === 'week');
    setIsMonthVisible(component === 'month');
  };

  //for collapsible effect
  const [expandedSubject, setExpandedSubject] = useState(null);

  const toggleDetails = (index) => {
    setExpandedSubject(expandedSubject === index ? null : index);
  };

  // Your existing subject data
  const subjects = [
    { name: 'ENGLISH', details: 'English Grammar - verbs, prepositions\nChapter 2: Lion And Hare' },
    { name: 'MATHEMATICS', details: 'Mathematics details' },
    { name: 'SCIENCE', details: 'Science details' },
    { name: 'SOCIAL SCIENCE', details: 'Social Science details' },
    { name: 'HINDI', details: 'Hindi details' },
    { name: 'LANGUAGE', details: 'Language details' },
    { name: 'SPORTS', details: 'Sports details' },
    { name: 'COMPUTERS', details: 'Computers details' },
    { name: 'LIBRARY', details: 'Library details' }
  ];
  // Mapping between subject names and Tailwind CSS classes
  const subjectColorClasses = {
    'ENGLISH': 'bg-lime-300',
    'MATHEMATICS': 'bg-yellow-300',
    'SCIENCE': 'bg-orange-300',
    'SOCIAL SCIENCE': 'bg-rose-400',
    'HINDI': 'bg-pink-300',
    'LANGUAGE': 'bg-blue-400',
    'SPORTS': 'bg-cyan-300',
    'COMPUTERS': 'bg-green-300',
    'LIBRARY': 'bg-red-400',
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/my-subjects');
  };

  return (
    <div>
      {/* Navbar for Akshara Student Portal */}
     
      <div className='px-2'>
      <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:to-purple-600 px-3 py-2 rounded-lg mr-4 shadow-lg shadow-indigo-800 p-1">
        <nav className="flex justify-between items-center p-1">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <Link to="/dashboarddemo">
                <img src={Schoollogo1} alt="Description of image" className="w-14 h-14 rounded-full" />
              </Link>
              <span className="text-lg ml-2 md:ml-4">Akshra Student Portal</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto text-white">
            {isSearchOpen && (
              <div className="w-72">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-72 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            )}
            <a href="#" onClick={toggleSearch}>
              <VscSearch className="h-8 w-8 cursor-pointer" />
            </a>
            <FaBell className="mx-2 text-xl text-white cursor-pointer" />
            <FaEnvelope className="mx-2 text-xl text-white cursor-pointer" />
            <FaCog className="mx-2 text-xl text-white cursor-pointer" />

            {/* Menu Icon Toggle */}
            {menuOpen ? (
              <FaTimes
                className="text-white text-lg cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FaBars
                className="text-white text-lg cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </nav>
      </div>

      {/* Collapsible Menu Outside Navbar */}
      {menuOpen && (
        <div className="absolute top-20 right-0 mt-2 mr-4 p-2 bg-white z-20">
          <button
      className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm"
      onClick={handleClick}
    >
    My Subjects
    </button>
        </div>
      )}
    
    
        {/* NavBar for TimeTable */}
        <div className='px-1 py-2'>
          <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-2 rounded-lg mr-4 shadow-lg shadow-fuchsia-800 p-1">
            <nav className="flex justify-between items-center p-1">


              <div className="flex items-center gap-4">
               
                
                <span className="text-white text-2xl font-serif font-bold">
                  T I M E T A B L E
                </span>
              </div>

              <div className="flex-1 flex justify-center  items-center gap-6">

                <button
                  className="animated-button p-4 h-10 w-36 font-bold text-lg text-white bg-gradient-to-r from-red-500 to-orange-500 shadow-lg shadow-orange-600 rounded-lg"
                  onClick={() => toggleVisibility('day')}
                >
                  Day
                </button>
                <button
                  className="animated-button p-4  h-10 w-36  font-bold text-lg text-white bg-gradient-to-r from-rose-400 to-red-500 shadow-lg shadow-red-600  rounded-lg"
                  onClick={() => toggleVisibility('week')}
                >
                  Week
                </button>
                <button
                  className="animated-button p-4 h-10 w-36  font-bold text-lg text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-600 rounded-lg"
                  onClick={() => toggleVisibility('month')}
                >
                  Month
                </button>

              </div>

              <div className="flex items-center gap-4">
                <button className="border border-gray-200 rounded-2xl px-8 py-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-200 hover:to-fuchsia-600 font-bold text-white">
                  <div>
                    <p>RAMESH SRI RAM</p>
                    <p>RO12024</p>
                  </div>
                </button>
              </div>

            </nav>

          </div>
        </div>

        <div className="flex">
          <div className="w-1/4 bg-gradient-to-r from-violet-200 to-pink-200 shadow-lg p-4">
            <h2 className="text-2xl  text-center font-bold mb-4">Today's Timetable</h2>


            {/* this is for date */}
            <DatePicker
              className="bg-gray-100 z-10 ml-24 mb-2 text-sm font-bold font-sans text-center text-black rounded-lg p-2 w-32 shadow-lg shadow-red-700"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd MMMM,yyyy"
            />


            <div className="space-y-2">



              {subjects.map((subject, index) => (
                <div key={index} className="mb-2">
                  <div
                    className={`flex items-center font-bold font-serif justify-between p-2 rounded cursor-pointer shadow-lg subject-container`}
                    onClick={() => toggleDetails(index)}
                    style={{ backgroundColor: subjectColorClasses[subject.name] }}
                  >
                    {/* Add a class to the subject name div */}
                    <div className="subject-name p-2">{subject.name}</div>
                    <FaChevronUp className={`transform ${expandedSubject === index ? 'rotate-0' : 'rotate-180'}`} />
                  </div>
                  {/* Collapsible section for subject details */}
                  {expandedSubject === index && (
                    <div className="p-2 bg-gray-100">
                      <p>{subject.details}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* <div className=" py-1 w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-lime-200 to-lime-400 rounded-lg shadow-lg shadow-lime-700">
        <h1 className='font-bold'>ENGLISH</h1>
         <div className="border border-gray-400 rounded-2xl bg-lime-200 mt-2">
          <h1 className="text-sm">
            English Grammar - verbs, prepositions<br />
            Chapter 2: Lion And Hare
          </h1>
        </div> 
      </div>
      
      <FaArrowDown className="mx-auto text-xl text-gray-600 " />
      
      <div className=" py-1 w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-amber-200 to-yellow-400 rounded-lg shadow-lg shadow-yellow-700">
        Mathematics
      </div>
      
      <FaArrowDown className="mx-auto text-xl text-gray-600 " />
      
      <div className=" py-1 w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-lg shadow-lg shadow-orange-700">
        Science
      </div>
      
      <FaArrowDown className="mx-auto text-xl text-gray-600 " />
      
      <div className=" py-1 w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-rose-600 to-red-500 rounded-lg shadow-lg shadow-rose-700">
        Social Science
      </div>
      
      <FaArrowDown className="mx-auto text-xl text-gray-600 " />
      
      <div className=" py-1 w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-pink-600 to-rose-300 rounded-lg shadow-lg shadow-pink-700">
        Hindi
      </div>
      
      <FaArrowDown className="mx-auto text-xl text-gray-600  " />
      
      <div className=" py-1 w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-blue-600 to-violet-400 rounded-lg shadow-lg shadow-blue-700">
        Language
      </div>
      
      <FaArrowDown className="mx-auto text-xl text-gray-600 " />
      
      <div className="w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-cyan-600 to-blue-400 rounded-lg shadow-lg shadow-cyan-700">
        Sports
      </div>
      <FaArrowDown className="mx-auto text-xl text-gray-600 " />
      <div className=" py-1 w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-green-600 to-green-300 rounded-lg shadow-lg shadow-green-700">
        Computers
      </div>
      <FaArrowDown className="mx-auto text-xl text-gray-600 " />
      <div className=" py-1 w-3/4 mx-auto font-bold text-center bg-gradient-to-r from-red-600 to-red-300 rounded-lg shadow-lg shadow--700">
        Library
      </div> */}
            </div>
          </div>
          <div className="w-3/4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-lg p-4 ml-4 rounded-md mb-2">
            {/* Conditionally render day, week, or month component */}
            {isDayVisible && <DayComponent />}
            {isWeekVisible && <WeekComponent />}
            {isMonthVisible && <MonthComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassTimetable;




//code for Collapsible subjects

// {subjects.map((subject, index) => (
//   <div key={index} className="mb-2">
//     <div
//       className={`flex items-center font-bold font-serif justify-between p-2 rounded cursor-pointer shadow-lg shadow-pink-200 ${subjectColorClasses[subject.name]}`}
//       onClick={() => toggleDetails(index)}
//     >
//       {/* Add a class to the subject name div */}
//       <div className="subject-name   p-2">{subject.name}</div>
//       <FaChevronUp className={`transform ${expandedSubject === index ? 'rotate-0' : 'rotate-180'}`} />
//     </div>
//     {/* Collapsible section for subject details */}
//     {expandedSubject === index && (
//       <div className="p-2 bg-gray-100">
//         <p>{subject.details}</p>
//       </div>
//     )}
//   </div>
// ))}
