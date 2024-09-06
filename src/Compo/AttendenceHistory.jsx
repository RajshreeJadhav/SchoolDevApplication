import React, { useState, useRef, useEffect } from 'react';
import './Annotate';
import { Link } from 'react-router-dom';
import Schoollogo1 from '../Assets/schoolLogo.PNG';

import './AttendenceHistory.css';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import { FaSchool, FaBell, FaEnvelope, FaCog, FaBars } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";
import LeaveApplication from './LeaveApplication';
import { SlCalender } from "react-icons/sl";
import HolidaysList from './HolidaysList';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart } from "react-google-charts";
import School1 from "../Assets/TotalSchoolDays.png";
import School2 from "../Assets/DaysPresent.jpeg";
import School3 from "../Assets/SchoolDaysSoFar.jpeg";
import School4 from "../Assets/Rewards.jpeg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// import School5 from "../Assets/DaysAbsent.jpeg";


import VacationImage from "../Assets/Vacation.jpeg";
import OthersImage from "../Assets/Others.jpeg";
import SickImage from "../Assets/SickImage.jpeg";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    bgcolor: 'background.paper',
    border: '2px solid #75E6DA',
    boxShadow: 24,
    p: 2,
    borderRadius: '12px',
};

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    bgcolor: 'background.paper',
    border: '2px solid #75E6DA',
    boxShadow: 100,
    p: 2,
    borderRadius: '12px',
};

const data = [
    ["Months", "Present", "Absent", "Late To School"],
    ["Jan", 12, 5, 4],
    ["Feb", 13, 3, 4],
    ["Mar", 17, 3, 3],
    ["Apr", 16, 3, 3],
    ["May", 16, 2, 3],
    ["Jun", 16, 1, 5],
    ["Jul", 19, 1, 2],
    ["Aug", 17, 1, 4],
    ["Sep", 18, 1, 3],
    ["Oct", 19, 1, 1],
    ["Nov", 18, 1, 3],
    ["Dec", 18, 1, 4]
];

const options = {
    title: '',
    chartArea: { width: '50%' },
    isStacked: true,
    hAxis: {
        title: '',
        minValue: 0,
    },
    vAxis: {
        title: 'Months',
    },
    colors: ['#5aa8e8', '#ff6f61', '#ffbc42'],
    animation: {
        startup: true,
        duration: 1000, // Duration in milliseconds
        easing: 'out',
    },
};

