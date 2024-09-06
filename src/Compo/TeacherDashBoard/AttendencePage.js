import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClipboardList, FaFileAlt, FaBook, FaBell, FaChevronRight, FaChevronLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaCheck, FaTimes } from 'react-icons/fa';


const initialStudents = [
  { date: 'August 1, 2024', name: 'Lalitha Rao', status: 'Present', remarks: '' },
  { date: 'August 1, 2024', name: 'Pushpa James', status: 'Present', remarks: 'Half day leave today' },
  { date: 'August 1, 2024', name: 'Salman Khan', status: 'Present', remarks: '' },
  { date: 'August 1, 2024', name: 'Akshitha Reddy', status: 'Present', remarks: 'Sick leave' },
  { date: 'August 1, 2024', name: 'Sharad Kumar', status: 'Present', remarks: '' },
  { date: 'August 1, 2024', name: 'Tejaswi Prakash', status: 'Present', remarks: '' },
  { date: 'August 1, 2024', name: 'Nitin Reddy', status: 'Present', remarks: '' },
  { date: 'August 1, 2024', name: 'suraj Prakash', status: 'Present', remarks: '' },
  { date: 'August 1, 2024', name: 'Nitin Reddy', status: 'Present', remarks: '' },
];

const AttendancePage = () => {
  const [view, setView] = useState('teacherDashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  
  const [students, setStudents] = useState(initialStudents);

  const handleStatusChange = (index) => {
    const newStudents = [...students];
    newStudents[index].status = newStudents[index].status === 'Present' ? 'Absent' : 'Present';
    setStudents(newStudents);
  };

  
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg shadow-purple-400 sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link to="/dashboarddemo" className="flex items-center space-x-2">
            <span className="text-lg md:text-2xl lg:text-3xl font-medium font-berkshire">
              Akshra Student Portal
            </span>
          </Link>
        </div>
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
        <div className="flex items-center"></div>
      </nav>

      <div className="w-full">
        <nav className="bg-gradient-to-r from-sky-400 to-blue-500 font-semibold font-berkshire text-white p-4">
          <div className="container mx-auto flex justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Class Teacher Page 10 A
            </h1>
          </div>
        </nav>
      </div>
      <div className="flex h-screen bg-blue-300">
      <div
        className={`fixed h-full bg-blue-200 text-black transition-width duration-300 ease-in-out md:relative ${
          isCollapsed ? 'w-20' : showIcons ? 'w-1/6' : 'w-1/12'
        }`}
      >
        <button
          className="text-black p-2 absolute top-4 right-4 md:hidden"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <FaChevronRight className="text-2xl" /> : <FaChevronLeft className="text-2xl" />}
        </button>
        <div className="flex flex-col items-center mt-12">
          <button className="text-black p-2 mb-4" onClick={toggleIcons}>
            {showIcons ? <FaChevronLeft className="text-2xl" /> : <FaChevronRight className="text-2xl" />}
          </button>
          {showIcons && (
            <div className="flex flex-col items-center ">
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-teal-400 to-yellow-200 rounded">
                {!isCollapsed && <span className="ml-3 font-handlee ">Class Exams</span>}
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-lime-400 to-lime-500 rounded">
                {!isCollapsed && <span className="ml-3 font-handlee ">Attendance</span>}
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-teal-400 to-yellow-200 rounded">
                {!isCollapsed && <span className="ml-3 font-handlee ">Report Card</span>}
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-lime-400 to-lime-500 rounded">
                {!isCollapsed && <span className="ml-3 font-handlee ">Class Agenda</span>}
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-teal-400 to-yellow-200 rounded">
                {!isCollapsed && <span className="ml-3 font-handlee ">PTA Meetings</span>}
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-lime-400 to-lime-500 rounded">
                {!isCollapsed && <span className="ml-3 font-handlee ">Notifications</span>}
              </button>
            </div>
          )}
          {!showIcons && (
            <div className="flex flex-col items-center">
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-teal-400 to-yellow-200 rounded">
                <FaCalendarAlt className="text-xl ml-2" />
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-emerald-500 to-lime-600 rounded">
                <FaClipboardList className="text-xl ml-2" />
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-teal-400 to-yellow-200 rounded">
                <FaFileAlt className="text-xl ml-2" />
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-lime-400 to-lime-500 rounded">
                <FaBook className="text-xl ml-2" />
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-teal-400 to-yellow-200 rounded">
                <FaCalendarAlt className="text-xl ml-2" />
              </button>
              <button className="flex items-center my-4 p-2 w-full text-left bg-gradient-to-r from-lime-400 to-lime-500 rounded">
                <FaBell className="text-xl ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex-1 ml-${
          isCollapsed ? '20' : showIcons ? '1/12' : '1/6'
        } p-8 transition-all duration-300 ease-in-out`}
      >
      <div className="container mx-auto p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-cyan-700 text-white font-fredericka">
            <th className="border p-2">Date</th>
            <th className="border p-2">Student Name</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className={`font-just-another-hand ${index % 2 === 0 ? 'bg-cyan-100' : 'bg-cyan-50'}`}>
              <td className="border p-2">{student.date}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={student.status === 'Present'}
                  onChange={() => handleStatusChange(index)}
                />
                {student.status === 'Present' ? (
                  <>
                    <span className="mr-2">Present</span>
                    <FaCheck className="text-green-500" />
                  </>
                ) : (
                  <>
                    <span className="mr-2">Absent</span>
                    <FaTimes className="text-red-500" />
                  </>
                )}
              </td>
              <td className="border p-2">{student.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
    </div>
  );
};

export default AttendancePage;
