import React, { useState, useEffect } from "react";
import { Modal, Button, List, ListItem, ListItemText, Box } from "@mui/material";
import './Styles.css'; // Make sure to include your CSS file for theme styles
import './Dashboarddemo.css';
import 'typeface-berkshire-swash';

import myImage from "../Assets/kids.jpg";
import myEarth from "../Assets/Earth.jpg";
import mystud from "../Assets/stud1.jpg";
import mystudent from "../Assets/stud2.jpg";
import mystudent3 from "../Assets/stud3.jpg";
import mystudent4 from "../Assets/stud4.jpg";

import { FaSchool } from "react-icons/fa6";
import { VscSearch } from "react-icons/vsc";
import { MdEdit } from "react-icons/md";

import { GrEmoji } from "react-icons/gr";

import { AiOutlineMail } from "react-icons/ai";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

import { TbFileSpreadsheet } from "react-icons/tb";
import { BsBook } from 'react-icons/bs';

import { MdAssignment } from "react-icons/md";

// import { FaUser } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { BiMoney } from "react-icons/bi";
import { BiHistory } from "react-icons/bi";
// import "./Custom.css";
// import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faCog, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Dashboarddemo = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState();

  const handleCalendarIconClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
    // console.log(setIsCalendarOpen)
  };
  const images = [myEarth, mystud, mystudent, mystudent3, mystudent4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  const navigate = useNavigate();
  const initialButtons = [
    {
      id: "btn-my-subjects",
      icon: "BsBook",
      text: "My Subjects",
      bgClass:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500  ",
      textClass: "text-xl",


    },
    {
      id: "btn-student-details",
      icon: "TbFileSpreadsheet",
      text: "Student Details",
      bgClass:
        "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500",
      textClass: "text-xl",
    },
    {
      id: "btn-class-timetable",
      icon: "ClassTimetableIcon",
      text: "Class TimeTable",
      bgClass:
        "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500",
      textClass: "text-xl",

    },
    {
      id: "btn-report-card",
      icon: "MdAssignment",
      text: "Report Card",
      bgClass:
        "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-500 hover:to-yellow-500",
      textClass: "text-xl",
    },
    { id: "btn-student-info", icon: "FaUser", text: "", bgClass: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" },
    {
      id: "btn-exam-timetable",
      icon: "FaCalendarAlt",
      text: "Exam TimeTable",
      bgClass:
        "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-500",
      textClass: "text-xl",
    },
    {
      id: "btn-library-system",
      icon: "IoBookSharp",
      text: "Library System",
      bgClass:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500",
      textClass: "text-xl",
    },
    {
      id: "btn-fees-payments",
      icon: "BiMoney",
      text: "Fees & Payments",
      bgClass:
        "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500",
      textClass: "text-xl",
    },
    {
      id: "btn-attendance-history",
      icon: "BiHistory",
      text: "Attendance History",
      bgClass:
        "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500",
      textClass: "text-xl",
    },
  ];
  const iconMap = {
    BsBook: <BsBook className="text-4xl mb-2 font-bold" />,
    TbFileSpreadsheet: <TbFileSpreadsheet className="text-4xl mb-2" />,
    MdAssignment: <MdAssignment className="text-4xl mb-2" />,

    FaUser:
      <img
        src={images[currentImageIndex]}
        className="h-24 w-32 p-1 user-select-none justify-center items-center"
        onDragStart={(e) => e.preventDefault()}
        draggable={false}
        alt="Slideshow"
      />
    ,

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

    // Check if the drag and drop are within the same row or column
    const draggedRow = Math.floor(draggedIndex / 3);
    const draggedCol = draggedIndex % 3;
    const targetRow = Math.floor(targetIndex / 3);
    const targetCol = targetIndex % 3;

    // If the buttons are not in the same row or column, return
    if (draggedRow !== targetRow && draggedCol !== targetCol) return;

    // If the target button is "Student Info", return
    if (buttons[targetIndex].id === "btn-student-info") return;

    // If the dragged button is "Student Info", return
    if (buttons[draggedIndex].id === "btn-student-info") return;



    const newButtons = [...buttons];
    // Swap positions of dragged button and target button
    [newButtons[draggedIndex], newButtons[targetIndex]] = [newButtons[targetIndex], newButtons[draggedIndex]];
    setButtons(newButtons);


  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  // const handleButtonClick = (buttonId) => {
  //   // Navigate to the ClassTimetable page if the buttonId is "btn-class-timetable"
  //   if (buttonId === "btn-class-timetable") {
  //     navigate("/class-timetable");
  //   }
  // };

  // const handleButtonreport = (buttonId) => {
  //   if (buttonId === "btn-report-card") {
  //     navigate("/reportcard");
  //   }
  // }

  // Navigate to the ClassTimetable page if the buttonId is "btn-class-timetable"
  const handleButtonClick = (buttonId) => {
    if (buttonId === "btn-class-timetable") {
      navigate("/class-timetable");
    } else if (buttonId === "btn-report-card") {
      navigate("/reportcard");

    }
    else if (buttonId === "btn-student-details") {
      navigate("/student-details");

    }
    else if (buttonId === "btn-attendance-history") {
      navigate("/attendance-history");

    }
    else if (buttonId === "btn-my-subjects") {
      navigate("/my-subjects");

    }
    else {
      // Handle other button clicks if needed
    }
  };
  // Format the date as "05, May 2024"
  // const formattedDate = format(startDate, "dd, MMMM yyyy");


  // this is for add task display in todays task
  const [tasks, setTasks] = useState([
    { text: 'Task 1', completed: false },
    { text: 'Task 2', completed: false },
    { text: 'Task 3', completed: false },
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


  // for setting

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleClose = () => {
    setIsSettingsOpen(false);
  };

  const handleSave = () => {
    // Save logic here
    handleClose();
  };
  // const [isSettingsClicked, setIsSettingsClicked] = useState(false);

  //for theme
  const [theme, setTheme] = useState('light');
  const [showThemeOptions, setShowThemeOptions] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const toggleThemeOptions = () => {
    setShowThemeOptions(!showThemeOptions);
  };


  return (
    <div className="bg-gray-300 p-2">
      <div className="flex flex-col md:flex-row items-center justify-between p-2 md:p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-300 shadow-md">
        {/* <img src="/path/to/school-logo.png" alt="School Logo" className="h-8 mr-2" /> */}
        <div className="flex justify-around  p-2">
          <div className="flex items-center mb-2 md:mb-0">
            <FaSchool className="ml-2 md:ml-6 text-2xl md:text-3xl text-white" />
            <span className="font-berkshire-swash text-black text-lg md:text-2xl font-bold ml-2 md:ml-4">
              Akshara Student Portal
            </span>
          </div>

          <div className="flex justify-center items-center mt-2 md:mt-0 md:ml-16 gap-2 md:gap-6">
            <button className="font-handlee btn-home text-black font-bold relative bg-gradient-to-r from-yellow-200 to-yellow-400 hover:from-yellow-400 hover:to-yellow-600 px-3 py-2 md:px-4 md:py-2 rounded-lg md:mr-4 shadow-md md:shadow-lg">
              Home
              <span className="border-animate"></span>
            </button>
            <button className="font-handlee btn-highlights text-black font-bold relative bg-gradient-to-r from-orange-200 to-orange-400 hover:from-orange-400 hover:to-orange-600 px-3 py-2 md:px-4 md:py-2 rounded-lg md:mr-4 shadow-md md:shadow-lg">
              Highlights
              <span className="border-animate"></span>
            </button>
            <button className="font-handlee btn-complaints text-black font-bold relative bg-gradient-to-r from-green-200 to-green-400 hover:from-green-400 hover:to-green-600 px-3 py-2 md:px-4 md:py-2 rounded-lg md:mr-4 shadow-md md:shadow-lg">
              Complaints Box
              <span className="border-animate"></span>
            </button>
            <button className="font-handlee btn-help text-black font-bold relative bg-gradient-to-r from-pink-300 to-pink-600 hover:from-pink-400 hover:to-pink-600 px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-md md:shadow-lg">
              Help
              <span className="border-animate"></span>
            </button>
          </div>


        </div>

        <div className="flex items-end gap-4 text-blue-600">
          <a href="#" onClick={toggleSearch}>
            <VscSearch className="h-8 w-8  cursor-pointer" />
          </a>
          {isSearchOpen && (
            <div className="absolute top-6  right-40 0 z-10  p-2 ">
              <input
                type="text"
                placeholder="Search..."
                className=" w-52 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          {/* this is for setting and theme */}
          <div>
            <a href="#" onClick={toggleSettings}>
              <FontAwesomeIcon
                icon={faCog}
                className="h-8 w-8 cursor-pointer"
                onClick={toggleSettings}
              />
            </a>

            <Modal
              open={isSettingsOpen}
              onClose={handleClose}
              aria-labelledby="settings-modal-title"
              aria-describedby="settings-modal-description"
              className="flex justify-center items-center font-bold"
            >
              <div className="bg-blue-100 bg-opacity-40 p-2 rounded border border-blue-500 h-3/4 w-1/3">
                <div>
                  <h1 className="text-xl p-2 bg-white text-blue-500 font-bold mb-4 border-b-2 border-gray-300 w-full text-center rounded-md">
                    SETTINGS
                  </h1>
                </div>

                <div className="flex flex-col items-center w-full">
                  <List component="nav" aria-label="settings list" className="w-full">
                    <ListItem button className="p-2 flex justify-center w-full">
                      <Box
                        sx={{
                          flexGrow: 1,
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          backgroundColor: '#037ffc',
                          padding: '4px',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          maxWidth: '90%',
                        }}
                      >
                        <ListItemText primary="Themes" />
                        <FontAwesomeIcon
                          icon={showThemeOptions ? faChevronUp : faChevronDown}
                          className="ml-2 cursor-pointer"
                          onClick={toggleThemeOptions}
                        />
                      </Box>
                    </ListItem>
                    {showThemeOptions && (
                      <div className="pl-2 flex justify-center w-full">
                        <label className="mr-4">
                          <input
                            type="radio"
                            value="light"
                            checked={theme === 'light'}
                            onChange={handleThemeChange}
                            className="mr-1"
                          />
                          Light
                        </label>
                        <label className="mr-4">
                          <input
                            type="radio"
                            value="dark"
                            checked={theme === 'dark'}
                            onChange={handleThemeChange}
                            className="mr-1"
                          />
                          Dark
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="rainbow"
                            checked={theme === 'rainbow'}
                            onChange={handleThemeChange}
                            className="mr-1"
                          />
                          Rainbow
                        </label>
                      </div>
                    )}
                    <ListItem button className="p-2 flex justify-center w-full">
                      <Box
                        sx={{
                          flexGrow: 1,
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          backgroundColor: '#037ffc',
                          padding: '4px',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          maxWidth: '90%',
                        }}
                      >
                        <ListItemText primary="Language Preferences: English" />
                      </Box>
                    </ListItem>
                    <ListItem button className="p-2 flex justify-center w-full">
                      <Box
                        sx={{
                          flexGrow: 1,
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          backgroundColor: '#037ffc',
                          padding: '4px',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          maxWidth: '90%',
                        }}
                      >
                        <ListItemText primary="Set Location" />
                      </Box>
                    </ListItem>
                    <ListItem button className="p-2 flex justify-center w-full">
                      <Box
                        sx={{
                          flexGrow: 1,
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          backgroundColor: '#037ffc',
                          padding: '4px',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          maxWidth: '90%',
                        }}
                      >
                        <ListItemText primary="Change Password" />
                      </Box>
                    </ListItem>
                    <ListItem button className="p-2 flex justify-center w-full">
                      <Box
                        sx={{
                          flexGrow: 1,
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          backgroundColor: '#037ffc',
                          padding: '4px',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          maxWidth: '90%',
                        }}
                      >
                        <ListItemText primary="Logout" />
                      </Box>
                    </ListItem>
                  </List>

                  <div className="flex space-x-2 mb-2 mt-4 justify-center w-full">
                    <Button onClick={handleSave} variant="contained" color="success">
                      Submit
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>


          <a href="#">
            <AiOutlineMail className="  h-8 w-8 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* student navabr */}
      <div className="p-1">
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

          {/* Right Section */}
          <div className="flex items-center mt-2 sm:mt-0">
            <button className="p-2 border border-red-400 bg-rose-400 text-white rounded-lg shadow-lg text-lg mr-4">
              <Link to="/teacherportal" className="font-handlee">
                Teacher Portal
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2 md:mt-0 md:ml-16 gap-2 md:gap-6 w-full ">
        {/* First Child Div */}
        <div className="w-full md:w-7/10">
          {/* Content for the first div */}
          <div className="grid grid-cols-3 gap-4">
            {initialButtons.map((button, index) => (
              <div
                key={button.id}
                draggable={button.id !== "btn-student-info"}
                onDragStart={(e) => onDragStart(e, index)}
                onDrop={(e) => onDrop(e, index)}
                onDragOver={onDragOver}
                onClick={() => handleButtonClick(button.id)}
                className={`${button.bgClass} text-xl text-white font-bold p-4 h-36 w-30 gap-4 rounded-lg text-center shadow-lg shadow-blue-800 cursor-pointer flex flex-col items-center`}

              >
                {iconMap[button.icon]}
                {/* {button.id === "btn-student-info" && (
                  <img
                    src={images[currentImageIndex]}
                    alt="image"
                    className="w-1/2 h-full"
                    draggable={false}
                  />
                )} */}
                {button.id !== "btn-student-info" && <div>{button.text}</div>}

              </div>
            ))}
          </div>
        </div>

        {/* Second Child Div */}



        <div className="w-full md:w-2/10 flex flex-col items-center">
          {/* Content for the second div */}
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-24 p-2 z-10 bg-gray-200 flex justify-between shadow-2xl rounded-md">
            <div className="flex flex-row items-center gap-1 px-2 justify-center">
              <span className="font-berkshire-swash text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black p-2">
                Today is
              </span>

              <DatePicker
                className="bg-white z-10 text-sm text-centerfont-bold font-just-another-hand text-black rounded-lg p-2 w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd MMMM, yyyy"
                open={isCalendarOpen}
                onClickOutside={() => setIsCalendarOpen(true)}
              />
              <FaCalendarAlt
                className="h-8 w-8 text-black z-10 ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12"
                onClick={handleCalendarIconClick}
              />

            </div>
          </div>
          <div className="mt-4 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex items-center shadow-2xl bg-gray-200 rounded-md">
            <div className="h-96 w-full max-w-md p-4 overflow-auto">
              <h1 className="text-3xl font-bold fredericka text-center mb-4 p-2 text-blue-600">
                Tasks
              </h1>
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
              <div className="space-y-2 text-2xl font-bold font-sans text-red-500">
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
                          className={`fredericka transition duration-500 hover:text-blue-500 ${task.completed ? 'line-through text-gray-500' : ''
                            }`}
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


        {/* Third Child Div */}
        <div className="w-full md:w-1/10">
          {/* Content for the third div */}
          <div className="w-72 h-[69%] absolute left-[76%] top-[24%] border-4 shadow-2xl rounded-lg">
            <div className="w-full bg-gray-200 h-24">
              <div className="absolute left-[35%] border-4 border-yellow-200 h-24 w-20">
                <img src={myImage} alt="Description of image" />
              </div>
              <div className="absolute top-[30%]">
                <h1 className="font-just-another-hand font-bold font-sans text-lg ml-10">
                  Name: Ramesh Sriram <br />
                  <br />
                  Class: 10A <br /> <br />
                  Sid: RS1234024 <br /> <br />
                  RollNo: 28 <br />
                  <br />
                  Class-Teacher: Aradhana
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Dashboarddemo;


