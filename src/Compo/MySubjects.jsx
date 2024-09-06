import React, { useState } from 'react';
//import { FaSchool } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Schoollogo1 from '../Assets/schoolLogo.PNG';
import Schoollogo2 from '../Assets/Akshra.png';
import myImage from '../Assets/kids.jpg';
import { FaCalendarAlt, FaGraduationCap, FaCog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { FaCircleChevronRight } from 'react-icons/fa6';

// import bgleftpane from '../Assets/leftpane.jpg';
//import Schoolname from '../Assets/SchoolNameIcon.jpeg';
import Mathematics from './Mathematics';
import SocialStudies from './SocialStudies';
import English from './English';
import Language3 from './Language3';
import OtherSubject from './OtherSubject';
import Science from './Science';
import Computers from './Computers';
import Language2 from './Language2';

import Maths from '../Assets/maths.PNG';
import Socialscience from '../Assets/social sci.PNG';
import science1 from '../Assets/science.PNG';
import computers1 from '../Assets/computers.PNG';
import Language1 from '../Assets/language subj.PNG';
import others1 from '../Assets/other subj.PNG';

const MySubjects = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isInitialButtonsVisible, setIsInitialButtonsVisible] = useState(true);

  const toggleButtons = () => {
    setIsInitialButtonsVisible(!isInitialButtonsVisible);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/class-timetable');
  };
  const handleLogoutClick = () => {
    navigate('/login'); // Navigate to the login page
  };


  const renderComponent = () => {
    switch (activeComponent) {
      case 'Mathematics':
        return <Mathematics />;
      case 'SocialStudies':
        return <SocialStudies />;
      case 'Science':
        return <Science />;
      case 'Computers':
        return <Computers />;
      case 'English':
        return <English />;
      case 'Language2':
        return <Language2 />;
      case 'Language3':
        return <Language3 />;
      case 'OtherSubject':
        return <OtherSubject />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen p-1">
      {/* First navbar */}
      <nav className="flex justify-between items-center p-2 bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 shadow-lg shadow-red-500 text-white sticky top-0 z-10">
        <div className="flex items-center">
        <div className="flex flex-row items-center">
  <Link to="/dashboarddemo">
    <img src={Schoollogo2} alt="Description of image" className="w-14 h-14 rounded-full" />
  </Link>
  <Link to="/dashboarddemo" className="ml-4"> {/* Added margin-left to separate the logos */}
    <img src={Schoollogo1} alt="Description of image" className="w-14 h-14 rounded-full" />
  </Link>
</div>
        </div>
        <div className="text-2xl font-berkshire font-bold cursor-pointer bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-4 rounded-md shadow-lg shadow-blue-400" onClick={() => setActiveComponent(null)}>
          My Subjects
        </div>
        <div className="flex items-center">
          <img src={myImage} alt="Description of image" className="w-20 h-20 rounded-full" />
        </div>
      </nav>
      {/* End of first navbar */}

      <div className="p-1 md:p-1 gap-1 w-full flex  bg-red-400 ">
        {/* Left pane */}
        <div
          className="flex flex-col gap-1 sm:gap-1 p-2 "
         
        >
          {isInitialButtonsVisible ? (
            <>
              <button className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 sm:p-3 rounded-lg shadow-md text-sm sm:text-base">
                <FaGraduationCap className="w-8 h-8 sm:w-6 sm:h-6" />
              </button>
              {/* <button className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 sm:p-3 rounded-lg shadow-md text-sm sm:text-base">
                <FaCalendarAlt className="w-8 h-8 sm:w-6 sm:h-6" />
              </button> */}
              <button
      className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm"
      onClick={handleClick}
    >
      <FaCalendarAlt className="w-8 h-8 sm:w-6 sm:h-6" />
    </button>
              <button className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 sm:p-3 rounded-lg shadow-md text-sm sm:text-base">
                <FaCog className="w-8 h-8 sm:w-6 sm:h-6" />
              </button>
              <button className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 sm:p-3 rounded-lg shadow-md text-sm sm:text-base">
                <FaEnvelope className="w-8 h-8 sm:w-6 sm:h-6" />
              </button>

              <button
      className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm"
      onClick={handleLogoutClick}
    >
      <FaSignOutAlt className="w-8 h-8 sm:w-6 sm:h-6" />
    </button>
              {/* <button className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 sm:p-3 rounded-lg shadow-md text-sm sm:text-base">
                <FaSignOutAlt className="w-8 h-8 sm:w-6 sm:h-6" />
              </button> */}
            </>
          ) : (
            <>
              <button className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm">
                My Exams
              </button>
              <button
      className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm"
      onClick={handleClick}
    >
      My Class Timetable
    </button>
              <button className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm">
                Settings
              </button>
              <button className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm">
                Messages
              </button>
              {/* <button className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm">
                Logout
              </button> */}
              <button
      className="flex items-center justify-center font-handlee bg-gradient-to-r from-emerald-500 to-yellow-300 p-1 sm:p-2 rounded-lg shadow-md text-xs sm:text-sm"
      onClick={ handleLogoutClick}
    >
     Logout
    </button>
            </>
          )}
          <div className="flex justify-end mt-4">
            <FaCircleChevronRight
              className="text-4xl bg-black text-white rounded-full cursor-pointer"
              onClick={toggleButtons}
            />
          </div>
        </div>

        {/* Main content area */}
        <div className={`col-span-10 md:col-span-7 w-full border-2`}>
          {/* Render the selected subject component or default message */}
          {activeComponent ? (
            renderComponent()
          ) : (
            <div className="flex flex-col gap-4 items-center bg-red-400 p-2">
              {/* Buttons for subjects */}
              <button
                onClick={() => setActiveComponent('Mathematics')}
                className="flex justify-between items-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 rounded-lg shadow-md w-full"
              >
                <span className="text-sm md:text-lg font-fredericka">Mathematics</span>
                <img src={Maths} alt="Mathematics" className="h-8 w-8 md:h-10 md:w-10 opacity-70" />
              </button>
              <button
                onClick={() => setActiveComponent('SocialStudies')}
                className="flex justify-between items-center bg-gradient-to-r from-orange-400 to-yellow-300 p-2 md:p-3 rounded-lg shadow-md w-full"
              >
                <span className="text-sm md:text-lg font-fredericka">Social Studies</span>
                <img src={Socialscience} alt="Social Studies" className="h-8 w-8 md:h-10 md:w-10 opacity-70" />
              </button>
              <button
                onClick={() => setActiveComponent('Science')}
                className="flex justify-between items-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 rounded-lg shadow-md w-full"
              >
                <span className="text-sm md:text-lg font-fredericka">Science</span>
                <img src={science1} alt="Science" className="h-8 w-8 md:h-10 md:w-10 opacity-70" />
              </button>
              <button
                onClick={() => setActiveComponent('Computers')}
                className="flex justify-between items-center bg-gradient-to-r from-orange-400 to-yellow-300 p-2 md:p-3 rounded-lg shadow-md w-full"
              >
                <span className="text-sm md:text-lg font-fredericka">Computers</span>
                <img src={computers1} alt="Computers" className="h-8 w-8 md:h-10 md:w-10 opacity-70" />
              </button>
              <button
                onClick={() => setActiveComponent('English')}
                className="flex justify-between items-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 rounded-lg shadow-md w-full"
              >
                <span className="text-sm md:text-lg font-fredericka">English</span>
                <img src={Language1} alt="English" className="h-8 w-8 md:h-10 md:w-10 opacity-70" />
              </button>
              <button
                onClick={() => setActiveComponent('Language2')}
                className="flex justify-between items-center bg-gradient-to-r from-orange-400 to-yellow-300 p-2 md:p-3 rounded-lg shadow-md w-full"
              >
                <span className="text-sm md:text-lg font-fredericka">Language 2</span>
                <img src={Language1} alt="Language 2" className="h-8 w-8 md:h-10 md:w-10 opacity-70" />
              </button>
              <button
                onClick={() => setActiveComponent('Language3')}
                className="flex justify-between items-center bg-gradient-to-r from-emerald-500 to-yellow-300 p-2 rounded-lg shadow-md w-full"
              >
                <span className="text-sm md:text-lg font-fredericka">Language 3</span>
                <img src={Language1} alt="Language 3" className="h-8 w-8 md:h-10 md:w-10 opacity-70" />
              </button>
              <button
                onClick={() => setActiveComponent('OtherSubject')}
                className="flex justify-between items-center bg-gradient-to-r from-orange-400 to-yellow-300 p-2 md:p-3 rounded-lg shadow-md w-full"
              >
                <span className="text-sm md:text-lg font-fredericka">Other Subject</span>
                <img src={others1} alt="Other Subject" className="h-8 w-8 md:h-10 md:w-10 opacity-70" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySubjects;
