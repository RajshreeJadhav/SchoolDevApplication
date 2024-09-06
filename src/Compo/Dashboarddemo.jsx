import React, { useState, useEffect } from 'react';
import Schoollogo1 from '../Assets/Akshra.png';
import Schoollogo2 from '../Assets/schoolLogo.PNG';
import { useNavigate, Link } from "react-router-dom";
import './Styles.css'; // Make sure to include your CSS file for theme styles
import './Dashboarddemo.css';
import 'typeface-berkshire-swash';
import { FaCircle } from 'react-icons/fa';

import { FaUpload } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { FaSchool, FaBars, FaEnvelope, FaCog, FaSearch,FaTimes  } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import myImage from "../Assets/kids.jpg";
import myEarth from "../Assets/img1.PNG";
import mystud from "../Assets/img2.PNG";
import mystudent from "../Assets/img3.PNG";
import mystudent3 from "../Assets/img4.PNG";
import mystudent4 from "../Assets/img5.PNG";
import mystudent5 from "../Assets/img6.PNG";
import mystudent6 from "../Assets/img7.PNG";
import { BsBook } from 'react-icons/bs';
import { MdAssignment } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { TbFileSpreadsheet } from "react-icons/tb";
import { IoBookSharp } from "react-icons/io5";
import { BiMoney } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faCog, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';

//google fonts
// font-just-another-hand
//font-berkshire
// font-fredericka
//font-handlee

