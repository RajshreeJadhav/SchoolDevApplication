import React, { useState } from 'react';
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { FaChalkboardTeacher, FaUsers, FaPercentage } from 'react-icons/fa'; // Import icons
import { HiOutlineDocumentText, HiOutlineClipboardList } from 'react-icons/hi';
import { MdQuiz, MdOutlineAssignment, MdOutlineEventNote } from 'react-icons/md';


const students = [
  { id: 'R123', name: 'Arpita Singh', class: '10A', teacher: 'Usha Kiran', emergency: '0123454321', email: 'students@gmail.com' },
  { id: 'S234', name: 'Suresh Patnaik', class: '10B', teacher: 'Usha Kiran', emergency: '0123454321', email: 'students@gmail.com' },
  { id: 'D235', name: 'Dipanita Rao', class: '10A', teacher: 'Usha Kiran', emergency: '0123454321', email: 'students@gmail.com' },
  { id: 'G789', name: 'Gayatri Rao', class: '10A', teacher: 'Usha Kiran', emergency: '0123454321', email: 'students@gmail.com' },
  { id: 'F787', name: 'Falguni Sinha', class: '10A', teacher: 'Usha Kiran', emergency: '0123454321', email: 'students@gmail.com' },
  { id: 'J783', name: 'Amaira khan', class: '10A', teacher: 'Usha Kiran', emergency: '0123454321', email: 'students@gmail.com' },
  { id: 'R763', name: 'Faizal Khan', class: '10A', teacher: 'Usha Kiran', emergency: '0123454321', email: 'students@gmail.com' },
  { id: 'U863', name: 'Uday Patel', class: '10A', teacher: 'Usha Kiran', emergency: '0123454321', email: 'students@gmail.com' },
];

