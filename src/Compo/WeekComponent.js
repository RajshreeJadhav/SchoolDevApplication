import React, { useState } from 'react';
import { FaPrint, FaImage } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaFilePdf } from 'react-icons/fa6';

const WeekComponent = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const days = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const times = ["8:45", "9:30", "10:15", "11:15", "12:00", "1:00", "1:45", "2:30"];

  const subjects = {
    "Monday": ["English", "Hindi", "Science", "Science", "Language", "Science", "S.Science", "Language"],
    "Tuesday": ["S.Science", "Maths", "English", "Hindi", "Language", "S.Science", "Language", "Science"],
    "Wednesday": ["Maths", "English", "Hindi", "Science", "S.Science", "Maths", "Science", "Language"],
    "Thursday": ["Maths", "Hindi", "Hindi", "Maths", "English", "Language", "Maths", "Maths"],
    "Friday": ["Hindi", "Science", "English", "S.Science", "Language", "S.Science", "English", "S.Science"],
    "Saturday": ["S.Science", "Hindi", "Maths", "Maths", "Science", "English", "Language", "Maths"],
  };

  const teachers = {
    "English": "T-Sudha",
    "Maths": "T-Geeta",
    "Science": "T-Mohan",
    "S.Science": "T-Hema",
    "Hindi": "T-Madhu",
    "Language": "",
    "Sports": "Coach Thompson"
  };

  const handleDownloadImage = () => {
    const container = document.querySelector('#timetable-container');
    html2canvas(container).then(canvas => {
      const dataURL = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'timetable.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleDownloadPDF = () => {
    const container = document.querySelector('#timetable-container');
    html2canvas(container).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('timetable.pdf');
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleHighlightChange = (event) => {
    setIsHighlighted(event.target.checked);
  };

  return (
    <div className="flex flex-col items-center">
      <div id="timetable-container" className="w-11/12">
        <div className="w-full flex justify-end mb-4">
          <label className="flex items-center mr-2">
            <input
              type="checkbox"
              onChange={handleHighlightChange}
              className="text-3xl mr-2 h-8 w-8"
            />
            <span className="text-lg font-serif font-bold text-white">Highlight Timetable</span>
          </label>
          <button onClick={handleDownloadImage} className="bg-green-500 text-white font-bold py-2 px-4 rounded ">
            <FaImage className="text-2xl" />
          </button>
          <button onClick={handleDownloadPDF} className="bg-red-400  text-white font-bold py-2 px-4 rounded  ml-2">
            <FaFilePdf className="text-2xl" />
          </button>
          <button onClick={handlePrint} className="bg-pink-300  text-white font-bold py-2 px-4 rounded  ml-2">
            <FaPrint className="text-2xl" />
          </button>
        </div>
        <h1 className="text-2xl font-bold my-2 text-white font-serif text-center mb-2">Week Timetable</h1>

        <table className="table-fixed font-bold font-serif border-collapse border border-gray-200 text-xs bg-gradient-to-r from-violet-200 to-pink-200 w-full">
          <thead>
            <tr className={isHighlighted ? "bg-white" : "bg-blue-300"}>
              {days.map((day, index) => (
                <th key={index} className={`border border-gray-500 px-1 py-2 font-serif text-center text-xl font-bold ${isHighlighted ? "bg-white" : "bg-cyan-200"}`}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, rowIndex) => (
              <React.Fragment key={time}>
                <tr>
                  <td className={`border border-gray-500 px-1 font-sans text-lg font-bold text-center w-12 ${isHighlighted ? "bg-white" : "bg-cyan-200"}`}>
                    <div className="p-2 flex justify-center">
                      <div className="w-1/4">
                        {rowIndex + 1}
                      </div>
                      {"|"}
                      <div className="w-3/4">
                        {time}
                      </div>

                    </div>
                    {/* <div>{time}</div> */}
                  </td>
                  {days.slice(1).map((day, colIndex) => {
                    const subject = subjects[day][rowIndex];
                    const teacher = teachers[subject];
                    const color = isHighlighted ? "bg-white" : {
                      "English": "bg-lime-300",
                      "Maths": "bg-yellow-300",
                      "Science": "bg-orange-300",
                      "S.Science": "bg-red-400",
                      "Hindi": "bg-pink-300",
                      "Language": "bg-blue-300",
                      "Sports": "bg-cyan-300"
                    }[subject] || "";
                    const faintColor = isHighlighted ? "" : {
                      "English": "bg-lime-100",
                      "Maths": "bg-yellow-100",
                      "Science": "bg-orange-100",
                      "S.Science": "bg-red-100",
                      "Hindi": "bg-pink-100",
                      "Language": "bg-blue-100",
                      "Sports": "bg-cyan-100"
                    }[subject] || "";
                    return (
                      <td key={`${day}-${time}`} className={`text-lg font-serif border border-gray-500 p-1 relative ${color}`}>
                        <div className={`subject-name ${faintColor} mb-1 p-1 h-8 w-24`}>
                          {subject}
                        </div>
                        <div className="teacher-name text-sm text-center mt-1">
                          {teacher}
                        </div>
                      </td>
                    );
                  })}
                </tr>
                {time === "10:15" && (
                  <tr>
                    <td className={`border border-gray-500 px-1 py-1 font-sans font-bold text-center text-lg w-12 ${isHighlighted ? "bg-white" : "bg-blue-300"}`}>
                      Break
                    </td>
                    {days.slice(1).map((day, colIndex) => (
                      <td key={`${day}-break`} className={`${isHighlighted ? "bg-white" : "bg-blue-500"}`}></td>
                    ))}
                  </tr>
                )}
                {time === "12:00" && (
                  <tr>
                    <td className={`border border-gray-500 px-1 py-1 font-sans font-bold text-center text-lg w-12 ${isHighlighted ? "bg-white" : "bg-blue-300"}`}>
                      Break
                    </td>
                    {days.slice(1).map((day, colIndex) => (
                      <td key={`${day}-break`} className={`${isHighlighted ? "bg-white" : "bg-blue-500"}`}></td>
                    ))}
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeekComponent;
