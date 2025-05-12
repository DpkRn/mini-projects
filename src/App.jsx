import React, {  useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Chess from "./components/ChessBoard/Chess";
import { Route, Routes } from "react-router-dom";
import Circle from "./components/Circles/Circle";
import HomePage from "./HomePage";
import ColumnTable from "./components/ColumnTable/ColumnTable";
import StopWatch from "./components/StopWatch/StopWatch";
import GridLight from "./components/GridLight/GridLight";
import NestedCheckBox from "./components/NestedCheckBox/NestedCheckBox";
import NestedComment from "./components/NestedComment/NestedComment";
import OtpInput from "./components/OtpInput/OtpInput";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import TicTacToy from "./components/TicTacToys/TicTacToy";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import TransferList from "./components/TransferList/TransferList";
import TypeHead from "./components/TypeHead/TypeHead";
import WaterBalancer from "./components/WaterBalancer/WaterBalancer";
import StopwatchWithMs from "./components/StopWatch1/Watch";
import Progress from "./components/Progress/Progress";
import FileExprorer from "./components/FileExprorer/FileExprorer";
import DigitalWatch from "./components/DigitalWatch/DigitalWatch";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import ChipsInput from "./components/ChipsInput/ChipsInput";
import TicketBooking from "./components/TicketBookingSystem/TicketBooking";

import wall from './assets/b1.jpg'
import water from './assets/b2.jpg'
import solid from './assets/b3.jpeg'
import pencil from './assets/b4.jpeg'
import Pegination from "./components/Pegination/Pegination";
import Rough from "./components/Rough/Rough";
import DragDrop from "./components/DragDrop/DragDrop";
// import BouncingBall from "./components/BouncingBall/BouncingBall";

const App = () => {
  
  const [challanges, setChallanges] = useState([
    { title: "ChessBoard", category: "medium" },
    { title: "Circles", category: "medium" },
    { title: "ColumnTable", category: "medium" },
    { title: "StopWatch", category: "medium" },
    { title: "GridLight", category: "medium" },
    { title: "NestedCheckBox", category: "hard" },
    { title: "NestedComment", category: "hard" },
    { title: "OtpInput", category: "hard" },
    { title: "InfiniteScroll", category: "hard" },
    { title: "TicTacToy", category: "hard" },
    { title: "TrafficLight", category: "medium" },
    { title: "TransferList", category: "medium" },
    { title: "TypeHead", category: "hard" },
    { title: "WaterBalancer", category: "hard" },
    { title: "StopwatchWithMs", category: "medium" },
    { title: "Progress", category: "easy" },
    { title: "FileExprorer", category: "hard" },
    { title: "DigitalWatch", category: "medium" },
    { title: "AnalogClock", category: "medium" },
    { title: "ChipsInput", category: "medium" },
    { title: "TicketBooking", category: "medium" },
    { title: "Pegination", category: "medium" },
    { title: "Rough", category: "only for rough" },
    { title: "DragDrop", category: "medium" },
    // { title: "BouncingBall", category: "medium" },
  ]
  );
  const [backgroundInd,setBackGroundInd]=useState(0)
   const backGround=[pencil,water,solid,wall];
  
  const style={ backgroundImage: `url(${backGround[backgroundInd]})`, backgroundSize: 'cover', backgroundPosition: 'center' }

  
 
  return (
    <div className="min-h-screen min-w-screen  "  style={style}>
      <Navbar />
     

      <div className="pt-5">
        <Routes>
          <Route path='/' element={<HomePage challanges={challanges} setBackGroundInd={setBackGroundInd} backgroundInd={backgroundInd}/>}/>
          <Route path="/ChessBoard" element={<Chess />} />
          <Route path="/Circles" element={<Circle />} />
          <Route path="/ColumnTable" element={<ColumnTable />} />
          <Route path="/StopWatch" element={<StopWatch />} />
          <Route path="/GridLight" element={<GridLight />} />
          <Route path="/NestedCheckBox" element={<NestedCheckBox />} />
          <Route path="/NestedComment" element={<NestedComment />} />
          <Route path="/OtpInput" element={<OtpInput />} />
          <Route path="/InfiniteScroll" element={<InfiniteScroll />} />
          <Route path="/TicTacToy" element={<TicTacToy />} />
          <Route path="/TrafficLight" element={<TrafficLight />} />
          <Route path="/TransferList" element={<TransferList />} />
          <Route path="/TypeHead" element={<TypeHead />} />
          <Route path="/WaterBalancer" element={<WaterBalancer />} />
          <Route path="/StopwatchWithMs" element={<StopwatchWithMs />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/FileExprorer" element={<FileExprorer />} />
          <Route path="/DigitalWatch" element={<DigitalWatch />} />
          <Route path="/AnalogClock" element={<AnalogClock/>} />
          <Route path="/ChipsInput" element={<ChipsInput/>} />
          <Route path="/TicketBooking" element={<TicketBooking/>} />
          <Route path="/Pegination" element={<Pegination/>} />
          <Route path="/Rough" element={<Rough/>} />
          <Route path="/DragDrop" element={<DragDrop/>} />
          {/* <Route path="/BouncingBall" element={<BouncingBall/>} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
