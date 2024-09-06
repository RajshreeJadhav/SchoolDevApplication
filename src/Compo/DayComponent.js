


// ........1st.....
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt } from 'react-icons/fa';

const DayComponent = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const schedules = {
    '2024-06-03': {
      ENGLISH: "Topic: English Grammar - verbs, prepositions\nChapter 2: Lion And Hare",
      MATH: "Topic: Trigonometry cos\nsine",
      SCIENCE: "Topic: Photosynthesis\nProject Submission\nDue date",
      SOCIAL_SCIENCE: "Topic: Water Cycles",
      HINDI: "Topic: ",
      LANGUAGE: "Topic: chapter 2 reading",
      SPORTS: "Topic: ",
      CIVICS: "Topic: Indian Constitution\nProject Submission\nDue date",
    },
        '2024-06-03': {
      ENGLISH: "Topic: English Grammar - verbs, prepositions\nChapter 2: Lion And Hare",
      MATH: "Topic: Trigonometry cos\nsine",
      SCIENCE: "Topic: Photosynthesis\nProject Submission\nDue date",
      SOCIAL_SCIENCE: "Topic: Water Cycles",
      HINDI: "Topic: ",
      LANGUAGE: "Topic: chapter 2 reading",
      SPORTS: "Topic: ",
      CIVICS: "Topic: Indian Constitution\nProject Submission\nDue date",
    },
    '2024-06-04': {
      ENGLISH: "Topic: prepositions\nChapter 2: Lion And Hare",
      MATH: "Topic: cos\nsine",
      SCIENCE: "Topic: \nProject Submission\nDue date",
      SOCIAL_SCIENCE: "Topic: Water Cycles",
      HINDI: "Topic: ",
      LANGUAGE: "Topic: chapter 2 reading",
      SPORTS: "Topic: ",
      CIVICS: "Topic: Indian Constitution\nProject Submission\nDue date",
    },
    // ... other dates and schedules


    '2024-06-05': {
      ENGLISH: "Topic: English Grammar - verbs",
      MATH: "Topic: Trigonometry cos\nsine",
      SCIENCE: "Topic: Project Submission\nDue date",
      SOCIAL_SCIENCE: "Topic: Water Cycles",
      HINDI: "Topic: ",
      LANGUAGE: "Topic: chapter 2 reading",
      SPORTS: "Topic: ",
      CIVICS: "Topic: Indian Constitution\nProject Submission\nDue date",
    },
    '2024-06-06': {
      ENGLISH: "Topic: English Grammar - verbs, prepositions\nChapter 2: Lion And Hare",
      MATH: "Topic: Trigonometry cos\nsine",
      SCIENCE: "Topic: Photosynthesis\nProject Submission\nDue date",
      SOCIAL_SCIENCE: "Topic: Water Cycles",
      HINDI: "Topic: ",
      LANGUAGE: "Topic: chapter 2 reading",
      SPORTS: "Topic: ",
      CIVICS: "Topic: Project Submission\nDue date",
    },
    '2024-06-07': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-08': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic:  Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises 123",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-10': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-11': {
      ENGLISH: "Topic: Reading ",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-12': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 4 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-12': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-13': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-14': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar hindi",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions demo",
    },
    '2024-06-17': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-18': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-19': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-20': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-21': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-24': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-25': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 3 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-26': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 4 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-27': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 5 reading",
      SPORTS: "Topic: Physical Exercises chap3",
      CIVICS: "Topic: Government Functions demo",
    },
    '2024-06-28': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps chap2",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 6 reading",
      SPORTS: "Topic: Physical Exercises guidance",
      CIVICS: "Topic: Government Functions",
    },
    '2024-06-29': {
      ENGLISH: "Topic: Reading Comprehension",
      MATH: "Topic: Algebra geography",
      SCIENCE: "Topic: Plant Cells",
      SOCIAL_SCIENCE: "Topic: Geography - Maps",
      HINDI: "Topic: Grammar",
      LANGUAGE: "Topic: chapter 7 reading",
      SPORTS: "Topic: Physical Exercises",
      CIVICS: "Topic: Government Functions",
    },

    // ... other dates and schedules
  };
  const colorMap = {
    ENGLISH: 'from-lime-200 to-lime-400',
    MATH: 'from-yellow-200 to-yellow-400',
    SCIENCE: 'from-orange-200 to-orange-400',
    SOCIAL_SCIENCE: 'from-rose-200 to-rose-400',
    HINDI: 'from-pink-200 to-pink-600',
    LANGUAGE: 'from-blue-400 to-blue-600',
    SPORTS: 'from-cyan-200 to-blue-400',
    CIVICS: 'from-purple-200 to-purple-400',
  };

  const formattedDate = date.toISOString().split('T')[0];
  const todaySchedule = schedules[formattedDate] || {};

  const today = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleCalendarChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
  };

  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold mr-2">Today's Classes</h1>
          <FaCalendarAlt className="text-2xl cursor-pointer" onClick={() => setShowCalendar(!showCalendar)} />
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-bold text-white">Today is {today}</h2>
        </div>
      </div>

      {showCalendar && (
        <div className="my-4 flex justify-center">
          <Calendar onChange={handleCalendarChange} value={date} />
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mt-4 justify-center">
        {Object.entries(todaySchedule).map(([subject, details]) => (
          <div
            key={subject}
            className={`w-80 h-44 px-4 py-6 text-center bg-gradient-to-r ${colorMap[subject] || 'from-gray-200 to-gray-400'} shadow-lg shadow-${subject.toLowerCase()}-800 rounded-2xl`}
          >
            <h1 className='font-bold'>{subject}</h1>
            <div className="w-72 h-28 p-2 border border-gray-400 bg-opacity-75 shadow-lg mt-2 rounded-xl">
              <h1 className="text-lg">
                {details.split('\n').map((line, index) => (
                  <React.Fragment key={index}>{line}<br /></React.Fragment>
                ))}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayComponent;



// .........2nd.................


// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { FaCalendarAlt } from 'react-icons/fa';

// const DayComponent = () => {
//   const [date, setDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);

//   const schedules = {
//     '2024-06-06': {
//       ENGLISH: "Topic: English Grammar - verbs, prepositions\nChapter 2: Lion And Hare",
//       MATH: "Topic: Trigonometry cos\nsine",
//       SCIENCE: "Topic: Photosynthesis\nProject Submission\nDue date",
//       SOCIAL_SCIENCE: "Topic: Water Cycles",
//       HINDI: "Topic: ",
//       LANGUAGE: "Topic: chapter 2 reading",
//       SPORTS: "Topic: ",
//       CIVICS: "Topic: Indian Constitution\nProject Submission\nDue date",
//     },
//     '2024-06-07': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     // Add more schedules as needed
//   };

//   const formattedDate = date.toISOString().split('T')[0];
//   const todaySchedule = schedules[formattedDate] || {};
//   const today = new Date().toLocaleDateString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });

//   return (
//     <div className="p-4">
//       <div className="text-center mb-4">
//         <div className="flex justify-center items-center">
//           <h1 className="text-2xl font-bold mr-2">Today's Classes</h1>
//           <FaCalendarAlt className="text-2xl cursor-pointer" onClick={() => setShowCalendar(!showCalendar)} />
//         </div>
//         <div className="mt-2">
//           <h2 className="text-xl">Today is {today}</h2>
//         </div>
//       </div>
      
//       {showCalendar && (
//         <div className="my-4 flex justify-center">
//           <Calendar onChange={setDate} value={date} className="react-calendar--small" />
//         </div>
//       )}

//       <div className="grid grid-cols-3 gap-4 mt-4 justify-center">
//         {Object.entries(todaySchedule).map(([subject, details]) => (
//           <div key={subject} className="w-80 h-44 px-4 py-6 text-center bg-gradient-to-r from-lime-200 to-lime-400 shadow-lg shadow-lime-800 rounded-2xl">
//             <h1 className='font-bold'>{subject}</h1>
//             <div className="w-72 h-28 p-2 border border-gray-400 bg-lime-200 shadow-lg shadow-lime-700 mt-2 rounded-xl">
//               <h1 className="text-lg">
//                 {details.split('\n').map(line => (
//                   <React.Fragment key={line}>{line}<br /></React.Fragment>
//                 ))}
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DayComponent;



//...............3rd......................
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { FaCalendarAlt } from 'react-icons/fa';

// const DayComponent = () => {
//   const [date, setDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);

//   const schedules = {
//     '2024-06-03': {
//       ENGLISH: "Topic: English Grammar - verbs, prepositions\nChapter 2: Lion And Hare",
//       MATH: "Topic: Trigonometry cos\nsine",
//       SCIENCE: "Topic: Photosynthesis\nProject Submission\nDue date",
//       SOCIAL_SCIENCE: "Topic: Water Cycles",
//       HINDI: "Topic: ",
//       LANGUAGE: "Topic: chapter 2 reading",
//       SPORTS: "Topic: ",
//       CIVICS: "Topic: Indian Constitution\nProject Submission\nDue date",
//     },
//     '2024-06-04': {
//       ENGLISH: "Topic: prepositions\nChapter 2: Lion And Hare",
//       MATH: "Topic: cos\nsine",
//       SCIENCE: "Topic: \nProject Submission\nDue date",
//       SOCIAL_SCIENCE: "Topic: Water Cycles",
//       HINDI: "Topic: ",
//       LANGUAGE: "Topic: chapter 2 reading",
//       SPORTS: "Topic: ",
//       CIVICS: "Topic: Indian Constitution\nProject Submission\nDue date",
//     },
//     // ... other dates and schedules


//     '2024-06-05': {
//       ENGLISH: "Topic: English Grammar - verbs",
//       MATH: "Topic: Trigonometry cos\nsine",
//       SCIENCE: "Topic: Project Submission\nDue date",
//       SOCIAL_SCIENCE: "Topic: Water Cycles",
//       HINDI: "Topic: ",
//       LANGUAGE: "Topic: chapter 2 reading",
//       SPORTS: "Topic: ",
//       CIVICS: "Topic: Indian Constitution\nProject Submission\nDue date",
//     },
//     '2024-06-06': {
//       ENGLISH: "Topic: English Grammar - verbs, prepositions\nChapter 2: Lion And Hare",
//       MATH: "Topic: Trigonometry cos\nsine",
//       SCIENCE: "Topic: Photosynthesis\nProject Submission\nDue date",
//       SOCIAL_SCIENCE: "Topic: Water Cycles",
//       HINDI: "Topic: ",
//       LANGUAGE: "Topic: chapter 2 reading",
//       SPORTS: "Topic: ",
//       CIVICS: "Topic: Project Submission\nDue date",
//     },
//     '2024-06-07': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-08': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic:  Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises 123",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-10': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-11': {
//       ENGLISH: "Topic: Reading ",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-12': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 4 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-12': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-13': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-14': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar hindi",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions demo",
//     },
//     '2024-06-17': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-18': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-19': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-20': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-21': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-24': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-25': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 3 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-26': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 4 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-27': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 5 reading",
//       SPORTS: "Topic: Physical Exercises chap3",
//       CIVICS: "Topic: Government Functions demo",
//     },
//     '2024-06-28': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps chap2",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 6 reading",
//       SPORTS: "Topic: Physical Exercises guidance",
//       CIVICS: "Topic: Government Functions",
//     },
//     '2024-06-29': {
//       ENGLISH: "Topic: Reading Comprehension",
//       MATH: "Topic: Algebra geography",
//       SCIENCE: "Topic: Plant Cells",
//       SOCIAL_SCIENCE: "Topic: Geography - Maps",
//       HINDI: "Topic: Grammar",
//       LANGUAGE: "Topic: chapter 7 reading",
//       SPORTS: "Topic: Physical Exercises",
//       CIVICS: "Topic: Government Functions",
//     },

//   };
//   const formattedDate = date.toISOString().split('T')[0];
//   const todaySchedule = schedules[formattedDate] || {};
//   const today = new Date().toLocaleDateString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });

//   return (
//     <div className="p-4">
//       <div className="text-center mb-4">
//         <div className="flex justify-center items-center">

//           <h1 className="text-2xl font-bold mr-2">Today's Classes</h1>
//           <FaCalendarAlt className="text-2xl cursor-pointer " onClick={() => setShowCalendar(!showCalendar)} />
//         </div>
//         <div className="mt-2">
//           <h2 className="text-xl">Today is {today}</h2>
//         </div>
//       </div>
      
//       {showCalendar && (
//         <div className="my-4 flex justify-center">
//           <Calendar onChange={setDate} value={date} className="react-calendar--small " />
//         </div>
//       )}

//       <div className="grid grid-cols-3 gap-4 mt-4 justify-center">
//         {Object.entries(todaySchedule).map(([subject, details]) => (
//           <div key={subject} className="w-80 h-44 px-4 py-6 text-center bg-gradient-to-r from-lime-200 to-lime-400 shadow-lg shadow-lime-800 rounded-2xl">
//             <h1 className='font-bold'>{subject}</h1>
//             <div className="w-72 h-28 p-2 border border-gray-400 bg-lime-200 shadow-lg shadow-lime-700 mt-2 rounded-xl">
//               <h1 className="text-lg">
//                 {details.split('\n').map(line => (
//                   <React.Fragment key={line}>{line}<br /></React.Fragment>
//                 ))}
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DayComponent;

