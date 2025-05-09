import React, { useState } from 'react'

const Container = ({items,onClick}) => {
    console.log("rendered container.jsx")
   

  return (
    <div className='w-[30%] flex flex-col gap-6'>
        {items.map((item,ind)=>(<div className='flex gap-4' key={ind}>
            <input type="checkbox" checked={item.checked} onChange={()=>{        
                onClick(prev=>{
                    
                        return prev.map((item,i)=>{
                        if(i==ind){
                            return {text:item.text,checked:!item.checked};
                        }
                        return item;
                    });
                    
                });
            }}/>
            {item.text}
            </div>))}
    </div>
  )
}

export default Container