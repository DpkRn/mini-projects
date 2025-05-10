import React, { useEffect, useState } from 'react'
import { convertToDigitArray } from './constant'

const Digit = ({number=null}) => {
  console.log(number)
    const [digit,setDigit]=useState([true,false,false,true,false,false,false])
    useEffect(()=>{
       setDigit(convertToDigitArray(number)) 
    },[number])
  return (
    <div className="flex h-max w-max">
    <div className="py-4 flex flex-col">
      <div className={`h-[150px] w-[30px] bg-red-500 rounded-[70%] ${digit[0]?"opacity-100":"opacity-15"} `}></div>
      <div className={`h-[150px] w-[30px] bg-red-500 rounded-[70%] ${digit[1]?"opacity-100":"opacity-15"}`}></div>
    </div>
    <div className="flex flex-col justify-between">
      <div className={`h-[30px] w-[100px] bg-red-500 rounded-[70%] left-[10px] ${digit[2]?"opacity-100":"opacity-15"}`}></div>
      <div className={`h-[30px] w-[100px] bg-red-500 rounded-[70%] left-[10px] ${digit[3]?"opacity-100":"opacity-15"}`}></div>
      <div className={`h-[30px] w-[100px] bg-red-500 rounded-[70%] left-[10px] ${digit[4]?"opacity-100":"opacity-15"}`}></div>
    </div>
    
      <div className="py-4 flex flex-col">
        <div className={`h-[150px] w-[30px] bg-red-500 rounded-[70%] ${digit[5]?"opacity-100":"opacity-15"}`}></div>
        <div className={`h-[150px] w-[30px] bg-red-500 rounded-[70%] ${digit[6]?"opacity-100":"opacity-15"}`}></div>
      </div>
    
  </div>
  )
}

export default Digit