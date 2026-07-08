import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "./features/cartslice"
import favouritesReducer from "./features/favouriteslice"
import orderReducer from "./features/orders";
export const store = configureStore({
    reducer:{
        cart:cartReducer,
        favourites:favouritesReducer,
        orders :orderReducer,
    }
})