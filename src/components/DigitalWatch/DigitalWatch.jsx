import React, { useEffect, useRef, useState } from 'react'

const DigitalWatch = () => {

    const [time,setTime]=useState('')
    const idRef=useRef();

    useEffect(()=>{
        const current=Date.now();
        idRef.current=setInterval(()=>{
            const now=new Date();
            const timeString=now.toTimeString().substr(0,8);
            console.log(timeString)
            setTime(timeString);

        },1000)

        return ()=>clearInterval(idRef.current)
    },[])
  return (
    <div className='h-[350px] w-full bg-black flex justify-center items-center mt-10 relative'>
        <p className='h-full w-full text-red-500 bodoni-moda text-[300px] flex justify-center items-center opacity-20 absolute top-0 left-0'>88:88:88</p>
        <p className='h-full w-full text-red-500 bodoni-moda text-[300px] flex justify-center items-center '>{time}</p>
    </div>
  )
}

export default DigitalWatch