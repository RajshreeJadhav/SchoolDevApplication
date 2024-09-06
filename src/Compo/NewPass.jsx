import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const NewPass12 = () => {
    const [resetCode, setResetCode] = useState(new Array(6).fill(''));
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = (value, index) => {
        const newResetCode = [...resetCode];
        newResetCode[index] = value.slice(0, 1);
        setResetCode(newResetCode);
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const completeResetCode = resetCode.join('');
        // console.log("Reset Code:", completeResetCode);
        console.log("New Password:", newPassword);
        try {
            const response = await axios.post('https://2h0lpm3d-8000.inc1.devtunnels.ms/User/password_confirm/', {
                reset_code: completeResetCode,
                new_password: newPassword,
                confirm_password: newPassword
            }, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('userToken')}`
                }
            });

            // if (response.data.success) {
            //   setMessage('OTP has been sent to your email address.');
            //   setTimeout(() => navigate('/'), 2000);
            // } else {
            //   setMessage('Error sending OTP. Please try again.');
            // }
            if (response.status === 200 && response.data.msg === "Password has been reset successfully.") {
                setMessage('Reset Done');
                setTimeout(() => navigate('/'), 2000);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        } finally {
            // setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cyan-200">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md bg-cyan-300">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetCode">
                            Reset Code
                        </label>
                        <div className="flex justify-between">
                            {resetCode.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={digit}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    maxLength="1"
                                    className="shadow appearance-none border rounded w-10 py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                            New Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="block w-full rounded-md border-0 p-2 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 mt-5 cursor-pointer text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            //   name="password"
                            value={confirmPassword}
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            className="block w-full rounded-md border-0 p-2 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 mt-5 cursor-pointer text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPass12;
