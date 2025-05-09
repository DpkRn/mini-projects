import React from 'react'

const Grid = ({dimenstion}) => {
    console.log(dimenstion)
    let cnt=0;
  return (
    <div className="gridContainer flex">
        {
            Array.from({length:dimenstion.col}).map((_,i)=><div className={`column flex ${i%2==0?"flex-col":"flex-col-reverse"}`} key={i}>
                {Array.from({length:dimenstion.row}).map((_,j)=><div className='cell w-[50px] h-[50px] border-2 border-solid grid place-content-center' key={`${i}${j}`}><p>{cnt++}</p></div>)}
            </div>)
        }
    </div>
  )
}

export default Grid