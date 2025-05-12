import React, { useEffect, useState } from "react";
import "./Rotation.css";

const Puzzle15 = () => {
  const [puzzle, setPuzzle] = useState(
    Array.from({ length: 15 }).map((_, ind) => ind + 1).concat(null)
  );
  const [moves, setMoves] = useState(0);
  const [animatedIndex, setAnimatedIndex] = useState(null);
  const [animationClass, setAnimationClass] = useState("");
  const [history, setHistory] = useState([]); // Stack for undo
  const styles = ["shiftRight", "shiftLeft", "shiftDown", "shiftUp"];

  const setRandom = () => {
    const temp = [...puzzle];
    for (let i = temp.length - 1; i > 0; i--) {
      const randomInd = Math.floor(Math.random() * (i + 1));
      [temp[randomInd], temp[i]] = [temp[i], temp[randomInd]];
    }
    setPuzzle(temp);
    setHistory([]); // clear history on reset
    setMoves(0);
  };

  const isAtCorrectPlace = (temp) =>
    temp.every((item, ind) =>
      ind === puzzle.length - 1 && item === null ? true : item === ind + 1
    );

  useEffect(() => {
    setRandom();
  }, []);

  const updatePuzzle = (clickedInd, target, dirIndex) => {
    const temp = [...puzzle];
    if (target >= 0 && target < 16 && temp[target] === null) {
      // Save current state before move
      setHistory((prev) => [...prev,[... puzzle]]);
      [temp[clickedInd], temp[target]] = [temp[target], temp[clickedInd]];
      setMoves((prev) => prev + 1);
      setAnimatedIndex(clickedInd);
      setAnimationClass(styles[dirIndex]);

      setTimeout(() => {
        setPuzzle(temp);
      }, 300); // Slight delay for animation

      if (isAtCorrectPlace(temp)) {
        setTimeout(() => {
          alert(`Solved puzzle in ${moves + 1} moves`);
          setRandom();
        }, 100);
      }
    }
  };

  const handleSwap = (ind) => {
    const clickedInd = ind;
    const needToCheck = [ind + 1, ind - 1, ind + 4, ind - 4];
    needToCheck.forEach((target, i) => updatePuzzle(clickedInd, target, i));
  };

  const setUndo = () => {
    if (history.length === 0) return;
    const lastState = history[history.length - 1];
    console.log('lastState',lastState)
    setPuzzle(lastState);
    setHistory((prev) => prev.slice(0, prev.length - 1));
    setMoves((prev) => (prev > 0 ? prev - 1 : 0));
  };

  console.log(puzzle)

  return (
    <div className="w-max mx-auto flex flex-col items-center mt-10">
      <h1>Click on the Box to move and sort row wise</h1>
      <div className="grid grid-cols-4 gap-1 mt-5">
        {puzzle.map((item, ind) => (
          <div
            key={ind}
            className={`flex justify-center items-center w-[100px] h-[100px] font-bold shadow-md
              ${item ? "border bg-white shadow-green-500" : ""}
              ${ind === animatedIndex ? animationClass : ""}`}
            onClick={() => handleSwap(ind)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-around">
        <button
          className="px-4 py-2 mt-5 bg-black text-white rounded"
          onClick={setRandom}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 mt-5 bg-black text-white rounded"
          onClick={setUndo}
        >
          Undo
        </button>
      </div>
      <div className="text-lg font-bold mt-3">
        <span>Total Moves: </span>
        <span>{moves}</span>
      </div>
    </div>
  );
};

export default Puzzle15;
