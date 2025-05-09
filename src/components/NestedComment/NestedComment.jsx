import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Comment from "./Comment";

const NestedComment = ({}) => {
  const [data, setData] = useState({
    pid: {
      pid: null,
      comment: "Hi, How are you !",
      children: [],
    },
  });
  const [text, setText] = useState("");

  const handleChange = (e) => [setText(e.target.value)];

  const handleAddComments = (id, text) => {
    const temp = JSON.parse(JSON.stringify(data));
    const newId = uuid();

    if (id==null) {
      temp[newId]={pid:null,comment:text,children:[]}
    } else {
      temp[id].children.push(newId);
      temp[newId] = {
        pid: id,
        comment: text,
        children: [],
      };
    }
    console.log(temp);
    setData(temp);
  };

  const handleDelete = (id) => {
    const temp = JSON.parse(JSON.stringify(data));
    const pid=temp[id].pid;
  if(!pid){
    delete temp[id]
  }else{
    const parent = temp[pid];
    let child = parent.children.filter((item) => item != id);
    temp[pid].children = child;
    delete temp[id];
  }
  
   
   
    console.log(temp);
    setData(temp);
  };

  return (
    <div className="mt-5 p-10">
      <p className="text-6xl font-extrabold">Nested Comments</p>
      <input
        type="text"
        className="border p-2 mt-5 rounded"
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <button
        className="p-2 bg-blue-400 border rounded ml-2"
        onClick={() => handleAddComments(null,text)}
      >
        Add comment
      </button>
      <div className="mt-5">
       {
        data&&Object.keys(data).map((key,ind)=>
          data[key].pid==null&&
          <Comment
          key={key}
        comment={data[key]}
        data={data}
        handleAddComments={handleAddComments}
        handleDelete={handleDelete}
        id={key}
      />
        )
       }
      </div>
    </div>
  );
};

export default NestedComment;
