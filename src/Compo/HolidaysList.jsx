import React from 'react';

const HolidaysList = () => {
    // Sample data for holidays
    const holidays = [
        { date: '2024-01-01', day: 'Monday', name: "New Year's Day" },
        { date: '2024-01-26', day: 'Saturday', name: 'Republic Day' },
        { date: '2024-03-10', day: 'Sunday', name: 'Holi' },
        { date: '2024-04-14', day: 'Sunday', name: 'Good Friday' },
        { date: '2024-05-01', day: 'Wednesday', name: 'Labor Day' },
        { date: '2024-08-15', day: 'Thursday', name: 'Independence Day' },
        { date: '2024-10-02', day: 'Wednesday', name: 'Gandhi Jayanti' },
        { date: '2024-10-25', day: 'Friday', name: 'Dussehra' },
        { date: '2024-12-25', day: 'Wednesday', name: 'Christmas Day' },
        // Add more holidays as needed
    ];

    const getRowColor = (index) => {
        const colors = ['bg-blue-200', 'bg-yellow-200', 'bg-red-200', 'bg-purple-200', 'bg-pink-300', 'bg-cyan-200', 'bg-orange-200', 'bg-indigo-200'];
        return colors[index % colors.length];
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 mb-10 ">
            <div className="flex items-center justify-center h-full bg-blue-400 p-4 ">
                <h1 className="text-2xl font-bold text-white ">Holidays List(Year)</h1>
            </div>
            <div className="grid grid-cols-3 rounded-lg">
                <div className="text-center font-bold text-black bg-rose-200 p-2">Date</div>
                <div className="text-center font-bold text-black bg-rose-200 p-2">Day</div>
                <div className="text-center font-bold text-black bg-rose-200 p-2">Holiday</div>

                {holidays.map((holiday, index) => (
                    <React.Fragment key={index}>
                        <div className={`text-center text-black ${getRowColor(index)} p-2`}>{holiday.date}</div>
                        <div className={`text-center text-black ${getRowColor(index)} p-2`}>{holiday.day}</div>
                        <div className={`text-center text-black ${getRowColor(index)} p-2`}>{holiday.name}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default HolidaysList;
