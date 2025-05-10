import React, { useState } from "react";

const ChipsInput = () => {
  const [text, setText] = useState("");
  const [chips, setChips] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChips([...chips, text]);
  };
  const handleDelete=(ind)=>{
    const temp=[...chips]
    temp.splice(ind,1);
    setChips([...temp]);
  }
  return (
    <div className="w-full flex  flex-col justify-center items-center ">
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className=" w-[80%] flex justify-center border mt-10"
      >
        <input
          type="text"
          className=" w-[100%] h-[40px] border p-4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className="chips flex justify-start flex-wrap gap-2 mt-2">
        {chips.map((chip, ind) => (
          <div key={ind} className="p-2 w-max h-max rounded-3xl border">
            {chip} <span className="text-red-500 p-2" onClick={()=>handleDelete(ind)}>x</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
