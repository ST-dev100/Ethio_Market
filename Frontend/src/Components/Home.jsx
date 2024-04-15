import React, { useState, useEffect } from 'react';
import { useGettUsersQuery } from '../store/Features/api/apiSlice';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Notifications } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn
} from '@mui/icons-material';

const Home = () => {
  const { data, error, isLoading } = useGettUsersQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [cartItems, setCartItems] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [showSideNav, setShowSideNav] = useState(true);
  const [filters, setFilters] = useState([]);
  const [ratings, setRatings] = useState({});
  const addToCart = (productId) => {
    setCartItems([...cartItems, productId]);
    setNotificationCount(notificationCount + 1);
  };
  
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item !== productId));
    setNotificationCount(notificationCount - 1);
  };
  

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const applyFilter = (filter) => {
    setFilters([...filters, filter]);
  };


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const tempProducts = [
      { id: 1, name: "Product 1", model: "Model A", price: "$100", image1: "iphone.jpg", image2: "iphone2.jpg", image3: "iphone3.png" },
      { id: 2, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 3, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 4, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 5, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 6, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 7, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 8, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 9, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 10, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 11, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
     
      // Add more products here
    ];

    const tempRatings = {
      1: 4.5,
      2: 3.5,
      3: 3.5,
      4: 3.5
      
      // Add ratings for other products here
    };
  
    setProducts(tempProducts);
    setRatings(tempRatings);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
       
      <div className="flex justify-between items-center bg-gray-800 p-4">
        <div>
          <img src="/rift.png" alt="Company Logo" className="h-8 w-8 mr-2" />
          <span className="text-white">Real Mobile Shopping</span>
        </div>
        <span className="md:hidden">
          <MenuIcon style={{ color: 'white', fontSize: '2.5rem' }} />
        </span>
        <div className="md:flex items-center hidden ">
          <Badge badgeContent={notificationCount} color="error">
            <Notifications style={{ color: 'white' }} />
          </Badge>
          <div className="ml-4">
            <p style={{ color: 'white' }}>Login</p>
          </div>
          <div className="ml-4">
            <p style={{ color: 'white' }}>Signup</p>
          </div>
          <div className="ml-4">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </div>
        </div>
      </div>
    <div className='grid grid-cols-5'>
     
      <div className="flex  justify-left mt-4 col-span-5">
        <SideNavigation />
        <div className='grow'>
          <div className='ml-32'>
            <input className='border-2' type="text" name="" placeholder='Search Products...' id="" />
          </div>
         <div className='flex flex-col md:flex-row'>  
        {currentProducts.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 shrink grow">
            <div className="w-44 h-48 flex flex-no-wrap overflow-x-auto">
              <img className="w-44 h-44 object-cover" src={product.image1} alt={product.name} />
              <img className="w-44 h-44 object-cover" src={product.image2} alt={product.name} />
              <img className="w-44 h-44 object-cover" src={product.image3} alt={product.name} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base mb-2">{product.model}</p>
              <p className="text-gray-700 text-base mb-2">{product.price}</p>
              <div className="flex items-center mb-2">
                {Array.from({ length: Math.round(ratings[product.id]) }, (_, index) => (
                    <StarIcon key={index} style={{ color: 'gold' }} />
                ))}
            </div>
              {cartItems.includes(product.id) ? (
                <button onClick={() => removeFromCart(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Remove from Cart
                </button>
              ) : (
                <button onClick={() => addToCart(product.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
      </div>
      <div className="flex justify-center my-4 shrink">
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded">
            Prev
          </button>
        )}
        {currentProducts.length === productsPerPage && (
          <button onClick={() => paginate(currentPage + 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ml-2 rounded">
            Next
          </button>
        )}
      </div>
  
      <div className="bg-gray-800 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center  gap-4">
          <div >
            <h2 className="text-white">CUSTOMER SERVICE</h2>
            <ul className="text-white">
              <li>Contact Us: +251946854382</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white">LINKS</h2>
            <ul className="text-white">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div >
            <h2 className="text-white">NEWSLETTER</h2>
            <p className="text-white">Subscribe to our newsletter for the latest updates</p>
            <input type="text" placeholder="Enter your email" className="bg-gray-700 text-white p-2 rounded mt-2" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Subscribe</button>
          </div>
        </div>
        <div className="md:flex  justify-between items-center mt-4">
          <p className="text-white">&copy; 2022 Real Mobile Shopping</p>
          <div className="flex items-center">
            <Instagram style={{ color: 'white', marginRight: '10px' }} />
            <Facebook style={{ color: 'white', marginRight: '10px' }} />
            <Twitter style={{ color: 'white', marginRight: '10px' }} />
            <LinkedIn style={{ color: 'white' }} />
          </div>
        </div>
        {/* <div className='flex flex-col md:flex-row md:items-center md:justify-center items-center justify-center'>
          <h1>ddd</h1>
          <h1>ddd</h1>
          <h1>ddd</h1>
        </div> */}

      </div>
  
    </div>
  );
};


const SideNavigation = () => {
  return (
    <div className=" bg-white text-black mt-2  hidden md:block shrink border-4">
      <div className="p-4">
        <h2 className="text-lg font-bold">Categories</h2>
        <ul className="mt-4">
          <li className="py-2">Category 1</li>
          <li className="py-2">Category 2</li>
          <li className="py-2">Category 3</li>
        </ul>
      </div>
    </div>
  );
};



export default Home;