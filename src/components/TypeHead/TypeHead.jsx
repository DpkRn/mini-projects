import React, { useRef, useState } from 'react'
import { country } from './constant';

const TypeHead = () => {
  const [text,setText]=useState('');
  const [filteredCountry,setFilteredCountry]=useState([])
  const [count,setCount]=useState(-1);
  const [initial,setInitial]=useState('');
  const [cross,setCross]=useState(false);


  const handleChange=(e)=>{
    const keyword=e.target.value;
    
    setText(keyword);
    setInitial(keyword);
    if(keyword.length>0){
      setCross(true)
    }else{
      setCross(false)
    }
    setCount(-1);
    let temp=keyword==''?[]:country.filter(item=>item.toLowerCase().includes(keyword.toLowerCase())).slice(0,5)
    setFilteredCountry(temp);
  }

  const handleKeyUp=(e)=>{
    const key=e.key;
    
    let prev=count;
    if(key==='ArrowDown'){
      prev=prev+1
      if(prev>=filteredCountry.length){
        prev=-1;
      }

      setCount(prev)
      
    }else if(key==='ArrowUp'){
       prev=prev-1
      if(prev==-2){
        prev=filteredCountry.length-1;
      }
      setCount(prev)
    }
    if(prev==-1){
      setText(initial);
    }else{
      setText(filteredCountry[prev]);
    }
    
  }

  const handleCancel=()=>{
    setText('');
    setCount(-1);
    setFilteredCountry([])
  }

  return (
    <div className='border-solid  border-2 mx-auto mt-20 w-[60%] p-4 font-bold'>
      <span>press arrow up and arrow down to traverse</span>
      <div className='border-2 border-solid w-full flex focus-within:outline-1 rounded-sm items-center px-4'>
      <input type="text" value={text} placeholder='Search for Country' className='boarder-none outline-none w-full  py-1 ' onChange={(e)=>handleChange(e)} onKeyUp={(e)=>handleKeyUp(e)} /> 
      {cross&&<span onClick={()=>handleCancel()}>x</span>}
      </div>
      <div className='mt-2 flex flex-col gap-1'>
        {
          filteredCountry.map((item,ind)=>
          <div key={ind} className={`p-2 bg-amber-100 px-4 hover:bg-amber-200 hover:border-2 hover:border-solid font-medium ${count==ind?"border-2 border-solid":""}`}>
            {item}
          </div>
          )
        }
      </div>
    </div>
  )
}

export default TypeHead