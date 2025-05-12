import React, { useState } from 'react'

const DragDropPuzzle = () => {
    const [puzzle,setPuzzle]=useState(Array.from({length:15}).map((item,ind)=>ind+1))
  return (
    <div className='w-max mx-auto flex flex-col items-center mt-10'>
        <h1>Click on the Box to move and sort row wise</h1>
        <div className='grid grid-cols-4 gap-1 mt-5 '>
        {
            puzzle.map((item,ind)=>
            <div className='flex justify-center items-center border  w-[100px] h-[100px] bg-white shadow-green-500 shadow-md font-bold '>
                {item}
            </div>
            )
        }
        </div>

    </div>
  )
}

export default DragDropPuzzle