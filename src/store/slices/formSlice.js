import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: ''
    },
    reducers: {
        changeName(state, action) {
            // Change the name of the state
        },
        changeCost(state, action) {
            // Change the cost of the state
        }
    }
})

export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;