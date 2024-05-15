import React, { useState } from 'react';

function App() {
  const [priceRange, setPriceRange] = useState({
    range1: false,
    range10: false
  });

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
     if(value === 'range1' && checked)
     {
        setPriceRange((p)=>({...p,[value]:true}))
     }
     if(value === 'range10' && checked)
     {
        setPriceRange((p)=>({...p,[value]:true}))
     }
     if(value === 'range10' && !checked)
     {
        setPriceRange((p)=>({...p,[value]:false}))
     }
     if(value === 'range1'&& !checked)
     {
        setPriceRange((p)=>({...p,[value]:false}))
     }
    console.log("value",priceRange,value)
    // setPriceRange((prevState) => ({
    //   ...prevState,
    //   [value]: checked
    // }));
  };

  return (
    <div>
      <label>
        <input type="checkbox" value="range1" onChange={handleFilterChange} />
        $1 - $10
      </label>
      <label>
        <input type="checkbox" value="range10" onChange={handleFilterChange} />
        $10+
      </label>
    </div>
  );
}

export default App;
