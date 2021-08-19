import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import shopSlice from './shop-slice';

const store = configureStore({
    reducer: { cart : cartSlice.reducer, shopSlice : shopSlice.reducer }
});

export default store;