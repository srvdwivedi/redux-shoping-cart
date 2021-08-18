import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = { counter : 0 };

const cartSlice = createSlice({
    name : 'addToCarrd',
    initialState : initialCartState,
    reducers : {
        addToCard(state) {
            state.counter ++;
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;

