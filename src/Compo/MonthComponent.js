import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './BigCalendarComponent.css'; // Custom CSS for additional styling

const localizer = momentLocalizer(moment);

const MonthComponent = () => {
  const [events, setEvents] = useState([
    {
      title: 'Sample Event',
      start: new Date(),
      end: new Date(),
      allDay: true,
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Calendar</h2>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        className="rbc-calendar"
      />
    </div>
  );
};

export default MonthComponent;
