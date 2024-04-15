import React, { useState } from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './Components/Orders';

const products = [
  { name: 'Product 1', price: '$10.00' },
  { name: 'Product 2', price: '$20.00' },
  { name: 'Product 3', price: '$30.00' },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
