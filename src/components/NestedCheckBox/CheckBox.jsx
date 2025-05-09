import React from 'react'

const CheckBox = ({id,data,setData}) => {
    const row=data[id];

    const handleChange=(id)=>{
        const temp=JSON.parse(JSON.stringify(data));
        
    }

  return (
    <div className='flex flex-col'>
        <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="" checked={row.checked} onChange={()=>handleChange(id)}/> <span>{id}</span>
        </div>
        <div className='children ml-5'>
            {
                row.children.length!==0&&row.children.map((key,ind)=>
                    <CheckBox key={ind} id={key} data={data} setData={setData}/>
                )
            }
        </div>
    </div>
  )
}

export default CheckBox