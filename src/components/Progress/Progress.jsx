
import { useRef } from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react';

function Progress() {
  const progressRef=useRef(null)
  const [width,setWidth]=useState('0');
  const [running,setRunning]=useState(false);
  const idRef=useRef(null);

  useEffect(()=>{
      if(running){
        idRef.current=setInterval(()=>{
            setWidth(prev=>parseInt(prev)+1);
        },100)
      }else{
        clearInterval(idRef.current);
      }
      return ()=>clearInterval(idRef.current);
  },[running])





  return (
    <>
     <div className="container">
      <div className="progressContainer">
        <div className="progress" style={{width:`${width}%`}}></div>
      </div>
      <div className="buttons">
        <button className="start" onClick={(e)=>{
          setRunning(true)
        }} disabled={running}>start</button>
        <button className="stop" onClick={()=>{
          setRunning(false)
        }} disabled={!running}>stop</button>
        <button className="reset" onClick={()=>{
          setRunning(false);
          setWidth('0');
        }}>reset</button>
      </div>
     </div>
    </>
  )
}

export default Progress
