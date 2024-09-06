import React from 'react';

const Annotate = () => {
  const data = [
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'],
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3'],
    ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4']
  ];

  return (
    <div className="container mx-auto my-5 p-8">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="h-20">
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border-2 border-red-300 px-2 py-2 text-left align-top w-20"> {/* Adjusted padding and width */}
                  <div className="border border-black p-0.5 inline-block"> {/* Reduced padding inside the div */}
                    {cell}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Annotate;
