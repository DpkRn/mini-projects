import React, { useEffect, useRef, useState } from "react";
import Digit from "./Digit";
import Circle from "./Circle";

const View = () => {
  const [time, setTime] = useState(['8','8','8','8','8','8']);
  const idRef = useRef();
  console.log(time)
  useEffect(() => {
    const current = Date.now();
    idRef.current = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString({hours12:true}).substr(0, 8);
      setTime([timeString[0],timeString[1],timeString[3],timeString[4],timeString[6],timeString[7]]);
    }, 1000);
    return () => clearInterval(idRef.current);
  }, []);


  
  return (
    <div className={`w-max h-max flex gap-4`}>
     <Digit number={time[0]}/>
     <Digit  number={time[1]}/>
     <Circle/>
     <Digit number={time[2]}/>
     <Digit number={time[3]}/>
     <Circle/>
     <Digit number={time[4]}/>
     <Digit number={time[5]}/>

    </div>
  );
};

export default View;
