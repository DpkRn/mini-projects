import React, { useEffect, useRef, useState } from "react";
import { GrDrag } from "react-icons/gr";


const DragDrop = () => {
  const [lists, setLists] = useState([
    "List1",
    "List2",
    "List3",
    "List4",
    "List5",
  ]);
  const [hoverInd, setHoverInd] = useState(-1);
  const sourceIndRef = useRef(null);
  const [loading,setLoading]=useState(false);
  //to successfull drag drop we need only two event

  //dragStart() that will give us source Drag element
  const handleStart = (e, ind) => {
    sourceIndRef.current = ind;
  };

  //and onDrop will give us on which location element is going to drop
  //by default browser does not run onDrop event thats why before drop i mean onDrag over on parent we need to preventDefault on parent
  const handleDrop = (e, ind) => {
    if (!e.target || sourceIndRef.current == null) return;

    const temp = [...lists];
    const endElement = temp[sourceIndRef.current];
    temp.splice(sourceIndRef.current, 1, temp[ind]);
    temp.splice(ind, 1, endElement);
    setLists([...temp]);
    setHoverInd(-1);
  };

  //this dragEnter only written here to notify that this is the drop position by doing red color but its not compalsory
  const handleDragEnter = (ind) => {
    setHoverInd(ind);
  };

  useEffect(()=>{
    const list=JSON.parse(localStorage.getItem('listItems'))
    if(list){
        setLists(list)
    }
  },[])


  const handleSave=()=>{
    setLoading(true)
    localStorage.setItem('listItems',JSON.stringify(lists))
    setLoading(false)
  }
  return (
    <div
      className="flex justify-center flex-col items-center gap-4 mt-10"
      onDragOver={(e) => e.preventDefault()}
    >
      {lists.map((list, ind) => (
        <div
          key={ind}
          className={`${list} w-[50%]  h-12 border rounded-3xl flex justify-center items-center ${
            hoverInd == ind ? "bg-red-400" : "bg-white"
          }  shadow-sm shadow-black cursor-move font-bold relative`}
          draggable
          onDragStart={(e) => handleStart(e, ind)}
          onDrop={(e) => handleDrop(e, ind)}
          onDragEnter={() => handleDragEnter(ind)}
        >
            <GrDrag className="absolute right-8 top-4"/>
          {list}
        </div>
      ))}

      <button className="px-4 py-1 rounded bg-black text-white" onClick={()=>handleSave()}>{loading?"...":"Save List"}</button>
    </div>
  );
};

export default DragDrop;
