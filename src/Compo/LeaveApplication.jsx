import React, { useState } from 'react';

const LeaveApplicationForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numDays, setNumDays] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [reason, setReason] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState('');

  const leaveTypes = ['Sick', 'Vacation', 'Other'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const calculateNumDays = (start, end) => {
    if (start && end) {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Including both start and end dates
      setNumDays(diffDays);
    } else {
      setNumDays('');
    }
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    const today = new Date().toISOString().split('T')[0];

    if (selectedStartDate < today) {
      setError('Start Date cannot be before today');
    } else {
      setError('');
      setStartDate(selectedStartDate);
      calculateNumDays(selectedStartDate, endDate);
    }
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    if (startDate && startDate > selectedEndDate) {
      setError('End Date cannot be before Start Date');
    } else {
      setError('');
      setEndDate(selectedEndDate);
      calculateNumDays(startDate, selectedEndDate);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];

    if (startDate < today) {
      setError('Start Date cannot be before today');
      return;
    }

    if (!startDate || !endDate || !leaveType || !reason) {
      setError('All fields are required');
      return;
    }

    setError('');
    // Additional validation or submission logic can be added here
    // For example, you can check if all required fields are filled before submitting
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto mt-10 ">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-red-400 text-center">Leave Application Form</h2>
          </div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            min={today} // Prevent selecting a date before today
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            min={today} // Prevent selecting a date before today
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            No. of Days Applied
          </label>
          <input
            type="number"
            value={numDays}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Leave Types
          </label>
          <div
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold"
            onClick={toggleDropdown}
          >
            {leaveType || 'Select Leave Type'}
            <span className="float-right">&#9660;</span>
          </div>
          {dropdownOpen && (
            <div className="absolute z-10 text-red-700 bg-white font-bold shadow-md rounded w-full mt-1">
              {leaveTypes.map((type, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-300"
                  onClick={() => {
                    setLeaveType(type);
                    setDropdownOpen(false);
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Reason For Leave
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <button
            type="submit"
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline h-12"
          >
            Submit for Parents Consent
          </button>
          <button
            type="submit"
            className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline h-12"
          >
            Submit for Teacher Consent
          </button>
          <button
            type="button"
            className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline h-12"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveApplicationForm;
