import React, { useState, useRef, useEffect } from 'react';

const StopwatchWithMs = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 10); // 10 ms steps
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // 🕒 Format mm:ss:ms
  const formatTime = (ms) => {
    // const minutes = Math.floor(ms / 60000);
    // const seconds = Math.floor((ms % 60000) / 1000);
    // const milliseconds = (ms % 1000) / 10;

    // return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds.toFixed(0)).padStart(2, '0')}`;
    return new Date(ms).toISOString().substr(14,8)
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-bold">Stopwatch (ms)</h2>
      <p className="text-3xl">{formatTime(time)}</p>
      <div className="space-x-2 flex mx-auto w-full justify-around text-black ">
        <button className='btnPrimary focus:bg-purple-400' onClick={() => setIsRunning(true)}>Start</button>
        <button className='btnPrimary focus:bg-purple-400'  onClick={() => setIsRunning(false)}>Pause</button>
        <button className='btnPrimary focus:bg-purple-400'  onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default StopwatchWithMs;
