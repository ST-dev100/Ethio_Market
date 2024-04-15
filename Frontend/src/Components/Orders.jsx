import React from 'react'

const order = { id: 1, items: [ { id: 1, name: 'Item 1', price: 10 }, { id: 2, name: 'Item 2', price: 15 }, { id: 3, name: 'Item 3', price: 20 }, ], total: 45, };
const Orders = ()=>{
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
          
        </div>
      );
}

export default Orders;