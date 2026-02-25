import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: "Laptop", category: "Electronics", description: "High performance laptop", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Headphones", category: "Accessories", description: "Noise cancelling headphones", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Smartwatch", category: "Wearables", description: "Fitness tracking smartwatch", image: "https://via.placeholder.com/150" },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
