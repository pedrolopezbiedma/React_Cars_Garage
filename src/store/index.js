import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { carsReducer } from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        formSlice: formReducer,
        carsSlice: carsReducer
    }
});

console.log('store is -->', store.getState())
export { store };