import React, { useState } from 'react';

const GridLight = () => {
  const [color, setColor] = useState(Array(9).fill(0));
  const [path, setPath] = useState([]);

  const delay = (ms) => new Promise(res => setTimeout(res, ms));
  console.log('color=',color)
  const handleClick = async (ind) => {
    if (color[ind] === 1) return;

    const newColor = [...color];
    newColor[ind] = 1;
    setColor(newColor);
    setPath(prev => [...prev, ind]);

    if (newColor.every(item => item === 1)) {  
      for (let i = 8; i >= 0; i--) {
        await delay(1000);
        newColor[i]=0;
        setColor([...newColor]);
        setPath(prev => prev.slice(0, i));
      }
    }
  };

  return (
    <div className="w-max grid grid-cols-3 grid-rows-3 gap-1 mx-auto mt-20">
      {color.map((val, index) => (
        <div
          key={index}
          className={`w-[100px] h-[100px] border border-black ${val === 1 ? 'bg-green-500' : ''}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default GridLight;
