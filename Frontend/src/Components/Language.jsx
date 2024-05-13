import React, { useState } from 'react';

const LanguageOptions = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('USA');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="p-2 rounded"
      >
        <option value="USA">USA Flag</option>
        <option value="China">China Flag</option>
      </select>

      {selectedLanguage === 'USA' && (
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="USA flag"
          className="h-16 w-16 ml-4"
        />
      )}

      {selectedLanguage === 'China' && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
          alt="China flag"
          className="h-16 w-16 ml-4"
        />
      )}
    </div>
  );
};

export default LanguageOptions;