const events = {
  '2024-08-15': 'Independence Day',
  '2024-09-01': 'Labor Day',
  '2024-09-02': 'World Coconut Day',
  '2024-09-03': 'Team Meeting',
  '2024-09-04': 'Project Deadline',
  '2024-09-05': 'Teacher’s Day',
  '2024-09-06': 'Staff Training',
  '2024-09-07': 'Ganesh Chaturthi',
  '2024-09-08': 'International Literacy Day',
  '2024-09-09': 'Client Presentation',
  '2024-09-10': 'Holiday',
  '2024-09-11': 'Project Kickoff',
  '2024-09-12': 'Quarterly Review',
  '2024-09-13': 'Team Building Activity',
  '2024-09-14': 'Conference Call',
  '2024-09-15': 'Half-Day Leave',
  '2024-09-16': 'World Ozone Day',
  '2024-09-17': 'Product Launch',
  '2024-09-18': 'Feedback Session',
  '2024-09-19': 'Networking Event',
  '2024-09-20': 'Office Cleanup',
  '2024-09-21': 'International Day of Peace',
  '2024-09-22': 'World Rhino Day',
  '2024-09-23': 'Project Review',
  '2024-09-24': 'Sales Meeting',
  '2024-09-25': 'Training Session',
  '2024-09-26': 'Customer Feedback',
  '2024-09-27': 'Strategy Meeting',
  '2024-09-28': 'End-of-Month Report',
  '2024-09-29': 'Office Party',
  '2024-09-30': 'End of Month Review',
};
const Dashboarddemo = () => {

  const [photo, setPhoto] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Key to reset input
  const [showIcons, setShowIcons] = useState(false);

  // Function to handle photo upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        setFileInputKey(Date.now()); // Reset the file input key
        setShowIcons(false); // Hide icons after upload
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle photo deletion
  const handleDeletePhoto = (event) => {
    event.stopPropagation(); // Prevent triggering the onClick of the photo container
    setPhoto(null);
    setFileInputKey(Date.now()); // Reset the file input key
    setShowIcons(false); // Hide icons after deletion
  };

  // Function to trigger the file input click event
  const triggerFileInput = (event) => {
    event.stopPropagation(); // Prevent triggering the onClick of the photo container
    document.getElementById('photoUpload').click();
  };
  const images = [myEarth, mystud, mystudent, mystudent3, mystudent4, mystudent5, mystudent6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const navigate = useNavigate();
  const initialButtons = [
    {
      id: "btn-my-subjects",
      icon: "BsBook",
      text: "My Subjects",
      bgClass:
        "bg-gradient-to-r from-rose-500 to-pink-300 hover:from-pink-300 hover:to-rose-500 shadow-lg hover:shadow-xl",
      textClass: "text-xl",
    },
    {
      id: "btn-student-details",
      icon: "TbFileSpreadsheet",
      text: "Student Details",
      bgClass:
        "bg-gradient-to-r from-yellow-300 to-green-400 hover:from-green-300 hover:to-yellow-400 shadow-lg hover:shadow-xl",
      textClass: "text-xl",
    },
    {
      id: "btn-class-timetable",
      icon: "ClassTimetableIcon",
      text: "Class TimeTable",
      bgClass:
        "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg hover:shadow-xl",
      textClass: "text-xl",
    },
    {
      id: "btn-report-card",
      icon: "MdAssignment",
      text: "Report Card",
      bgClass:
        "bg-gradient-to-r from-violet-700 to-purple-400 hover:from-purple-500 hover:to-violet-500 shadow-lg hover:shadow-xl",
      textClass: "text-xl",
    },
    {
      id: "btn-student-info",
      icon: "FaUser",
      text: "",
      bgClass:
        "bg-gradient-to-r from-violet-300 to-pink-300 hover:from-pink-300 hover:to-violet-200 shadow-lg hover:shadow-xl",
    },
    {
      id: "btn-exam-timetable",
      icon: "FaCalendarAlt",
      text: "Exam TimeTable",
      bgClass:
        "bg-gradient-to-r from-indigo-500 to-purple-300 hover:from-purple-500 hover:to-indigo-300 shadow-lg hover:shadow-xl",
      textClass: "text-xl",
    },
    {
      id: "btn-library-system",
      icon: "IoBookSharp",
      text: "Library System",
      bgClass:
        "bg-gradient-to-r from-orange-500 to-rose-400 hover:from-rose-400 hover:to-orange-500 shadow-lg hover:shadow-xl",
      textClass: "text-xl",
    },
    {
      id: "btn-fees-payments",
      icon: "BiMoney",
      text: "Fees & Payments",
      bgClass:
        "bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 shadow-lg hover:shadow-xl",
      textClass: "text-xl",
    },
    {
      id: "btn-attendance-history",
      icon: "BiHistory",
      text: "Attendance History",
      bgClass:
        "bg-gradient-to-r from-teal-300 to-gray-600 hover:from-gray-600 hover:to-teal-300 shadow-lg hover:shadow-xl",
      textClass: "text-xl",
    },
  ];

  const iconMap = {
    BsBook: <BsBook className="text-4xl mb-2 font-bold" />,
    TbFileSpreadsheet: <TbFileSpreadsheet className="text-4xl mb-2" />,
    MdAssignment: <MdAssignment className="text-4xl mb-2" />,
    FaUser: (
      <img
        src={images[currentImageIndex]}
        className="h-24 w-32 p-1 user-select-none justify-center items-center"
        onDragStart={(e) => e.preventDefault()}
        draggable={false}
        alt="Slideshow"
      />
    ),
    FaCalendarAlt: <FaCalendarAlt className="text-4xl mb-2" />,
    IoBookSharp: <IoBookSharp className="text-4xl mb-2" />,
    BiMoney: <BiMoney className="text-4xl mb-2" />,
    BiHistory: <BiHistory className="text-4xl mb-2" />,
    ClassTimetableIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="3em"
        width="3em"
        className="mb-2"
      >
        <path d="M14 12h1.5v2.82l2.44 1.41-.75 1.3L14 15.69V12M4 2h14a2 2 0 012 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 01-7 7c-1.91 0-3.64-.76-4.9-2H4a2 2 0 01-2-2V4a2 2 0 012-2m0 13v3h4.67c-.43-.91-.67-1.93-.67-3H4m0-7h6V5H4v3m14 0V5h-6v3h6M4 13h4.29c.34-1.15.97-2.18 1.81-3H4v3m11-2.85A4.85 4.85 0 0010.15 15c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0019.85 15c0-2.68-2.17-4.85-4.85-4.85z" />
      </svg>
    ),
  };

  const [buttons, setButtons] = useState(() => {
    const savedButtons = localStorage.getItem("buttons");
    return savedButtons ? JSON.parse(savedButtons) : initialButtons;
  });

  useEffect(() => {
    localStorage.setItem("buttons", JSON.stringify(buttons));
  }, [buttons]);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("dragIndex", index);
  };

  const onDrop = (e, targetIndex) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("dragIndex"), 10);
    if (draggedIndex === targetIndex) return;

    const draggedRow = Math.floor(draggedIndex / 3);
    const draggedCol = draggedIndex % 3;
    const targetRow = Math.floor(targetIndex / 3);
    const targetCol = targetIndex % 3;

    // Ensure dragging and dropping are within the same row or column
    if (
      (draggedRow !== targetRow && draggedCol !== targetCol) ||
      buttons[targetIndex].id === "btn-student-info" ||
      buttons[draggedIndex].id === "btn-student-info"
    )
      return;

    const newButtons = [...buttons];
    [newButtons[draggedIndex], newButtons[targetIndex]] = [
      newButtons[targetIndex],
      newButtons[draggedIndex],
    ];
    setButtons(newButtons);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  // Navigate to the ClassTimetable page if the buttonId is "btn-class-timetable"
  const handleButtonClick = (buttonId) => {
    if (buttonId === "btn-class-timetable") {
      navigate("/class-timetable");
    } else if (buttonId === "btn-report-card") {
      navigate("/reportcard");

    }
    else if (buttonId === "btn-student-details") {
      navigate("/studentprofile");

    }
    else if (buttonId === "btn-attendance-history") {
      navigate("/attendance-himy-subjectsstory");

    }
    else if (buttonId === "btn-my-subjects") {
      navigate("/my-subjects");

    }
    else {
      // Handle other button clicks if needed
    }
  };

  // ths is for calender
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState();

  const handleCalendarIconClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
    // console.log(setIsCalendarOpen)
  };


  const formattedDate = startDate.toISOString().split('T')[0];
  const event = events[formattedDate] || 'No events';


  const [tasks, setTasks] = useState([
    //{ text: 'write your first Task', completed: false },
    // { text: 'Task 2', completed: false },
    // { text: 'Task 3', completed: false },
    // { text: 'Task 4', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleEditTask = (index) => {
    if (taskToEdit.trim()) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: taskToEdit } : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
      setTaskToEdit('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter(task => task.completed).length;



  return (
    <div className='bg-gray-100 p-2'>
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-300 shadow-md p-1 flex flex-wrap items-center justify-between relative">
  {/* School logo and name */}
  <div className="flex items-center">
    <Link to="/login">
      <img src={Schoollogo1} alt="Description of image" className="w-16 h-16 rounded-full" />
    </Link>

    <Link to="/login">
      <img src={Schoollogo2} alt="School logo" className="w-12 h-12 text-black rounded-full ml-2" />
    </Link>
  </div>

  {/* STUDENT DASHBOARD heading */}
  <div className="flex-1 text-center">
    <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-berkshire">STUDENT DASHBOARD</h1>
  </div>

  {/* Search bar and icons (right side) */}
  <div className="flex items-center space-x-2 relative">
    {/* Search icon and input field */}
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className={`bg-white border-2 border-transparent rounded-lg py-1 px-3 text-sm md:text-base focus:outline-none focus:border-gray-300 transition-colors ${searchOpen ? 'w-44' : 'w-6'} overflow-hidden`}
      />
      <FaSearch
        className="text-lg cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
        onClick={toggleSearch}
      />
    </div>

    {/* Email icon */}
    <FaEnvelope className="text-black text-lg cursor-pointer" />

    {/* Settings icon */}
    <FaCog className="text-black text-lg cursor-pointer" />

    {/* Menu icon */}
    {menuOpen ? (
      <FaTimes
        className="text-black text-lg cursor-pointer"
        onClick={toggleMenu}
      />
    ) : (
      <FaBars
        className="text-black text-lg cursor-pointer"
        onClick={toggleMenu}
      />
    )}
  </div>

  {/* Collapsible Menu buttons */}
  {menuOpen && (
    <div className="absolute right-0 top-full mt-1 flex flex-col space-y-1 bg-white p-3 rounded-lg shadow-md z-10">
      <button className="text-black hover:text-gray-700 bg-gradient-to-r from-yellow-200 to-yellow-400 hover:from-yellow-400 hover:to-yellow-600 px-3 py-1 rounded-lg shadow-md font-handlee">
        Home
      </button>
      <button className="text-black hover:text-gray-700 bg-gradient-to-r from-orange-200 to-orange-400 hover:from-orange-400 hover:to-orange-600 px-3 py-1 rounded-lg shadow-md font-handlee">
        Highlights
      </button>
      <button className="text-black hover:text-gray-700 bg-gradient-to-r from-green-200 to-green-400 hover:from-green-400 hover:to-green-600 px-3 py-1 rounded-lg shadow-md font-handlee">
        Complaints Box
      </button>
      <button className="text-black hover:text-gray-700 bg-gradient-to-r from-pink-300 to-pink-600 hover:from-pink-400 hover:to-pink-600 px-3 py-1 rounded-lg shadow-md font-handlee">
        Help
      </button>
    </div>
  )}
</nav>

      {/* first navbar end */}
      {/* start second navbar */}
      <div className='p-1'>
  <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col sm:flex-row justify-between shadow-lg rounded-md">
    {/* Left Section */}
    <div className="flex items-center">
      <h1 className="font-handlee text-3xl text-white mr-2">Hello Ramesh!</h1>
      <a href="#" className="h-10 w-10 p-2 text-white">
        <GrEmoji className="h-full w-full" />
      </a>
      <a href="#" className="h-10 w-10 p-2 text-white">
        <MdEdit className="h-full w-full" />
      </a>
    </div>

    {/* Right Section for Upload Photo */}
    <div className="flex items-center gap-4 relative">
      <input
        key={fileInputKey} // Key to reset the input
        type="file"
        id="photoUpload"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {photo ? (
        <div className="relative flex items-center cursor-pointer" onClick={() => setShowIcons(!showIcons)}>
          <img
            src={photo}
            alt="Student"
            className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-2 border-white" // Standard size for photo
          />
          {showIcons && (
            <div className="absolute flex flex-col gap-2 -left-12 top-1/2 transform -translate-y-1/2">
              <button
                className="bg-white text-red-500 p-2 rounded-full hover:bg-gray-100"
                onClick={handleDeletePhoto}
              >
                <MdDelete className="text-lg" />
              </button>
              <button
                className="bg-white text-blue-500 p-2 rounded-full hover:bg-gray-100"
                onClick={triggerFileInput}
              >
                <MdEdit className="text-lg" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <label
          htmlFor="photoUpload"
          className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-2 border-dashed border-gray-300 cursor-pointer text-gray-500 hover:bg-gray-100"
        >
          <span className="text-center text-sm md:text-base">Upload Photo</span>
        </label>
      )}
    </div>
  </div>
</div>

      {/* end second navbar */}
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-start w-full">
        {/* First div: Buttons grid on the left side */}
        <div className="w-full lg:w-1/3">
          <div className="grid grid-cols-3 gap-2 w-full">
            {buttons.map((button, index) => (
              <div
                key={button.id}
                draggable={button.id !== "btn-student-info"}
                onDragStart={(e) => onDragStart(e, index)}
                onDrop={(e) => onDrop(e, index)}
                onDragOver={onDragOver}
                onClick={() => handleButtonClick(button.id)}
                className={`${button.bgClass} font-handlee text-base md:text-lg lg:text-xl text-white font-bold p-3 md:p-4 h-28 md:h-32 lg:h-36 w-full gap-2 md:gap-3 lg:gap-4 rounded-lg text-center shadow-lg cursor-pointer flex flex-col items-center`}
              >
                {iconMap[button.icon]}
                {button.id !== "btn-student-info" && <div>{button.text}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Second div: Two sub-divs in the middle */}
        <div className="flex flex-col items-center w-full lg:w-1/3 mt-6 lg:mt-0">
  {/* Content for the first sub-div */}
  <div className="flex flex-col items-center gap-2 px-2">
      <div className="flex items-center gap-1 px-2 justify-center">
        <span className="font-berkshire-swash text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black p-2">
          Date is
        </span>
        <DatePicker
          className="bg-white text-sm text-center font-bold font-just-another-hand text-black rounded-lg p-2 w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd MMMM, yyyy"
          open={isCalendarOpen}
          onClickOutside={() => setIsCalendarOpen(false)}
        />
        <FaCalendarAlt
          className="h-8 w-8 text-black ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 cursor-pointer"
          onClick={handleCalendarIconClick}
        />
      </div>
      <div className="mt-2">
        <span className="font-just-another-hand text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black p-2">
          Today is : {event}
        </span>
      </div>
    </div>

  {/* Content for the second sub-div */}
  <div className="mt-4 w-full flex items-center shadow-2xl bg-gray-200 rounded-md">
    <div className="h-96 w-full p-4 overflow-auto">
      <h1 className="text-2xl md:text-3xl font-bold fredericka text-center mb-4 p-2 text-blue-600">
        Tasks
      </h1>
      {/* Message box for no tasks */}
      {tasks.length === 0 && (
        <div className="bg-yellow-100 border border-yellow-400 text-red-800 px-4 py-8 rounded-md mb-4 text-center font-handlee">
          You have no task listed,<br/> Start one now!!!
        </div>
      )}
      {completedTasksCount > 0 && (
        <div className="font-berkshire-swash mt-4 p-4 border border-blue-500 rounded-md text-lg text-blue-500 font-bold flex items-center justify-center">
          Task done, keep it up!{' '}
          <span className="inline-block w-12 h-12 ml-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
            {completedTasksCount}/{tasks.length}
          </span>
        </div>
      )}
      <div className="mt-4 flex p-2 mb-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="fredericka flex-1 p-2 border rounded-l-md text-red-500 font-bold text-lg"
          placeholder="Write your next Task"
        />
        <button
          onClick={handleAddTask}
          className="p-2 ml-2 bg-blue-500 text-white font-bold rounded-md shadow-md shadow-blue-500"
        >
          <FontAwesomeIcon icon={faPlus} className="w-8" />
        </button>
      </div>
      <div className="space-y-2 text-lg md:text-2xl font-bold font-sans text-red-500">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center border-2 border-gray-400 py-2 px-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
              className="mr-2 h-4 w-4"
            />
            <div className="flex-grow">
              {editIndex === index ? (
                <input
                  value={taskToEdit}
                  onChange={(e) => setTaskToEdit(e.target.value)}
                  className="fredericka text-xl p-1 w-full"
                />
              ) : (
                <h1
                  className={`fredericka transition duration-500 hover:text-blue-500 ${task.completed ? 'line-through text-green-600' : ''}`}
                >
                  {index + 1}. {task.text}
                </h1>
              )}
            </div>
            <div className="flex-shrink-0 flex space-x-1">
              {editIndex === index ? (
                <button
                  onClick={() => handleEditTask(index)}
                  className="fredericka w-6 ml-1 text-sm flex items-center justify-center text-white font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-md shadow-md shadow-green-500"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setTaskToEdit(task.text);
                  }}
                  className="fredericka p-1 w-6 text-sm text-white font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-md shadow-md shadow-green-500"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              )}
              <button
                onClick={() => handleRemoveTask(index)}
                className="fredericka p-1 w-6 text-sm text-white font-bold bg-gradient-to-r from-red-500 to-orange-500 rounded-md shadow-md shadow-red-500"
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


        {/* Third div: User photo and details on the right side */}
        <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
  <div className="bg-gray-200 p-2 rounded-md shadow-md">
    {/* First Div: Student Details */}
    <div className="bg-lime-300 border-2 border-slate-200 p-4 rounded-md shadow-md mb-2">
      <h2 className="font-just-another-hand font-bold font-sans text-lg md:text-xl mb-2">My Details:</h2>
      <p className="font-just-another-hand font-bold font-sans text-base md:text-lg">
        Name: Ramesh Sriram <br />
        Class Teacher: Aradhana <br />
        ID: adb123 <br />
        Class: 10A
      </p>
    </div>

    {/* Second Div: School Events */}
    <div className="w-full max-w-md bg-yellow-300 border-2 border-slate-200 p-4 rounded-md shadow-md h-72">
  <h2 className="font-just-another-hand font-bold font-sans text-lg md:text-xl mb-2 text-center">School Events</h2>
  <ul className="list-none ml-4">
    <li className="flex items-start mb-1 font-handlee">
      <FaCircle className="text-sm mt-1 mr-2 text-blue-500" />
      Olympiad Science Test 2024 coming soon
    </li>
    <li className="flex items-start mb-1 font-handlee">
      <FaCircle className="text-sm mt-1 mr-2 text-green-500" />
      Quarterly Exams starting on Oct 2nd, 2024
    </li>
    <li className="flex items-start font-handlee">
      <FaCircle className="text-sm mt-1 mr-2 text-red-500" />
      Unit test starting next week
    </li>
  </ul>
</div>

  </div>
</div>
</div>



    </div>
  );
};

export default Dashboarddemo;
