import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: 0,
    diselect: false,
    products:[{id:9}],
    items: [],
    total:0
  };

  const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProducts:(state,action)=>{
            state.products = action.payload;
        },
        addCart(state, action) 
        {
            let selected = state.products.find(p=>p.id === action.payload)
            selected.count = 1
            state.items.push(selected);
            state.cart++
            state.total = state.items.reduce((acc, obj) => acc + obj.price* obj.count, 0);
        },
        addNumberOfItem:(state,action)=>{
            const index = state.items.findIndex(item => item.id === action.payload);

            // Update the value of 'b' for that item
            if (index !== -1) {
                state.items[index].count++;
                state.total = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
            }
        },
        dicreaseNumberOfItem:(state,action)=>{
            const index = state.items.findIndex(item => item.id === action.payload);

            // Update the value of 'b' for that item
            if (index !== -1 && state.items[index].count > 1) {
                state.items[index].count--;
                state.total = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
            }
        },
        removeCart2:(state,action)=>{
            state.items = state.items.filter(p=>p.id !== action.payload)
            state.cart--
            state.total = state.items.reduce((acc, obj) => acc + obj.price, 0);
        }
    }
  })

  export default productSlice.reducer

  export const {addCart,removeCart2,addProducts,addNumberOfItem,dicreaseNumberOfItem} = productSlice.actions