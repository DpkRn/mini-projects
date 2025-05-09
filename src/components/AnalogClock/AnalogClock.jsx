import React, { useEffect, useRef, useState } from 'react';
import back from './back.jpg';

const AnalogClock = () => {
  const [time, setTime] = useState([0, 0, 0]);
  const idRef = useRef(null);

  const style = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    const getTime = () => {
      idRef.current = setInterval(() => {
        const now = new Date();
        setTime([now.getHours(), now.getMinutes(), now.getSeconds()]);
      }, 1000);
    };

    getTime();

    return () => clearInterval(idRef.current); 
  }, []);

  const secondDeg = time[2]*6;
//   const minuteDeg=  time[1]*6
  const minuteDeg = time[1] * 6 + time[2] * 0.1;
  const hourDeg = (time[0] % 12) * 30 + time[1] * 0.5;

  return (
    <div className='flex justify-center mt-20'>
      <div className='relative border p-2 rounded-full'>
        {/* Second Hand */}
        <div
          className='absolute h-[280px] w-[2px] bg-black z-10'
          style={{
            transform: `rotate(${secondDeg}deg)`,
            transformOrigin: '1px 230px',
            top: '80px',
            left: '306px', 
          }}
        ></div>
        {/* minute hand */}
        <div
          className='absolute h-[230px] w-[6px] bg-black z-10 transition-all duration-1000 rounded-md'
          style={{
            transform: `rotate(${minuteDeg}deg)`,
            transformOrigin: '2px 180px',
            top: '130px',
            left: '306px', 
          }}
        ></div>
        {/* hour hand */}
        <div
          className='absolute h-[180px] w-[10px] bg-black z-10 rounded-md'
          style={{
            transform: `rotate(${hourDeg}deg)`,
            transformOrigin: '4px 125px',
            top: '180px',
            left: '306px', 
          }}
        ></div>



        {/* Clock Face */}
        <div
          className='h-[600px] w-[600px] rounded-full border-8 border-solid flex justify-center items-center relative'
          style={style}
        >
          {/* Center Dot */}
          <div className='w-[25px] h-[25px] bg-black rounded-full absolute z-20'></div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
