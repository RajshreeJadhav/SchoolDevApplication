import React, { useState, useEffect } from "react";
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
import "./Custom.css";

const DraggableDashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const initialButtons = [
    { id: "btn-notifications", icon: "BiBell", text: "Notifications", bgClass: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500" },
    { id: "btn-student-details", icon: "TbFileSpreadsheet", text: "Student Details", bgClass: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" },
    { id: "btn-class-timetable", icon: "ClassTimetableIcon", text: "Class TimeTable", bgClass: "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500" },
    { id: "btn-report-card", icon: "MdAssignment", text: "Report Card", bgClass: "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-500 hover:to-yellow-500" },
    {  icon: "FaUser",  bgClass: "bg-gradient-to-r from-indigo-200 to-indigo-300 hover:to-yellow-500" },
    { id: "btn-exam-timetable", icon: "FaCalendarAlt", text: "Exam TimeTable", bgClass: "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-500" },
    { id: "btn-library-system", icon: "IoBookSharp", text: "Library System", bgClass: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500" },
    { id: "btn-fees-payments", icon: "BiMoney", text: "Fees & Payments", bgClass: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" },
    { id: "btn-attendance-history", icon: "BiHistory", text: "Attendance History", bgClass: "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500" },
  ];

  const iconMap = {
    BiBell: <BiBell className="text-3xl mb-2" />,
    TbFileSpreadsheet: <TbFileSpreadsheet className="text-3xl mb-2" />,
    MdAssignment: <MdAssignment className="text-3xl mb-2" />,
    FaUser: <FaUser className="text-3xl mb-2" />,
    FaCalendarAlt: <FaCalendarAlt className="text-3xl mb-2" />,
    IoBookSharp: <IoBookSharp className="text-3xl mb-2" />,
    BiMoney: <BiMoney className="text-3xl mb-2" />,
    BiHistory: <BiHistory className="text-3xl mb-2" />,
    ClassTimetableIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em" className="mb-2">
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

    if (draggedRow !== targetRow && draggedCol !== targetCol) return;

    const newButtons = [...buttons];
    const [draggedButton] = newButtons.splice(draggedIndex, 1);
    newButtons.splice(targetIndex, 0, draggedButton);
    setButtons(newButtons);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="p-2 flex justify-between items-center gap-10 shadow-md">
        <div className="flex justify-around">
          <div>
            <FaSchool className="ml-14 text-2xl text-blue-400" />
            <span className="text-black text-sm font-serif font-bold mr-2">
              Akshara Student Portal
            </span>
          </div>
          <div className="flex justify-end items-center gap-10" style={{ width: "56vw" }}>
            <a href="#" className="text-black font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-500 hover:to-yellow-700 px-3 py-2 rounded-md mr-4 shadow-md border-animate">
              Home
            </a>
            <a href="#" className="text-black font-bold bg-gradient-to-r from-orange-200 to-orange-400 hover:from-orange-400 hover:to-orange-600 px-3 py-2 rounded-md mr-4 shadow-md border-animate">
              Highlights
            </a>
            <a href="#" className="text-black font-bold bg-gradient-to-r from-green-200 to-green-400 hover:from-green-400 hover:to-green-600 px-3 py-2 rounded-md mr-4 shadow-md border-animate">
              Complaints Box
            </a>
            <a href="#" className="text-black font-bold bg-gradient-to-r from-rose-200 to-rose-400 hover:from-rose-400 hover:to-rose-600 px-3 py-2 rounded-md mr-4 shadow-md border-animate">
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
          <a href="#">
            <MdEdit className="h-8 w-8 cursor-pointer" />
          </a>
          <a href="#">
            <GrEmoji className="h-8 w-8 cursor-pointer" />
          </a>
        </div>
        <div className="flex items-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={
              <button className="flex items-center text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-800 hover:to-gray-600 px-4 py-2 rounded-md shadow-md">
                <FaCalendarAlt className="mr-2" />
                {startDate.toDateString()}
              </button>
            }
          />
        </div>
      </div>
      <div className="mt-10 ml-40 mr-40">
        <div className="grid grid-cols-3 gap-4">
          {buttons.map((button, index) => (
            <div
              key={button.id}
              draggable
              onDragStart={(e) => onDragStart(e, index)}
              onDrop={(e) => onDrop(e, index)}
              onDragOver={onDragOver}
              className={`${button.bgClass} text-white font-bold py-2 px-4 rounded-lg text-center shadow-md cursor-pointer flex flex-col items-center`}
            >
              {iconMap[button.icon]}
              {button.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DraggableDashboard;
