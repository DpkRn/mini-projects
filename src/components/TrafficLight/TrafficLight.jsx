import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const TrafficLight = () => {
  const [time, setTime] = useState(0);
  const [lights, setLights] = useState(["red", "yellow", "green"]);
  const [turn, setTurn] = useState(0);

  function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  useEffect(() => {
    const startTraffic=async()=>{
      
      while(true){
        let cnt=5;
        setTime(cnt);
        setTurn(0);
        while(cnt>=0){
          await delay(1000);
          cnt--;
          setTime(cnt);
        }

        cnt=3;
        setTime(cnt);
        setTurn(2);
        while(cnt>=0){
          await delay(1000);
          cnt--;
          setTime(cnt);
        }

        cnt=2;
        setTime(cnt);
        setTurn(1);
        while(cnt>=0){
          await delay(1000);
          cnt--;
          setTime(cnt);
        }
      }
    }
    startTraffic()
  }, []);

  return (
    <div>
      <div className="w-max mx-auto mt-20 flex flex-col p-5 gap-4 bg-black rounded-3xl">
        {lights.map((color, ind) => {
          const background={
            background:ind==turn?color:'gray'
          }
          return (
            <div key={ind}
              className={`rounded-full border-2 border-solid w-20 h-20`}
              style={background}
            ></div>
          );
        })}
      </div>
      <p className="w-full text-lg font-bold text-center mt-4">{time}</p>
      <p className="w-full text-lg font-bold text-center">seconds</p>
    </div>
  );
};

export default TrafficLight;
