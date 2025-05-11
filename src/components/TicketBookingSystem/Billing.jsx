import React, { useEffect, useState } from "react";

const Billing = ({ seats,handleNext }) => {
 

  return (
   <div className="w-max mx-auto mt-10 p-10 border rounded-2xl shadow-md shadow-gray-600">
 <div className="inline-grid grid-cols-2 grid-rows-2 gap-4 justify-items-center ">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold">Total:</p>
        <span>{Object.keys(seats).length}</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold">Selected seats</p>
        <span>{Object.keys(seats).map(key=>key).toString()}</span>
        <div></div>
      </div>
      <button className="border bg-amber-600 rounded w-max px-4 py-1 h-fit" onClick={()=>handleNext(prev=>!prev)}>Modify</button>
      <button className="bg-blue-400 rounded px-4 py-1 h-fit w-max" onClick={()=>alert("booked!")}>Book</button>
    </div>
   </div>
  );
};

export default Billing;
