import { configureStore } from "@reduxjs/toolkit";
import ImageSlice from "./features/ImageSlice";
export const Store = configureStore({
    reducer:{
        ImageReducer:ImageSlice
    }
})