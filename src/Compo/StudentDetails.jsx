import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { FaSchool } from "react-icons/fa6";
import Schoollogo1 from '../Assets/schoolLogo.PNG';
import { FaBell, FaEnvelope, FaCog, FaBars } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import myImage from "../Assets/kids.jpg";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from 'react-icons/fa';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // 90% of the viewport width
  // maxWidth: '800px', // Set a maximum width

  bgcolor: '#ADD8E6',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh', // 90% of the viewport height
  overflowY: 'auto', // Allow scrolling if content overflows

};

const StudentDetails = () => {

  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    user_type: '',
    fullName: '',
    schoolid: ''
  });

  const handleSendLink = () => {
    console.log('Send 1-Time App Link clicked');
    // Add your logic to send a one-time app link
  };

  // Function to handle 'Cancel' button click
  const handleCancel = () => {
    console.log('Cancel clicked');
    // Add your cancel logic here
  };

  // Function to handle 'Proceed to Next Step' button click
  const handleProceed = () => {
    console.log('Proceed to Next Step clicked');
    // Add your logic to proceed to the next step
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [parStu, setParStu] = useState({
    "studentid": "",
    "fname": "",
    "lname": "",
    "gender": "",
    "dob": "",
    "address": "",
    // "contactno": "",
    "email": "",
    "date_of_admission": "",
    "schoolid": "",
    "clssectionid": "",
    "current_grade": "",
    "academic_year": "",
    "nationality": "",
    "religion": "",
    "languages_spoken": "",
    "state": "",
    "city": "",
    "pin": "",
    "country": "",
    "phone_number": "",
    "photo_id": null,
    "medical_info": null,
    "emergency_contacts": []
  });

  const retParStu = (data) => {
    let obj = { ...parStu };
    Object.keys(obj).forEach(ea => {
      if (ea in data) {
        obj[`${ea}`] = data[`${ea}`];
      }
    });
    // console.log("setParStu", obj);
    return obj;
  };

  const getParticular = (id) => {
    axios.get(`https://2h0lpm3d-8000.inc1.devtunnels.ms/User/user/profiles/${id}/`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
      }
    })

      .then((res) => {
        if (res) {
          toast.success("Particular Fetched");
          setParStu(retParStu(res.data));
          // setParStu(res.data)
          // console.log("PARSTU", retParStu(res.data));
        }
      })

      .catch(err => {
        toast("error fetching");
        console.log(err);
      })
  };

  const register = () => {
    axios.post("https://2h0lpm3d-8000.inc1.devtunnels.ms/User/admin/register/", formData, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
      }
    })

      .then((res) => {
        if (res) {
          toast.success("Sent")
        }
      })

      .catch(err => {
        toast.error("error");
        console.log(err);
      })
  };

  useEffect(() => {
    axios.get("https://2h0lpm3d-8000.inc1.devtunnels.ms/User/user/profiles/", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
      }
    })

      .then((res) => {
        if (res) {
          toast.success("Fetched");
          setStudents(res.data.filter(e => e.user_type === "student"))
          console.log(res.data);
        }
      })

      .catch(err => {
        toast.error("error fetching");
        console.log(err);
      })
  }, []);

  return (
    <div className='p-2'>
      <div className="px-2">
        <div className="bg-sky-200 p-4 flex items-center justify-between">
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
        <div className="bg-purple-200 p-4 rounded-lg border-2 border-black flex justify-between items-center space-x-4">
          {/* Step 1 */}
          <div className="text-center">
            <p className="font-bold text-black">STEP 1</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
              Send Account Link
            </button>
          </div>

          {/* Arrow */}
          <p className="font-bold text-black">→</p>

          {/* Step 2 */}
          <div className="text-center">
            <p className="font-bold text-black">STEP 2</p>
            <button className="bg-cyan-400 text-black py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300">
              Fill Information
            </button>
          </div>

          {/* Arrow */}
          <p className="font-bold text-black">→</p>

          {/* Step 3 */}
          <div className="text-center">
            <p className="font-bold text-black">STEP 3</p>
            <button className="bg-cyan-400 text-black py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300">
              Notify Teachers/Students
            </button>
          </div>

          {/* Arrow */}
          <p className="font-bold text-black">→</p>

          {/* Step 4 */}
          <div className="text-center">
            <p className="font-bold text-black">STEP 4</p>
            <button className="bg-cyan-400 text-black py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300">
              See List of Students
            </button>
          </div>
        </div>



        {/* Container for buttons and form */}
        <div className="flex flex-col md:flex-row mb-4 w-full bg-gray-300 p-2">
          <div className="md:w-1/2 p-2 flex flex-col">

            {/* Student details form on the left side */}
            <div className="w-full p-2 md:p-4 border border-gray-100 rounded-md shadow-md bg-white">
              {/* Heading centered above the email field */}
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-gray-700 font-just-another-hand">Send Account Link</h2>
              </div>

              {/* Form fields */}
              <div className="mb-4 flex flex-col md:flex-row items-center">
                <label className="px-4 text-lg font-just-another-hand block text-gray-700 font-bold mb-2 w-full md:w-1/3">Email:</label>
                <input type="text" id="email" name="email" className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200 font-just-another-hand" onChange={handleChange} />
              </div>
              <div className="mb-4 flex flex-col md:flex-row items-center">
                <label className="px-4 text-lg font-just-another-hand block text-gray-700 font-bold mb-2 w-full md:w-1/3">Full Name:</label>
                <input type="text" id="fullName" name="fullName" className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200 font-just-another-hand" onChange={handleChange} />
              </div>
              <div className="mb-4 flex flex-col md:flex-row items-center">
                <label className="px-4 text-lg font-just-another-hand block text-gray-700 font-bold mb-2 w-full md:w-1/3">School ID:</label>
                <input type="text" id="schoolid" name="schoolid" className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200 font-just-another-hand" onChange={handleChange} />
              </div>
              <div className="mb-4 flex flex-col md:flex-row items-center">
                <label className="px-4 text-lg font-just-another-hand block text-gray-700 font-bold mb-2 w-full md:w-1/3">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200 font-just-another-hand"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="px-4 text-lg font-just-another-hand block text-gray-700 font-bold mb-2 w-full md:w-1/3" htmlFor="userType">User Type:</label>
                <select
                  name="user_type"
                  id="user_type"
                  value={formData.user_type}
                  onChange={handleChange}
                  className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200 font-just-another-hand"
                  required
                >
                  <option value="" disabled>Select User Type</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="student">Student</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mb-4">
                <button
                  // type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => register()}
                >
                  Submit
                </button>
              </div>

              {/* New Buttons Row */}
              <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold text-sm py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full md:w-auto"
                  onClick={() => handleSendLink()}
                >
                  Send 1-Time App Link
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full md:w-auto"
                  onClick={() => handleCancel()}
                >
                  Cancel
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold text-sm py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full md:w-auto flex items-center justify-center"
                  onClick={() => handleProceed()}
                >

                  Proceed to Next Step
                  <FaArrowRight className="mr-2" />
                </button>
              </div>



            </div>


            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Full Name</TableCell>
                      <TableCell align="right">Mail</TableCell>
                      <TableCell align="right">School Id</TableCell>
                      <TableCell align="right">dob</TableCell>
                      <TableCell align="right">Phone Number</TableCell>
                      <TableCell align="right">Edit</TableCell>


                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {students.length > 0 && students.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.fullName}
                        </TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.schoolid}</TableCell>
                        <TableCell align="right">{row.dob}</TableCell>
                        <TableCell align="right">{row.phone_number}</TableCell>
                        <TableCell align="right" onClick={() => {
                          handleOpen();
                          getParticular(row.id);
                        }}>Edit</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

          </div>
        </div>

        {/* Placeholder for student photo on the right side */}

      </div>

      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setParStu({
            "studentid": "",
            "fname": "",
            "lname": "",
            "gender": "",
            "dob": "",
            "address": "",
            // "contactno": "",
            "email": "",
            "date_of_admission": "",
            "schoolid": "",
            "clssectionid": "",
            "current_grade": "",
            "academic_year": "",
            "nationality": "",
            "religion": "",
            "languages_spoken": "",
            "state": "",
            "city": "",
            "pin": "",
            "country": "",
            "phone_number": "",
            "photo_id": null,
            "medical_info": null,
            "emergency_contacts": []
          })
        }
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="max-w-lg mx-auto p-6 bg-cyan-200 shadow-md rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={parStu?.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fullName"
                  value={parStu?.fname}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="fullName"
                  value={parStu?.lname}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schoolid">
                  School ID
                </label>
                <input
                  type="text"
                  name="schoolid"
                  id="schoolid"
                  value={parStu?.schoolid}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentGrade">
                  Current Grade
                </label>
                <input
                  type="number"
                  name="current_grade"
                  id="currentGrade"
                  value={parStu?.current_grade}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationality">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  value={parStu?.nationality}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="languages">
                  Languages
                </label>
                <input
                  type="text"
                  name="languages_spoken"
                  id="languages"
                  value={parStu?.languages_spoken}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={parStu?.address}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={parStu?.city}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={parStu?.country}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNo">
                  Phone No
                </label>
                <input
                  type="text"
                  name="phone_number"
                  id="phoneNo"
                  value={parStu?.phone_number}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">
                  Student ID
                </label>
                <input
                  type="text"
                  name="studentid"
                  id="studentId"
                  value={parStu?.studentid}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                  Gender
                </label>
                <div className="flex items-center">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={parStu?.gender === "male"}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={parStu?.gender === "female"}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    Female
                  </label>
                </div>
              </div>



              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="academicYear">
                  Academic Year
                </label>
                <input
                  type="text"
                  name="academic_year"
                  id="academicYear"
                  value={parStu?.academic_year}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classAndSec">
                  Class and Section
                </label>
                <input
                  type="text"
                  name="clssectionid"
                  id="classAndSec"
                  value={parStu?.clssectionid}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enrollmentDate">
                  Enrollment Date
                </label>
                <input
                  type="date"
                  name="date_of_admission"
                  id="enrollmentDate"
                  value={parStu?.date_of_admission}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="religion">
                  Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  id="religion"
                  value={parStu?.religion}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={parStu?.state}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pin"
                  id="pincode"
                  value={parStu.pin}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>


              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={parStu?.dob}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
              >
                Submit
              </button>
            </div>

          </div>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default StudentDetails;



