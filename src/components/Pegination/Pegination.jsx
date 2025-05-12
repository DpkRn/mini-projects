import React, { useEffect, useState } from 'react'
import {data} from './Data'

const Pegination = () => {
    const [page,setPage]=useState(0);
    // const [data,setData]=useState(data)

    useEffect(()=>{
        const total=data.length;
        if(data.length-page<10){

        }
        
    },[page])
    
  return (
    <div className='w-[60%]  mt-10 mx-auto'>
        <div className='controller flex  items-center justify-around text-white'>
            <div className='flex-1/3 flex justify-center'>
            <button className='px-2 py-1 rounded bg-gray-500 w-max  ' disabled={page<=10} onClick={()=>setPage(prev=>prev-10)}>Previous</button>
            </div>
            <span className='text-black flex-1/3 flex justify-center'>{`Page ${page/10} of ${Math.floor((data.length)/10)}`}</span>
            <div className='flex-1/3 flex justify-center'>
            <button className='px-2 py-1 rounded bg-gray-500 w-max ' disabled={data.length-page<10} onClick={()=>setPage(prev=>prev+10)}>Next</button>
            </div>
        </div>
        <div className='heading flex justify-around  font-bold text-lg text-black mt-4 '>
                <div className='flex-1/3 border flex justify-center'>
                    #
                </div>
                <div className='flex-1/3 border flex justify-center'>
                    Food
                </div>
                <div className='flex-1/3 border flex justify-center'>
                    Price
                </div>
        </div>
        <div className=''>
            {
                data.slice(page,page+10).map((item,ind)=>
                <div key={ind} className='flex items-center justify-around w-full'>
                    <div className='flex-1/3 border flex justify-center p-2'>{item.id}</div>
                    <div className='flex-1/3 border flex justify-center p-2'>{item.name}</div>
                    <div className='flex-1/3 border flex justify-center p-2'>{item.price}</div>
                </div>
                )
            }
        </div>

    </div>
  )
}

export default Pegination