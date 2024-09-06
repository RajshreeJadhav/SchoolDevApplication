import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { BiBell, BiMoney, BiHistory } from 'react-icons/bi';
import { TbFileSpreadsheet } from 'react-icons/tb';
import { MdAssignment } from 'react-icons/md';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const TaskComponent = ({ task, index, setEditIndex, setTaskToEdit, handleRemoveTask, handleNotification }) => {
  return (
    <div key={index} className="flex justify-between items-center">
      <input
        type="checkbox"
        className="mr-2"
        onChange={(e) => handleNotification(e, task)}
      />
      <h1 className="transition duration-500 hover:text-blue-500 font-sans">
        {index + 1}. {task}
      </h1>
      <div className="flex-shrink-0 flex space-x-2">
        <button
          onClick={() => {
            setEditIndex(index);
            setTaskToEdit(task);
          }}
          className="p-1 w-8 text-sm text-white font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-md shadow-md shadow-green-500"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          onClick={() => handleRemoveTask(index)}
          className="p-1 w-8 text-sm text-white font-bold bg-gradient-to-r from-red-500 to-orange-500 rounded-md shadow-md shadow-red-500"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

const TaskList = () => {
  const navigate = useNavigate(); // Define navigate using useNavigate hook

  const initialButtons = [
    {
      id: "btn-notifications",
      icon: "BiBell",
      text: "Notifications",
      bgClass:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500  ",
    },
    {
      id: "btn-student-details",
      icon: "TbFileSpreadsheet",
      text: "Student Details",
      bgClass:
        "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500",
    },
    {
      id: "btn-class-timetable",
      icon: "ClassTimetableIcon",
      text: "Class TimeTable",
      bgClass:
        "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500",
      
    },
    {
      id: "btn-report-card",
      icon: "MdAssignment",
      text: "Report Card",
      bgClass:
        "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-pink-500 hover:to-yellow-500",
    },
    { id: "btn-student-info", icon: "FaUser", text: "", bgClass: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" },
    {
      id: "btn-exam-timetable",
      icon: "FaCalendarAlt",
      text: "Exam TimeTable",
      bgClass:
        "bg-gradient-to-r from-pink-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-500",
    },
    {
      id: "btn-library-system",
      icon: "IoBookSharp",
      text: "Library System",
      bgClass:
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-yellow-500",
    },
    {
      id: "btn-fees-payments",
      icon: "BiMoney",
      text: "Fees & Payments",
      bgClass:
        "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500",
    },
    {
      id: "btn-attendance-history",
      icon: "BiHistory",
      text: "Attendance History",
      bgClass:
        "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500",
    },
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
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="2em"
        width="2em"
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

  const handleButtonClick = (buttonId) => {
    // Navigate to the ClassTimetable page if the buttonId is "btn-class-timetable"
    if (buttonId === "btn-class-timetable") {
      navigate("/class-timetable");
    }
  };

  // Format the date as "05, May 2024"
  // const formattedDate = format(startDate, "dd, MMMM yyyy");

  // this is for add task display in todays task
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleSaveEditTask = () => {
    if (editIndex !== null && taskToEdit.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? taskToEdit : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
      setTaskToEdit("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleNotification = (e, task) => {
    if (e.target.checked) {
      setCompletedTasks([...completedTasks, task]);
    } else {
      setCompletedTasks(completedTasks.filter((t) => t !== task));
    }
  };

  const showNotification = () => {
    if (completedTasks.length > 0) {
      alert(`Tasks completed: ${completedTasks.join(', ')}`);
    } else {
      alert("No tasks completed.");
    }
  };

  return (
    <div>
      <div className="absolute right-[25%] top-[42%] mt-2 flex items-center shadow-2xl bg-gray-200 w-1/4 rounded-md">
        <div className="h-96 w-96 max-w-md p-4  overflow-auto">
          <h1 className="text-3xl font-bold font-sans text-center mb-4 p-2 text-blue-600">
            Tasks
          </h1>

          <div className="space-y-2 text-2xl font-bold font-sans text-red-500">
            {tasks.map((task, index) => (
              <TaskComponent
                key={index}
                task={task}
                index={index}
                setEditIndex={setEditIndex}
                setTaskToEdit={setTaskToEdit}
                handleRemoveTask={handleRemoveTask}
                handleNotification={handleNotification}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={showNotification}
          className="p-2 mt-4 text-white font-bold bg-blue-500 rounded"
        >
          Notification
        </button>
      </div>
    </div>
  );
};

export default TaskList;
