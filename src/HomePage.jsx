import React from 'react'
import { useNavigate } from 'react-router-dom';


const HomePage = ({challanges}) => {
     const navigate = useNavigate();
  return (
    <div className=" flex flex-wrap gap-5  items-center justify-start mt-10 p-10">
        {challanges.map((item, ind) => (
          <div
          key={ind}
            className="w-[250px] h-[150px] border rounded-xl shadow-md shadow-gray-400 flex justify-center items-center hover:border-white font-bold"
            onClick={() => navigate(`/${item}`)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
  )
}

export default HomePage