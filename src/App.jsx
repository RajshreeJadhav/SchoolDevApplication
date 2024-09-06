
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Compo/Login';
import RegistrationForm from './Compo/RegistrationForm';
import ReportCard from "./Compo/ReportCard";
import Report from "./Compo/Report";
import Dashboarddemo from './Compo/Dashboarddemo';
import ClassTimetable from './Compo/ClassTimetable';
import StudentDetails from './Compo/StudentDetails';
import TeacherPortal from './Compo/TeacherPortal';
import AttendenceHistory from './Compo/AttendenceHistory';
import LeaveApplication from './Compo/LeaveApplication';

import MySubjects from './Compo/MySubjects';
import TeacherDashboard from './Compo/TeacherDashboard';
import AttendencePage from './Compo/TeacherDashBoard/AttendencePage';
import AdminDashboard from './Compo/AdminDashboard';
import StudentProfile from './Compo/StudentProfile';
import AdminGraphs from './Compo/AdminGraphs';
import TeacherMyClasses from './Compo/TeacherDashBoard/TeacherMyClasses';
import UserForm from './Compo/userForm';
import Fpassword from './Compo/Fpassword';
import NewPass12 from './Compo/NewPass';
import AdminStudents from './Compo/TeacherDashBoard/AdminStudents';

// import NewPass from './Compo/NewPass';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/fpass" element={<Fpassword/>} />
        <Route path="/NewPass12" element={<NewPass12/>}/>

        <Route path="/userform/*" element={<UserForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboarddemo" element={<Dashboarddemo />} />
        <Route path="/reportcard" element={<ReportCard />} />

        {/* <Route path="/event" element={<EventManager/>} /> */}

        <Route path="/report" element={<Report />} />
        <Route path="/class-timetable" element={<ClassTimetable />} />
        <Route path="/student-details" element={<StudentDetails />} />

        <Route path="/my-subjects" element={<MySubjects />} />
        <Route path="/attendance-himy-subjectsstory" element={<AttendenceHistory />} />
        {/* <Route path="/leave-application" element={<LeaveApplication/>} /> */}
        <Route path="/teacherportal" element={<TeacherPortal />} />
        <Route path="/teacherdash" element={<TeacherDashboard />} />
       
        <Route path="/attendance" element={<AttendencePage />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/studentprofile" element={<StudentProfile />} />

        <Route path="/admingraphs" element={<AdminGraphs />} />

        <Route path="/teachermyclasses" element={<TeacherMyClasses />} />
        <Route path="/adminstudetails" element={<AdminStudents />} />
        
      </Routes>
    </Router>
  );
};

export default App;
