import React, { useState } from "react";
import Schoollogo1 from '../Assets/schoolLogo.PNG';
//import './ReportCard.css';
import { Link } from 'react-router-dom';

// import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
import { FaSchool } from "react-icons/fa6";
import { FaBell, FaEnvelope, FaCog, FaBars } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
//for academic Subjetcs
import ReactSpeedometer from "react-d3-speedometer";

import { Chart } from "react-google-charts";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,

  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,

} from "chart.js";

//for line chart

// Registering components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


// for Academic Subjects
const subjects = [
  { name: "English", score: 75 },
  { name: "Science", score: 95 },
  { name: "Math", score: 40 },
  { name: "History", score: 89 },
];

const getLabel = (score) => {
  if (score < 70) return "Low";
  if (score < 80) return "Medium";
  return "High";
};

const getColor = (score) => {
  if (score < 50) return "red";
  if (score < 80) return "yellow";
  return "green";
};


const ReportCard = () => {
  // for historical records
  // for line chart
  const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Average Percentage',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Student Performance Over Time',
      },
    },
  };

  // for Bar charts

  const dataBar = {
    labels: ["English", "Science", "Math", "History"],
    datasets: [
      {
        label: "Average Percentage",
        data: [85, 90, 78, 88, 92],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const optionsBar = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  // Sample data for the pie chart
  // const dataPie = {
  //   labels: ['English', 'Science', 'Math', 'History',],
  //   datasets: [
  //     {
  //       label: 'Subject Percentage',
  //       data: [80, 90, 75, 60], // Example data
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',

  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',

  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const optionsPie = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //   },
  // };


  // for pie chart react piechart
  // const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  // const dataPie = {
  //   type: "pie",
  //   indexLabel: "{label}: {y}%",
  //   startAngle: -90,
  //   dataPoints: [
  //     { y: 89, label: "Math" },
  //     { y: 78, label: "Science" },
  //     { y: 88, label: "History" },
  //     { y: 91, label: "English" }
  //   ]
  // };

  // const optionsPie = {
  //   animationEnabled: true,
  //   exportEnabled: true,
  //   theme: "dark2", // "light1", "dark1", "dark2"
  //   title: {
  //     text: "Student Performance"
  //   },
  //   data: [dataPie] // Use data2 here
  // };

  // for pie chart by using react google piechart


  //average of marks obtained in each subject in all exams
  const [chartType, setChartType] = useState();

  const examData = [
    ["Subject", "Exam 1", "Exam 2", "Exam 3"],
    ["Math", 90, 85, 88],
    ["Science", 85, 89, 87],
    ["History", 88, 90, 84],
    ["English", 92, 91, 93],
  ];

  const calculateAverages = (data) => {
    const averages = [["Subject", "Average"]];

    for (let i = 1; i < data.length; i++) {
      const subject = data[i][0];
      const scores = data[i].slice(1);
      const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      averages.push([subject, average]);
    }

    return averages;
  };

  const dataPie = calculateAverages(examData);

  const optionsPie = {
    title: "Average Student Performance",
    is3D: true,
  };
  const renderChart = () => {
    const chartStyles = {
      backgroundColor: chartType !== 'optionsPie' ? 'white' : 'transparent',
      padding: '20px',
      borderRadius: 'px',
    };



    switch (chartType) {
      case 'optionsLine':
        return (
          <div style={chartStyles}>
            <Line data={dataLine} options={optionsLine} />
          </div>
        );
      case 'optionsBar':
        return (
          <div style={chartStyles}>
            <Bar data={dataBar} options={optionsBar} />
          </div>
        );
      case 'optionsPie':
        return (
          <div className="w-full h-full flex justify-center items-center p-2 rounded-lg">
            <Chart
              chartType="PieChart"
              width="700px"
              height="350px"
              data={dataPie}
              options={optionsPie}
            />
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="bg-gray-200">
      {/* navigration bar for  Akshara Student Portal  */}
      <div className="sticky top-0 z-50">
      <div className="px-2">
        <div className="bg-gradient-to-r from-indigo-400 to-indigo-400 hover:from-indigo-400 hover:to-indigo-600 px-4 py-3 rounded-lg shadow-lg shadow-indigo-800">
          <nav className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <div className="flex flex-col items-center">
                <Link
                  to="/dashboarddemo"
                  className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-4"
                >
                  <img
                    src={Schoollogo1}
                    alt="School logo"
                    className="w-14 h-14 rounded-full"
                  />
                   <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-2 md:ml-4 text-white font-berkshire">Akshra Student Portal</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaBell className="text-xl text-white cursor-pointer" />
              <FaEnvelope className="text-xl text-white cursor-pointer" />
              <FaCog className="text-xl text-white cursor-pointer" />
              <FaBars className="text-xl text-white cursor-pointer" />
            </div>
          </nav>
        </div>
      </div>
    </div>

      {/* navigration bar for  Report Card  */}

      <div className="p-2">
  <nav className="flex flex-wrap justify-between items-center bg-gradient-to-r from-purple-400 to-purple-400 hover:from-purple-400 hover:to-purple-600 px-3 py-2 rounded-lg shadow-lg shadow-purple-800 rounded-2xl">
    {/* Left Side: Edit Icon */}
    <div className="flex items-center">
      <FaEdit className="text-white text-2xl mr-2" />
      <span className="text-white font-berkshire font-bold text-4xl">Report Card</span>
    </div>

    {/* Middle: Exam Buttons */}
    <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
      <button className="animate-button w-36 h-10 font-handlee bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-600 px-4 py-2 font-bold text-lg text-white shadow-lg shadow-yellow-800 rounded-lg mb-2">
        Exam 1
      </button>
      <button className="animate-button w-36 h-10  font-handlee bg-gradient-to-r from-green-600 to-green-300 hover:from-green-200 hover:to-green-600 shadow-lg shadow-green-800 text-white font-bold px-4 py-2 rounded-lg mb-2">
        Exam 2
      </button>
      <button className="animate-button w-36 h-10 font-handlee bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-200 hover:to-orange-600 shadow-lg shadow-red-800 text-white font-bold px-4 py-2 rounded-lg mb-2">
        Exam 3
      </button>
      <button className="animate-button w-36 h-10 font-handlee bg-gradient-to-r from-red-500 to-red-200 hover:from-red-200 hover:to-red-600 shadow-lg shadow-red-800 text-white font-bold px-4 py-2 rounded-lg mb-2">
        Annual
      </button>
    </div>

    {/* Right Side: Name RollNo */}
    <div className="text-white p-2">
      <div className="font-bold">
        <button className="border border-gray-200 rounded-lg px-8 py-1 bg-gradient-to-r from-fuchsia-600 to-fuchsia-200 hover:from-fuchsia-200 hover:to-fuchsia-600">
          <div>
            <p className="text-base font-just-another-hand">RAMESH SRI RAM</p>
            <p className="text-base font-just-another-hand">RO12024</p>
          </div>
        </button>
      </div>
    </div>
  </nav>
</div>


      {/* NavigtaionBar for grades  */}

      <div className="p-2">
  <nav className="flex flex-col md:flex-row justify-between items-center bg-rose-200 p-1 border-gray-800">
    <div className="flex items-center md:ml-10 mb-2 md:mb-0">
      <button className="text-lg font-handlee bg-gradient-to-r from-green-500 to-green-200 hover:from-green-200 hover:to-green-600 shadow-2xl shadow-green-800 text-white font-bold px-6 py-2 rounded-2xl mr-2 md:mr-4 mb-2 md:mb-0">
        <div className="text-center">
          <div>Result</div>
          <div>Pass</div>
        </div>
      </button>
      <button className="text-lg font-handlee bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-200 hover:to-orange-600 shadow-2xl shadow-orange-800 text-white font-bold px-6 py-2 rounded-2xl mr-2 md:mr-4 mb-2 md:mb-0">
        <div className="text-center">
          <div>%</div>
          <div>80%</div>
        </div>
      </button>
      <button className="text-lg font-handlee bg-gradient-to-r from-red-500 to-red-200 hover:from-red-200 hover:to-red-600 shadow-2xl shadow-red-800 text-white font-bold px-6 py-2 rounded-2xl mr-2 md:mr-4 mb-2 md:mb-0">
        <div className="text-center">
          <div>Marks</div>
          <div>400</div>
        </div>
      </button>
      <button className="text-lg  font-handlee bg-gradient-to-r from-yellow-500 to-yellow-200 hover:from-yellow-200 hover:to-yellow-600 shadow-2xl shadow-yellow-800 text-white font-bold px-6 py-2 rounded-2xl mb-2 md:mb-0">
        <div className="text-center">
          <div>A</div>
          <div>Grade</div>
        </div>
      </button>
    </div>
    <div className="text-lg font-handlee bg-gradient-to-r from-fuchsia-600 to-fuchsia-200 hover:from-fuchsia-200 hover:to-fuchsia-600 px-8 rounded-md text-center md:text-left text-white">
      <div className="font-bold">Highlights</div>
      <div>Topped in Maths</div>
      <div>Great improvement in Science Score: 90%</div>
    </div>
  </nav>
</div>


      {/* npm install --save react-d3-speedometer */}
      {/* NavBar For Academic Subjects
       */}
    <div className="p-2">
  <div className="p-2 text-lg bg-gradient-to-r from-blue-700 to-blue-200 hover:from-blue-400 hover:to-blue-400 shadow-2xl shadow-blue-400 text-white font-bold px-6 py-2 rounded-lg mb-2">
    <h1 className="font-bold text-3xl p-2 font-berkshire">Academic Subjects</h1>
    <div className="flex flex-wrap justify-center font-just-another-hand">
      {subjects.map((subject) => (
        <div key={subject.name} className="m-4">
          <ReactSpeedometer
            value={subject.score}
            minValue={0}
            maxValue={100}
            segments={3}
            ringWidth={20}
            width={200}
            height={150}
            currentValueText={`${subject.score}% - ${getLabel(subject.score)}`}
            textColor={getColor(subject.score)}
          />
          <h3 className="text-center text-lg font-bold">{subject.name}</h3>
        </div>
      ))}
    </div>
  </div>



       
        {/* Historical Records By using Onclick */}
        <div className="flex flex-col items-center bg-gradient-to-r from-violet-200 to-pink-200 mt-2 p-2 shadow-2xl shadow-indigo-600 rounded-lg">
  {/* Navigation Bar */}
  <nav className="p-4 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 w-full flex flex-wrap justify-between items-center">
    <span className="font-bold font-berkshire text-2xl sm:text-3xl lg:text-4xl text-red-500 mb-2 sm:mb-0">Historical Records</span>
    <div className="flex flex-wrap space-x-2 sm:space-x-4">
      <button
        className={`px-4 py-2 sm:px-6 sm:py-2 font-bold font-handlee text-sm sm:text-lg rounded shadow-lg shadow-pink-500 ${chartType === 'optionsLine' ? 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'}`}
        onClick={() => setChartType('optionsLine')}
      >
        Line Chart
      </button>
      <button
        className={`px-4 py-2 sm:px-6 sm:py-2 font-bold font-handlee text-sm sm:text-lg rounded shadow-lg shadow-pink-500 ${chartType === 'optionsBar' ? 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'}`}
        onClick={() => setChartType('optionsBar')}
      >
        Bar Chart
      </button>
      <button
        className={`px-4 py-2 sm:px-6 sm:py-2 font-bold font-handlee text-sm sm:text-lg rounded shadow-lg shadow-pink-500 ${chartType === 'optionsPie' ? 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'}`}
        onClick={() => setChartType('optionsPie')}
      >
        Pie Chart
      </button>
    </div>
  </nav>



  {/* Main Content */}
  <div className="mt-6 w-full flex justify-center">
    <div className={`p-6 rounded-lg ${chartType === 'optionsPie' ? 'sm:w-1/2 md:w-1/3 lg:w-1/4 h-1/4' : 'sm:w-full md:w-1/2 lg:w-2/4 h-2/4'} `}>
      {renderChart()}
    </div>
  </div>
</div>

        {/* Grading Scale */}

        {/* <nav className=" p-4 rounded-lg bg-gradient-to-r from-green-400 to-blue-500  w-full flex justify-between">
            <span className="font-bold font-sans text-4xl text-red-500">Historical Records</span>
            <div className="space-x-4 mr-32"> */}

        {/* <div className="  p-4 mt-4 rounded-lg shadow-2xl shadow-green-800 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <h2 className="text-2xl font-bold mb-4 ">Grading Scale</h2>
          <div className="grid grid-cols-2 ">
            <div className="ml-[70%]">
              <p className="font-bold">A+: 90-100%</p>
              <p className="font-bold">A: 80-90%</p>
              <p className="font-bold">B: 70-80%</p>
            </div>
            <div className="mr-[80%]">
              <p className="font-bold">B+: 60-70%</p>
              <p className="font-bold">C: 50-60</p>
              <p className="font-bold">D: 40-50%</p>
            </div>
          </div>
        </div> */}

        <nav className="p-2 mt-4 rounded-lg shadow-2xl shadow-green-800 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
  <span className="font-bold text-4xl text-white p-2 font-berkshire ">Grading Scale</span>
  <div className="flex flex-wrap justify-around p-2">
    <p className="font-bold text-xl mb-2 text-center font-just-another-hand">A+: 90-100%</p>
    <p className="font-bold text-xl mb-2 text-center font-just-another-hand">A: 80-90%</p>
    <p className="font-bold text-xl mb-2 text-center font-just-another-hand">B: 70-80%</p>
    <p className="font-bold text-xl mb-2 text-center font-just-another-hand">B+: 60-70%</p>
    <p className="font-bold text-xl mb-2 text-center font-just-another-hand">C: 50-60%</p>
    <p className="font-bold text-xl mb-2 text-center font-just-another-hand">D: 40-50%</p>
  </div>
</nav>




        {/* <div className="bg-black p-1 text-2xl text-white font-sans h-36 mt-4 flex flex-col justify-end items-center">
          <div className="w-full flex justify-center">
            <h1 className="mb-0">Copyright @ mak Tech Studio v10</h1>
          </div>
        </div> */}


      </div>
    </div>
  );
};

export default ReportCard;
