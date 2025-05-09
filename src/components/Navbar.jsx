import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="h-[60px] w-full shadow-md flex items-center pl-20 ">
        <button className="hover:border rounded p-2" onClick={()=>navigate(-1)}>Back</button>
      </div>
    </>
  );
};

export default Navbar;
