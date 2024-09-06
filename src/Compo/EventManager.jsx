import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: new Date() });
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', date: new Date() });
  };

  const handleEditEvent = (index) => {
    setCurrentEvent({ ...events[index], index });
    setNewEvent(events[index]);
    setIsEditing(true);
  };

  const handleUpdateEvent = () => {
    const updatedEvents = events.map((event, index) =>
      index === currentEvent.index ? newEvent : event
    );
    setEvents(updatedEvents);
    setNewEvent({ title: '', date: new Date() });
    setIsEditing(false);
    setCurrentEvent(null);
  };

  const handleDeleteEvent = (index) => {
    const filteredEvents = events.filter((_, i) => i !== index);
    setEvents(filteredEvents);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          placeholder="Event Title"
          className="p-2 border rounded mb-2"
        />
        <DatePicker
          selected={newEvent.date}
          onChange={(date) => setNewEvent({ ...newEvent, date })}
          className="p-2 border rounded mb-2"
        />
        <button
          onClick={isEditing ? handleUpdateEvent : handleAddEvent}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isEditing ? 'Update Event' : 'Add Event'}
        </button>
      </div>
      <ul className="list-disc pl-4">
        {events.map((event, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{event.title}</span> - {event.date.toDateString()}
            <button
              onClick={() => handleEditEvent(index)}
              className="ml-2 bg-yellow-500 text-white p-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteEvent(index)}
              className="ml-2 bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;

// import React, { useState, useEffect } from "react";
// import myImage from "../Assets/kids.jpg";
// import myEarth from "../Assets/Earth.jpg";
// import mystud from "../Assets/stud1.jpg";
// import mystudent from "../Assets/stud2.jpg";
// import mystudent3 from "../Assets/stud3.jpg";
// import mystudent4 from "../Assets/stud4.jpg";

// import { FaSchool } from "react-icons/fa6";
// import { VscSearch } from "react-icons/vsc";
// import { MdEdit } from "react-icons/md";
// import { GrEmoji } from "react-icons/gr";
// import { AiOutlineMail } from "react-icons/ai";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FaCalendarAlt } from "react-icons/fa";
// import { TbFileSpreadsheet } from "react-icons/tb";
// import { BiBell, BiMoney, BiHistory } from "react-icons/bi";
// import { MdAssignment } from "react-icons/md";
// import { IoBookSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Dashboarddemo = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [startDate, setStartDate] = useState(new Date());
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [tasks, setTasks] = useState([
//     "1. Homework in Science ch:1 pg:20",
//     "2. Physics lab on Glasses",
//     "3. Practice Hindi Grammar",
//     "4. Practice English Grammar",
//   ]);
//   const [newTask, setNewTask] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const handleCalendarIconClick = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const handleEditTask = (index) => {
//     setNewTask(tasks[index]);
//     setIsEditing(true);
//     setCurrentTaskIndex(index);
//   };

//   const handleSaveTask = () => {
//     if (newTask.trim() !== "" && currentTaskIndex !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[currentTaskIndex] = newTask;
//       setTasks(updatedTasks);
//       setNewTask("");
//       setIsEditing(false);
//       setCurrentTaskIndex(null);
//     }
//   };

//   const handleRemoveTask = (index) => {
//     const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
//     setTasks(updatedTasks);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // 5000ms = 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   const images = [myEarth, mystud, mystudent, mystudent3, mystudent4];
//   const initialButtons = [
//     {
//       id: "btn-notifications",
//       icon: "BiBell",
//       text: "Notifications",
//       bgClass:
//         "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500  ",
//     },
//     {
//       id: "btn-student-details",
//       icon: "TbFileSpreadsheet",
//       text: "Student Details",
//       bgClass:
//         "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500",
//     },
//     {
//       id: "btn-class-timetable",
//       icon: "ClassTimetableIcon",
//       text: "Class TimeTable",
//       bgClass:
//         "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500",
//     },
//     {
//       id: "btn-report-card",
//       icon: "MdAssignment",
//       text: "Report Card",
//       bgClass:
//         "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-500 hover:to-yellow-500",
//     },
//     {
//       id: "btn-student-info",
//       icon: "FaUser",
//       text: "",
//       bgClass: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
//     },
//     {
//       id: "btn-exam-timetable",
//       icon: "FaCalendarAlt",
//       text: "Exam TimeTable",
//       bgClass:
//         "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-500",
//     },
//     {
//       id: "btn-library-system",
//       icon: "IoBookSharp",
//       text: "Library System",
//       bgClass:
//         "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500",
//     },
//     {
//       id: "btn-fees-payments",
//       icon: "BiMoney",
//       text: "Fees & Payments",
//       bgClass:
//         "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500",
//     },
//     {
//       id: "btn-attendance-history",
//       icon: "BiHistory",
//       text: "Attendance History",
//       bgClass:
//         "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500",
//     },
//   ];
//   const iconMap = {
//     BiBell: <BiBell className="text-3xl mb-2" />,
//     TbFileSpreadsheet: <TbFileSpreadsheet className="text-3xl mb-2" />,
//     MdAssignment: <MdAssignment className="text-3xl mb-2" />,
//     FaUser: (
//       <img
//         src={images[currentImageIndex]}
//         className="h-24 w-32 p-1 user-select-none justify-center items-center"
//         onDragStart={(e) => e.preventDefault()}
//         draggable={false}
//         alt="Slideshow"
//       />
//     ),
//     FaCalendarAlt: <FaCalendarAlt className="text-3xl mb-2" />,
//     IoBookSharp: <IoBookSharp className="text-3xl mb-2" />,
//     BiMoney: <BiMoney className="text-3xl mb-2" />,
//     BiHistory: <BiHistory className="text-3xl mb-2" />,
//     ClassTimetableIcon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         height="2em"
//         width="2em"
//         className="mb-2"
//       >
//         <path d="M14 12h1.5v2.82l2.44 1.41-.75 1.3L14 15.69V12M4 2h14a2 2 0 012 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 01-7 7c-1.91 0-3.64-.76-4.9-2H4a2 2 0 01-2-2V4a2 2 0 012-2m0 13v3h4.67c-.43-.91-.67-1.93-.67-3H4m0-7h6V5H4v3m14 0V5h-6v3h6M4 13h4.29c.34-1.15.97-2.18 1.81-3H4v3m11-2.85A4.85 4.85 0 0010.15 15c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0019.85 15c0-2.68-2.17-4.85-4.85-4.85z" />
//       </svg>
//     ),
//   };

//   const [buttons, setButtons] = useState(() => {
//     const savedButtons = localStorage.getItem("buttons");
//     return savedButtons ? JSON.parse(savedButtons) : initialButtons;
//   });

//   useEffect(() => {
//     localStorage.setItem("buttons", JSON.stringify(buttons));
//   }, [buttons]);

//   const onDragStart = (e, index) => {
//     e.dataTransfer.setData("dragIndex", index);
//   };

//   const onDrop = (e, targetIndex) => {
//     const draggedIndex = parseInt(e.dataTransfer.getData("dragIndex"), 10);
//     if (draggedIndex === targetIndex) return;

//     // Check if the drag and drop are within the same row or column
//     const draggedRow = Math.floor(draggedIndex /
