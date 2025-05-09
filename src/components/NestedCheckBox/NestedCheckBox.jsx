import React from 'react'
import { useState } from 'react'
import CheckBox from './CheckBox'
import { data as info } from './constant'

const NestedCheckBox = () => {
const [data,setData]=useState(info)

  return (
    <div className='mt-10 ml-10'>
      {
        Object.keys(data).map((key,ind)=>data[key].pid==null&&
        <CheckBox key={ind} id={key} data={data} setData={setData}/>
        )
      }
    </div>
  )
}

export default NestedCheckBox