import { createSlice } from '@reduxjs/toolkit';

export const { reducers, actions } = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = actions;

export const selectCount = state => state.counter.value;

export default reducers;
