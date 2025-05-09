import React, { useState } from 'react'

const Chess = () => {
const [curr,setCurr]=useState(null);
console.log(curr)
  return (
    <div  className="wrapper mx-auto p-10  w-max">
        <div className="board mx-auto grid grid-cols-[repeat(8,60px)] grid-rows-[repeat(8,60px)] place-content-center w-max drop-shadow-white drop-shadow-lg shadow-[0px_0px_20px_5px] mt-4"  >
            {Array.from({length:8}).map((_,row)=>Array.from({length:8}).map((_,col)=>
                <div key={`${row}${col}`} className={`cell w-full h-full ${((curr!=null)&&((curr.row+curr.col)==(row+col)||(curr.row-curr.col)==(row-col)))?"bg-red-600":(row+col)%2==0?"bg-white":"bg-black"}`} data-row={row} data-col={col} onClick={()=>setCurr({row:row,col:col})}></div>
            ))}
        </div>
    </div>
  )
}

export default Chess