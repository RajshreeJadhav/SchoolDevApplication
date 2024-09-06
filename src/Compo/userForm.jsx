import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backgroundImage from "../Assets/bgreg.jpeg";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const UserForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [extractedSegment, setExtractedSegment] = useState('');
    const [formData, setFormData] = useState({
        // email: '',
        // fullName: '',
        // gender: '',
        // address: '',
        // dob: '',
        // dateJoined: '',
        // userType: '',
        password: '',
        password2: '',
        phone_number: '',
        dob: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (formData.password !== formData.password2) {
    //         alert('Passwords do not match!');
    //         return;
    //     }
    //     console.log("formData", formData);
    //     axios.post("https://2h0lpm3d-8000.inc1.devtunnels.ms/User/login/", formData, {
    //         headers: {
    //             Accept: "application/json",
    //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNjE1NTU2LCJpYXQiOjE3MjI1NzIzNTYsImp0aSI6IjgxZTI5ODZhNDZkMTRlMmE5M2Q1ZDNkNDQzMWU3MTFhIiwidXNlcl9pZCI6MSwiZW1haWwiOiJzdXBlckBnbWFpbC5jb20ifQ.E9eanlERjstgTWEr2RkHEvDjAm42MXDo-foL_-Mm38Q`
    //         }
    //     })

    //         .then((res) => {
    //             if (res) {
    //                 alert("Sent")
    //             }
    //         })

    //         .catch(err => {
    //             alert("error");
    //             console.log(err);
    //         })
    //     console.log('Form submitted', formData);
    // };

    const handleUserReg = () => {

        if (extractedSegment === '') {
            alert("Link Invalid");
            return;
        }

        if (formData.password !== formData.password2) {
            alert("Passwords don't match");
            return;
        }

        console.log("Data", formData, "Segment", extractedSegment);

        axios
            .post(`https://2h0lpm3d-8000.inc1.devtunnels.ms/User/Registration/${extractedSegment}`, formData, {
                Accept: "application/json",
            })

            .then((res) => {
                if (res.status === 200) {
                    // prefillData(res.data);
                    alert("User Registered Successfully! Please Login");
                    navigate('/login')
                }
            })

            .catch((err) => {
                alert("Error Registering User!");
                console.log(err);
            })
    };

    useEffect(() => {
        if (extractedSegment !== '') {
            axios
                .get(`https://2h0lpm3d-8000.inc1.devtunnels.ms/User/Registration/${extractedSegment}`, {
                    Accept: "application/json",
                })

                .then((res) => {
                    if (res) {
                        // prefillData(res.data);
                        alert("Please Complete Registration");
                    }
                })

                .catch((err) => {
                    alert("Error Link Invalid");
                    console.log(err);
                })
        }
    }, [extractedSegment])

    useEffect(() => {
        const pathSegment = location.pathname.replace('/userform/', '');
        setExtractedSegment(pathSegment);
        console.log(pathSegment);
    }, [location]);

    return (
        <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed p-4"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="bg-white bg-opacity-75 p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
  <h2 className="text-2xl text-center font-bold mb-6">Sign Up</h2>
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
          Confirm Password
        </label>
        <input
          type="password"
          name="password2"
          id="password2"
          value={formData.password2}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number">
          Phone Number
        </label>
        <input
          type="text"
          name="phone_number"
          id="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleUserReg}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</div>


    );
};

export default UserForm;
