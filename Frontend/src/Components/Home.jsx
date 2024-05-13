import React, { useState, useEffect } from 'react';
import { useGettUsersQuery } from '../store/Features/api/apiSlice';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Notifications, Close, TextSnippetSharp } from '@mui/icons-material';
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
import { motion,AnimatePresence } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CategoryIcon from '@mui/icons-material/Category';
import myVideo from "../../public/video.mp4"
import RatingFilter from './RatingFilter';
import PriceFilter from './PriceFilter';
import BrandFilter from './BrandFilter';
import DateFilter from './DateFilter';
import LanguageOptions from './Language';
const Home = () => {
 
  const dispatch = useDispatch();
  const productsss = useSelector(state=>state.cart.products)
  const items = useSelector(state=>state.cart.items)
  const total = useSelector(state=>state.cart.total)
  const {t} = useTranslation();
  const { i18n } = useTranslation();
  const {home,login,signup,cart,removeCart} = t('navigationMenu');
  const {Phones,Computers,ElectronicDevices} = t('Catagories');
  const {Brand,Price,Rating,Date}=t('SubCatagoryies');
  const {customerService,contact,shipping,returning,FAQ,Links,About,Privacy,Terms,Site,Newsettler,Subscribe,Subscribe2,Enter,Next,Prev} = t('Footer');
  const { data, error, isLoading } = useGettUsersQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
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
  const [isVisible,setTest] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [avatar,setAvatar] = useState(false);
  const [brand,setBrand] = useState(false);
  const [price,setPrice] = useState(false);
  const [rate,setRate] = useState(false);
  const [date,setDate] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
  });
  useEffect(() => { const interval = setInterval(() => { setCurrentTheme((currentTheme + 1) % themes.length); }, 5000);

 
return () => clearInterval(interval);
}, [currentTheme]);

  const changeLanguage = (lng) => 
  { 
    setLang(lng)
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
  const themes = [ { name: 'Gaming Theme', image: 'images.jpg', }, { name: 'Elegance Theme', image: 'co.png', },{ name: 'Elegance Theme', image: 'images (1).jpg', } ];
 
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
      <div className='dark:bg-gray-800 grid grid-cols-5 bg-neutral-300 poetsen-one-regular'>  
      <div className="flex dark:bg-gray-800 bg-neutral-300 col-span-5 dark:border-b-2 md:text-lg text-xs justify-between md:items-center sticky top-0  p-4 z-10">
        <div className='flex md:flex-row flex-col'>
          <img src="/rift.png" alt="Company Logo" className="h-8 w-8 mr-2" />
          <span className="dark:text-white font-bold">{t('welcome')}</span>
        </div>
        <ul className='md:flex gap-2 dark:text-white hidden'>
          <li className='hover:border-b-4 hover:dark:border-white border-black cursor-pointer poetsen-one-regular text-sm'>{t('home')}</li>
          <li className='hover:border-b-4 hover:dark:border-white border-black cursor-pointer poetsen-one-regular text-sm'>{t('Blog')}</li>
          <li className='hover:border-b-4 hover:dark:border-white border-black cursor-pointer poetsen-one-regular text-sm'>{t('About')}</li>

        </ul>
        <div className="flex flex-row   items-center gap-2">
        <div className='bg-black flex'>
          <select className='cursor-pointer border-0 dark:bg-gray-800 dark:text-white text-xs '
            defaultValue={language}
            onChange={(e) => 
            changeLanguage(e.target.value)}>
              <option value="en" className='cursor-pointer border-2 border-red-600'>
                English
              </option>
              <option value="amh" className='cursor-pointer ' >
                Amh
              </option>
            </select> 
            {language==="en" && (<img src="en.png"  className="h-4 w-4 border-2" alt='l'/>)}
            {language==="amh" && (<img src="eth.png"  className="h-4 w-4 border-2" alt='l'/>)}

            {/* <div class='text-white h-24 bg-[url("en.png")] bg-cover'>rrrr</div> */}
          </div>
          

          <p className='ml-2'>
           <DarkModeIconl className='dark:text-yellow-400 cursor-pointer' onClick={()=>setDarkMode(!darkMode)}/>
          </p>
          <Badge className='cursor-pointer' badgeContent={notificationCount} color="error">
            <ShoppingCartIcon className='dark:text-white' onClick={() => handleNotificationClick()} />
          </Badge>
        {/* {showOrderDetails &&  <OrderDetails handleClose = {handleCloseOrderDetails} />} */}
          
          {/* <div className="ml-4 hidden md:block">
            <p className='dark:text-white'>{login}</p>
          </div>
          <div className="ml-4 hidden md:block">
            <p className='dark:text-white'>{signup}</p>
          </div> */}
          <div className="ml-4 hidden md:block">
            <Avatar onClick={()=>setAvatar(!avatar)} alt="Travis Howard" src="/static/images/avatar/2.jpg" className="cursor-pointer" />
            {avatar && (
            <div className='hidden md:block   pt-2 px-4 mt-4 fixed right-1 bg-neutral-300 dark:bg-gray-800'>
                  <p className='dark:text-white text-lg'>{login}</p>
                  <p className='dark:text-white text-lg mt-2'>{signup}</p>
            </div>)}
          </div>
          <div className='md:hidden'>
            <MenuIcon className="cursor-pointer dark:text-white hidden"  onClick={()=>handleCatagories()}/>
        </div>
        </div>
      </div>

     
    
      <div className="relative overflow-hidden col-span-5 h-96 z-0 cursor-pointer overflow-visible"> 
        {/* <img src={themes[currentTheme].image} alt={themes[currentTheme].name} className="object-cover w-full h-full" /> */}
      <div className='w-full h-full'>
        <video className="object-cover w-full h-full" src="video.mp4" loop autoPlay muted />
      </div>

         <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50">
          </div> <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
             <h1 className="text-lg md:text-5xl font-bold dark:text-white">{t('welcome2')}</h1> 
             <p className="text-sm md:text-xl mt-4 dark:text-white">{t('explore')}
             </p> 
             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700">
              {t('shop')}
              </button> 
              </motion.div>
        </div>
               {/* <p onClick={()=>setTest(!isVisible)}>X</p>
            <ExampleComponent isVisible={isVisible}/> */}
    <div className='grid grid-cols-5 col-span-5  overflow-auto'>
    <AnimatePresence>
      {showCatacgories && 
         (<motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration:1}}
          exit={{ opacity: 0 }}>
           <div className=" bg-neutral-300 dark:bg-gray-800 text-black dark:text-white  md:w-1/3 w-1/2 fixed top-20 right-0 md:hidden shrink border-4">
            <div className="py-2 relative">
              {/* <span className='absolute top-0 right-0'>
                <Close className='cursor-pointer' onClick={()=>setCatagories(!showCatacgories)}/>
              </span> */}
              {/* <h2 className="text-sm md:text-lg font-bold">{t('Catagory')}</h2> */}
            
              <ul className=" text-sm md:text-lg flex flex-col items-center gap-2">
                <li className="">
                  <span><Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/></span>
                </li>
                <li className=' w-24 hover:border-b-4 dark:border-white border-black cursor-pointer'>
                  <HomeIcon style={{fontSize:'30px'}}/><span>{" "}Home</span>
                </li>
                <li className='hover:border-b-4 dark:border-white border-black cursor-pointer w-24 flex justify-start gap-1'>
                  <CategoryIcon className="" style={{fontSize:'30px'}}/><span>Products</span>
                </li>
                <li className='hover:border-b-4 dark:border-white border-black cursor-pointer w-24 flex gap-1'>
                  <InfoIcon className="ml-0" style={{fontSize:'30px'}}/>
                  <span>About</span>
                </li>
                <li className='hover:border-b-4 dark:border-white border-black cursor-pointer w-24 flex gap-1'>
                  <LoginIcon style={{fontSize:'30px'}}/>
                  <span className="">{login}</span>
                </li>
                <li className='hover:border-b-4 dark:border-white border-black cursor-pointer w-24 flex gap-1'>
                  <AppRegistrationIcon style={{fontSize:'30px'}}/>
                  <span>{signup}</span>
                  </li>
              </ul>
            </div>
          </div>
      </motion.div>
      )}
    </AnimatePresence>
      <div className="flex  justify-left mt-4 col-span-5  ">
        {/* <SideNavigation /> */}
        {/* <span className="md:hidden">
          <MenuIcon className="cursor-pointer dark:text-white" style={{fontSize: '2.5rem' }} onClick={()=>handleCatagories()}/>
        </span> */}
        <div className='grid md:grid-cols-4 grid:cols-1 w-screen b'>
          <div className='md:ml-32 ml-10 col-span-4'>
            <input className='border-2 p-1 md:text-sm text-xs rounded-full' type="text" name="" placeholder={t('Search')} id="" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          </div>
          <SideNavigation />
          <div className='text-sm ml-2 space-y-2 dark:text-white md:col-span-1 col-span-5  md:flex flex-col   font-bold'>
           <h1 className="self-center">{t('Filter')}</h1>
           <div  className=' p-2'>
            <h1 className='tracking-widest flex gap-2 border-4 md:justify-start justify-center rounded-lg p-2 transform hover:scale-105 bg-white dark:bg-gray-700'>
              <span className='cursor-pointer' onClick={()=>setBrand(!brand)}>
              {brand ? (<p>-</p>):(<p>+</p>)}
              </span> 
             {Brand}
            </h1>
            <div className=' ml-2 p-2'>
             {brand && (<BrandFilter/>) }

            </div>
           
           <h1 className='tracking-widest flex gap-2 md:justify-start justify-center rounded-lg p-2 border-4 transform hover:scale-105 bg-white dark:bg-gray-700'>
              <span className='cursor-pointer' onClick={()=>setPrice(!price)}>
              {price ? (<p>-</p>):(<p>+</p>)}
              </span> 
             {Price}
            </h1>
            <div className=' ml-2 p-2'>
               {price && (<PriceFilter/>)}
           </div>
           
           <h1 className='tracking-widest flex gap-2 md:justify-start justify-center rounded-lg p-2 border-4 transform hover:scale-105 bg-white dark:bg-gray-700'>
              <span className='cursor-pointer' onClick={()=>setRate(!rate)}>
              {rate ? (<p>-</p>):(<p>+</p>)}
              </span> 
             {Rating}
            </h1>
            <div className=' ml-2 p-2'>
               {rate && (<RatingFilter/>) }
           </div>
           
           <h1 className='tracking-widest flex gap-2 md:justify-start justify-center rounded-lg p-2 border-4 transform hover:scale-105 bg-white dark:bg-gray-700'>
              <span className='cursor-pointer' onClick={()=>setDate(!date)}>
              {date ? (<p>-</p>):(<p>+</p>)}
              </span> 
             {Date}
            </h1>
            <div className=' ml-2 p-2'>
               {date && (<DateFilter/>)}
           </div>
          </div>
      
         </div>
         <div className='md:col-span-3 md:col-start-2 col-start-2 col-end-4 md:col-end-5 flex flex-col md:flex-row flex-wrap md:justify-start justify-center md:items-center items-center md:ml-4'> 
         
        {currentProducts .map((product) => (
          <div key={product.id} className=" md:w-48 md:h-48 w-48 rounded overflow-y-auto shadow-lg m-4 shrink md:grow-0 grow  flex flex-col items-center dark:bg-gray-700 bg-white p-2 dark:text-white">
            <div className="md:w-20 md:h-12 w-20 flex justify-center flex-no-wrap  dark:bg-neutral-300">
              <img className="object-contain dark:bg-neutral-300" src={product.image} alt={product.title} />
            </div>
            <div className=" p-2 ">
              <div className="font-medium md:text-sm text-xs  mb-2 dark:text-gray-300  tracking-wider">{product.title}</div>
              <p className="text-gray-700 dark:text-gray-300 md:text-sm text-xs ">{product.model}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2 md:text-sm text-xs  font-bold">{t('Price')} ${product.price}</p>
              <div className="flex items-center mb-2 md:text-sm text-xs ">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon 
                    key={index} 
                    style={{fontSize:"1em"}}
                    className={index < Math.round(product.rating.rate) ? 'text-black dark:text-amber-500 ' : 'text-neutral-400'} 
                />
                ))}
            </div>
              {cartItems.includes(product.id) ? (
                <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-xs md:text-xs dark:bg-red dark:text-black dark:hover:bg-gray-400 hover:bg-black text-white font-bold py-2 px-2 rounded">
                  {removeCart}
                </button>
              ) : (
                <button onClick={() => addToCart(product.id)} className="bg-black text-xs md:text-xs  dark:bg-gray-400 dark:text-black dark:hover:bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">
                  {cart}
                </button>
              )}
            </div>
          </div>
        ))}
        </div>
        </div>
        <AnimatePresence>
        {showOrderDetails && (
        <motion.div   
        className= 'z-30 bg-neutral-300 overflow-y-scroll text-black dark:bg-gray-800 dark:text-white h-screen md:w-6/12 5/12 absolute top-0 right-0 shrink border-4 opacity-100'
        initial={{ opacity: 0 ,x:900}}
        animate={{ opacity: 1,x:20 }}
        transition={{duration:2}}
        exit={{ opacity: 0,x:1000 }}
        >
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
              {/* <motion.button initial={{fontSize:'2px'}} animate={{fontSize:'100px'}} transition={{ease: "easeOut",duration:6,yoyo:10}} type='submit' className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">{t('Payment')}</motion.button> */}
            </div>
    </form>
              </div>
            </div>
          </motion.div>
          )}
          </AnimatePresence>
        
      </div>
      </div>
      <div className="flex justify-center  shrink col-span-5">
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)} className="bg-white dark:bg-gray-400 dark:hover:bg-gray-800 dark:hover:text-white hover:bg-neutral-300 text-gray-800 font-bold py-2 px-4 mr-2 rounded">
            {Prev}
          </button>
        )}
        {currentProducts.length === productsPerPage && (
          <button onClick={() => paginate(currentPage + 1)} className="bg-white dark:bg-gray-400 dark:hover:bg-gray-800 dark:hover:text-white hover:bg-neutral-300  text-gray-800 font-bold py-2 px-4 ml-2 rounded">
            {Next}
          </button>
        )}
      </div>
     
      <div className="bg-neutral-300 dark:bg-gray-800  col-span-5  border-white p-4 divide-y divide-dashed md:divide-solid">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center  gap-4 ">
          <div className='border-4 p-2' >
            <h2 className='dark:text-white font-bold'>{customerService}</h2>
            <ul className='dark:text-white'>
              <li>{contact}: +251946854382</li>
              <li>{shipping}</li>
              <li>{returning}</li>
              <li>{FAQ}</li>
            </ul>
          </div>
          <div className='border-4 p-2'>
            <h2 className='dark:text-white font-bold'>{Links}</h2>
            <ul className='dark:text-white'>
              <li>{About}</li>
              <li>{Privacy}</li>
              <li>{Terms}</li>
              <li>{Site}</li>
            </ul>
          </div>
          <div className='border-4 p-2'>
            <h2 className='dark:text-white font-bold'>{Newsettler}</h2>
            <p className='dark:text-white '>{Subscribe2}</p>
            <input type="text" placeholder={Enter} className="bg-gray-700 dark:text-white p-2 rounded mt-2" />
            <button className="bg-blue-500 hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded mt-2">{Subscribe}</button>
          </div>
        </div>
        <div className="md:flex  justify-between items-center mt-4">
          <p className="dark:text-white font-bold">&copy; 2022 {t('welcome')}</p>
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
    <div className="col-span-4 bg-neutral-300 dark:bg-gray-800 dark:text-white text-black mt-2   shrink  dark:border-0">
      <div className="p-4">
        <h2 className="md:text-lg text-sm font-bold text-center">{t('Catagory')}</h2>
        <ul className="mt-4 md:text-sm text-xs flex justify-center gap-2">
          <li className="py-2">{Phones} /</li>
          <li className="py-2">{Computers} /</li>
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


const ExampleComponent = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{duration:6}}
          exit={{ y: 1000,x:1000 }}
        >
          <h1>Hello World!</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;