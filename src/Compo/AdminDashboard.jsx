import React, { useState, useEffect, useRef } from 'react';
// import Schoollogo1 from '../Assets/schoolicononmainheader.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserGraduate, faChalkboardTeacher, faUsers, faDollarSign, faBook, faClipboard, faCalendarAlt, faChartPie, faLifeRing, faEnvelope, faBus, faCog, faSignOutAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Schoolicon from '../Assets/schoolicon.png';
import welcomebackicon from '../Assets/welcomebackclapsicon.png';


import { FaSearch, FaBell, FaEnvelope, FaUserCircle, FaTrash } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";


import axios from 'axios'
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'react-datepicker/dist/react-datepicker.css';
import AdminHome from './AdminHome';
import AdminStudents from './TeacherDashBoard/AdminStudents';

import AdminFamilies from './AdminFamilies';
import AdminFeesManager from './AdminFeesManager';
import AdminLibraryServices from './AdminLibraryServices';
import AdminExams from './AdminExams';
import AdminAnalytics from './AdminAnalytics';

import AdminMessageCenter from './AdminMessageCenter';
import AdminTransportServices from './AdminTransportServices';
import AdminSettings from './AdminSettings ';
import AdminLogout from './AdminLogout';
import AdminTeachers from './AdminTeachers';
import AdminEventes from './TeacherDashBoard/AdminEventes';
import AdminHelpCenter from './TeacherDashBoard/AdminHelpCenter';
import StudentProfile from './StudentProfile';