const AttendanceHistory = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartContainer = chartRef.current;
        if (!chartContainer) return;

        const bars = chartContainer.querySelectorAll('.google-visualization-bar');

        bars.forEach((bar, index) => {
            bar.style.setProperty('--index', index.toString());
        });
    }, []);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = React.useState(false);
    const handleOpenn = () => setOpen1(true);
    const handleClosee = () => setOpen1(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const [showApplication, setShowApplication] = useState(false);
    const [showHolidays, setShowHolidays] = useState(false);
    const [showTotalDaysMonthWise, setShowTotalDaysMonthWise] = useState(false);
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    const handleAttendanceHistoryClick = () => {
        navigate('/attendance-history');
    };

    const [rating, setRating] = useState(0);
    const [rewards, setRewards] = useState(0);

    const handleStarClick = (index) => {
        setRating(index);
        setRewards(index * 20); // Example logic: each star increases rewards by 20
    };
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const toggleDropdown = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + window.scrollY,
                left: rect.right + window.scrollX - 200
            });
        }
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleApplication = () => {
        setShowApplication(!showApplication);
        setShowHolidays(false);
        setShowTotalDaysMonthWise(false);
    };

    const toggleHolidays = () => {
        setShowHolidays(!showHolidays);
        setShowApplication(false);
        setShowTotalDaysMonthWise(false);
    };
    const daysPresent = 160;
    const daysAbsent = {
        total: 20,
        vacation: 10,
        sick: 5,
        others: 5
    };

    const monthlyAttendance = [
        { month: 'January', attended: 23, notAttended: 5, lateToSchool: 3 },
        { month: 'February', attended: 22, notAttended: 3, lateToSchool: 1 },
        { month: 'March', attended: 18, notAttended: 7, lateToSchool: 2 },
        { month: 'April', attended: 21, notAttended: 4, lateToSchool: 0 },
        { month: 'May', attended: 19, notAttended: 6, lateToSchool: 1 },
        { month: 'June', attended: 20, notAttended: 5, lateToSchool: 2 },
        { month: 'July', attended: 23, notAttended: 2, lateToSchool: 1 },
        { month: 'August', attended: 18, notAttended: 7, lateToSchool: 3 },
        { month: 'September', attended: 22, notAttended: 3, lateToSchool: 0 },
        { month: 'October', attended: 20, notAttended: 5, lateToSchool: 2 },
        { month: 'November', attended: 19, notAttended: 6, lateToSchool: 1 },
        { month: 'December', attended: 21, notAttended: 4, lateToSchool: 1 },
    ];

    const chartData = {
        labels: monthlyAttendance.map(data => data.month),
        datasets: [
            {
                label: 'Present',
                backgroundColor: 'rgba(0, 128, 0, 0.2)', // Green
                borderColor: 'rgba(0, 128, 0, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 128, 0, 0.4)',
                hoverBorderColor: 'rgba(0, 128, 0, 1)',
                data: monthlyAttendance.map(data => data.attended)
            },
            {
                label: 'Absent',
                backgroundColor: 'rgba(255, 0, 0, 0.2)', // Red
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 0, 0, 0.4)',
                hoverBorderColor: 'rgba(255, 0, 0, 1)',
                data: monthlyAttendance.map(data => data.notAttended)
            },
            {
                label: 'Late to School',
                backgroundColor: 'rgba(255, 255, 0, 0.2)', // Yellow
                borderColor: 'rgba(255, 255, 0, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 255, 0, 0.4)',
                hoverBorderColor: 'rgba(255, 255, 0, 1)',
                data: monthlyAttendance.map(data => data.lateToSchool)
            }
        ]
    };


    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Calculate total days month-wise including attendance data
    const totalDaysMonthWise = monthlyAttendance.map(data => {
        let totalDays;
        switch (data.month) {
            case 'January':
                totalDays = 31; // Assuming January has 31 days
                break;
            case 'February':
                totalDays = 28; // Update for leap years if necessary
                break;
            case 'March':
                totalDays = 31;
                break;
            case 'April':
                totalDays = 30;
                break;
            case 'May':
                totalDays = 31;
                break;
            case 'June':
                totalDays = 30;
                break;
            case 'July':
                totalDays = 31;
                break;
            case 'August':
                totalDays = 31;
                break;
            case 'September':
                totalDays = 30;
                break;
            case 'October':
                totalDays = 31;
                break;
            case 'November':
                totalDays = 30;
                break;
            case 'December':
                totalDays = 31;
                break;
            default:
                totalDays = 0;
                break;
        }

        return {
            month: data.month,
            totalDays: totalDays,
            attended: data.attended,
            notAttended: data.notAttended,
            lateToSchool: data.lateToSchool
        };
    });

    //   pie chart data

    const attendedTotal = monthlyAttendance.reduce((total, month) => total + month.attended, 0);
    const notAttendedTotal = monthlyAttendance.reduce((total, month) => total + month.notAttended, 0);
    const lateToSchoolTotal = monthlyAttendance.reduce((total, month) => total + month.lateToSchool, 0);


    const PiechartData = {
        labels: ['Present', 'Absent', 'Late to School'],
        datasets: [
            {
                label: 'Yearly Analysis',
                backgroundColor: [
                    'rgba(0, 128, 0, 0.6)',   // Green for Attended
                    'rgba(255, 0, 0, 0.6)',    // Red for Not Attended
                    'rgba(255, 255, 0, 0.6)'  // Yellow for Late to School
                ],
                hoverBackgroundColor: [
                    'rgba(0, 128, 0, 0.8)',
                    'rgba(255, 0, 0, 0.8)',
                    'rgba(255, 255, 0, 0.8)'
                ],
                data: [attendedTotal, notAttendedTotal, lateToSchoolTotal]
            }
        ]
    };


    return (
        <div className="p-2 bg-purple-200 text-white font-sans">
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:to-purple-600 px-3 py-2 rounded-lg mr-4 shadow-lg shadow-indigo-800 p-1">
                <nav className="flex justify-between items-center p-1">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center">
                            <Link to="/dashboarddemo">
                                <img src={Schoollogo1} alt="Description of image" className="w-14 h-14 rounded-full" />
                            </Link>
                            <span className="text-lg ml-2 md:ml-4">Akshra Student Portal</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 ml-auto text-white">
                        {isSearchOpen && (
                            <div className="w-72">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-72 p-2 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        )}
                        <a href="#" onClick={toggleSearch}>
                            <VscSearch className="h-8 w-8 cursor-pointer" />
                        </a>
                        <FaBell className="mx-2 text-xl text-white cursor-pointer" />
                        <FaEnvelope className="mx-2 text-xl text-white cursor-pointer" />
                        <FaCog className="mx-2 text-xl text-white cursor-pointer" />
                        <FaBars className="mx-2 text-xl text-white cursor-pointer" />
                    </div>
                </nav>
            </div>

            <div className="p-1">
                <nav className="p-1 flex justify-between items-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-lg mr-4 shadow-lg shadow-purple-800 rounded-2xl">
                    <div className="flex items-center">
                        <div className="text-white  mr-2" />
                        <span><GrDatabase className='w-14 h-14 cursor-pointer'
                            onClick={handleAttendanceHistoryClick} /></span>


                        <span className="ml-4 text-white font-sans font-bold text-2xl">ATTENDANCE REPORT</span>
                    </div>
                    <div className="text-white p-1">
                        <div className="font-bold mr-4">
                            <button className="border border-gray-200 rounded-lg px-2 py-1 bg-gradient-to-r from-fuchsia-600 to-fuchsia-200 hover:from-fuchsia-200 hover:to-fuchsia-600">
                                <div>
                                    <p>RAMESH SRI RAM</p>
                                    <p>RO12024</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="bg-gradient-to-r from-green-300 to-pink-300 p-1  grid grid-cols-1 md:grid-cols-5 gap-4 md:w-full">
                <div className="col-span-3 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-1 flex flex-col">
                            {/* this is for Total School Day's */}
                            <div className="bg-gradient-to-r from-emerald-700 to-lime-300 text-white p-2 rounded-xl mb-2 font-bold text-xl text-center">
                                {/* Text above */}
                                <div className="mb-2 text-black">Total School Day's</div>

                                {/* Flex container for image and number */}
                                <div className="flex items-center">
                                    {/* Image on the left */}
                                    <img src={School1} alt="Description of the image" className="h-20 w-32 opacity-50 " />

                                    {/* Content container for text and number */}
                                    <div className="flex-grow">
                                        {/* Number 200 on the right */}
                                        <div className="text-white p-2 rounded mt-2 ml-auto">
                                            <div className="text-4xl font-bold text-black">200</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* this is for  Day's Present */}
                            <div className="bg-gradient-to-r from-emerald-700 to-lime-300 text-white p-2 rounded-xl mb-2 font-bold text-xl text-center">
                                {/* Text above */}
                                <div className="mb-2 text-black"> Day's Present</div>

                                {/* Flex container for image and number */}
                                <div className="flex items-center">
                                    {/* Image on the left */}
                                    <img src={School2} alt="Description of the image" className="h-20 w-32 opacity-50 " />

                                    {/* Content container for text and number */}
                                    <div className="flex-grow">
                                        {/* Number 200 on the right */}
                                        <div className="text-white p-2 rounded mt-2 ml-auto">
                                            <div className="text-4xl font-bold text-black">160</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* this is for  School Day's So Far and  Rewards*/}
                        <div className="col-span-1 flex flex-col">

                            {/* this is for  School Day's So Far */}
                            <div className="bg-gradient-to-r from-emerald-700 to-lime-300 text-white p-2 rounded-xl mb-2 font-bold text-xl text-center">
                                {/* Text above */}
                                <div className="mb-2 text-black"> School Day's So Far</div>

                                {/* Flex container for image and number */}
                                <div className="flex items-center">
                                    {/* Image on the left */}
                                    <img src={School3} alt="Description of the image" className="h-20 w-32 opacity-50 " />

                                    {/* Content container for text and number */}
                                    <div className="flex-grow">
                                        {/* Number 200 on the right */}
                                        <div className="text-white p-2 rounded mt-2 ml-auto">
                                            <div className="text-4xl font-bold text-black">160</div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* this is for Rewards */}

                            <div className="bg-gradient-to-r from-emerald-700 to-lime-300 text-white p-2 rounded-xl mb-2 font-bold text-xl text-center">
                                {/* Text above */}
                                <div className="mb-2 text-black">Rewards</div>

                                {/* Flex container for image and number */}
                                <div className="flex items-center">
                                    {/* Image on the left */}
                                    <img src={School4} alt="Description of the image" className="h-20 w-32 opacity-50 " />

                                    {/* Star rating system */}
                                    <div className="flex items-center space-x-2">
                                        {[1, 2, 3, 4, 5].map((star, index) => (
                                            <svg
                                                key={index}
                                                onClick={() => handleStarClick(star)}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill={star <= rating ? "currentColor" : "none"}
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className={`h-6 w-6 cursor-pointer ${star <= rating ? "text-yellow-500" : "text-gray-200"}`}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.062a1 1 0 00.95.69h7.416c.969 0 1.372 1.24.588 1.81l-6.017 4.357a1 1 0 00-.364 1.118l2.286 7.062c.3.921-.755 1.688-1.538 1.118l-6.017-4.357a1 1 0 00-1.176 0l-6.017 4.357c-.783.57-1.838-.197-1.538-1.118l2.286-7.062a1 1 0 00-.364-1.118L2.049 12.49c-.784-.57-.381-1.81.588-1.81h7.416a1 1 0 00.95-.69l2.286-7.062z"
                                                />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Content container for text and number */}

                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col">
                            <div className="text-white rounded font-bold text-xl flex-grow">
                                <div className="text-white  rounded">
                                    <div className="mb-1 flex justify-between">
                                        {/* Container for all four sections in one column */}
                                        <div className="flex flex-col gap-1">
                                            {/* Days Absent */}
                                            <div className="bg-gradient-to-r from-emerald-700 to-lime-300 text-white  px-2 rounded-xl  font-bold text-lg text-center w-64 ml-2">
                                                <div className="mb-1 text-black">Day's Absent</div>
                                                <div className="flex items-center justify-center">
                                                    <img src={OthersImage} alt="Description of the image" className="h-8 w-16 opacity-50 mr-2" />
                                                    <div className="flex-grow">
                                                        <div className="text-white p-1 rounded ml-auto">
                                                            <div className="text-xl font-bold text-black">
                                                                <span className='text-black'>{daysAbsent.total}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Vacation */}
                                            <div className="bg-gradient-to-r from-blue-700 to-blue-300 text-white  px-2 rounded-xl font-bold text-lg text-center w-64 ml-2">
                                                <div className="mb-1 text-black">Vacation</div>
                                                <div className="flex items-center justify-center">
                                                    <img src={VacationImage} alt="Vacation" className="h-8 w-16 opacity-50 mr-2" />
                                                    <div className="flex-grow">
                                                        <div className="text-white p-1 rounded ml-auto">
                                                            <div className="text-xl font-bold text-black">
                                                                <span className='text-black'>{daysAbsent.vacation}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Sick Days */}
                                            <div className="bg-gradient-to-r from-red-700 to-red-300 text-white  px-2 rounded-xl font-bold text-lg text-center w-64 ml-2">
                                                <div className="mb-1 text-black">Sick Days</div>
                                                <div className="flex items-center justify-center">
                                                    <img src={SickImage} alt="Sick Days" className="h-8 w-16 opacity-50 mr-2" />
                                                    <div className="flex-grow">
                                                        <div className="text-white p-1 rounded ml-auto">
                                                            <div className="text-xl font-bold text-black">
                                                                <span className='text-black'>{daysAbsent.sick}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Others */}
                                            <div className="bg-gradient-to-r from-yellow-700 to-yellow-300 text-white  px-2 rounded-xl font-bold text-lg text-center w-64 ml-2">
                                                <div className="mb-1 text-black">Others</div>
                                                <div className="flex items-center justify-center">
                                                    <img src={OthersImage} alt="Others" className="h-8 w-16  opacity-50 mr-2" />
                                                    <div className="flex-grow">
                                                        <div className="text-white p-1 rounded ml-auto">
                                                            <div className="text-xl font-bold text-black">
                                                                <span className='text-black'>{daysAbsent.others}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* end of absent days */}


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:col-span-2 flex flex-col space-y-2 mb-2 md:mb-0 md:mr-4 relative">
    <button
        ref={buttonRef}
        className="bg-gradient-to-r from-amber-200 to-yellow-400 text-black px-2 rounded text-left text-lg md:text-base flex justify-between items-center w-full md:w-3/4 lg:w-2/3"
        onClick={(e) => toggleDropdown()}
    >
        Check Month History
        <FontAwesomeIcon icon={faChevronDown} className="ml-2 h-5 w-5 md:h-4 md:w-4 bg-orange-400 text-white rounded" />
    </button>
    <button
        className="bg-gradient-to-r from-amber-200 to-yellow-400 text-black px-2 rounded text-left text-lg md:text-base flex justify-between items-center w-full md:w-3/4 lg:w-2/3"
        onClick={(e) => {
            e.preventDefault();
            handleOpen();
        }}
    >
        Request for Leaves
        <BiSolidRightArrowSquare className="ml-2 h-7 w-7 md:h-5 md:w-5 bg-green-400 text-white rounded" />
    </button>
    <button className="bg-gradient-to-r from-amber-200 to-yellow-400 text-black px-2 rounded text-lg md:text-base text-left flex justify-between items-center w-full md:w-3/4 lg:w-2/3">
        Leave Documents
        <div className='flex flex-col items-center'>
            <div className='bg-white p-1 rounded'>
                <IoMdDownload className="h-4 w-4 md:h-3 md:w-3 bg-green-400 text-white rounded-full" />
            </div>
            <span className="text-xs mt-1">Download</span>
        </div>
        <div className='flex flex-col items-center'>
            <div className='bg-white p-1 rounded'>
                <MdFileUpload className="h-4 w-4 md:h-3 md:w-3 bg-orange-400 text-white rounded-full" />
            </div>
            <span className="text-xs mt-1">Upload</span>
        </div>
    </button>
    <div>
        <button
            className="bg-gradient-to-r from-amber-200 to-yellow-400 text-black px-2 rounded text-left text-lg md:text-base flex justify-between items-center w-full md:w-3/4 lg:w-2/3"
            onClick={() => handleOpenn()}
        >
            Holidays List
            <SlCalender className="ml-2 h-5 w-5 md:h-4 md:w-4 bg-orange-400 text-white rounded" />
        </button>
    </div>
