import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SelectD = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []);

  const onChange = (selectedDate) => {
    setSelectedDate(selectedDate); // Update the selected date state
    setDate(selectedDate); // Update the date state to highlight the selected date in the calendar
  };

  return (
    <div>
      <div className="relative">
        <Calendar
          value={date}
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
          className="border border-gray-300 rounded-md absolute left-0 p-2 ml-4 mt-2"
        />
        
      </div>
      
    </div>
  );
};

export default SelectD;
