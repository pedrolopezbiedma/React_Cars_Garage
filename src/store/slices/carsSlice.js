import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        searchTerm: ''
    },
    reducers: {
        changeSearchTerm(state, action) {

        },
        addCar(state, action) {
            
        },
        removeCar(state, action) {

        }
    }
})

export const carsReducer = carsSlice.reducer
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;