import React, { useState, useEffect } from 'react';
import { useGettUsersQuery } from '../store/Features/api/apiSlice';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Notifications, Close } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import DarkModeIconl from '@mui/icons-material/DarkMode';

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
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showCatacgories,setCatagories] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [darkMode,setDarkMode] = useState(false);
  const handleNotificationClick = (order) => {
    setShowOrderDetails(!showOrderDetails);
    setCatagories(false);
  };
  const handleCatagories = () => {
    setCatagories(!showCatacgories);
    setShowOrderDetails(false);
  };
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

  const handleCloseOrderDetails = () => { setShowOrderDetails(false); };
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
  const getFilteredProducts = () => 
  { 
    return currentProducts.filter(
      (product) => product.name.toLowerCase().includes(searchValue.toLowerCase()) 
      ); 
   };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='dark:bg-gray-800'>  
      <div className="flex dark:bg-gray-800 dark:border-b-2 md:text-lg text-xs justify-between md:items-center sticky top-0 bg-neutral-300 p-4">
        <div>
          <img src="/rift.png" alt="Company Logo" className="h-8 w-8 mr-2" />
          <span className="dark:text-white ">Real Mobile Shopping</span>
        </div>
        
        <div className="flex flex-row   items-center gap-2">
          <p className='ml-2'>
           <DarkModeIconl className='dark:text-yellow-400 cursor-pointer' onClick={()=>setDarkMode(!darkMode)}/>
          </p>
          <Badge className='cursor-pointer' badgeContent={notificationCount} color="error">
            <Notifications className='dark:text-white' onClick={() => handleNotificationClick()} />
          </Badge>
        {/* {showOrderDetails &&  <OrderDetails handleClose = {handleCloseOrderDetails} />} */}
          
          <div className="ml-4">
            <p className='dark:text-white'>Login</p>
          </div>
          <div className="ml-4">
            <p className='dark:text-white'>Signup</p>
          </div>
          <div className="ml-4">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </div>
        </div>
      </div>
    <div className='grid grid-cols-5 '>
      <div className={showCatacgories ? '' : 'hidden'}>
           <div className=" bg-white dark:bg-gray-800 text-black dark:text-white h-screen md:w-1/3 w-1/2 absolute top-0 shrink border-4">
            <div className="p-4 relative">
              <span className='absolute top-0 right-0'>
                <Close className='cursor-pointer' onClick={()=>setCatagories(!showCatacgories)}/>
              </span>
              <h2 className="text-sm md:text-lg font-bold">Categories</h2>
            
              <ul className="mt-4 text-sm md:text-lg">
                <li className="py-2">Category 1</li>
                <li className="py-2">Category 2</li>
                <li className="py-2">Category 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className="flex  justify-left mt-4 col-span-5 ">
        <SideNavigation />
        <span className="md:hidden">
          <MenuIcon className="cursor-pointer dark:text-white" style={{fontSize: '2.5rem' }} onClick={()=>handleCatagories()}/>
        </span>
        <div className='grow'>
          <div className='md:ml-32 ml-10'>
            <input className='border-2' type="text" name="" placeholder='Search Products...' id="" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          </div>
         <div className='flex flex-col md:flex-row'>  
        {getFilteredProducts() .map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 shrink grow  flex flex-col items-center dark:bg-gray-800 dark:text-white">
            <div className="w-44 h-48 flex flex-no-wrap overflow-x-auto">
              <img className="w-44 h-44 object-cover" src={product.image1} alt={product.name} />
              <img className="w-44 h-44 object-cover" src={product.image2} alt={product.name} />
              <img className="w-44 h-44 object-cover" src={product.image3} alt={product.name} />
            </div>
            <div className="px-6 py-4  ">
              <div className="font-bold md:text-xl text-sm mb-2">{product.name}</div>
              <p className="text-gray-700 dark:text-white md:text-lg text-sm text-base mb-2">{product.model}</p>
              <p className="text-gray-700 dark:text-white text-base mb-2 md:text-lg text-sm">{product.price}</p>
              <div className="flex items-center mb-2 md:text-lg text-sm">
                {Array.from({ length: Math.round(ratings[product.id]) }, (_, index) => (
                    <StarIcon key={index} style={{ color: 'gold' }} />
                ))}
            </div>
              {cartItems.includes(product.id) ? (
                <button onClick={() => removeFromCart(product.id)} className="bg-red-500 dark:bg-white dark:text-black dark:hover:bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Remove from Cart
                </button>
              ) : (
                <button onClick={() => addToCart(product.id)} className="bg-blue-500  dark:bg-white dark:text-black dark:hover:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
        </div>
        </div>
        <div>
        <div className={showOrderDetails ? 'bg-white text-black dark:bg-gray-800 dark:text-white h-screen md:w-4/12 5/12 absolute top-0 right-0 shrink border-4 transition-all duration-500 ease-in-out opacity-100':'hidden opacity-0'}>
            <div className="p-4 relative">
              <span className='absolute top-0 right-0'>
                <Close className='cursor-pointer' onClick={()=>setShowOrderDetails(!showOrderDetails)}/>
              </span>
              <h2 className="text-sm md:text-lg font-bold">Carts</h2>
            
              <div className="flex items-start justify-between ml-6 mt-2 text-sm md:text-lg">
                <img src="iphone.jpg" alt="Product" className="md:w-24 md:h-24 h-12 w-12" />
                <div className="ml-2 border border-2">
                  <p> Nokia 36s</p>
                  
                  <div className="mt-2">
                    <label>Amount: </label>
                    <input type="number" className="w-16 h-10 text-black border border-4 border-black" value="1" />
                  </div>
                </div>
                <p>456$</p>
                <DeleteIcon/>
            </div>
              <div className="mt-4 text-sm md:text-lg">
                  <p>Total Price: 5123$</p>
              </div>
            </div>
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
  
      <div className="bg-neutral-300 dark:bg-gray-800 dark:border-t-2 p-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center  gap-4">
          <div >
            <h2 className='dark:text-white'>CUSTOMER SERVICE</h2>
            <ul className='dark:text-white'>
              <li>Contact Us: +251946854382</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h2 className='dark:text-white'>LINKS</h2>
            <ul className='dark:text-white'>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div >
            <h2 className='dark:text-white'>NEWSLETTER</h2>
            <p className='dark:text-white'>Subscribe to our newsletter for the latest updates</p>
            <input type="text" placeholder="Enter your email" className="bg-gray-700 dark:text-white p-2 rounded mt-2" />
            <button className="bg-blue-500 hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded mt-2">Subscribe</button>
          </div>
        </div>
        <div className="md:flex  justify-between items-center mt-4">
          <p className="dark:text-white">&copy; 2022 Real Mobile Shopping</p>
          <div className="flex items-center">
            <Instagram className='dark:text-white' style={{marginRight: '10px' }} />
            <Facebook className='dark:text-white' style={{marginRight: '10px' }} />
            <Twitter className='dark:text-white' style={{marginRight: '10px' }} />
            <LinkedIn className='dark:text-white' />
          </div>
        </div>
        {/* <div className='flex flex-col md:flex-row md:items-center md:justify-center items-center justify-center'>
          <h1>ddd</h1>
          <h1>ddd</h1>
          <h1>ddd</h1>
        </div> */}

      </div>
      </div>
    </div>
  );
};


const SideNavigation = () => {
  return (
    <div className=" bg-white dark:bg-gray-800 dark:text-white text-black mt-2  hidden md:block shrink border-2 dark:border-0">
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

const OrderDetails = ({handleClose}) => {
  return (
    <div className="fixed top-0 opacity-75 grid grid-cols-5  right-0 bg-white  w-screen h-96 ">
      <div className='relative bg-black text-white mt-20 text-xs md:text-lg col-start-3 col-end-6 md:animate-[bounce_1s_ease-in-out_1_forwards]'>
        <Close className="border border-4 bg-black ml-auto" onClick={handleClose} style={{ color: 'red', cursor: 'pointer' }} />
          <div className="flex items-center ml-6 mt-2">
            <img src="iphone.jpg" alt="Product" className="md:w-24 md:h-24 h-12 w-12" />
          <div className="ml-4">
            <p>Product Name: Nokia</p>
            <p>Product Price: 456$</p>
            <div className="mt-2">
              <label>Amount: </label>
              <input type="number" className="w-16 h-10 text-black" value="1" />
            </div>
          </div>
        </div>
       <div className="mt-4">
          <p>Total Price: 5123$</p>
      </div>
      </div>
    </div>
  );
};




export default Home;