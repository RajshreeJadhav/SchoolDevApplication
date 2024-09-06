import React from 'react';

const MyComponent = () => {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
        
      >
        Add Event
      </button>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2" 
      >
        Remove
      </button>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </button>
    </div>
  );
};

export default MyComponent;