//  <div className="flex mb-4 w-full bg-gray-100 ">
//           <div className="w-1/2 p-2 flex flex-col">
//             <div className="flex w-full justify-center ">
//               <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-lg font-bold py-2 px-4 rounded-lg mr-2 mb-2 h-16 w-1/2">Edit details</button>
//               <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-lg font-bold py-2 px-4 rounded-lg mr-2 mb-2 h-16 w-1/2">Update photo</button>
//             </div>
//             <div className="flex w-full justify-center mb-2">
//               <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-lg font-bold py-2 px-4 rounded-lg mr-2 mb-2 h-16 w-1/2">ID card</button>
//               <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-lg font-bold py-2 px-4 rounded-lg mr-2 mb-2 h-16 w-1/2">Parent/Guardian info</button>
//             </div>
//             {/* Student details form on the left side */}
//             <div className="w-full p-4 border border-gray-100 rounded-md shadow-md">
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   Student ID:
//                 </label>
//                 <input
//                   type="text"
//                   id="student-id"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   Gender:
//                 </label>
//                 <input
//                   type="text"
//                   id="gender"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   Academic Year:
//                 </label>
//                 <input
//                   type="text"
//                   id="academic-year"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   Class and Sec:
//                 </label>
//                 <input
//                   type="text"
//                   id="class-sec"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   Religion:
//                 </label>
//                 <input
//                   type="text"
//                   id="religion"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   Languages Spoken:
//                 </label>
//                 <input
//                   type="text"
//                   id="languages-spoken"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   State:
//                 </label>
//                 <input
//                   type="text"
//                   id="state"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   PIN Code:
//                 </label>
//                 <input
//                   type="text"
//                   id="pin-code"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//               <div className="mb-4 flex items-center">
//                 <label className="px-4 text-lg block text-gray-700 font-bold mb-2 w-1/3" >
//                   Phone No:
//                 </label>
//                 <input
//                   type="text"
//                   id="phone-no"
//                   className="w-2/3 px-3 py-2 border border-gray-300 rounded-md bg-blue-200"
//                 />
//               </div>
//             </div>
//           </div>