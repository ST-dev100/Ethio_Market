import React, { useState } from 'react';

const Slider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  return (
    <div className='p-2'>
     <div className='flex gap-2 '>   
        <span className='bg-white dark:bg-gray-700 p-2 rounded-xl dark:text-gray-300 text-xs'>Value 1</span> 
        <span className='flex items-center text-xs'><div>-</div></span> 
        <span className='bg-white dark:bg-gray-700 dark:text-gray-300 p-2 rounded-xl text-xs'>Value 2</span> 
    </div>
    <div className="w-full flex p-2 mt-2">
      <input
        type="range"
        min="0"
        max="100"
        value={minValue}
        onChange={(e) => setMinValue(e.target.value)}
        className="appearance-none w-1/2 h-1 rounded-s-full cursor-pointer range-slider"
        
      />
      <input
        type="range"
        min="0"
        max="100"
        value={maxValue}
        onChange={(e) => setMaxValue(e.target.value)}
        className="appearance-none w-1/2 h-1  rounded-e-full cursor-pointer range-slider"
      />
    </div>
    </div>
  );
};

export default Slider;