const Linedata = [
  ['Month', 'Expenses', 'Revenues'],
  ['Jan', 100000, 200000],
  ['Feb', 90000, 200000],
  ['Mar', 80000, 200000],
  ['Apr', 120000, 200000],
  ['May', 60000, 400000],
  ['Jun', 100000, 150000],
  ['Jul', 140000, 250000],
  ['Aug', 100000, 200000],
  ['Sep', 110000, 250000],
  ['Oct', 100000, 200000],
  ['Nov', 90000, 200000],
  ['Dec', 100000, 200000],
];
// Options for customizing the chart
export const options = {
  title: "My Daily Activities", // Title of the chart
  pieHole: 0.4, // Creates a donut-style chart
  is3D: false,  // Keeps the chart 2D, if you want it to be 3D set this to true
  titleTextStyle: {
    fontSize: 24, // Adjust the font size here (24px as an example)
    color: '#000', // Optional: Customize the font color
    bold: true,   // Optional: Make the title bold
  },
};
const Lineoptions = {
  title: 'Expenses vs Revenues',
  hAxis: {
    title: 'Month',
  },
  vAxis: {
    title: '',
  },
  legend: { position: 'top', alignment: 'center' },
  series: {
    0: { color: '#FF0000', lineWidth: 2 }, // Expenses in red
    1: { color: '#00FF00', lineWidth: 2 }, // Revenues in green
  },
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AdminDashboard = () => {

  const [searchOpen, setSearchOpen] = useState(false);
  const [showUploadOptions, setShowUploadOptions] = useState(false);
  const [photo, setPhoto] = useState(null);
  const uploadOptionsRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const [humanData, setHumanData] = useState();
  const handleUserIconClick = () => setShowUploadOptions(!showUploadOptions);

  const handlePhotoRemove = () => setPhoto(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    user_type: '',
    fullName: '',
    schoolid: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (formData.password !== formData.password2) {
    //     alert('Passwords do not match!');
    //     return;
    // }
    axios.post("https://2h0lpm3d-8000.inc1.devtunnels.ms/User/admin/register/", formData, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
      }
    })

      .then((res) => {
        if (res) {
          alert("Sent")
        }
      })

      .catch(err => {
        alert("error");
        console.log(err);
      })
    // console.log('Form submitted', formData);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (uploadOptionsRef.current && !uploadOptionsRef.current.contains(event.target)) {
        setShowUploadOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const [activeComponent, setActiveComponent] = useState('Home'); // Default component
  const handleButtonClick = (component) => setActiveComponent(component);

  useEffect(() => {
    axios.get("https://2h0lpm3d-8000.inc1.devtunnels.ms/User/admin/dashboard/", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
      }
    })

      .then((res) => {
        if (res) {
          setHumanData(res.data);
          console.log(res)
        }
      })

      .catch(err => {
        alert("Error");
        console.log(err);
      })
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home': return <AdminHome />;
      case 'Students': return <AdminStudents />
      case 'Teachers': return <AdminTeachers />;
      case 'Families': return <AdminFamilies />;
      case 'FeesManager': return <AdminFeesManager />;
      case 'LibraryServices': return <AdminLibraryServices />;
      case 'Exams': return <AdminExams />;
      case 'Events': return <AdminEventes />
      case 'Analytics': return <AdminAnalytics />;
      case 'HelpCenter': return <AdminHelpCenter />
      case 'MessageCenter': return <AdminMessageCenter />;
      case 'TransportServices': return <AdminTransportServices />;
      case 'Settings': return <AdminSettings />;
      case 'Logout': return <AdminLogout />;
      default: return;
    }
  };
  return (
    <div className='p-1'>
      {/* First Image */}
      {/* <img
                  src={Schoolicon}
                  alt="School icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 max-w-full h-auto"
                /> */}
      {/* Second Image */}
      {/* <img
                  src={Schoollogo1}
                  alt="School logo"
                   className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 max-w-full h-auto"
                /> */}
      <div>
        <nav className="flex items-center justify-between p-1 sm:p-2 md:p-3 bg-gradient-to-r from-lime-400 to-lime-500 text-white shadow-lg shadow-purple-400 sticky top-0 z-50">
          {/* Left Side: School Icon */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              {/* Container for the images */}
              <div className="flex flex-col items-center md:flex-row md:items-center">
                {/* School logo */}
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <Link to="/">
                      <img
                        src={Schoolicon}
                        alt="School icon"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 max-w-full h-auto filter"
                        style={{
                          filter: "invert(40%) sepia(100%) saturate(700%) hue-rotate(-10deg)"
                        }}
                      />
                    </Link>
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-1 sm:ml-2 md:ml-3 text-red-800 font-berkshire">
                      Akshra Student Portal
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Center: Admin Dashboard */}
          <div className="flex-grow flex items-center justify-center font-berkshire">
            <Link to="" className="text-center">
              <h1 className="text-base text-red-800 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-1 sm:p-2 md:p-3">
                ADMIN DASHBOARD
              </h1>
            </Link>
          </div>

          {/* Right Side (optional) */}
          <div className="flex items-center">
            {/* Add any additional elements like profile icon, notifications, etc. */}
          </div>
        </nav>
      </div>


      <div>
        <>
          <nav className="bg-gradient-to-r from-amber-200 to-green-300 p-4 flex items-center justify-between text-black">
            {/* Left side */}
            <div className="flex items-center text-lg lg:text-xl font-handlee">
              <img
                src={welcomebackicon} // Replace with the path to your image
                alt="Greeting Icon" // Add appropriate alt text
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-2 text-orange-500"// Adjust size and margin as needed
              />
              <span className='text-red-800 font-bold '>Welcome Back!!!</span>

            </div>

            {/* Right side */}
            <div className="relative flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
              {/* Search Button and Bar */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`border-2 border-transparent rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-gray-300 transition-all duration-300 ease-in-out ${searchOpen ? 'w-40 sm:w-52 md:w-64 lg:w-72' : 'w-0'} overflow-hidden`}
                />
                <FaSearch
                  className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-500 cursor-pointer absolute right-1 top-1/2 transform -translate-y-1/2"
                  onClick={toggleSearch}
                />
              </div>



              {/* Notification Icon */}
              <IoIosNotifications
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-orange-500 cursor-pointer"
              />

              {/* Messages Icon */}
              <FaEnvelope
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-orange-500 cursor-pointer"
              />

              {/* Photo Upload */}
              <div className="relative">
                {photo ? (
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
                    <img
                      src={photo}
                      className="w-full h-full border-2 border-orange-400 rounded-full object-cover cursor-pointer"
                      onClick={handleUserIconClick}
                    />
                  </div>
                ) : (
                  <label className="cursor-pointer relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
                    <FaUserCircle
                      className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-500 text-orange-500 rounded-full cursor-pointer"
                      onClick={handleUserIconClick}
                    />
                  </label>
                )}
              </div>
              {/* User Info Button */}
              <div className="text-white p-2 mt-2 sm:mt-0">
                <div className="font-bold">
                  <button className="border border-gray-200 rounded-lg px-4 sm:px-8 py-1 bg-gradient-to-r from-blue-600 to-blue-200 hover:from-fuchsia-200 hover:to-fuchsia-600">
                    {/* <div className="text-sm sm:text-base lg:text-lg"> */}
                    {/* <p className='font-fredericka'>Suraj Rathore</p>
                      <p className='font-fredericka'>sr12342024</p> */}
                    <button
                      className='text-red-500 font-fredericka bg-yellow-400 rounded-md px-2 py-1 text-sm md:text-base md:px-4 md:py-2'
                      onClick={handleOpen}
                    >
                      Create New User
                    </button>

                    {/* </div> */}
                  </button>
                </div>
              </div>

              {/* Upload Options */}
              {showUploadOptions && (
                <div
                  ref={uploadOptionsRef}
                  className="absolute top-full right-0 bg-white shadow-lg p-4 rounded-lg z-10 w-52 sm:w-64 mt-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    {/* Profile Photo and Delete Icon */}
                    <h3 className="text-sm sm:text-lg font-semibold">Profile Photo</h3>
                    {photo && (
                      <button
                        onClick={handlePhotoRemove}
                        className="text-red-500 text-xs sm:text-sm flex items-center"
                      >
                        <FaTrash size={12} />
                      </button>
                    )}
                  </div>
                  <label className="cursor-pointer block text-blue-500">
                    Upload from your device
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>

          </nav>

        </>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`flex flex-col ${isExpanded ? 'w-72' : 'w-24'} bg-gradient-to-r from-yellow-200 to-pink-300 p-5 space-y-4 shadow-lg transition-all duration-300`}>
          <div className="flex justify-end mb-4">
            <button onClick={toggleSidebar} className="text-black focus:outline-none">
              <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight} size="sm" />
            </button>
          </div>

          <div className={`flex flex-col space-y-3 ${isExpanded ? 'items-start' : 'items-center'}`}>
            {[
              { icon: faHome, label: 'Home' },
              { icon: faUserGraduate, label: 'Students' },
              { icon: faChalkboardTeacher, label: 'Teachers' },
              { icon: faUsers, label: 'Families' },
              { icon: faDollarSign, label: 'Fees Manager' },
              { icon: faBook, label: 'Library Services' },
              { icon: faClipboard, label: 'Exams' },
              { icon: faCalendarAlt, label: 'Events' },
              { icon: faChartPie, label: 'Analytics' },
              { icon: faLifeRing, label: 'Help Center' },
              { icon: faEnvelope, label: 'Message Center' },
              { icon: faBus, label: 'Transport Services' },
              { icon: faCog, label: 'Settings' },
              { icon: faSignOutAlt, label: 'Logout' },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(item.label)}
                className={`flex items-center p-2 font-handlee bg-yellow-500 text-red-800 rounded-3xl hover:bg-blue-600 hover:text-white shadow-lg shadow-blue-800 w-full transition-all duration-150 ${isExpanded ? 'justify-start' : 'justify-center'}`}
              >
                <FontAwesomeIcon icon={item.icon} className={`text-xl ${isExpanded ? 'mr-2' : ''}`} />
                {isExpanded && <span className="text-base">{item.label}</span>}
              </button>
            ))}
          </div>


        </div>

        {/* Main Content */}
        <div className="p-4 flex-grow">
          {renderComponent()}

          {/* Additional Content */}
          {/* Top Section with Statistics */}

        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                School ID
              </label>
              <input
                type="number"
                name="schoolid"
                id="schoolid"
                value={formData.schoolid}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
                User Type
              </label>
              <select
                name="user_type"
                id="user_type"
                value={formData.user_type}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="" disabled>Select User Type</option>
                <option value="admin">admin</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
                <option value="student">Student</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                // type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={(e) => handleSubmit(e)}
              >
                Send Link
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}


export default AdminDashboard;