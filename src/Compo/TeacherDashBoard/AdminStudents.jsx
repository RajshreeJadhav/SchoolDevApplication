import React, { useState } from "react";
import SendAccountLink from '../AdminStudentcomponents/SendAccountLink';
import FillInformation from '../AdminStudentcomponents/FillInformation';
import NotifyTeachersStudents from '../AdminStudentcomponents/NotifyTeachersStudents ';
import SeeListOfStudents from '../AdminStudentcomponents/SeeListOfStudents';
import GeneralInformation from "../AdminStudentcomponents/GeneralInformation ";
import ParentInformation from "../AdminStudentcomponents/ParentInformation ";
import MedicalInformation from "../AdminStudentcomponents/MedicalInformation ";
import ClassInformation from "../AdminStudentcomponents/ClassInformation ";
import PhotoUploads from "../AdminStudentcomponents/PhotoUploads";
import EmergencyInformation from "../AdminStudentcomponents/EmergencyInformation";

const AdminStudents = () => {

  const [activeComponent, setActiveComponent] = useState("sendLink");

  const renderComponent = () => {
    switch (activeComponent) {
      case "sendLink":
        return <SendAccountLink/>;
      case "fillInfo":
        return <FillInformation/>;
      case "notify":
        return <NotifyTeachersStudents/>;
      case "seeStudents":
        return <SeeListOfStudents />;
      default:
        return null;
    }
  };


  const [activeComponentxy, setActiveComponentxy] = useState("GeneralInformation");

  const renderComponentxy = () => {
    switch (activeComponentxy) {
      case "ParentInformation":
        return <ParentInformation />;
      case "MedicalInformation":
        return <MedicalInformation />;
      case "EmergencyInformation":
        return <EmergencyInformation />;
      case "ClassInformation":
        return <ClassInformation/>;
      case "PhotoUploads":
        return <PhotoUploads/>;
      default:
        return <GeneralInformation/>;
    }
  };
  const getButtonClass = (component) => {
    return `w-full p-2 text-white rounded ${
      activeComponentxy === component
        ? 'bg-green-500 hover:bg-green-600'
        : 'bg-orange-500 hover:bg-orange-600'
    }`;
  };
  return (
    <div className='px-2'>
      <div className="bg-sky-200 p-2 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Akshara logo */}
            <img
              src="../path_to_akshara_logo.png"
              alt="Akshara"
              className="w-12 h-12"
            />
            {/* Graduation Cap */}
            <img
              src="../Apath_to_graduation_icon.png"
              alt="Graduation Cap"
              className="w-10 h-10"
            />
          </div>

          {/* Center Section */}
          <div className="text-center">
            {/* Button for Student Profile */}
            <button className="bg-orange-500 text-white text-xl font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
              Student Profile
            </button>
            <p className="text-gray-700 text-sm">Admin Portal</p>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* User avatar */}
            <img
              src="../path_to_user_avatar.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-lg border border-yellow-400"
            />
            {/* User info */}
            <div className="text-right">
              <p className="font-semibold text-gray-900">Suraj Rathore</p>
              <p className="text-sm text-gray-600">sr12342024</p>
            </div>
          </div>
        </div>


        {/* second navbar */}
        <div className="p-6">
  {/* Navbar */}
  <div className="bg-purple-200 p-4 rounded-lg border-2 border-black flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
    {/* Step 1 */}
    <div className="text-center">
      <p className="font-bold text-black">STEP 1</p>
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        onClick={() => setActiveComponent("sendLink")}
      >
        Send Account Link
      </button>
    </div>

    {/* Arrow */}
    <p className="font-bold text-black hidden md:block">→</p>

    {/* Step 2 */}
    <div className="text-center">
      <p className="font-bold text-black">STEP 2</p>
      <button
        className="bg-cyan-400 text-black py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300"
        onClick={() => setActiveComponent("fillInfo")}
      >
        Fill Information
      </button>
    </div>

    {/* Arrow */}
    <p className="font-bold text-black hidden md:block">→</p>

    {/* Step 3 */}
    <div className="text-center">
      <p className="font-bold text-black">STEP 3</p>
      <button
        className="bg-cyan-400 text-black py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300"
        onClick={() => setActiveComponent("notify")}
      >
        Notify Teachers/Students
      </button>
    </div>

    {/* Arrow */}
    <p className="font-bold text-black hidden md:block">→</p>

    {/* Step 4 */}
    <div className="text-center">
      <p className="font-bold text-black">STEP 4</p>
      <button
        className="bg-cyan-400 text-black py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300"
        onClick={() => setActiveComponent("seeStudents")}
      >
        See List of Students
      </button>
    </div>
  </div>

  {/* Render the selected component */}
  {renderComponent()}
</div>

<div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-red-100 p-4 space-y-4">
        <button
          className={getButtonClass("GeneralInformation")}
          onClick={() => setActiveComponentxy("GeneralInformation")}
        >
          General Information
        </button>
        <button
          className={getButtonClass("ParentInformation")}
          onClick={() => setActiveComponentxy("ParentInformation")}
        >
          Parent's Information
        </button>
        <button
          className={getButtonClass("MedicalInformation")}
          onClick={() => setActiveComponentxy("MedicalInformation")}
        >
          Medical Information
        </button>
        <button
          className={getButtonClass("EmergencyInformation")}
          onClick={() => setActiveComponentxy("EmergencyInformation")}
        >
          Emergency Information
        </button>
        <button
          className={getButtonClass("ClassInformation")}
          onClick={() => setActiveComponentxy("ClassInformation")}
        >
          Class Information
        </button>
        <button
          className={getButtonClass("PhotoUploads")}
          onClick={() => setActiveComponentxy("PhotoUploads")}
        >
          Photo Uploads
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-yellow-200 p-6">
        {renderComponentxy()}
      </div>
    </div>

    </div>
  )
}

export default AdminStudents

