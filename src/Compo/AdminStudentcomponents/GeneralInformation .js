import React from 'react'

const GeneralInformation = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Enter General Student Information</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label>Email:</label>
                        <input className="border p-2 w-full" type="email" placeholder="Rs@xyz.com" />
                    </div>
                    <div>
                        <label>Date of Joining:</label>
                        <input className="border p-2 w-full" type="date" />
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input className="border p-2 w-full" type="text" placeholder="Ramesh" />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input className="border p-2 w-full" type="text" />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input className="border p-2 w-full" type="text" placeholder="Ramesh" />
                    </div>
                    <div>
                        <label>City:</label>
                        <input className="border p-2 w-full" type="text" />
                    </div>
                    <div>
                        <label>Student ID:</label>
                        <input className="border p-2 w-full" type="text" placeholder="RS12342024" />
                    </div>
                    <div>
                        <label>State:</label>
                        <input className="border p-2 w-full" type="text" />
                    </div>
                    <div>
                        <label>Date of Birth:</label>
                        <input className="border p-2 w-full" type="date" />
                    </div>
                    <div>
                        <label>Zip Code:</label>
                        <input className="border p-2 w-full" type="text" />
                    </div>
                    <div>
                        <label>System Generated User ID:</label>
                        <input className="border p-2 w-full" type="text" placeholder="sixndj123" />
                    </div>
                    <div>
                        <label>Contact No:</label>
                        <input className="border p-2 w-full" type="text" />
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg">
                        EDIT
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                        SAVE
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                        NEXT
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
                        CLOSE
                    </button>
                </div>

            </div>
        </div>
    )
}

export default GeneralInformation 
