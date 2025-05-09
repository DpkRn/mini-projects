import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { checkWinnings } from './constants';

const TicTacToy = () => {
 const [tictac,setTicTac]=useState(Array.from({length:9}));
 const [status,setStatus]=useState("playing");
 const [draws,setDraws]=useState({
  X:0,
  0:0,
  draws:0
 })
 const countRef=useRef(0)

 const handleClick=(ind)=>{

  if(countRef.current>9){
    alert('please reset game first')
  }
  
   const prev=[...tictac];
   if(prev[ind]) return ;
   let turn='X';

   if(countRef.current%2==1){
    turn='0'
   }

   prev[ind]=turn

   if(checkWinnings(prev)){
    setDraws({...draws,[turn]:draws[turn]+1})
    setStatus(`Winner: ${turn} `)
   }

   countRef.current+=1
   if(countRef.current==9&&status=='playing'){
      setDraws({...draws,draws:draws.draws+1})
   }
   setTicTac(prev);
 }



 const reset=()=>{
  setTicTac(Array.from({length:9}))
  countRef.current=0;
 }
 
  return (
    <div className='w-max mx-auto my-20 font-bold text-xl '>
     <div className='shadow-md shadow-gray-500 p-10 rounded bg-black text-white'>
     <div className=''> <span>Status:</span><span>{status}</span></div>
      <div className='grid grid-rows-2 grid-cols-3 grid-flow-col gap-x-4 mt-10'>
        <span>X Wins</span> <span>{draws['X']}</span>
        <span>Y Wins</span> <span>{draws['0']}</span>
        <span>Draws</span> <span>{draws['draws']}</span>
      </div>
     </div>
    <div className=' grid grid-rows-3 grid-cols-3 w-max mt-10 shadow-black shadow-2xl gap-1 p-1 border-2 border-amber-700 border-dashed'>
      {tictac.map((cell,ind)=>
      <div className='cell w-[100px] h-[100px] border-2 border-solid  text-4xl font-[900] grid place-content-center' key={ind} onClick={()=>handleClick(ind)}>{cell?cell:""}</div>
      )}
    </div>
    <button className='px-2 py-2 rounded-md bg-blue-500 mt-5 text-white shadow-2xl shadow-black' onClick={()=>reset()}>Reset</button>
    </div>
  )
}

export default TicTacToy