</div>

                {isDropdownOpen && ReactDOM.createPortal(
                    <div
                        className="bg-white text-black p-2 rounded shadow mt-2"
                        style={{ position: 'absolute', top: dropdownPosition.top, left: dropdownPosition.left, zIndex: 50, width: '200px' }}
                    >
                        <div className="px-4 py-4 cursor-pointer text-white bg-pink-700 hover:bg-rose-500">JAN-MAR</div>
                        <div className="px-4 py-4 cursor-pointer text-white bg-pink-400 hover:bg-rose-500">APR-JUNE</div>
                        <div className="px-4 py-4 cursor-pointer text-white bg-pink-700 hover:bg-rose-500">JUL-SEPT</div>
                        <div className="px-4 py-4 cursor-pointer text-white bg-pink-400 hover:bg-rose-500">OCT-DEC</div>
                    </div>,
                    document.body
                )}
                {showTotalDaysMonthWise && (
                    <div className="mt-4 p-2 bg-white rounded shadow-lg w-full">
                        <h2 className="text-2xl font-bold mb-2 text-blue-400">Total Days Month-wise</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {totalDaysMonthWise.map((data, index) => (
                                <div key={index} className="p-4 bg-white text-blue-400 rounded-lg">
                                    <p className="text-lg font-semibold">{data.month}</p>
                                    <p>Present: {data.attended}</p>
                                    <p>Absent: {data.notAttended}</p>
                                    <p>Late to School: {data.lateToSchool}</p>
                                    <p className="font-bold">Total Days: {data.totalDays}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>



            {showApplication && <LeaveApplication />}
            {showHolidays && <HolidaysList />}

            <div className="flex justify-center mt-2">
                <div className="w-full md:w-3/4 bg-custom-blue p-2 rounded-lg shadow-md ">
                    <div className="flex justify-center space-x-4">
                        <div className="w-3/4 bg-white  rounded-lg shadow-md border-solid border-4 border-indigo-600">
                            <h2 className="text-2xl font-bold text-center text-blue-500">Monthly Analysis</h2>
                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="400px"
                                data={data}
                                options={options}
                            />
                        </div>
                        {/* Yearly Analysis Pie Chart */}
                        <div className="w-1/4 bg-white p-2 rounded-lg shadow-md border-solid border-4 border-indigo-600">
                            <h2 className="text-2xl font-bold mb-4 text-center text-blue-500 ">Yearly Analysis</h2>
                            <div className="flex justify-center ">
                                <Pie data={PiechartData} width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <LeaveApplication />
                </Box>
            </Modal>

            <Modal
                open={open1}
                onClose={handleClosee}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style1}>
                    <HolidaysList />
                </Box>
            </Modal>


            {/* <div>

                <Link to="/annotate">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Annotate
                    </button>
                </Link>
            </div> */}
        </div>
    );
};

export default AttendanceHistory;
