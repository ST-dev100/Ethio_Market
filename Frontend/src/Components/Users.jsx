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
import { useTranslation } from 'react-i18next';
import { useSelector,useDispatch} from 'react-redux';
import {addProducts,removeCart2,addCart,addNumberOfItem,dicreaseNumberOfItem} from '../store/Features/api/productSlice'

const Users = () => {
  const dispatch = useDispatch();
  const productsss = useSelector(state=>state.cart.products)
  const items = useSelector(state=>state.cart.items)
  const total = useSelector(state=>state.cart.total)
  const {t} = useTranslation();
  const { i18n } = useTranslation();
  const {home,login,signup,cart,removeCart} = t('navigationMenu');
  const {Phones,Computers,ElectronicDevices} = t('Catagories');
  const {customerService,contact,shipping,returning,FAQ,Links,About,Privacy,Terms,Site,Newsettler,Subscribe,Subscribe2,Enter,Next,Prev} = t('Footer');
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
  const [language,setLang] = useState('amh');
  
  const changeLanguage = (lng) => 
  { 
    setLang(language)
    i18n.changeLanguage(lng); 
  };

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
    dispatch(addCart(productId))
  };
  
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item !== productId));
    setNotificationCount(notificationCount - 1);
    dispatch(removeCart2(productId))
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
  useEffect(()=>{
    console.log("second useEffect")
    dispatch(addProducts(data))
    console.log("Productss",productsss)
    console.log("items",items)
  },[data, items,dispatch])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='dark:bg-gray-800'>  
      <div className="flex dark:bg-gray-800 dark:border-b-2 md:text-lg text-xs justify-between md:items-center sticky top-0 bg-neutral-300 p-4">
        <div>
          <img src="/rift.png" alt="Company Logo" className="h-8 w-8 mr-2" />
          <span className="dark:text-white ">{t('welcome')}</span>
        </div>
        
        <div className="flex flex-row   items-center gap-2">
        <div className='bg-black'>
          <select className='cursor-pointer dark:bg-gray-800 dark:text-white'
            defaultValue={language}
            onChange={(e) => 
            changeLanguage(e.target.value)}>
              <option value="en" className='cursor-pointer'>
                English
              </option>
              <option value="amh" className='cursor-pointer' >
                አማርኛ
              </option>
            </select> 
          </div>
          <p className='ml-2'>
           <DarkModeIconl className='dark:text-yellow-400 cursor-pointer' onClick={()=>setDarkMode(!darkMode)}/>
          </p>
          <Badge className='cursor-pointer' badgeContent={notificationCount} color="error">
            <Notifications className='dark:text-white' onClick={() => handleNotificationClick()} />
          </Badge>
        {/* {showOrderDetails &&  <OrderDetails handleClose = {handleCloseOrderDetails} />} */}
          
          <div className="ml-4">
            <p className='dark:text-white'>{login}</p>
          </div>
          <div className="ml-4">
            <p className='dark:text-white'>{signup}</p>
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
              <h2 className="text-sm md:text-lg font-bold">{t('Catagory')}</h2>
            
              <ul className="mt-4 text-sm md:text-lg">
                <li className="py-2">{Phones}</li>
                <li className="py-2">{Computers}</li>
                <li className="py-2">{ElectronicDevices}</li>
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
            <input className='border-2' type="text" name="" placeholder={t('Search')} id="" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          </div>
         <div className='flex flex-col md:flex-row'>  
        {currentProducts .map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 shrink grow  flex flex-col items-center dark:bg-gray-800 dark:text-white">
            <div className="w-44 h-48 flex flex-no-wrap overflow-x-auto">
              <img className="w-44 h-44 object-cover" src={product.image} alt={product.title} />
              <img className="w-44 h-44 object-cover" src={product.image} alt={product.title} />
              <img className="w-44 h-44 object-cover" src={product.image} alt={product.title} />
            </div>
            <div className="px-6 py-4  ">
              <div className="font-bold md:text-xl text-sm mb-2">{product.name}</div>
              <p className="text-gray-700 dark:text-white md:text-lg text-sm text-base mb-2">{product.model}</p>
              <p className="text-gray-700 dark:text-white text-base mb-2 md:text-lg text-sm">{t('Price')} ${product.price}</p>
              <div className="flex items-center mb-2 md:text-lg text-sm">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon 
                    key={index} 
                    style={{ color: index < Math.round(product.rating.rate) ? 'gold' : 'gray' }} 
                />
                ))}
            </div>
              {cartItems.includes(product.id) ? (
                <button onClick={() => removeFromCart(product.id)} className="bg-red-500 dark:bg-red dark:text-black dark:hover:bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  {removeCart}
                </button>
              ) : (
                <button onClick={() => addToCart(product.id)} className="bg-blue-500  dark:bg-white dark:text-black dark:hover:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {cart}
                </button>
              )}
            </div>
          </div>
        ))}
        </div>
        </div>
        <div>
        <div className={
         showOrderDetails ? 
        'bg-white text-black dark:bg-gray-800 dark:text-white h-screen md:w-6/12 5/12 absolute top-0 right-0 shrink border-4 transition-all duration-500 ease-in-out opacity-100':'hidden opacity-0 '
          } style={{ overflowY: 'scroll'}}>
            <div className="p-4 relative overflow-y-scroll">
              <span className='absolute top-0 right-0'>
                <Close className='cursor-pointer' onClick={()=>setShowOrderDetails(!showOrderDetails)}/>
              </span>
              <h2 className="text-sm md:text-lg font-bold">{t("Cart")}</h2>
            
             {items.map((item)=>
                (
                
                <div key={item.id} className="flex items-start justify-between ml-6 mt-2 text-sm md:text-lg ">
                <img src={item.image} alt="Product" className="md:w-24 md:h-24 h-12 w-12" />
                <div className="ml-2 border border-2">
                  <p>{item.title}</p>
                 
                  <div className="mt-2">
                    <label>{t('TotalA')} : {item.rating.count}</label>
                  </div>
                </div>
                <div>
                  <p>${item.price * item.count}</p>
                  <div className="flex items-center justify-center">
                    <input className="border-2 border-gray-300 rounded-md  w-8" type="number" value={item.count} min={0} disabled/>
                    <button className=" font-bold md:text-2xl dark:text-green-600 text-green-600 w-8 rounded text-green-600" onClick={()=>dispatch(addNumberOfItem(item.id))}>↑</button>
                    <button className=" font-bold md:text-2xl dark:text-red-600 text-red-600 text-red-600 w-8rounded" onClick={()=>dispatch(dicreaseNumberOfItem(item.id))}>↓</button>
                  </div>
                </div> 
                <DeleteIcon className='cursor-pointer' onClick={()=>removeFromCart(item.id)}/>
            </div>
                )
             )}
               <div className="mt-4 text-sm md:text-lg">
                  <p>{t('Total')} : {total}$</p>
                          <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
            <input type="hidden" name="public_key" value="CHAPUBK_TEST-pydPLApELW4IaBBnbSSIXt81wY2JNVkd" />
            <input type="hidden" name="tx_ref" value={`negade-tx-1e32334244ro44r9${Date.now()}`} />
            <input type="hidden" name="amount" value={total} />
            <input type="hidden" name="currency" value="ETB" />
            <input type="hidden" name="email" value="simalike245@gmail.com" />
            <input type="hidden" name="first_name" value="Israel" />
            <input type="hidden" name="last_name" value="Goytom" />
            <input type="hidden" name="title" value="Let us do this" />
            <input type="hidden" name="description" value="Paying with Confidence with cha" />
            <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
            <input type="hidden" name="callback_url" value="http://localhost:3000/callback" />
            <input type="hidden" name="return_url" value="http://localhost:3000/users" />
            <input type="hidden" name="meta[title]" value="test" />
            <div className="mt-4 md:mt-0">
              <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">{t('Payment')}</button>
            </div>
    </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex justify-center my-4 shrink">
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded">
            {Prev}
          </button>
        )}
        {currentProducts.length === productsPerPage && (
          <button onClick={() => paginate(currentPage + 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ml-2 rounded">
            {Next}
          </button>
        )}
      </div>
  
      <div className="bg-neutral-300 dark:bg-gray-800 dark:border-t-2 p-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center  gap-4">
          <div >
            <h2 className='dark:text-white'>{customerService}</h2>
            <ul className='dark:text-white'>
              <li>{contact}: +251946854382</li>
              <li>{shipping}</li>
              <li>{returning}</li>
              <li>{FAQ}</li>
            </ul>
          </div>
          <div>
            <h2 className='dark:text-white'>{Links}</h2>
            <ul className='dark:text-white'>
              <li>{About}</li>
              <li>{Privacy}</li>
              <li>{Terms}</li>
              <li>{Site}</li>
            </ul>
          </div>
          <div >
            <h2 className='dark:text-white'>{Newsettler}</h2>
            <p className='dark:text-white'>{Subscribe2}</p>
            <input type="text" placeholder={Enter} className="bg-gray-700 dark:text-white p-2 rounded mt-2" />
            <button className="bg-blue-500 hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded mt-2">{Subscribe}</button>
          </div>
        </div>
        <div className="md:flex  justify-between items-center mt-4">
          <p className="dark:text-white">&copy; 2022 {t('welcome')}</p>
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
  const {t} = useTranslation();
  const {Phones,Computers,ElectronicDevices} = t('Catagories');

  return (
    <div className=" bg-white dark:bg-gray-800 dark:text-white text-black mt-2  hidden md:block shrink border-2 dark:border-0">
      <div className="p-4">
        <h2 className="text-lg font-bold">{t('Catagory')}</h2>
        <ul className="mt-4">
          <li className="py-2">{Phones}</li>
          <li className="py-2">{Computers}</li>
          <li className="py-2">{ElectronicDevices}</li>
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
              {/* <input type="number" className="w-16 h-10 text-black"  /> */}
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




export default Users;