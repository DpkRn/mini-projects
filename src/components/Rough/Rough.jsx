import React, { useState } from "react";

const Rough = () => {
  const arr = Array.from({ length: 8 }).map((item, ind) => ind);
  const col = ["A", "B", "C", "D", "E", "F"];
  const [selected, setSelected] = useState([]);
  const [maxSelection, setMaxSelection] = useState(1);
  const [billing, setBilling] = useState(false);

  const isAvailable = (rowT, colT) => {
    const key = `${rowT}${colT}`;
    if (selected.find((item) => item == key)) return true;
    return false;
  };
  const handleClick = (rowT, colT) => {
    const key = `${rowT}${colT}`;
    console.log(key);
    const cnt = selected.length;

    if (isAvailable(rowT, colT)) {
      const temp = [...selected.filter((item) => item != `${rowT}${colT}`)];
      setSelected(temp);
      console.log(temp);
    } else {
      console.log(cnt);
      console.log(maxSelection);
      if (cnt >= parseInt(maxSelection)) return;
      setSelected([...selected, key]);
    }
  };

  return billing ? (
    <div className="mt-10 mx-auto w-max">
        <div className="mx-auto inline-grid grid-cols-[100px_100px] gap-4 ">
     <p> total:</p><p>{selected.length};</p><p>selected seats:</p> <p>{selected.toString()}</p>
      <button className="bg-red-500 px-2 py-1 rounded" onClick={() => setBilling(false)}>
        Modify
      </button>
      <button className="bg-blue-500 px-2 py-1 rounded" onClick={() => alert("booked")}>
        Book
      </button>
    </div>
    </div>
  ) : (
    <div className="w-max mx-auto ">
      <select
        name=""
        id=""
        value={maxSelection}
        onChange={(e) => setMaxSelection(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <div className="flex gap-3">
        <div className="w-[50px] h-[50px]"></div>
        {col.map((item, ind) => (
          <div
            key={ind}
            className="w-[50px] h-[50px] grid place-items-center font-bold "
          >
            {item}
          </div>
        ))}
      </div>

      <div className="w-max  flex flex-col gap-3">
        {arr.map((rowT, i) => {
          return (
            <div key={i} className="flex w-max gap-3">
              <div className="w-[50px] h-[50px] grid place-items-center font-bold ">
                {rowT}
              </div>
              {col.map((colT, j) => (
                <div
                  key={j}
                  className={`w-[50px] h-[50px] ${
                    isAvailable(rowT, colT) ? "bg-green-400" : "bg-gray-500"
                  } border grid place-items-center`}
                  onClick={() => handleClick(rowT, colT)}
                >
                  {}
                </div>
              ))}
            </div>
          );
        })}
      </div>
     <div className="flex justify-center items-center mt-5">
         <button className="bg-green-400 px-2 py-1 rounded w-max" onClick={() => setBilling(true)}>
        Next
      </button>
     </div>
    </div>
  );
};

export default Rough;
