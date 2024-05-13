import React from 'react';

const DateFilter = () => {
  return (
    
        
     <div className="flex flex-col items-center space-x-4 flex-wrap self-start">
      <label htmlFor="start-date" className='text-gray-300 font-medium text-xs md:text-sm'>Start Date:</label>
      <input type="date" id="start-date" className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-gray-300 text-gray-600 tracking-wider text-xs" />

      <label htmlFor="end-date" className='text-gray-300 font-medium text-xs md:text-sm'>End Date:</label>
      <input type="date" id="end-date" className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-gray-300 text-gray-600 tracking-wider text-xs" />

      </div>
   
  );
};

export default DateFilter;