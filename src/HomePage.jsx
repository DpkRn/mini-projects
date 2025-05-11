import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';




const HomePage = ({challanges}) => {
  const [filterText,setFilterText]=useState('all')
  const [searchText,setSearchText]=useState('')
  const [filteredComponent,setFilteredComponent]=useState(challanges)
  
  const navigate = useNavigate();


  


  const handleFilter=(e)=>{
    const text=e.target.value
    setSearchText('')
    setFilterText(text);
    console.log(filterText)
    const filtered=text=='all'?challanges:challanges.filter((component)=>component.category==text)
    setFilteredComponent(filtered)
  }

  const handleSearch=(e)=>{
    setFilterText('all')
    const text=e.target.value 
    setSearchText(text);
    const filtered=challanges.filter((component)=>component.title.toLowerCase().includes(text.toLowerCase()))
    console.log(filtered)
    setFilteredComponent(filtered)
  }




  return (
   <div className='flex items-center flex-col w-screen p-5 gap-10'>
    <div className='w-full flex justify-around'>
     <div className='search flex gap-2 items-center'>
      <label htmlFor="search">Search By Name</label>
      <input type="text" id="Search" placeholder='Enter Project Name' className='border h-[30px] p-2 rounded' value={searchText} onChange={(e)=>handleSearch(e)} />
     </div>
     <div className='filter'>
      <select className='border p-1 rounded' value={filterText} onChange={(e)=>handleFilter(e)}>
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
     </div>
    </div>
     <div className=" flex flex-wrap gap-5  w-[90%]" >
        {filteredComponent.map((component, ind) => (
          <div
          key={ind}
            className="w-[250px] h-[150px] relative border bg-white/80 rounded-xl shadow-md shadow-gray-400 flex flex-col justify-start items-start hover:border-white font-bold pl-16 pt-12 hover:scale-[1.1] duration-500"
            onClick={() => navigate(`/${component.title}`)}
          >
            <h1>{component.title}</h1>
            <div className='flex items-center gap-1 absolute bottom-4 right-4'> 
              <div className={`${component.category==='hard'?"bg-red-500":"bg-green-500"} w-4 h-4 rounded-full`}></div>
              <h2 className=''>{component.category}</h2>
            </div>
          </div>
        ))}
      </div>
   </div>
  )
}

export default HomePage