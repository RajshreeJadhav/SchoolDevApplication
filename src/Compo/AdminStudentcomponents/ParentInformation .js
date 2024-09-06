import React from 'react'

const ParentInformation = () => {
  return (
    <div className="p-2 max-w-4xl mx-auto">
  <h1 className="text-xl md:text-2xl font-bold mb-4">Enter Parent Information</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className='font-semibold text-sm md:text-base'>Mother Name</label>
      <input className="border p-2 w-full text-sm md:text-base" type="text" placeholder="Enter Mother Name" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>Father Name</label>
      <input className="border p-2 w-full text-sm md:text-base" type="text" placeholder="Enter Father Name" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>DOB Of Mother :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="date" placeholder="Enter DOB Of Mother" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>DOB Of Father :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="date" placeholder="Enter DOB Of Father" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>Contact No Of Mother :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="text" placeholder="Enter Contact No Of Mother " />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>Contact No Of Father :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="number" placeholder="" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>Adhar Card No(Mother) :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="number" placeholder="Enter Contact No Of Father" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>Adhar Card No(Father) :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="number" placeholder="Enter Adhar Card No(Father)" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>Address :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="text" placeholder="Enter your Address" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>State :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="text" placeholder="Enter your State" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>City :</label>
      <input className="border p-2 w-full text-sm md:text-base" type="text" placeholder="Enter your City" />
    </div>
    <div>
      <label className='font-semibold text-sm md:text-base'>Zip Code:</label>
      <input className="border p-2 w-full text-sm md:text-base" type="number" placeholder="Enter Zip-code" />
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

  )
}

export default ParentInformation

