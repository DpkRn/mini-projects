import { useState } from "react"
import Grid from "./Grid"

function ColumnTable() {
  const [dimension,setDimenstion]=useState({row:2,col:2})

  

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-[100px]">
      <div className="rangeContainer flex">
        <input type="range" max="7" min='2' value={dimension.row} onChange={(e)=>{
            setDimenstion(prev=>({...prev,row:parseInt(e.target.value)}));
        }}/>
        <span>{dimension.row}</span>
        <div className="box w-[40px]"></div>
        <input type="range" max="7" min='2' value={dimension.col} onChange={(e)=>{
           setDimenstion(prev=>({...prev,col:parseInt(e.target.value)}));
        }} />
        <span>{dimension.col}</span>
      </div>


       <Grid dimenstion={dimension}/>
    </div>
  )
}

export default ColumnTable
