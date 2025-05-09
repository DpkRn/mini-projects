import React from 'react'
import { useState } from 'react'

const OtpInput = () => {
  const [otp,setOtp]=useState(Array.from({length:6}))
  


  const handleKeyUp=(e,ind)=>{
    const key=e.key;
    if(!isNaN(key)){
    const temp=[...otp];
    temp[ind]=key
    setOtp(temp)
    e.target.nextSibling?.focus();
    }
     
    if(key=='ArrowLeft'){
      e.target.previousSibling?.focus()
    }else if(key=='ArrowRight'){
      e.target.nextSibling?.focus()
    }

    if(key=='Backspace'){
      const temp=[...otp];
    temp[ind]=''
    setOtp(temp)
    e.target.previousSibling?.focus();
    }
    
  }



  const shift=(e,dir)=>{
    if(dir=="right"){
      
    }else if(dir=='left'){
      
    }
  }


  return (
    <div className='mx-auto w-[60%] flex justify-center gap-2  h-100 mt-40 text-xl font-bold'>
      {otp.map((ele,ind)=>
        <input key={ind} type='text'  maxLength="1" className='w-[50px] h-[50px] border-b-2 border-solid px-4 outline-none ' value={otp[ind]?otp[ind]:""}  onKeyDown={(e)=>handleKeyDown(e)} onKeyUp={(e)=>handleKeyUp(e,ind)}/>
      )}
    </div>
  )
}

export default OtpInput;