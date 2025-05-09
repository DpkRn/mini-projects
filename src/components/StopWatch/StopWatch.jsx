

import React, { useState, useRef } from 'react';

const StopWatch = () => {
  const [input,setInput]=useState('')
  const [time,setTime]=useState(0)
  const idRef=useRef(null)


  const getFormate=(ms)=>{

    return new Date(ms).toISOString().substr(11,12)
    // let totalSeconds=parseInt(ms/1000)%60;
    // let totalMinutes=parseInt(ms/(1000*60))%60;
    // let totalHours=parseInt(ms/(1000*60*60))%12;
    // let mili=ms%1000;
    // return `${totalHours.toString().padStart(2,'0')}:${totalMinutes.toString().padStart(2,'0')}:${totalSeconds.toString().padStart(2,'0')}:${mili.toString().padStart(3,'0')}`
  }



  const handleStart=()=>{
    if(idRef.current) return ;
    idRef.current=setInterval(()=>{
      setTime(prev=>prev+10)
    },10)
    
  }

  const handleStop=()=>{
    if(idRef.current)
    {
      clearInterval(idRef.current)
      setTime(prev=>{
        //to render the webpage so that stop color becomes desabled
        let x=prev+10;
        return x;
      })
      idRef.current=null
    }
  }

  const handleReset=()=>{
    clearInterval(idRef.current)
      idRef.current=null
    setTime(0)
  }



  return (
    <div className="text-center w-[300px] h-[300px] mt-8 border mx-auto p-2 rounded-full bg-gray-300 flex flex-col justify-center items-center ">
      <h2 className="text-xl font-bold">Stopwatch</h2>
      <p className="text-3xl">{getFormate(time)}</p>
      <input
        type="number"
        className='border p-2 outline-none'
        min="1"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="space-x-2 mt-2">
        <button className={`px-4 py-2  rounded-md ${idRef.current?"bg-gray-500":"bg-blue-400"}`}  onClick={()=>handleStart()}>Start</button>
        <button className={`px-4 py-2  rounded-md ${idRef.current==null?"bg-gray-500":"bg-blue-400"}`} onClick={()=>handleStop()} >Stop</button>
        <button className={`px-4 py-2  rounded-md bg-blue-400`} onClick={()=>handleReset()} >Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
