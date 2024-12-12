import React from 'react'

const StudentCard = ({ name='string' , age= 'number', rollNumber= 'number' , Class='string|number' }) => {
    return (
      
      <div className="bg-white shadow-md rounded-lg p-7 w-full md:w-13 mx-auto mb-6">

        <h1 className="text-xl font-bold mb-2 text-pink-600">{name}</h1>
        
        <p className="text-gray-600">
          Age: {age}
        </p>
        
        <p className="text-gray-600">
          Roll Number: {rollNumber}
        </p>
        
        <p className="text-gray-600">
          Class: {Class}
        </p>
      
      </div>
    );
  };
  
  export default StudentCard;
  