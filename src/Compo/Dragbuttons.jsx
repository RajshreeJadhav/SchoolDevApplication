import React, { useState, useEffect } from "react";
import { BiBell, BiMoney, BiHistory } from "react-icons/bi";
import { TbFileSpreadsheet } from "react-icons/tb";
import { MdAssignment } from "react-icons/md";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

const DragButtons = () => {
  const initialButtons = [
    { id: "btn-notifications", icon: "BiBell", text: "Notifications", bgClass: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500" },
    { id: "btn-student-details", icon: "TbFileSpreadsheet", text: "Student Details", bgClass: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" },
    { id: "btn-class-timetable", icon: "ClassTimetableIcon", text: "Class TimeTable", bgClass: "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500" },
    { id: "btn-report-card", icon: "MdAssignment", text: "Report Card", bgClass: "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-500 hover:to-yellow-500" },
    { id: "btn-student-info", icon: "FaUser", text: "Student Info", bgClass: "bg-gradient-to-r from-gray-200 to-gray-300 hover:to-yellow-500" },
    { id: "btn-exam-timetable", icon: "FaCalendarAlt", text: "Exam TimeTable", bgClass: "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-500" },
    { id: "btn-library-system", icon: "IoBookSharp", text: "Library System", bgClass: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500" },
    { id: "btn-fees-payments", icon: "BiMoney", text: "Fees & Payments", bgClass: "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" },
    { id: "btn-attendance-history", icon: "BiHistory", text: "Attendance History", bgClass: "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500" },
  ];

  const iconMap = {
    BiBell: <BiBell className="text-2xl mb-2" />,
    TbFileSpreadsheet: <TbFileSpreadsheet className="text-2xl mb-2" />,
    MdAssignment: <MdAssignment className="text-2xl mb-2" />,
    FaUser: <FaUser className="text-2xl mb-2" />,
    FaCalendarAlt: <FaCalendarAlt className="text-2xl mb-2" />,
    IoBookSharp: <IoBookSharp className="text-2xl mb-2" />,
    BiMoney: <BiMoney className="text-2xl mb-2" />,
    BiHistory: <BiHistory className="text-2xl mb-2" />,
    ClassTimetableIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em" className="mb-2">
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
    e.dataTransfer.setData("type", "gridButton");
  };

  const onDrop = (e, targetIndex) => {
    const draggedIndex = e.dataTransfer.getData("dragIndex");
    const type = e.dataTransfer.getData("type");

    if (type !== "gridButton" || draggedIndex === targetIndex) return;

    const newButtons = [...buttons];
    const [draggedButton] = newButtons.splice(draggedIndex, 1);
    newButtons.splice(targetIndex, 0, draggedButton);
    setButtons(newButtons);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h- flex">
      <div className="grid grid-cols-3 gap-4 p-4">
        {buttons.map((button, index) => (
          <button
            key={button.id}
            id={button.id}
            draggable
            data-type="gridButton"
            onDragStart={(e) => onDragStart(e, index)}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={onDragOver}
            className={`flex flex-col items-center justify-center ${button.bgClass} p-4 w-14 h-20 rounded-lg text-white font-bold shadow-lg lg:shadow-xl `}
          >
            {iconMap[button.icon]}
            <span className="text-sm">{button.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DragButtons;
