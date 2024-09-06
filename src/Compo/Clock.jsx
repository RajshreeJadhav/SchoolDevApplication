import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

  return (
    <div className="flex justify-center items-center">
      <div className="clock bg-white w-24 h-24 rounded-full relative flex items-center justify-center shadow-lg">
        {/* Hour Hand */}
        <div
          className="hour-hand bg-black absolute transform origin-bottom"
          style={{
            width: "2px",     // Adjusted width
            height: "20px",   // Adjusted height
            bottom: "50%",
            transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)`,
            transformOrigin: "bottom center"
          }}
        />
        {/* Minute Hand */}
        <div
          className="min-hand bg-black absolute transform origin-bottom"
          style={{
            width: "2px",     // Adjusted width
            height: "30px",   // Adjusted height
            bottom: "50%",
            transform: `rotate(${minutes * 6}deg)`,
            transformOrigin: "bottom center"
          }}
        />
        {/* Second Hand */}
        <div
          className="sec-hand bg-red-500 absolute transform origin-bottom"
          style={{
            width: "2px",     // Adjusted width
            height: "35px",   // Adjusted height
            bottom: "50%",
            transform: `rotate(${seconds * 6}deg)`,
            transformOrigin: "bottom center"
          }}
        />
        {/* Clock Center */}
        <div className="absolute w-2 h-2 bg-black rounded-full" />
        {/* Clock Numbers with Roman Numerals */}
        {romanNumerals.map((num, index) => {
          const angle = (index + 1) * 30;
          const xPos = Math.sin(angle * (Math.PI / 180)) * 40; // Adjusted distance
          const yPos = Math.cos(angle * (Math.PI / 180)) * -40; // Adjusted distance

          return (
            <span
              key={index}
              className="clock-number absolute font-bold text-sm"
              style={{
                left: `calc(50% + ${xPos}px)`,
                top: `calc(50% + ${yPos}px)`,
                transform: `translate(-50%, -50%)`
              }}
            >
              {num}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Clock;
