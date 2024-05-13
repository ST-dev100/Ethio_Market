import React,{useState} from 'react'
import StarIcon from '@mui/icons-material/Star';


const ratings = [5, 4, 3, 2, 1];

const Checkbox = ({ value, onChange, checked }) => (
  <label className="flex items-center space-x-1 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="checked:bg-blue-500 checked:border-transparent"
    />
     {Array.from({ length: 5 }, (_, index) => (
                <StarIcon 
                    key={index} 
                    style={{ color: index < Math.round(value) ? 'gold' : 'gray' ,fontSize:"1em"}} 
                />
                ))}
   
    
  </label>
);

const order = { id: 1, items: [ { id: 1, name: 'Item 1', price: 10 }, { id: 2, name: 'Item 2', price: 15 }, { id: 3, name: 'Item 3', price: 20 }, ], total: 45, };
const products = [
  {
    id: 1,
    name: 'Product 1',
    amount: '100 units',
    price: '$10',
    image: 'product1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    amount: '50 units',
    price: '$20',
    image: 'product2.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    amount: '200 units',
    price: '$5',
    image: 'product3.jpg'
  }
];

const Orders = ()=>{
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedRatings.includes(value)) {
      setSelectedRatings(selectedRatings.filter((rating) => rating !== value));
    } else {
      setSelectedRatings([...selectedRatings, value]);
    }
  };
    return (
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <ul>
              {order.items.map((item) => (
                <li key={item.id} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <p>Total: {order.total}</p>
          </div>
          <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
            <input type="hidden" name="public_key" value="CHAPUBK_TEST-COnXzVqqePTkDI07aXufgKutmk2OH5aV" />
            <input type="hidden" name="tx_ref" value="negade-tx-12345678sssr9" />
            <input type="hidden" name="amount" value={order.total} />
            <input type="hidden" name="currency" value="ETB" />
            <input type="hidden" name="email" value="simalike245@gmail.com" />
            <input type="hidden" name="first_name" value="Israel" />
            <input type="hidden" name="last_name" value="Goytom" />
            <input type="hidden" name="title" value="Let us do this" />
            <input type="hidden" name="description" value="Paying with Confidence with cha" />
            <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
            <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
            <input type="hidden" name="return_url" value="https://example.com/returnurl" />
            <input type="hidden" name="meta[title]" value="test" />
            <div className="mt-4 md:mt-0">
              <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Send Payment</button>
            </div>
    </form>
         <ProductList/> 
      <div className="flex flex-col space-y-2">
        {ratings.map((rating) => (
          <Checkbox
            key={rating}
            value={rating}
            checked={selectedRatings.includes(rating)}
            onChange={() => handleCheckboxChange(rating)}
          />
        ))}
      </div>
        </div>
      );
}

const ProductList = () => {
  return (
    <div className="grid grid-cols-1  gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.name} className="mb-4" />
          <p className="font-bold">{product.name}</p>
          <p>{product.amount}</p>
          <p>{product.price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Place Order</button>
        </div>
      ))}
    </div>
  );
};

export default Orders;