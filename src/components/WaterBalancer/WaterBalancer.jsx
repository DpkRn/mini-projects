import React, { useEffect, useRef, useState } from "react";

const WaterBalancer = () => {
  const [level, setLevel] = useState([0, 0, 0, 0]);
  const idIncreaseRef=useRef(null)
  const id1=useRef(null)
  const id2=useRef(null)
  const id3=useRef(null)
  const id0=useRef(null)

  const getTarget=()=>{
    let sum=level.reduce((acc,item)=>acc+item,0);
    return parseInt(sum/4);
  }


  const handleDown=(ind)=>{  
    idIncreaseRef.current=setInterval(()=>{
        setLevel(level=>{
          const curr=[...level]
          curr[ind]+=1;
          if(level[ind]>=400){
            clearInterval(idIncreaseRef.current)
            idIncreaseRef.current=null;
            curr[ind]=400;
            return curr;
          }
          return curr
        })
    },50)
  }


  const manageContainer=(ref,ind,target)=>{
    ref.current=setInterval(()=>{
      setLevel((prev)=>{
        
        const curr=[...prev];
        

        if((curr[ind]-target)>0){
          curr[ind]--;
        }else if((curr[ind]-target)<0){
          curr[ind]++;
        }else {
          clearInterval(ref.current);
          ref.current=null;
        }
        if(curr[ind]>=400){
          clearInterval(id0.current)
          ref.current=null;
          curr[ind]=400;
          return curr;
        }
        return curr;
      })
    },50)
  }
  const startBalancing=()=>{
    const target=getTarget();
    manageContainer(id0,0,target);
    manageContainer(id1,1,target);
    manageContainer(id2,2,target);
    manageContainer(id3,3,target);
  }

  const handleUp=(ind)=>{
    clearInterval(idIncreaseRef.current)
    idIncreaseRef.current=null;
    startBalancing();


  }


  const EmptyHandle=(ind)=>{
    const curr=[...level]
    curr[ind]=0;
    setLevel(curr)
  }


  const breakAll=()=>{

    clearInterval(id0.current)
    id0.current=null;
    clearInterval(id1.current)
    id1.current=null;
    clearInterval(id2.current)
    id2.current=null;
    clearInterval(id3.current)
    id3.current=null;
  }







  return (
    <div className="flex gap-5 w-max mx-auto">
      {level.map((height, ind) => (
        <div className="flex flex-col mt-20 gap-5" key={ind}>
          <div className="btns flex justify-around">
            <button className="c1Btn bg-green-500 p-1 px-4 rounded " onMouseDown={()=>handleDown(ind)} onMouseUp={()=>handleUp(ind)}>Add</button>
          </div>
          <div className="btns flex justify-around">
            <button className="c1Btn border-2 border-solid p-1 px-4 rounded" onClick={()=>EmptyHandle(ind)}>
              Empty
            </button>
          </div>
          <div className="gallons flex justify-around">
            <div className="h-[400px] w-[140px] border-2 border-solid relative pt-2 rounded-b-3xl overflow-hidden">
              <div className='absolute w-full bg-blue-400 bottom-0 left-0 transition-all duration-100' style={{height:`${level[ind]}px`}}>
              </div>
            </div>
          </div>
          <p  className="w-full text-center">{level[ind]} lts</p>
        </div>
      ))}
      <button className="bg-red-400 px-3 py-1 rounded border h-fit mt-20" onClick={()=>breakAll()}>Stop Balancing</button>
    </div>
  );
};

export default WaterBalancer;
