import React, { useState } from 'react'

const Circle = () => {
  const [n,setN]=useState('1');
  const [color,setColor]=useState(['#ff0000', '#B7FF00FF', '#5900FFFF', '#000000FF', '#FFF200FF',
    '#00C8FFFF', '#B300FFFF', '#00FF66FF', '#003CFFFF', '#ff8800']
   )
   
 
  return (
    <div className='flex flex-col justify-center items-center mt-5 '>
      <input type="text" value={n} className='h-5  border outline-none p-2' onChange={(e)=>setN(e.target.value)} />
      <div className='w-[800px] border-red-300 border-solid border-4 shadow-2xl shadow-black h-[800px] relative bg-gray-400 flex justify-center items-center mt-1'>
      {Array.from({length:parseInt(n)}).map((_,ind)=>{
        let d=800/(parseInt(n));
        const style={
          height:`${800-(ind)*d}px`,
          width:`${800-(ind)*d}px`,
          border:`1px solid ${color[Math.floor(Math.random()*9)]}`
        }
        return (
          <div className={` rounded-full absolute`} style={style}></div>
        )
      }
      )}
    </div>
    </div>
  )
}

export default Circle