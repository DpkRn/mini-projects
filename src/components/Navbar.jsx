import React from "react";
import img from '../assets/back.jpg'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="h-[60px] w-full shadow-lg shadow-black flex items-center px-30  justify-between">
        <button className="hover:border rounded px-2  border transform duration-500 hover:scale-[1.2] shadow" onClick={()=>navigate(-1)}>Back</button>
        <h1 className="font-bold">Mini-Projects on React</h1>
       <div className="w-[40px] h-[40px] border rounded-full relative perspective-[1000px] duration-500">
  <div className="w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:scale-[1.5] relative hover:rotate-y-180">
    

    <img
      src="https://placehold.co/40x40/png"
      alt=""
      className="w-full h-full rounded-full object-cover absolute backface-hidden  "
    />
    <img
      src={img}
      alt=""
      className="w-full h-full rounded-full object-cover absolute backface-hidden duration-500 hover:rotate-y-180 "
    />

  </div>
</div>

      </div>
    </>
  );
};

export default Navbar;
