import React,{useState,useEffect} from 'react';
import { useGettUsersQuery} from '../store/Features/api/apiSlice';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Notifications } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
const Home = () => {
  const { data, error, isLoading } = useGettUsersQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); // Number of products per page

  const [products, setProducts] = useState([]);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  useEffect(() => {
    // Mock data for products
    const tempProducts = [
      { id: 1, name: "Product 1", model: "Model A", price: "$100", image1: "iphone.jpg", image2: "iphone2.jpg", image3: "iphone3.png" },
      { id: 2, name: "Product 2", model: "Model B", price: "$150", image1: "oppo.png", image2: "oppo2.png", image3: "oppo3.png" },
      { id: 3, name: "Product 2", model: "Model B", price: "$150", image1: "vivo.jpg", image2: "vivo2.jpg", image3: "vivo3.jpg" },
      { id: 4, name: "Product 2", model: "Model B", price: "$150", image1: "iphone4.jpg", image2: "iphone5.jpg", image3: "iphone6.jpg" },
      { id: 5, name: "Product 2", model: "Model B", price: "$150", image1: "image1.jpg", image2: "image2.jpg", image3: "image3.jpg" },
      { id: 6, name: "Product 2", model: "Model B", price: "$150", image1: "image1.jpg", image2: "image2.jpg", image3: "image3.jpg" },
      { id: 7, name: "Product 2", model: "Model B", price: "$150", image1: "image1.jpg", image2: "image2.jpg", image3: "image3.jpg" },
      { id: 8, name: "Product 2", model: "Model B", price: "$150", image1: "image1.jpg", image2: "image2.jpg", image3: "image3.jpg" },
      { id: 9, name: "Product 2", model: "Model B", price: "$150", image1: "image1.jpg", image2: "image2.jpg", image3: "image3.jpg" },
      { id: 10, name: "Product 2", model: "Model B", price: "$150", image1: "image1.jpg", image2: "image2.jpg", image3: "image3.jpg" },
      { id: 11, name: "Product 2", model: "Model B", price: "$150", image1: "image1.jpg", image2: "image2.jpg", image3: "image3.jpg" },
      { id: 12, name: "Product 2", model: "Model B", price: "$150", image1: "image1.jpg", image2: "image2.jpg", image3: "image3.jpg" },

      // Add more products here
    ];

    setProducts(tempProducts);
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
      <div className="flex items-center">
        <Badge badgeContent={4} color="error">
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
    <div className="flex flex-wrap justify-center mt-8">
      {currentProducts.map((product) => (
        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="w-44 h-48 flex flex-no-wrap overflow-x-auto">
            <img className="w-44 h-44 object-cover" src={product.image1} alt={product.name} />
            <img className="w-44 h-44  object-cover" src={product.image2} alt={product.name} />
            <img className="w-44 h-44  object-cover" src={product.image3} alt={product.name} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base mb-2">{product.model}</p>
            <p className="text-gray-700 text-base mb-2">{product.price}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
        <div className="flex justify-center my-4">
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
    </div>
  );
};

export default Home;