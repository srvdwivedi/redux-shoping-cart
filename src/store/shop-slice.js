import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { isCartVisible : false };

const shopSlice = createSlice({
    name : "shopSlice",
    initialState : initialCartState,
    reducers : {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible;
        }
    }
})

export const shopActions = shopSlice.actions;
export default shopSlice;