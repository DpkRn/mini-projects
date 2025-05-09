import  Container  from './Container.jsx'
import React, { useEffect, useState } from 'react'

const TransferList = () => {
    const [list1,setList1]=useState([{text:'java',checked:false},{text:'mysql',checked:false},{text:'c++',checked:false},{text:'python',checked:false}]);
    const [list2,setList2]=useState([{text:'html',checked:false},{text:'css',checked:false},{text:'react',checked:false},{text:'next',checked:false}]);
    const [disabled,setDisabled]=useState({b1:false,b2:false,b3:false,b4:false})

    const handleRightAll=()=>{
        setList2(item=>[...item,...list1]);
        setList1([]);
    }


    const handleLeftAll=()=>{
        setList1(item=>[...item,...list2]);
        setList2([]);
    }

    const handleLeft=()=>{
        setList2(list2.filter(obj=>{
            if(obj.checked)
            setList1(prev=>[...prev,{...obj,checked:false}])
        return !obj.checked
       }))

       
    }
    const handleRight=()=>{
        setList1(list1.filter(obj=>{
            if(obj.checked)
            setList2(prev=>[...prev,{...obj,checked:false}])
        return !obj.checked
       }))

    }


            
    useEffect(() => {
        const disableBtn = () => {
            const isList1Empty = list1.length === 0;
            const isList2Empty = list2.length === 0;
            const isList1Checked = list1.some(item => item.checked);
            const isList2Checked = list2.some(item => item.checked);
        
            setDisabled({
            b1: isList1Empty,
            b2: !isList1Checked,
            b3: !isList2Checked,
            b4: isList2Empty
            });
        };
        
        disableBtn();
    }, [list1, list2]);
        



    
  return (
    <div className='h-full w-full border-2 border-solid flex px-4' >
        <Container items={list1} onClick={setList1}/>
        <div className="buttons flex flex-col gap-6 items-center  justify-center w-full">
            <button  className={`${disabled.b1?"disabled":"enabled"}`} onClick={handleRightAll}>{'>>'}</button>
            <button   className={`${disabled.b2?"disabled":"enabled"}`} onClick={handleRight}>{'>'}</button>
            <button  className={`${disabled.b3?"disabled":"enabled"}`} onClick={handleLeft}>{"<"}</button>
            <button  className={`${disabled.b4?"disabled":"enabled"}`} onClick={handleLeftAll}>{"<<"}</button>
        </div>
        <Container items={list2} onClick={setList2}/>
    </div>
  )
}

export default TransferList