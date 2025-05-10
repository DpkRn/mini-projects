import React, { useEffect, useRef, useState } from "react";
import Digit from "./Digit";
import Circle from "./Circle";

const View = () => {
  const [time, setTime] = useState(["8", "8", "8", "8", "8", "8"]);
  const idRef = useRef();
  useEffect(() => {
    idRef.current = setInterval(() => {
      const now = new Date();
      const timeString = now
        .toLocaleTimeString("en-US", { hour12: false })
        .padStart(8, "0");
      const [hh, mm, ss] = timeString.split(":");
      setTime([...hh, ...mm, ...ss]);
    }, 1000);

    return () => clearInterval(idRef.current);
  }, []);

  console.log(time);

  return (
    <div className={`w-max h-max flex gap-4`}>
      <Digit number={time[0]} />
      <Digit number={time[1]} />
      <Circle />
      <Digit number={time[2]} />
      <Digit number={time[3]} />
      <Circle />
      <Digit number={time[4]} />
      <Digit number={time[5]} />
    </div>
  );
};

export default View;
