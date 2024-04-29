import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: 0,
    diselect: false,
    products:[{id:9}],
    items: []
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
        },
        addNumberOfItem:(state,action)=>{
            const index = state.items.findIndex(item => item.id === action.payload);

            // Update the value of 'b' for that item
            if (index !== -1) {
                state.items[index].count++;
            }
        },
        dicreaseNumberOfItem:(state,action)=>{
            const index = state.items.findIndex(item => item.id === action.payload);

            // Update the value of 'b' for that item
            if (index !== -1 && state.items[index].count > 1) {
                state.items[index].count--;
            }
        },
        removeCart2:(state,action)=>{
            state.items = state.items.filter(p=>p.id !== action.payload)
            state.cart--
        }
    }
  })

  export default productSlice.reducer

  export const {addCart,removeCart2,addProducts,addNumberOfItem,dicreaseNumberOfItem} = productSlice.actions