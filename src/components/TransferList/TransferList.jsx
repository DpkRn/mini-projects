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
    <div className='h-full w-[30%] shadow-md shadow-amber-600 flex px-4 justify-center mx-auto mt-20 p-10 rounded-2xl bg-white font-bold' >
        <Container items={list1} onClick={setList1}/>
        <div className="buttons flex flex-col gap-6 items-center  justify-center w-full">
            <button  disabled={disabled.b1==true} className={`p-4 rounded-full ${disabled.b1==true?"bg-gray-500":"bg-amber-200"}`} onClick={handleRightAll}>{'>>'}</button>
            <button   disabled={disabled.b2==true} className={`p-4 rounded-full ${disabled.b2==true?"bg-gray-500":"bg-amber-200"}`} onClick={handleRight}>{'>'}</button>
            <button  disabled={disabled.b3==true} className={`p-4 rounded-full ${disabled.b3==true?"bg-gray-500":"bg-amber-200"}`} onClick={handleLeft}>{"<"}</button>
            <button  disabled={disabled.b4==true} className={`p-4 rounded-full ${disabled.b4==true?"bg-gray-500":"bg-amber-200"}`} onClick={handleLeftAll}>{"<<"}</button>
        </div>
        <Container items={list2} onClick={setList2}/>
    </div>
  )
}

export default TransferList