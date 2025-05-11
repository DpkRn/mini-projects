import React, { useEffect, useState } from "react";
import Billing from "./Billing";

const SeatSelection = () => {
  const [maxSelection, setMaxSelection] = useState(1);
  const [seatRow, setSeatCol] = useState([...Array(9)].map((item, ind) => ind));
  const [seatCol, setSeatRow] = useState(["A", "B", "C", "D", "E", "F"]);
  const [seats, setSeats] = useState({});
  const [nextPage,setNextPage]=useState(false);

  const handleClick = (key) => {
    const tempSeats = JSON.parse(JSON.stringify(seats));
    if(!tempSeats[key]&&Object.keys(tempSeats).length>=maxSelection)
      return;
    if(!tempSeats[key]){
      tempSeats[key]=true;
    }else{
      delete tempSeats[key]
    }
    console.log(tempSeats)
    setSeats(tempSeats)

  };

  const handleNext=()=>{
    setNextPage(prev=>!prev)
  }


  return (
    <div>
      {nextPage?
      <Billing seats={seats} handleNext={handleNext}/>
      :
      <div className="mx-auto w-max flex flex-col">
      <div className=" mt-10 text-center">
        <span className="font-bold mr-2">Seats</span>
        <select className="outline-none font-bold text-lg" value={maxSelection} onChange={(e)=>setMaxSelection(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <div className="inline-grid  grid-cols-[50px_1fr] grid-rows-[50px_1fr]">
        <div className=" col-start-2 flex gap-2">
          {seatCol.map((item) => (
            <div
              key={item}
              className="w-[50px] h-[50px] flex items-center justify-center font-bold "
            >
              {item}
            </div>
          ))}
        </div>
        <div className="row-start-2 flex flex-col w-[50px] gap-2">
          {seatRow.map((item) => (
            <div
              key={item}
              className="w-[50px] h-[50px] flex justify-center items-center font-bold"
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className={`col-start-2 row-start-2 grid grid-rows-[repeat(10,50px)] grid-cols-[repeat(6,50px)] gap-2 `}
        >
          {seatRow.map((row) =>
            seatCol.map((col) => {
              const key = `${row}${col}`;
              return (
                <div
                  key={key}
                  className={`w-full h-full border ${seats[key]?"bg-green-500":"bg-gray-500"}`}
                  onClick={() => handleClick(`${key}`)}
                ></div>
              );
            })
          )}
        </div>
      </div>
      <button className="bg-blue-500 px-4 py-1 w-max rounded text-white self-center " onClick={()=>handleNext()}>Next</button>
    </div>
    }
    </div>
  );
};

export default SeatSelection;
