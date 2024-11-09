import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(), 
  reducers: {
    add(state, action) {
      state.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state)); 
    },
    remove(state, action) {
      const updatedCart = state.filter(product => product.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
      return updatedCart;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
