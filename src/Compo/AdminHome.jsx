
import React, { useState, useEffect, useRef } from 'react';
import studenticon from '../Assets/studenticononscorecard.png';
import EmployeeIcon from '../Assets/Employeesscorecardicon.png'
import FeesIcon from '../Assets/feesicononscorecard.png';
import TeacherIcon from '../Assets/teachericononscorecard.png';
import Timetableicon from '../Assets/timetableiconinbutton.png';
import Idcardicon from '../Assets/idcardicon.png';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Linedata = [
  ['Month', 'Expenses', 'Revenues'],
  ['Jan', 100000, 200000],
  ['Feb', 90000, 200000],
  ['Mar', 80000, 200000],
  ['Apr', 120000, 200000],
  ['May', 60000, 400000],
  ['Jun', 100000, 150000],
  ['Jul', 140000, 250000],
  ['Aug', 100000, 200000],
  ['Sep', 110000, 250000],
  ['Oct', 100000, 200000],
  ['Nov', 90000, 200000],
  ['Dec', 100000, 200000],
];
// Options for customizing the chart
export const options = {
  title: "My Daily Activities", // Title of the chart
  pieHole: 0.4, // Creates a donut-style chart
  is3D: false,  // Keeps the chart 2D, if you want it to be 3D set this to true
  titleTextStyle: {
    fontSize: 24, // Adjust the font size here (24px as an example)
    color: '#000', // Optional: Customize the font color
    bold: true,   // Optional: Make the title bold
  },
};
const Lineoptions = {
  title: 'Expenses vs Revenues',
  hAxis: {
    title: 'Month',
  },
  vAxis: {
    title: '',
  },
  legend: { position: 'top', alignment: 'center' },
  series: {
    0: { color: '#FF0000', lineWidth: 2 }, // Expenses in red
    1: { color: '#00FF00', lineWidth: 2 }, // Revenues in green
  },
};

