import React, { useState, useRef } from 'react';
import { FaBell, FaSearch, FaEnvelope, FaBars } from 'react-icons/fa';
import { useNavigate, Link } from "react-router-dom";
import Schoolicon from '../Assets/schoolicon.png';

import Schoollogo1 from '../Assets/schoolicononmainheader.png';
import { FaEdit, FaTrash, FaUpload, FaTimes } from "react-icons/fa";

const StudentProfile = () => {

  const [isEditing, setIsEditing] = useState(false);

  // Default values for the form fields
  const [formData, setFormData] = useState({

  });

  // Toggle edit mode
  const toggleEdit = () => {
    if (isEditing) {
      // Handle save logic here, e.g., sending data to a server
    }
    setIsEditing(!isEditing);
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const [photo, setPhoto] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const fileInputRef = useRef(null);

  // Function to handle photo file change
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file)); // Create a URL for the selected photo to display a preview
    }
  };

  // Function to handle the click event on the edit icon
  const handleEditClick = () => {
    setMenuVisible(!menuVisible); // Toggle the menu visibility
  };

  // Function to handle photo upload action
  const handleUploadPhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the click event on the file input
    }
  };

  // Function to handle photo delete action
  const handleDeletePhoto = () => {
    setPhoto(null); // Clear the photo state
    setMenuVisible(false); // Hide the menu
  };

  // Function to handle menu close action
  const handleCloseMenu = () => {
    setMenuVisible(false); // Hide the menu
  };
  const [selectedOption, setSelectedOption] = useState('Text');

  const handleChangeradio = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-amber-200 to-yellow-400 shadow-lg shadow-yellow-600 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Side - School Icons */}
          <div className="flex items-center space-x-4 justify-center">
            <img
              src={Schoolicon}
              alt="School icon"
              className="w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-14 xl:h-14 max-w-full h-auto filter grayscale brightness-0"
            />
            <Link to="/dashboarddemo">
              <img
                src={Schoollogo1}
                alt="Description of image"
                className="w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-14 xl:h-14 rounded-full filter grayscale brightness-0"
              />
            </Link>
          </div>

          {/* Middle - Student Profile Heading */}
          <div className="text-black font-berkshire text-2xl sm:text-3xl md:text-4xl font-semibold uppercase text-center flex-1">
            Student Profile
          </div>

          {/* Right Side - Icons */}
          <div className="flex items-center space-x-4">
            <FaSearch className="text-black h-6 w-6 cursor-pointer" />
            <FaBell className="text-black h-6 w-6 cursor-pointer" />
            <FaEnvelope className="text-black h-6 w-6 cursor-pointer" />
            <FaBars className="text-black h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Student Information */}
      <div className='px-8 py-2'>
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-200 to-cyan-200 border-4 border-gray-500 rounded-2xl justify-center min-h-screen">
          {/* Student Information */}
          <div className="relative flex flex-col mt-2 md:flex-row items-center bg-orange-400 md:w-2/3 gap-4 border border-gray-300 rounded-lg p-6 mb-4">
            {/* Edit Button */}
            <button
              onClick={toggleEdit}
              className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>

            {/* Left Side - Student Information Form */}
            <div className="flex flex-col w-full md:w-3/4 gap-4">
              <h1 className="text-3xl text-center font-bold text-gray-800 font-fredericka">
                Student Information
              </h1>
              <div className="flex flex-wrap justify-start gap-4">
                {/* Input Fields */}
                {[
                  { id: 'studentName', label: 'Student Name:', border: 'border-green-300', type: 'text' },
                  { id: 'rollNo', label: 'Roll No:', border: 'border-yellow-300', type: 'text' },
                  { id: 'birthDate', label: 'Birth Date:', type: 'date', border: 'border-blue-300' },
                  { id: 'classSection', label: 'Class Section:', border: 'border-purple-300', type: 'text' },
                  { id: 'gender', label: 'Gender:', type: 'select', border: 'border-red-300', options: ['Male', 'Female'] },
                  { id: 'address', label: 'Address:', type: 'textarea', border: 'border-teal-300', rows: 3 },
                ].map(({ id, label, type, border, options, rows }) => (
                  <div key={id} className="flex items-center gap-2 w-full">
                    <label htmlFor={id} className="w-40 font-semibold text-gray-700 font-just-another-hand">
                      {label}
                    </label>
                    {type === 'textarea' ? (
                      <textarea
                        id={id}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        rows={rows}
                        onChange={handleChangeradio}
                        readOnly={!isEditing}
                      />
                    ) : type === 'select' ? (
                      <select
                        id={id}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        onChange={handleChangeradio}
                        disabled={!isEditing}
                      >
                        <option value="">Select</option>
                        {options.map((option) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={id}
                        type={type || 'text'}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        onChange={handleChangeradio}
                        readOnly={!isEditing}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Upload Photo */}
            <div className="relative flex flex-col items-center w-40 md:w-[20%] bg-gray-100 border border-gray-300 rounded-lg p-4 md:mb-0 mb-4">
              <div className="flex items-center justify-between w-full mb-4">
                <div className="relative flex items-center">
                  <FaEdit
                    className="text-gray-500 cursor-pointer"
                    onClick={handleEditClick}
                  />
                  {menuVisible && (
                    <div className="absolute left-full top-0 ml-2 bg-white border border-gray-300 rounded-lg shadow-lg flex space-x-2">
                      <button
                        className="flex items-center p-2 text-blue-500 hover:bg-gray-100"
                        onClick={handleUploadPhoto}
                      >
                        <FaUpload className="mr-1" />
                      </button>
                      <button
                        className="flex items-center p-2 text-red-500 hover:bg-gray-100"
                        onClick={handleDeletePhoto}
                      >
                        <FaTrash className="mr-1" />
                      </button>
                      <button
                        className="flex items-center p-2 text-gray-500 hover:bg-gray-100"
                        onClick={handleCloseMenu}
                      >
                        <FaTimes className="mr-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-32 bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg">
                {photo ? (
                  <img
                    src={photo}
                    alt="Uploaded Photo"
                    className="object-cover w-full h-full rounded-lg"
                  />
                ) : (
                  <label
                    htmlFor="photoUpload"
                    className="flex items-center justify-center w-full h-full text-gray-500 text-xs cursor-pointer"
                  >
                    Click to upload
                    <input
                      id="photoUpload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoChange}
                      ref={fileInputRef} // Attach the ref to the input element
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Parent Information */}
          <div className="relative flex flex-col md:flex-row items-center bg-blue-400 md:w-2/3 gap-4 border border-gray-300 rounded-lg p-6 mb-4">
            {/* Edit Button */}
            <button
              onClick={toggleEdit}
              className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>

            {/* Left Side - Student Information Form */}
            <div className="flex flex-col w-full md:w-3/4 gap-4">
              <h1 className="text-3xl text-center font-bold text-gray-800 font-fredericka">
                PARENT INFORMATION
              </h1>
              <div className="flex flex-wrap justify-start gap-4">
                {/* Input Fields */}
                {[
                  { id: 'motherName', label: 'Mother Name:', border: 'border-green-300' },
                  { id: 'birthDate', label: 'Birth Date:', type: 'date', border: 'border-blue-300' },
                  { id: 'fatherName', label: 'Father Name:', border: 'border-green-300' },
                  { id: 'birthDate', label: 'Birth Date:', type: 'date', border: 'border-blue-300' },


                  { id: 'phoneNumber', label: 'Phone Number:', type: 'tel', border: 'border-teal-300' },
                  { id: 'email', label: 'Email:', type: 'email', border: 'border-indigo-300' },

                ].map(({ id, label, type, border, options, rows }) => (
                  <div key={id} className="flex items-center gap-2 w-full">
                    <label htmlFor={id} className="w-40 font-semibold text-gray-700 font-just-another-hand">
                      {label}
                    </label>
                    {type === 'textarea' ? (
                      <textarea
                        id={id}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        rows={rows}
                        onChange={handleChangeradio}
                        readOnly={!isEditing}
                      />
                    ) : type === 'select' ? (
                      <select
                        id={id}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        onChange={handleChangeradio}
                        disabled={!isEditing}
                      >
                        <option value="">Select</option>
                        {options.map((option) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={id}
                        type={type || 'text'}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        onChange={handleChangeradio}
                        readOnly={!isEditing}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Parent Information */}
          {/* <div className="flex flex-col md:flex-row items-center bg-blue-400 md:w-2/3 gap-4 border border-gray-300 rounded-lg p-6">
            {/* Left Side - Parent Information Form 
            <div className="flex flex-col w-full md:w-3/4 gap-4">
              <h1 className="text-3xl text-center font-bold text-gray-800 font-fredericka">Parent Information</h1>
              <div className="flex flex-wrap justify-start gap-4">
                {/* Input Fields 
                {[
                  { id: 'motherName', label: 'Mother Name:', border: 'border-green-300' },
                  { id: 'birthDate', label: 'Birth Date:', type: 'date', border: 'border-blue-300' },
                  { id: 'fatherName', label: 'Father Name:', border: 'border-green-300' },
                  { id: 'birthDate', label: 'Birth Date:', type: 'date', border: 'border-blue-300' },


                  { id: 'phoneNumber', label: 'Phone Number:', type: 'tel', border: 'border-teal-300' },
                  { id: 'email', label: 'Email:', type: 'email', border: 'border-indigo-300' },

                ].map(({ id, label, type, border, options, rows }) => (
                  <div key={id} className="flex items-center gap-2 w-full">
                    <label htmlFor={id} className="w-40 font-semibold text-gray-700 font-just-another-hand">
                      {label}
                    </label>
                    {type === 'textarea' ? (
                      <textarea
                        id={id}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        rows={rows}
                      />
                    ) : type === 'select' ? (
                      <select
                        id={id}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                      >
                        <option value="">Select</option>
                        {options.map((option) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={id}
                        type={type || 'text'}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div> */}


          {/* Medical Information */}

          <div className="relative flex flex-col  md:flex-row items-center bg-gradient-to-r from-teal-200 to-teal-500  md:w-2/3 gap-4 border border-gray-300 rounded-lg p-6 mb-4">
            {/* Edit Button */}
            <button
              onClick={toggleEdit}
              className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>


            <div className="flex flex-col w-full md:w-3/4 gap-4">
              <h1 className="text-3xl text-center font-bold text-gray-800 font-fredericka">
                MEDICAL INFORMATION
              </h1>
              <div className="flex flex-wrap justify-start gap-4">
                {/* Input Fields */}
                {[
                  { id: 'allergiesinfo', label: 'Allergies info:', border: 'border-green-300' },

                  { id: 'bloodgroup', label: 'Blood Group:', border: 'border-green-300' },
                  { id: 'diet needs', label: 'Diet Needs:', border: 'border-green-300' },
                  { id: 'email', label: 'Email:', type: 'email', border: 'border-indigo-300' },

                ].map(({ id, label, type, border, options, rows }) => (
                  <div key={id} className="flex items-center gap-2 w-full">
                    <label htmlFor={id} className="w-40 font-semibold text-gray-700 font-just-another-hand">
                      {label}
                    </label>
                    {type === 'textarea' ? (
                      <textarea
                        id={id}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        rows={rows}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    ) : type === 'select' ? (
                      <select
                        id={id}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        onChange={handleChange}
                        disabled={!isEditing}
                      >
                        <option value="">Select</option>
                        {options.map((option) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={id}
                        type={type || 'text'}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Emergency Information */}

          <div className="relative flex flex-col  md:flex-row items-center bg-gradient-to-r from-amber-200 to-yellow-500 md:w-2/3 gap-4 border border-gray-300 rounded-lg p-6 mb-4">
            {/* Edit Button */}
            <button
              onClick={toggleEdit}
              className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>

            {/* Left Side - Student Information Form */}
            <div className="flex flex-col w-full md:w-3/4 gap-4">
              <h1 className="text-3xl text-center font-bold text-gray-800 font-fredericka">
                EMERGENCY INFORMATION
              </h1>
              <div className="flex flex-wrap justify-start gap-4">
                {/* Input Fields */}
                {[
                  { id: 'name', label: 'Name:', border: 'border-green-300', type: 'text' },
                  { id: 'relationwithstudent', label: 'Relation With Student:', border: 'border-yellow-300', type: 'text' },
                  { id: 'phoneNumber', label: 'Phone Number:', type: 'tel', border: 'border-teal-300' },

                ].map(({ id, label, type, border, options, rows }) => (
                  <div key={id} className="flex items-center gap-2 w-full">
                    <label htmlFor={id} className="w-40 font-semibold text-gray-700 font-just-another-hand">
                      {label}
                    </label>
                    {type === 'textarea' ? (
                      <textarea
                        id={id}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        rows={rows}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    ) : type === 'select' ? (
                      <select
                        id={id}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        onChange={handleChange}
                        disabled={!isEditing}
                      >
                        <option value="">Select</option>
                        {options.map((option) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={id}
                        type={type || 'text'}
                        value={formData[id]}
                        className={`flex-1 w-full border ${border} rounded p-2 text-sm font-just-another-hand`}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Receive information */}

          <div className="flex flex-col md:flex-row items-center bg-indigo-400 md:w-2/3 gap-4 border border-gray-300 rounded-lg p-6">
  {/* Left Side - Parent Information Form */}
  <div className="flex flex-col w-full md:w-3/4 gap-4">
    <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-800 font-fredericka">
      HOW WOULD YOU LIKE TO RECEIVE INFORMATION  ?
    </h1>
    <fieldset className="flex items-center justify-center space-x-6">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="text"
          name="notification"
          value="Text"
          checked={selectedOption === 'Text'}
          onChange={handleChangeradio}
          className="form-radio text-blue-500 w-4 h-4" /* Increased size */
        />
        <label className="text-2xl md:text-xl text-gray-700">
          Text
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="email"
          name="notification"
          value="Email"
          checked={selectedOption === 'Email'}
          onChange={handleChangeradio}
          className="form-radio text-blue-500 w-4 h-4" /* Increased size */
        />
        <label className="text-2xl md:text-xl text-gray-700">
          Email
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="both"
          name="notification"
          value="Both"
          checked={selectedOption === 'Both'}
          onChange={handleChangeradio}
          className="form-radio text-blue-500 w-4 h-4" /* Increased size */
        />
        <label className="text-2xl md:text-xl text-gray-700">
          Both
        </label>
      </div>
    </fieldset>
  </div>
</div>
</div>
      </div>
    </div>

  )
}

export default StudentProfile