const TeacherMyClasses = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const [classes, setClasses] = useState(['10A', '9A', '9B', '8A']); // Initial classes

  const addClass = () => {
    const newClass = prompt('Enter the class name (e.g., 7A, 8B):');
    if (newClass) {
      setClasses([...classes, newClass]);
    }
  };

  const deleteClass = (index) => {
    // Show a confirmation popup
    const isConfirmed = window.confirm('Are you sure you want to delete this class?');
    if (isConfirmed) {
      // Proceed with deletion if confirmed
      const updatedClasses = classes.filter((_, i) => i !== index);
      setClasses(updatedClasses);
    }
  };

  const editClass = (index) => {
    const newClassName = prompt('Edit the class name:', classes[index]);
    if (newClassName) {
      const updatedClasses = classes.map((className, i) =>
        i === index ? newClassName : className
      );
      setClasses(updatedClasses);
    }
  };

  const [darkMode, setDarkMode] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [rollNoSearch, setRollNoSearch] = useState('');
  const [nameSearch, setNameSearch] = useState('');
  const filteredStudents = students.filter(student => {
    const matchesRollNo = student.id.toLowerCase().includes(rollNoSearch.toLowerCase());
    const matchesName = student.name.toLowerCase().includes(nameSearch.toLowerCase());
    return matchesRollNo && matchesName;
  });

  const [student, setStudent] = useState({
    id: '',
    name: '',
    class: '',
    teacher: '',
    emergency: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(student);
  };
  return (
    <div>
      <div className='p-2 '>
        <nav className="flex items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-cyan-500 to-90% ... p-2 shadow-lg shadow-cyan-300">
          {/* Left Side: School Icon and Degree Icon */}
          <div className="flex items-center space-x-4">
         
            
            <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
          <FaSchool className="text-white text-4xl" /> 
            {/* <span className="text-lg md:text-2xl lg:text-3xl font-medium font-berkshire">
              Akshra Student Portal
            </span> */}
          </Link>
        </div>
            
            <FaUserGraduate className="text-white text-4xl" /> {/* Increased icon size */}
          </div>


          {/* Center: My Classes Button */}
          <div>
            <button className="text-black text-xl font-berkshire font-semibold bg-gradient-to-r from-violet-200 to-pink-200 rounded-lg">My Classes</button>
          </div>

          {/* Right Side: Teacher Dashboard Heading and Teacher Photo */}
          <div className="flex items-center space-x-4">
            <div
              className="text-white text-xl font-semibold font-handlee cursor-pointer"
              onClick={() => navigate('/teacherdash')} // Navigate on click
            >
              Teacher Dashboard
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Teacher Photo */}
              <img
                src="https://via.placeholder.com/40" // Replace with your image URL
                alt="Teacher"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              {/* Hover effect: Display teacher's name */}
              {isHovered && (
                <div className="absolute top-12 right-1 bg-white font-fredericka text-black text-sm font-semibold p-2 rounded shadow-lg">
                  Aradhana sharma
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Navbar for List of my classes */}
      <div className='px-1'>
      <nav className="flex items-center justify-between bg-gradient-to-r from-teal-400 to-green-500 p-4 rounded-lg shadow-lg shadow-green-300">
        {/* Left Side: List of My Classes */}
        <div className="text-white text-lg font-semibold font-fredericka">
          List of my classes
        </div>

        {/* Center: Class Buttons */}
        <div className="flex items-center space-x-4">
          {classes.map((className, index) => (
            <div key={index} className="flex flex-col items-center group">
              <button
                className="bg-yellow-300 text-black text-lg font-fredericka font-semibold py-2 px-4 rounded-full border-2 border-black shadow-md group-hover:bg-yellow-400"
              >
                {className}
              </button>
              <div className="flex space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => editClass(index)}
                  className="text-black bg-white p-1 rounded-full"
                >
                  <FaEdit className="text-blue-500" />
                </button>
                <button
                  onClick={() => deleteClass(index)}
                  className="text-black bg-white p-1 rounded-full"
                >
                  <FaTrashAlt className="text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Add More Button */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={addClass}>
          <FaPlus className="text-black text-2xl" />
          <div className="text-black text-lg font-semibold font-fredericka">Add More</div>
        </div>
      </nav>
    </div>



      {/* this is for Teaching in class */}
      <div className="p-2">
  <div className="flex flex-col items-center p-4 bg-gradient-to-r from-green-300 to-yellow-300 gap-4 rounded-lg shadow-lg">

    {/* Left Section: First Three Divs in a Row */}
    <div className="flex flex-wrap gap-4 justify-center">
    <div className="flex flex-wrap gap-4 justify-center">
  <div className="flex flex-col items-center bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg p-4 w-40 md:w-48 lg:w-56">
    <FaChalkboardTeacher className="text-3xl md:text-4xl" />
    <div className="text-center mt-2">
      <h3 className="font-bold text-sm md:text-base lg:text-lg font-handlee">Teaching in class</h3>
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl font-handlee">Science</p>
    </div>
  </div>

  <div className="flex flex-col items-center bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg p-4 w-40 md:w-48 lg:w-56">
    <FaUsers className="text-3xl md:text-4xl" />
    <div className="text-center mt-2">
      <h3 className="font-bold text-sm md:text-base lg:text-lg font-handlee">No. of Students</h3>
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl font-handlee">42</p>
    </div>
  </div>

  <div className="flex flex-col items-center bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg p-4 w-40 md:w-48 lg:w-56">
    <FaPercentage className="text-3xl md:text-4xl" />
    <div className="text-center mt-2">
      <h3 className="font-bold text-sm md:text-base lg:text-lg font-handlee">Class Percentage</h3>
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl font-handlee">79%</p>
    </div>
  </div>
</div>
</div>


    {/* Right Section: Buttons (Now in a Single Row) */}
    <div className="flex flex-wrap justify-center items-center bg-gradient-to-r from-orange-300 to-rose-300 p-4 gap-4 md:gap-6 mt-4 shadow-lg">
  {/* Button - Check Students Profile */}
  <button className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg w-40 h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 font-handlee text-center text-sm md:text-lg lg:text-xl font-semibold hover:bg-yellow-500 transition">
    Check Students Profile
  </button>

  {/* Button - Prepare Mock Quiz */}
  <button className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg w-40 h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 text-sm md:text-lg lg:text-xl font-handlee text-center font-semibold hover:bg-yellow-500 transition">
    Prepare Mock Quiz
  </button>

  {/* Button - Syllabus */}
  <button className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg w-40 h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 text-sm md:text-lg lg:text-xl font-handlee text-center font-semibold hover:bg-yellow-500 transition">
    Syllabus
  </button>

  {/* Button - Create Agenda */}
  <button className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg w-40 h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 text-sm md:text-lg lg:text-xl font-handlee text-center font-semibold hover:bg-yellow-500 transition">
    Create Agenda
  </button>

  {/* Button - Exam Preparation */}
  <button className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg w-40 h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 text-sm md:text-lg lg:text-xl font-handlee text-center font-semibold hover:bg-yellow-500 transition">
    Exam Preparation
  </button>

  {/* Button - Exam Papers */}
  <button className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg w-40 h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 text-sm md:text-lg lg:text-xl font-handlee text-center font-semibold hover:bg-yellow-500 transition">
    Exam Papers
  </button>
</div>
</div>
  {/* Additional Section Below for "Check Students Profile" */}
  <nav className="bg-gray-500 p-4 mt-4">
    <div className="container mx-auto flex items-center justify-center">
      <h1 className="text-white text-sm md:text-lg font-semibold font-handlee">Check Students Profile</h1>
    </div>
  </nav>
</div>



      <div className={`min-h-screen p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-orange-100 text-gray-900'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between mb-4">
            <div className="flex flex-wrap items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <h1 className={`text-lg font-handlee font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Search by Roll No.
                </h1>
                <input
                  className={`border p-2 w-32 md:w-48 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                  placeholder="Search by Roll No."
                  value={rollNoSearch}
                  onChange={(e) => setRollNoSearch(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <h1 className={`text-lg font-handlee font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Search by Name
                </h1>
                <input
                  className={`border p-2 w-32 md:w-48 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                  placeholder="Search by Name"
                  value={nameSearch}
                  onChange={(e) => setNameSearch(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Switch to {darkMode ? 'Light' : 'Dark'} mode
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className={`w-full md:w-1/3 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md rounded-md overflow-hidden`}>
              <table className="w-full">
                <thead className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <tr>
                    <th className={`p-2 font-handlee text-left ${darkMode ? 'text-white' : 'text-gray-800'}`}>ID</th>
                    <th className={`p-2 font-handlee text-left ${darkMode ? 'text-white' : 'text-gray-800'}`}>Names</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className={`cursor-pointer ${darkMode ? 'bg-gray-500' : 'bg-gray-200'} font-just-another-hand hover:bg-blue-300 ${selectedStudent.id === student.id ? 'bg-blue-100' : ''}`}
                      onClick={() => setSelectedStudent(student)}
                    >
                      <td className={`p-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{student.id}</td>
                      <td className={`p-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{student.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={`w-full md:w-2/3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-md p-4`}>
              {selectedStudent.id ? (
                <>
                  <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>ID: {selectedStudent.id}</h2>
                  <div className="flex items-center mb-2">
                    <div className="w-16 h-16 bg-pink-300 rounded-full mr-4 font-just-another-hand"></div>
                    <div>
                      <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Name:</strong> {selectedStudent.name}</p>
                      <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Class:</strong> {selectedStudent.class}</p>
                    </div>
                  </div>
                  <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Class Teacher:</strong> {selectedStudent.teacher}</p>
                  <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Emergency contact no:</strong> {selectedStudent.emergency}</p>
                  <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Email ID:</strong> {selectedStudent.email}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    See Marks and Attendance Information
                  </button>
                </>
              ) : (
                <div className={`w-full md:w-2/3 ${darkMode ? 'bg-gray-500' : 'bg-gray-200'} rounded-md p-4`}>
                  <h2 className={`text-xl font-just-another-hand font-bold mb-2 ${darkMode ? 'text-white-400' : 'text-gray-800'}`}>ID: {selectedStudent.id}</h2>
                  <div className="flex items-center mb-2">
                    <div className="w-16 h-16 bg-red-300 rounded-full mr-4"></div>
                    <div>
                      <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Name:</strong> {selectedStudent.name}</p>
                      <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Class:</strong> {selectedStudent.class}</p>
                    </div>
                  </div>
                  <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Class Teacher:</strong> {selectedStudent.teacher}</p>
                  <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Emergency contact no:</strong> {selectedStudent.emergency}</p>
                  <p><strong className={darkMode ? 'text-white' : 'text-gray-800'}>Email ID:</strong> {selectedStudent.email}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    See Marks and Attendance Information
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default TeacherMyClasses