const AdminHome
  = () => {
    const [showUploadOptions, setShowUploadOptions] = useState(false);
    const uploadOptionsRef = useRef(null);
const [humanData, setHumanData] = useState({});

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (uploadOptionsRef.current && !uploadOptionsRef.current.contains(event.target)) {
          setShowUploadOptions(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const demographdata = [
      ["Gender", "Number of Students"],
      ["Male", 419],
      ["Female", 481],
    ];

    const demographoptions = {
      title: "Demograph Girls vs Boys",
      is3D: true,
      colors: ['#8bc34a', '#ff9800'],
      legend: { position: 'bottom' },
      chartArea: { width: '80%', height: '80%' },
      responsive: true,
      titleTextStyle: {
        fontSize: 20, // Adjust this value to increase/decrease the font size
        bold: true, // Make the title bold if needed
        width: '100%' // Try increasing the width if the library allows it
      },
    }

    const PerAnalyticsdata = [
      ["Parameters", "First class (>=75)", "Failed", "Minimum marks", "Maximum marks", "Average marks", "Absentees", "Attended", "no. of students"],
      ["English", 150, 50, 45, 50, 200, 150, 200, 150],
      ["Maths", 180, 40, 40, 60, 180, 150, 200, 150],
      ["Science", 160, 45, 50, 45, 200, 140, 200, 150],
      ["Social", 170, 55, 40, 50, 180, 160, 200, 150],
      ["Hindi", 200, 40, 40, 60, 170, 150, 200, 150],
    ];

    const PerAnalyticsoptions = {
      // title: "Performance Analytics",
      isStacked: true,
      hAxis: {
        title: "Parameters",
      },
      vAxis: {
        title: "Values",
        minValue: 0,
      },
      legend: { position: "top", maxLines: 3 },
      colors: ['#4285F4', '#34A853', '#9dfc03', '#EA4335', '#FF6D01', '#46BDC6', '#fc03e3', '#F4B400'],
    };

    const Attendencedata = [
      ['Classes', 'Total days', 'Average days present'],
      ['1', 215, 140],
      ['2', 215, 156],
      ['3', 215, 161],
      ['4', 215, 165],
      ['5', 215, 179],
      ['6', 215, 200],
      ['7', 215, 180],
      ['8', 215, 176],
      ['9', 215, 199],
      ['10', 215, 210],
    ];

    const Attendenceoptions = {
      chartArea: { width: '60%' }, // Adjusted width to ensure legend fits better
      hAxis: {
        minValue: 0,
        maxValue: 250, // Adjusted maxValue for more realistic scale based on your data
      },
      vAxis: {
        title: 'Classes',
      },
      legend: { position: 'top', alignment: 'center' }, // Ensuring the legend is centered and on one line
      colors: ['#4285F4', '#EA4335'],
      animation: {
        startup: true,
        easing: 'inAndOut',
        duration: 1000,
      },
      tooltip: {
        textStyle: { fontSize: 12 },
      },
    };


    const [currentMonth, setCurrentMonth] = useState(new Date());

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const prevMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const nextMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    function renderCalendar() {
      const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
      const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    
      const today = new Date(); // Get today's date
      const isCurrentMonth = today.getMonth() === currentMonth.getMonth() && today.getFullYear() === currentMonth.getFullYear();
      const todayDate = isCurrentMonth ? today.getDate() : null;
    
      const calendarDays = [];
    
      // Fill the empty spaces before the first day of the month
      for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
      }
    
      // Generate the calendar days
      for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === todayDate;
    
        calendarDays.push(
          <div
            key={day}
            className={`p-2 text-center cursor-pointer ${
              isToday ? 'bg-green-600 text-white rounded-full' : 'hover:bg-lime-200'
            }`}
          >
            {day}
          </div>
        );
      }
    
      return calendarDays;
    }
    
    useEffect(() => {
      axios.get("https://2h0lpm3d-8000.inc1.devtunnels.ms/User/admin/dashboard/", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
        }
      })

        .then((res) => {
          if (res) {
            setHumanData(res.data);
          }
        })

        .catch(err => {
          alert("Error");
          console.log(err);
        })
    }, []);

    return (
      <div>
        <div className="p-4 flex-grow">
          {/* Top Section with Statistics */}
          <div className="grid grid-cols-1 border-b-8 border-blue-800 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* No. of Students Logged in */}
            <div className="p-4 text-center border-r-4 mb-2 border-blue-800">
              <img
                src={studenticon}
                alt="Students"
                className="mx-auto mb-2 w-16 h-16 object-cover"
              />
              <h2 className="text-xl font-semibold font-just-another-hand">No. of Students Logged in</h2>
              <p className="mt-2 text-3xl font-bold">1587</p>
            </div>

            {/* No. of Teachers Logged in */}
            <div className="p-4 text-center border-r-4 mb-2 border-blue-800">
              <img
                src={TeacherIcon}
                alt="Teachers"
                className="mx-auto mb-2 w-16 h-16 object-cover"
              />
              <h2 className="text-xl font-semibold font-just-another-hand">No. of Teachers Logged in</h2>
              <p className="mt-2 text-3xl font-bold font-just-another-hand">47</p>
            </div>

            {/* Total Employees Count */}
            <div className="p-4 text-center border-r-4 mb-2 border-blue-800">
              <img
                src={EmployeeIcon}
                alt="Employees"
                className="mx-auto mb-2 w-16 h-16 object-cover"
              />
              <h2 className="text-xl font-semibold font-just-another-hand">Total Employees Count</h2>
              <p className="mt-2 text-3xl font-bold font-just-another-hand">25</p>
            </div>

            {/* Fees Collection */}
            <div className="relative p-4 text-center border-r-8 border-blue-800">
              <a
                href="#"
                className="absolute top-0 right-0 text-blue-800 font-bold underline text-sm mt-2 mr-2 font-just-another-hand"
              >
                View more Analytics
              </a>
              <img
                src={FeesIcon}
                alt="Fees Collection"
                className="mb-2 mt-2 w-16 h-16 object-cover"
              />
              <h2 className="text-xl font-semibold font-just-another-hand">Fees Collection</h2>
              <p className="mt-2 text-3xl font-bold font-just-another-hand">INR 3.5cr</p>
            </div>
          </div>

          {/* QUICK ACCESS Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 font-berkshire">QUICK ACCESS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Create New Student Profile */}
              <button className="p-2 bg-gray-100 font-handlee text-black ring ring-yellow-500 ring-offset-0 rounded-3xl shadow-2xl shadow-yellow-500">
                <Link to="/student-details">
                  Create New Student Profile
                </Link>
              </button>


              {/* Create New Employee Details */}
              <button className="p-2 bg-gray-100 font-handlee text-black ring ring-blue-500 ring-offset-0 rounded-3xl shadow-2xl shadow-blue-500">
                Create New Employee Details
              </button>

              {/* Create Timetable */}
              <button className="flex items-center font-handlee p-2 bg-gray-100 text-black ring ring-pink-500 ring-offset-0 rounded-3xl shadow-2xl shadow-pink-500">
                <img
                  src={Timetableicon} // Replace with the path to your image
                  alt="Icon" // Add appropriate alt text
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-2" // Increased size for responsiveness
                />
                <span className="text-md sm:text-lg lg:text-xl font-handlee">Create Timetable</span> {/* Adjust text size */}
              </button>

              {/* Generate ID Card */}
              <button className="flex items-center font-handlee p-2 bg-gray-100 text-black ring ring-green-500 ring-offset-0 rounded-3xl  shadow-2xl shadow-green-500">
                <img
                  src={Idcardicon} // Replace with the path to your image
                  alt="ID Card Icon" // Add appropriate alt text
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-2" // Increased size for responsiveness
                />
                <span className="text-sm font-handlee sm:text-base md:text-lg lg:text-xl">Generate ID Card</span> {/* Adjust text size */}
              </button>
            </div>
          </div>

          {/* Analytics and Tools Section */}
          <div className="mt-8 bg-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {/* Performance Analytics */}
              <div className="bg-cyan-200 border border-blue-200 rounded-lg shadow-md">
                <h2 className=" p-4 text-xl text-center font-berkshire font-semibold mb-2 bg-sky-500 p-2 rounded-t-lg">
                  Performance Analytics
                </h2>

                {/* Chart container with bg-cyan-200 */}
                <div className="p-4 flex justify-center items-center w-full">
                  {/* <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={{
                      ...options,
                      backgroundColor: '#a5f3fc', // Tailwind CSS cyan-200 color
                    }}
                  /> */}
                  <div className="w-full h-full min-h-[400px]">
                    <Chart
                      chartType="ColumnChart"
                      width="100%"
                      height="400px"
                      data={PerAnalyticsdata}
                      options={PerAnalyticsoptions}
                    />
                  </div>
                </div>

                {/* See More button */}
                <div className="flex justify-center mt-4">
                  <button className="bg-cyan-300 font-handlee text-black font-semibold py-2 px-6 rounded-b-lg hover:bg-cyan-500 transition duration-300 w-full sm:w-auto text-center">
                    See More
                  </button>
                </div>
              </div>

              {/* Expenses vs Revenue */}{/* Main content area */}
              <div className="bg-cyan-200  border border-gray-200 rounded-lg shadow-md flex flex-col h-full">
                <h2 className=" p-4 text-xl  text-center font-semibold mb-2 bg-sky-500 font-berkshire">Expenses vs Revenue</h2>

                <div className="p-4 flex justify-center items-center w-full">
                  <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={Linedata}
                    options={Lineoptions}
                  />
                </div>


                {/* See More button positioned at the bottom */}
                <div className="flex justify-center mt-4">
                  <button className="bg-cyan-300 font-handlee text-black font-semibold py-2 px-6 rounded-lg hover:bg-cyan-500 transition duration-300 w-full sm:w-auto text-center">
                    See More
                  </button>
                </div>
              </div>


              {/* Admin Tools */}
              <div className="bg-cyan-200 border border-gray-200 rounded-lg shadow-md flex flex-col">
                <h2 className=" p-4 text-xl font-berkshire text-center font-semibold mb-2 bg-sky-500 p-2 text-black rounded-t-lg">
                  Admin Tools
                </h2>

                {/* List of Admin Tools Links */}
                <ul className="space-y-2 list-disc pl-5 flex-grow">
                  <li>
                    <a href="#browse-library" className="text-blue-800 font-fredericka font-bold hover:text-red-800 ">
                      Browse School Library
                    </a>
                  </li>
                  <li>
                    <a href="#edit-settings" className="text-blue-800 font-fredericka font-bold hover:text-red-800">
                      Edit School Settings
                    </a>
                  </li>
                  <li>
                    <a href="#import-edit-schedules" className="text-blue-800 font-fredericka font-bold hover:text-red-800">
                      Import and Edit Class Schedules
                    </a>
                  </li>
                  <li>
                    <a href="#approve-agendas" className="text-blue-800 font-fredericka font-bold hover:text-red-800">
                      Approve Class Agendas
                    </a>
                  </li>
                  <li>
                    <a href="#archive-accounts" className="text-blue-800 font-fredericka font-bold hover:text-red-800">
                      Archive Old Accounts/Classes
                    </a>
                  </li>
                  <li>
                    <a href="#send-emails" className="text-blue-800 font-fredericka font-bold hover:text-red-800">
                      Send/Resend Account Activation Emails
                    </a>
                  </li>
                  <li>
                    <a href="#enable-e-learning" className="text-blue-800 font-fredericka  font-bold hover:text-red-800">
                      Enable E-Learning Classes
                    </a>
                  </li>
                  <li>
                    <a href="#get-reports" className="text-blue-800 font-fredericka font-bold hover:text-red-800">
                      Get Student Activity Reports
                    </a>
                  </li>
                </ul>

                {/* See More button positioned at the bottom */}
                <div className="flex justify-center mt-4">
                  <button className="bg-cyan-300 font-handlee text-black font-semibold py-2 px-6 rounded-b-lg hover:bg-cyan-500 transition duration-300 w-full sm:w-auto text-center">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 bg-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {/* First New Div - 40% Width */}
              <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4 col-span-1 sm:col-span-2">

                <div className="w-full h-[300px] md:h-[400px]">
                  <Chart
                    chartType="PieChart"
                    data={demographdata}
                    options={demographoptions}
                    width="100%"
                    height="100%"
                  />
                </div>
                {/* <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  <Pie data={demographdata} options={demographoptions} />
                </div> */}
              </div>
              {/* <div className="w-full max-w-md mx-auto h-64 md:h-96">
                  <Pie data={demographdata} options={demographoptions} />
                </div> */}


              {/* Second New Div - 60% Width */}
              <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4 col-span-1 sm:col-span-3">

                <h3 className="text-xl font-semibold font-berkshire mb-2">Attendance</h3>
                <div className="container mx-auto">
                  <Chart
                    chartType="BarChart"
                    width="100%"
                    height="400px"
                    data={Attendencedata}
                    options={Attendenceoptions}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* this is for event  */}

          <div className="flex flex-col md:flex-row gap-2 p-2">
  <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="bg-lime-600 text-white p-4 flex justify-between items-center">
      <button onClick={prevMonth} className="text-2xl">&lt;</button>
      <h2 className="text-xl font-bold">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
      <button onClick={nextMonth} className="text-2xl">&gt;</button>
    </div>
    <div className="grid grid-cols-7 bg-lime-400 text-green-800 font-bold">
      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
        <div key={day} className="p-2 text-center font-bold">{day}</div>
      ))}
    </div>
    <div className="grid grid-cols-7 font-bold">
      {renderCalendar()}
    </div>
  </div>
  <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
    <div>
      <div className="bg-lime-600 text-white p-4">
        <h2 className="text-2xl font-bold font-fredericka text-center">Event updates</h2>
      </div>
      <ul className="p-4 space-y-2">
        <li className="text-lime-800 font-bold font-just-another-hand text-lg">• Quarterly exams schedule updated.</li>
        <li className="text-lime-800 font-bold font-just-another-hand text-lg">• School Board meeting on 26 August, 2024.</li>
        <li className="text-lime-800 font-bold font-just-another-hand text-lg">• Last date to pay student fees on Nov 1st, 2024.</li>
      </ul>
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-lime-400 text-black font-semibold py-4 px-6 rounded-b-lg hover:bg-cyan-500 transition duration-300 w-full sm:w-auto text-center">
        {/* See More */}
      </button>
    </div>
  </div>
</div>


        </div>

      </div>
    )
  }

export default AdminHome
