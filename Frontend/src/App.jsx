import React, { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useGettUsersQuery } from '../store/Features/api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, removeCart } from './store/Features/api/productSlice';

const products = [
  { name: 'Product 1', price: '$10.00' },
  { name: 'Product 2', price: '$20.00' },
  { name: 'Product 3', price: '$30.00' },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const productsPerPage = 20; // Number of products to display per page
  const { data } = useGettUsersQuery();
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(carts);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const addToCart = (productName) => {
    setCartItems([...cartItems, productName]);
  };

  const removeFromCart = (productName) => {
    setCartItems(cartItems.filter((item) => item !== productName));
  };

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
          <div>Logo</div>
          <ul className="flex">
            <li className="mr-4">Home</li>
            <li>About</li>
          </ul>
          <div>
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon className='cursor-pointer'/>
            </Badge>
          </div>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {currentProducts.map((product, index) => (
            <div key={index} className="border p-4">
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <img src={product.url} />
              <p className="text-sm mb-2">{product.price}</p>
              {cartItems.includes(product.title) ? (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => removeFromCart(product.title)}
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => addToCart(product.title)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`mx-2 p-2 ${currentPage === 1 ? 'bg-gray-500' : 'bg-blue-500'} text-white rounded-md`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastProduct >= data.length}
          className={`mx-2 p-2 ${indexOfLastProduct >= data.length ? 'bg-gray-500' : 'bg-blue-500'} text-white rounded-md`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default App;
