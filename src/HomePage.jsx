import React from 'react'
import { useNavigate } from 'react-router-dom';


const HomePage = ({challanges}) => {
     const navigate = useNavigate();
  return (
    <div className=" flex flex-wrap gap-5  items-center justify-start mt-10 p-10">
        {challanges.map((component, ind) => (
          <div
          key={ind}
            className="w-[250px] h-[150px] border rounded-xl shadow-md shadow-gray-400 flex flex-col justify-start items-start hover:border-white font-bold pl-16 pt-12"
            onClick={() => navigate(`/${component.title}`)}
          >
            <h1>{component.title}</h1>
            <div className='flex items-center gap-1'> 
              <div className={`${component.category==='hard'?"bg-red-500":"bg-green-500"} w-4 h-4 rounded-full`}></div>
              <h2>{component.category}</h2>
            </div>
          </div>
        ))}
      </div>
  )
}

export default HomePage