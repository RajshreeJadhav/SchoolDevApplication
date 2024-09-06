import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdRegForm = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const [formData, setFormData] = useState({
        email: '',
        user_type: '',
        fullName: '',
        schoolid: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (formData.password !== formData.password2) {
        //     alert('Passwords do not match!');
        //     return;
        // }
        axios.post(`https://2h0lpm3d-8000.inc1.devtunnels.ms/User/admin/register/`, formData, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0Nzc4MjIzLCJpYXQiOjE3MjQ3MzUwMjMsImp0aSI6ImU2MTViOWY5YTZjNjQ5ZjVhNjU2MWM2MzE5OWIyZWRiIiwidXNlcl9pZCI6MTUsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0.eLJsWmsvjTHP0mjWvwgyeJt0hLZwGQ-ZYa7KAwGFBz8`
            }
        })
            .then((res) => {
                if (res) {
                    alert("Sent")
                }
            })

            .catch(err => {
                alert("error");
                console.log("Trigger Error", err);
            })
        // console.log('Form submitted', formData);
    };

    // useEffect(() => {
    //     console.log("Params", queryParams);
    // }, [queryParams]);

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Full Name
                </label>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    School ID
                </label>
                <input
                    type="number"
                    name="schoolid"
                    id="schoolid"
                    value={formData.schoolid}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
                    User Type
                </label>
                <select
                    name="user_type"
                    id="user_type"
                    value={formData.user_type}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                >
                    <option value="" disabled>Select User Type</option>
                    <option value="admin">admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onSubmit={handleSubmit}
                >
                    Send Link
                </button>
            </div>
        </div>
    );
};

export default AdRegForm;