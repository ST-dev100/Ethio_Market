import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: 0,
    diselect: false
  };

  const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addCart:(state,action)=>
        {
            state.cart++
            state.diselect = true
        },
        removeCart:()=>{
            state.cart = state.cart - 1
            state.diselect = false
        }
    }
  })

  export default productSlice.reducer

  export const {addCart,removeCart} = productSlice.actions